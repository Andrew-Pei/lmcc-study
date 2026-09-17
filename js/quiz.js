// ===== Quiz Engine =====
let quizState = {
  category: 'youth_mcq',
  questions: [],
  currentIdx: 0,
  answers: {},
  score: 0,
  correctCount: 0,
  wrongCount: 0,
  showExplanations: false
};

function loadCategory(category) {
  quizState.category = category;
  quizState.questions = QUIZ_DATA[category] || [];
  quizState.currentIdx = 0;
  quizState.answers = {};
  quizState.score = 0;
  quizState.correctCount = 0;
  quizState.wrongCount = 0;
  quizState.showExplanations = false;
  renderQuiz();
}

function renderQuiz() {
  const container = document.getElementById('quiz-content');
  if (!container) return;

  if (quizState.currentIdx >= quizState.questions.length) {
    renderResult();
    return;
  }

  const q = quizState.questions[quizState.currentIdx];
  const progress = ((quizState.currentIdx) / quizState.questions.length) * 100;

  let html = `
    <div class="quiz-progress-bar">
      <div class="quiz-progress-fill" style="width: ${progress}%"></div>
    </div>
    <div class="quiz-header">
      <span class="quiz-info">第 ${quizState.currentIdx + 1} / ${quizState.questions.length} 题</span>
      <div class="quiz-score">
        <span class="correct-count">正确: ${quizState.correctCount}</span>
        <span class="wrong-count">错误: ${quizState.wrongCount}</span>
      </div>
    </div>
    <div class="question-card" id="question-card">
      <div class="question-title">
        <span class="question-number">${q.id}</span>
        <span>${q.question}</span>
      </div>`;

  if (q.code) {
    html += `
      <div class="code-block">
        <div class="code-header"><span class="lang">Python</span></div>
        <pre><code>${escapeHtml(q.code)}</code></pre>
      </div>`;
  }

  html += `<div class="options" id="options-container">`;

  for (const [key, value] of Object.entries(q.options)) {
    html += `
      <div class="option" data-option="${key}" onclick="selectOption('${key}')">
        <span class="opt-label">${key}.</span>
        <span>${escapeHtml(value)}</span>
      </div>`;
  }

  html += `</div>`;

  // Answer box (hidden initially)
  html += `
    <div class="answer-box hidden" id="answer-box">
      <div class="answer-label">正确答案: ${q.answer}</div>
      <div class="answer-text" id="user-answer"></div>
      <div class="explanation">${q.explanation}</div>
    </div>`;

  // Navigation buttons
  html += `
    <div class="flex gap-2 mt-2" style="justify-content: space-between; align-items: center;">
      <button class="btn btn-outline hidden" id="prev-btn" style="border-color: var(--border-color); color: var(--text-secondary);" onclick="prevQuestion()">
        上一题
      </button>
      <button class="btn btn-primary hidden" id="next-btn" style="background: var(--primary); color: white;" onclick="nextQuestion()">
        ${quizState.currentIdx + 1 < quizState.questions.length ? '下一题' : '查看结果'}
      </button>
    </div>
  `;

  html += `</div>`;

  container.innerHTML = html;

  // Restore previous answer if exists
  if (quizState.answers[quizState.currentIdx]) {
    const saved = quizState.answers[quizState.currentIdx];
    showAnswer(saved.selected, q);
  }
}

function selectOption(option) {
  const q = quizState.questions[quizState.currentIdx];
  const alreadyAnswered = quizState.answers[quizState.currentIdx] !== undefined;

  if (alreadyAnswered) return;

  quizState.answers[quizState.currentIdx] = { selected: option, correct: option === q.answer };

  if (option === q.answer) {
    quizState.correctCount++;
  } else {
    quizState.wrongCount++;
  }

  showAnswer(option, q);
}

function showAnswer(selected, q) {
  const options = document.querySelectorAll('.option');
  options.forEach(function(opt) {
    const key = opt.getAttribute('data-option');
    opt.style.cursor = 'default';

    if (key === q.answer) {
      opt.classList.add('correct');
    } else if (key === selected && key !== q.answer) {
      opt.classList.add('incorrect');
    }
  });

  const answerBox = document.getElementById('answer-box');
  const userAnswerEl = document.getElementById('user-answer');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');

  if (answerBox && userAnswerEl && nextBtn) {
    if (selected === q.answer) {
      userAnswerEl.innerHTML = '<strong style="color: var(--success);">你的答案: ' + selected + ' (正确!)</strong>';
    } else {
      userAnswerEl.innerHTML = '<strong style="color: var(--danger);">你的答案: ' + selected + ' (错误)</strong>';
    }
    answerBox.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
    if (quizState.currentIdx > 0) {
      prevBtn.classList.remove('hidden');
    }
  }
}

function nextQuestion() {
  quizState.currentIdx++;
  renderQuiz();
}

function prevQuestion() {
  if (quizState.currentIdx > 0) {
    quizState.currentIdx--;
    renderQuiz();
  }
}

function renderResult() {
  const container = document.getElementById('quiz-content');
  const total = quizState.questions.length;
  const score = Math.round((quizState.correctCount / total) * 100);
  const passed = score >= 60;

  const categoryNames = {
    'youth_mcq': '第一轮-青少年组-单选题',
    'youth_prog': '第一轮-青少年组-程序题',
    'adult_mcq': '第一轮-成人组-单选题',
    'adult_prog': '第一轮-成人组-程序题',
    'round2_concepts': '第二轮-知识点测验'
  };

  let html = `
    <div class="quiz-result">
      <div class="score-circle ${passed ? 'pass' : 'fail'}">${score}分</div>
      <h2>${passed ? '恭喜通过!' : '继续努力!'}</h2>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
        ${categoryNames[quizState.category] || '测验'}
      </p>
      <div class="quiz-score" style="justify-content: center; margin-bottom: 2rem;">
        <span class="correct-count">正确: ${quizState.correctCount}题</span>
        <span class="wrong-count">错误: ${quizState.wrongCount}题</span>
        <span style="color: var(--text-secondary);">总计: ${total}题</span>
      </div>
      <div class="flex gap-2" style="justify-content: center; flex-wrap: wrap;">
        <button class="btn btn-primary" style="background: var(--primary); color: white;" onclick="restartQuiz()">重新测验</button>
        <button class="btn btn-outline" style="border-color: var(--border-color); color: var(--text-secondary);" onclick="goToCategorySelect()">选择其他类别</button>
      </div>
    </div>

    <div style="margin-top: 2rem;">
      <h3 style="margin-bottom: 1rem;">答题回顾</h3>`;

  quizState.questions.forEach(function(q, idx) {
    const ans = quizState.answers[idx];
    if (!ans) return;

    const isCorrect = ans.correct;
    html += `
      <div class="question-card" style="margin-bottom: 0.75rem;">
        <div class="question-title">
          <span class="question-number">${q.id}</span>
          <span>${q.question.substring(0, 100)}${q.question.length > 100 ? '...' : ''}</span>
        </div>
        <div class="flex gap-2" style="flex-wrap: wrap;">
          <span class="tag ${isCorrect ? 'green' : 'red'}">${isCorrect ? '正确' : '错误'}</span>
          <span class="tag blue">你的答案: ${ans.selected}</span>
          <span class="tag green">正确答案: ${q.answer}</span>
        </div>
      </div>`;
  });

  html += `</div>`;

  container.innerHTML = html;
}

function restartQuiz() {
  loadCategory(quizState.category);
}

function goToCategorySelect() {
  const container = document.getElementById('quiz-content');
  const categories = [
    { id: 'youth_mcq', name: '第一轮-青少年组-单选题', desc: '20道单选题，每题3分', count: 20, tag: 'blue' },
    { id: 'youth_prog', name: '第一轮-青少年组-程序题', desc: '10道程序填空题，每题4分', count: 10, tag: 'purple' },
    { id: 'adult_mcq', name: '第一轮-成人组-单选题', desc: '20道单选题（含进阶内容）', count: 20, tag: 'orange' },
    { id: 'adult_prog', name: '第一轮-成人组-程序题', desc: '10道程序题（LoRA+GQA）', count: 10, tag: 'cyan' },
    { id: 'round2_concepts', name: '第二轮-知识点测验', desc: '10道第二轮核心概念题', count: 10, tag: 'green' }
  ];

  let html = '<div style="text-align: center; padding: 2rem 0;"><h2>选择测验类别</h2><p style="color: var(--text-secondary); margin-top: 0.5rem;">选择一个类别开始模拟考试</p></div><div class="cards-grid">';

  categories.forEach(function(cat) {
    html += `
      <div class="card" style="cursor: pointer;" onclick="loadCategory('${cat.id}')">
        <div class="card-icon ${cat.tag}">${cat.count}</div>
        <h3>${cat.name}</h3>
        <p>${cat.desc}</p>
        <span class="card-link">开始测验</span>
      </div>`;
  });

  html += '</div>';
  container.innerHTML = html;
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

document.addEventListener('DOMContentLoaded', function() {
  goToCategorySelect();
});
