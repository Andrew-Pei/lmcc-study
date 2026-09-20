// LMCC Quiz Data - merged from module files
// quiz-python.js, quiz-pytorch.js, quiz-transformer.js, quiz-prompt.js are loaded before this file
const QUIZ_DATA = {
  python: typeof QUIZ_PYTHON !== 'undefined' ? QUIZ_PYTHON : [],
  pytorch: typeof QUIZ_PYTORCH !== 'undefined' ? QUIZ_PYTORCH : [],
  transformer: typeof QUIZ_TRANSFORMER !== 'undefined' ? QUIZ_TRANSFORMER : [],
  prompt: typeof QUIZ_PROMPT !== 'undefined' ? QUIZ_PROMPT : [],
  round2: [
    {
      id: 1,
      question: '第二轮T1任务中，build_system_prompt()函数的核心作用是什么？',
      options: {
        A: '加载预训练模型权重',
        B: '定义system prompt，引导模型识别数学符号并按格式输出答案',
        C: '对模型输出进行后处理',
        D: '设置模型超参数'
      },
      answer: 'B',
      explanation: 'build_system_prompt()编写system prompt，引导模型识别各种数学符号（⊕、➕、加等）并按照[Answer]: 数值格式输出答案。评测程序统一处理输出格式。'
    },
    {
      id: 2,
      question: '在T1中，apply_chat_template_single()使用了哪个关键参数启用思考模式？',
      options: { A: 'enable_thinking=True', B: 'do_sample=True', C: "return_tensors='pt'", D: 'add_special_tokens=True' },
      answer: 'A',
      explanation: 'apply_chat_template()调用时使用enable_thinking=True启用Qwen3的思考模式，让模型先推理再输出答案。'
    },
    {
      id: 3,
      question: '在T1的generate_batch()中，批量推理需要正确处理什么关键问题？',
      options: { A: '随机打乱输入', B: 'padding和truncation确保不同长度输入组成批次', C: '降低模型精度', D: '截断到相同长度' },
      answer: 'B',
      explanation: '批量推理需要处理padding（补齐到同长度）和truncation（截断超长序列），同时设置attention_mask和pad_token_id。'
    },
    {
      id: 4,
      question: '第二轮T2任务中，compute_similarity()使用了什么pooling策略？',
      options: { A: 'Mean pooling', B: 'CLS token pooling', C: 'Last-token pooling', D: 'Max pooling' },
      answer: 'C',
      explanation: 'T2使用last-token pooling，提取序列最后一个token的hidden state作为句向量。需注意左侧和右侧padding的不同处理。'
    },
    {
      id: 5,
      question: '在T2的相似度计算中，L2 normalization的作用是什么？',
      options: { A: '将向量长度统一为1，使点积等于余弦相似度', B: '压缩到[0,1]', C: '减少维度', D: '增加数值范围' },
      answer: 'A',
      explanation: 'L2归一化将向量除以其L2范数，使向量长度为1。归一化后两个向量的点积就等于余弦相似度。'
    },
    {
      id: 6,
      question: 'T2生成数据集要求1024条数据，平均相似度满足什么条件获得满分？',
      options: { A: '≤0.3', B: '≤0.5', C: '≤0.7', D: '≤0.1' },
      answer: 'B',
      explanation: '平均相似度≤0.5获得满分50分。0.5~0.7之间线性给分。>0.7则0分。'
    },
    {
      id: 7,
      question: 'T2数据生成中，对答案的要求是什么？',
      options: { A: '任意整数', B: '3位数（100-999）', C: '必须是偶数', D: '必须为正整数' },
      answer: 'B',
      explanation: '每条数据的答案必须是3位数（100-999），否则每条扣1分。题目最多3个数字，所有题目必须唯一。'
    },
    {
      id: 8,
      question: 'T1评测中，阶段一（逐条推理）的评分标准是什么？',
      options: { A: '8题每题5分满分40', B: '8题每题10分，答对≥6题给满分60', C: '8题全部正确才给满分', D: '8题每题7.5分' },
      answer: 'B',
      explanation: '阶段一8题，每题10分，答对≥6题给满分60分。阶段二32题，每题1.5分，满分40分。总分100分。'
    },
    {
      id: 9,
      question: 'T2评测中，第一部分相似度计算必须满足什么条件才能进入第二部分？',
      options: { A: '得分≥40分', B: '必须满分（50分）', C: '通过≥5组测试', D: '没有要求' },
      answer: 'B',
      explanation: '第一部分10组测试，每组5分，允许误差≤0.03，通过≥8组给满分50分。必须满分才能进行第二部分，否则总分最多50分。'
    },
    {
      id: 10,
      question: '在T2的_last_token_pool函数中，如何判断是否使用了左侧padding？',
      options: {
        A: '检查attention_mask[:, 0]是否全为1',
        B: '检查attention_mask[:, -1].sum() == batch_size',
        C: '检查input_ids[:, 0]是否为pad_token',
        D: '比较序列长度和最大长度'
      },
      answer: 'B',
      explanation: '如果最后一个token的attention_mask全为1（sum==batch_size），说明使用了左侧padding。此时直接取最后一个token即可。'
    }
  ]
};
