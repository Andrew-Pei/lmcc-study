// LMCC Quiz Engine - module-based with random selection
(function() {
  var currentModule = null;
  var currentQuestions = [];
  var currentIndex = 0;
  var userAnswers = {};
  var score = 0;

  var moduleConfig = {
    python:       { name: 'Python基础',       drawCount: 10 },
    pytorch:      { name: 'PyTorch基础',      drawCount: 10 },
    transformer:  { name: 'Transformer基础',  drawCount: 10 },
    prompt:       { name: '提示词工程',        drawCount: 10 },
    round2:       { name: '第二轮知识点',      drawCount: 10 }
  };

  function shuffleArray(arr) {
    var result = arr.slice();
    for (var i = result.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
    return result;
  }

  window.startQuiz = function(module) {
    var bank = QUIZ_DATA[module] || [];
    if (bank.length === 0) return;

    var config = moduleConfig[module] || { name: module, drawCount: bank.length };
    var drawCount = Math.min(config.drawCount, bank.length);

    // Random selection: shuffle the bank and take first drawCount
    currentQuestions = shuffleArray(bank).slice(0, drawCount);
    currentModule = module;
    currentIndex = 0;
    userAnswers = {};
    score = 0;

    // Show quiz interface
    document.getElementById('quiz-select').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-interface').style.display = 'block';

    document.getElementById('quiz-title').textContent = config.name;
    updateScore();

    renderQuestion();
  };

  function renderQuestion() {
    var q = currentQuestions[currentIndex];
    if (!q) return;

    document.getElementById('quiz-counter').textContent =
      '第 ' + (currentIndex + 1) + ' / ' + currentQuestions.length + ' 题';

    var progress = ((currentIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';

    var content = document.getElementById('quiz-content');
    var optionsHtml = '';
    var optionKeys = ['A', 'B', 'C', 'D'];

    optionKeys.forEach(function(key) {
      if (q.options[key]) {
        var selected = userAnswers[currentIndex] === key;
        var showResult = userAnswers[currentIndex] !== undefined;
        var cls = 'quiz-option';
        if (showResult) {
          if (key === q.answer) cls += ' correct';
          else if (selected) cls += ' incorrect';
        }
        optionsHtml +=
          '<div class="' + cls + '" onclick="selectAnswer(' + currentIndex + ', \'' + key + '\')">' +
          '<span class="option-letter">' + key + '</span>' +
          '<span class="option-text">' + escapeHtml(q.options[key]) + '</span>' +
          '</div>';
      }
    });

    var explanationHtml = '';
    if (userAnswers[currentIndex] !== undefined) {
      var isCorrect = userAnswers[currentIndex] === q.answer;
      explanationHtml =
        '<div class="quiz-explanation ' + (isCorrect ? 'correct' : 'incorrect') + '">' +
        '<strong>' + (isCorrect ? '正确！' : '错误') + '</strong> ' +
        '正确答案: ' + q.answer + '<br>' +
        escapeHtml(q.explanation) +
        '</div>';
    }

    content.innerHTML =
      '<div class="quiz-question">' +
      '<div class="quiz-question-text">' + escapeHtml(q.question) + '</div>' +
      '<div class="quiz-options">' + optionsHtml + '</div>' +
      explanationHtml +
      '</div>';

    // Update nav buttons
    document.getElementById('prev-btn').disabled = currentIndex === 0;
    var nextBtn = document.getElementById('next-btn');
    var finishBtn = document.getElementById('finish-btn');
    if (currentIndex === currentQuestions.length - 1) {
      nextBtn.style.display = 'none';
      finishBtn.style.display = 'inline-block';
    } else {
      nextBtn.style.display = 'inline-block';
      finishBtn.style.display = 'none';
    }

    // Re-apply syntax highlighting to any code blocks in the question
    if (window.SyntaxHighlighter) {
      window.SyntaxHighlighter.highlightAll(content);
    }
  }

  window.selectAnswer = function(qIndex, option) {
    if (userAnswers[qIndex] !== undefined) return; // already answered

    userAnswers[qIndex] = option;
    var q = currentQuestions[qIndex];
    if (option === q.answer) {
      score++;
    }
    updateScore();
    renderQuestion();
  };

  window.prevQuestion = function() {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  };

  window.nextQuestion = function() {
    if (currentIndex < currentQuestions.length - 1) {
      currentIndex++;
      renderQuestion();
    }
  };

  window.finishQuiz = function() {
    // Count answered
    var answered = 0;
    for (var k in userAnswers) answered++;

    var total = currentQuestions.length;
    var config = moduleConfig[currentModule] || { name: currentModule };

    document.getElementById('quiz-interface').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';

    document.getElementById('result-title').textContent = config.name + ' - 测验完成！';
    document.getElementById('final-score').textContent = score;
    document.getElementById('total-score').textContent = total;

    var pct = (score / total) * 100;
    var msg = '';
    if (pct === 100) msg = '满分！完美掌握！';
    else if (pct >= 80) msg = '优秀！知识点掌握扎实';
    else if (pct >= 60) msg = '及格，继续巩固薄弱点';
    else msg = '需要加强复习，建议重学对应模块';
    document.getElementById('result-message').textContent = msg;

    // Review
    var reviewHtml = '<h3>答题回顾</h3>';
    currentQuestions.forEach(function(q, i) {
      var userAns = userAnswers[i] || '未答';
      var isCorrect = userAns === q.answer;
      reviewHtml +=
        '<div class="quiz-review-item ' + (isCorrect ? 'correct' : 'incorrect') + '">' +
        '<div class="review-question"><strong>Q' + (i + 1) + '.</strong> ' + escapeHtml(q.question) + '</div>' +
        '<div class="review-answer">你的答案: ' + userAns + ' | 正确答案: ' + q.answer + '</div>' +
        '<div class="review-explanation">' + escapeHtml(q.explanation) + '</div>' +
        '</div>';
    });
    document.getElementById('result-review').innerHTML = reviewHtml;
  };

  window.exitQuiz = function() {
    document.getElementById('quiz-select').style.display = 'block';
    document.getElementById('quiz-interface').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
  };

  function updateScore() {
    var el = document.getElementById('quiz-score');
    if (el) el.textContent = score;
  }

  function escapeHtml(text) {
    if (typeof text !== 'string') return text;
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
})();
