// LMCC Prompt Engineering Quiz - 100 questions for T1 task preparation
// Note: Use Chinese quotes inside strings to avoid JS syntax errors
const QUIZ_PROMPT = [
  // ===== 主题一：System Prompt 设计（角色设定、规则、格式约束）15题 =====
  {
    id: 1,
    question: '好的System Prompt应该具备哪些关键要素？',
    options: {
      A: '越长越好，文字越多效果越好',
      B: '明确角色设定、任务规则、输出格式约束',
      C: '包含尽可能多的示例',
      D: '使用英文编写效果最好'
    },
    answer: 'B',
    explanation: '好的System Prompt核心是明确的角色设定、清晰的任务规则、严格的输出格式约束。不是越长越好，而是要精准有效。'
  },
  {
    id: 2,
    question: '在LMCC的T1任务中，System Prompt的主要作用是什么？',
    options: {
      A: '替代用户输入',
      B: '定义AI助手的角色、行为规范和输出格式',
      C: '提高模型的运行速度',
      D: '减少模型参数量'
    },
    answer: 'B',
    explanation: 'System Prompt定义了AI助手的角色身份、行为规范和输出格式，是模型行为的总纲领，决定了模型如何理解和回应用户输入。'
  },
  {
    id: 3,
    question: '以下哪项是System Prompt中角色设定的最佳写法？',
    options: {
      A: '你是一个AI',
      B: '你是一个helpful assistant',
      C: '你是一位专业的初中数学老师，擅长解答初中代数和几何问题',
      D: '你是万能的'
    },
    answer: 'C',
    explanation: '角色设定应具体明确，包含专业领域（初中数学）和能力描述（代数、几何），而非笼统或模糊的表述。'
  },
  {
    id: 4,
    question: 'System Prompt中的规则约束应该怎样写？',
    options: {
      A: '模糊笼统，留有发挥空间',
      B: '用尽可能复杂的句式',
      C: '具体明确，可操作可检验',
      D: '必须用英文书写'
    },
    answer: 'C',
    explanation: '规则约束应具体明确、可操作可检验，避免模糊笼统。例如规定输出格式、禁止行为等，让模型清楚知道该做什么。'
  },
  {
    id: 5,
    question: '在数学助手的System Prompt中，以下哪种输出格式约束最有效？',
    options: {
      A: '请自由发挥',
      B: '先给出解题步骤，最后用【答案】：数值 的格式给出最终答案',
      C: '输出答案即可',
      D: '用你喜欢的方式输出'
    },
    answer: 'B',
    explanation: '明确的输出格式约束（先步骤后答案）既便于学生理解解题过程，又便于程序通过正则表达式自动提取答案。'
  },
  {
    id: 6,
    question: 'System Prompt应该放在Chat Template的哪个角色中？',
    options: {
      A: 'user',
      B: 'assistant',
      C: 'system',
      D: 'tool'
    },
    answer: 'C',
    explanation: '在Chat Template中，system角色专门用于存放System Prompt，位于消息列表的第一条，为后续对话设定基本规则。'
  },
  {
    id: 7,
    question: '以下哪项不是System Prompt的常见组成部分？',
    options: {
      A: '角色设定',
      B: '行为规则',
      C: '输出格式约束',
      D: '模型权重参数'
    },
    answer: 'D',
    explanation: 'System Prompt包含角色设定、行为规则、输出格式约束，但不包含模型权重参数等技术配置，权重参数属于模型本身的属性。'
  },
  {
    id: 8,
    question: '编写System Prompt时，关于长度应该遵循什么原则？',
    options: {
      A: '不超过10个字',
      B: '越详细越好，没有上限',
      C: '简洁明了，涵盖关键约束即可',
      D: '必须超过1000字'
    },
    answer: 'C',
    explanation: 'System Prompt应简洁明了，涵盖关键约束即可。过长的Prompt会占用上下文窗口、增加推理成本，甚至分散模型注意力。'
  },
  {
    id: 9,
    question: '在T1数学助手任务中，System Prompt规定【答案】：格式的主要目的是什么？',
    options: {
      A: '让回答更美观',
      B: '便于程序自动解析提取答案',
      C: '增加输出字数',
      D: '限制模型思考'
    },
    answer: 'B',
    explanation: '统一的答案格式便于程序通过正则表达式自动提取，是自动化评测的关键，也是T1任务评分的重要环节。'
  },
  {
    id: 10,
    question: '如果模型输出不符合System Prompt的格式要求，最可能的原因是？',
    options: {
      A: '模型一定坏了',
      B: 'System Prompt的格式约束不够明确或模型能力不足',
      C: '服务器故障',
      D: '网络问题'
    },
    answer: 'B',
    explanation: '模型未遵循格式通常是因为约束不够明确或模型指令遵循能力不足。应加强格式约束的描述，或在解析时增加容错处理。'
  },
  {
    id: 11,
    question: '以下哪个是好的System Prompt角色设定示例？',
    options: {
      A: '你是一个助手',
      B: '你是一位专业的初中数学老师，能够准确解答代数、几何等数学问题，并给出清晰的解题步骤',
      C: '你什么都会',
      D: '帮我做数学题'
    },
    answer: 'B',
    explanation: '好的角色设定应具体到领域（初中数学）、能力（代数、几何）、行为（清晰步骤），让模型明确自己的身份和职责。'
  },
  {
    id: 12,
    question: 'System Prompt中的行为规则应该包含什么内容？',
    options: {
      A: '只需要说你要好好回答',
      B: '明确模型应做什么、不应做什么的边界',
      C: '列出所有可能的数学公式',
      D: '写满100条规则'
    },
    answer: 'B',
    explanation: '行为规则应明确模型的能力边界：做什么（如给出解题步骤）、不做什么（如不编造数据），让模型行为可控可预期。'
  },
  {
    id: 13,
    question: '当System Prompt与用户输入冲突时，模型通常应优先遵循哪个？',
    options: {
      A: '用户输入',
      B: 'System Prompt',
      C: '随机选择',
      D: '都不遵循'
    },
    answer: 'B',
    explanation: 'System Prompt定义了模型的基本行为准则，优先级通常高于用户输入，防止用户通过恶意输入绕过系统约束。'
  },
  {
    id: 14,
    question: '在数学助手的System Prompt中，为什么要约束先给步骤再给答案？',
    options: {
      A: '增加输出长度',
      B: '帮助学生理解解题过程，同时确保答案在固定位置便于提取',
      C: '没有特别原因',
      D: '让模型运行更慢'
    },
    answer: 'B',
    explanation: '先步骤后答案既帮助学生理解推理过程，又确保答案在固定位置便于程序解析提取，兼顾教育性和自动化需求。'
  },
  {
    id: 15,
    question: '以下哪项属于System Prompt的最佳实践？',
    options: {
      A: '频繁更换角色设定',
      B: '保持一致的格式约束和清晰的角色定义',
      C: '不写任何规则',
      D: '把所有内容写在一行不换行'
    },
    answer: 'B',
    explanation: '保持格式约束和角色定义的一致性是System Prompt的最佳实践，确保模型输出稳定可靠，便于程序解析。'
  },

  // ===== 主题二：Chat Template（messages格式、role/content、add_generation_prompt）10题 =====
  {
    id: 16,
    question: 'Chat Template中messages的标准格式包含哪些字段？',
    options: {
      A: 'role和content',
      B: 'name和value',
      C: 'type和data',
      D: 'input和output'
    },
    answer: 'A',
    explanation: 'messages格式中每条消息是一个包含role（角色）和content（内容）两个字段的对象，例如role为system、content为你是数学老师。'
  },
  {
    id: 17,
    question: 'Chat Template中常见的角色有哪些？',
    options: {
      A: 'start和end',
      B: 'system、user、assistant',
      C: 'input和output',
      D: 'question和answer'
    },
    answer: 'B',
    explanation: 'Chat Template中常见角色为system（系统提示）、user（用户输入）、assistant（模型回复），有时还有tool（工具消息）。'
  },
  {
    id: 18,
    question: '在Chat Template中，add_generation_prompt参数的作用是什么？',
    options: {
      A: '控制是否生成新的prompt',
      B: '控制是否在输入末尾添加assistant角色的起始标记，引导模型生成回复',
      C: '添加更多用户消息',
      D: '控制模型是否进行思考'
    },
    answer: 'B',
    explanation: 'add_generation_prompt为True时，模板会在输入末尾添加assistant角色的起始标记，引导模型开始生成回复，是推理时的常用设置。'
  },
  {
    id: 19,
    question: '以下哪个是正确的messages格式？',
    options: {
      A: 'role和content为字段名的对象数组，每条消息包含角色和内容',
      B: 'name和value为字段名的对象数组',
      C: 'type和data为字段名的对象数组',
      D: '直接用角色名作为键的简单对象'
    },
    answer: 'A',
    explanation: '正确的messages格式是包含role和content字段的对象数组，例如role为system时content为系统提示，role为user时content为用户输入。'
  },
  {
    id: 20,
    question: '在使用Chat Template时，system消息通常放在什么位置？',
    options: {
      A: '最后一条',
      B: '第一条',
      C: '中间任意位置',
      D: '不需要放'
    },
    answer: 'B',
    explanation: 'system消息通常放在消息列表的第一条，为后续所有对话设定基本规则和角色定义，确保模型从一开始就理解任务要求。'
  },
  {
    id: 21,
    question: 'Chat Template的主要作用是什么？',
    options: {
      A: '美化输出界面',
      B: '将多轮对话结构化为模型可理解的输入格式',
      C: '提高模型准确率',
      D: '减少内存使用'
    },
    answer: 'B',
    explanation: 'Chat Template将多轮对话（system、user、assistant消息）结构化为模型可理解的输入文本格式，包含角色标记和内容。'
  },
  {
    id: 22,
    question: 'add_generation_prompt设为True时，模板会在末尾添加什么？',
    options: {
      A: '一个新的user消息',
      B: 'assistant角色的起始标记，提示模型开始生成回复',
      C: 'system消息',
      D: '空白行'
    },
    answer: 'B',
    explanation: 'add_generation_prompt=True时在末尾添加assistant角色起始标记（如<|im_start|>assistant），提示模型从这里开始生成回复。'
  },
  {
    id: 23,
    question: '在多轮对话中，assistant的历史回复应该怎样处理？',
    options: {
      A: '丢弃不用',
      B: '作为messages列表中的assistant角色消息保留',
      C: '合并到user消息中',
      D: '转为system消息'
    },
    answer: 'B',
    explanation: '历史对话中的assistant回复应作为assistant角色消息保留在messages列表中，让模型理解完整对话上下文，保持对话连贯性。'
  },
  {
    id: 24,
    question: '以下哪种情况需要将add_generation_prompt设为False？',
    options: {
      A: '希望模型生成回复时',
      B: '只对对话历史进行编码，不希望模型立即生成回复时',
      C: '使用system消息时',
      D: '总是设为False'
    },
    answer: 'B',
    explanation: '当只需要对对话历史进行编码（如训练数据准备）而不需要模型立即生成回复时，可将add_generation_prompt设为False。'
  },
  {
    id: 25,
    question: 'Chat Template中的special tokens（特殊标记）的作用是什么？',
    options: {
      A: '仅仅是装饰',
      B: '标记不同角色的消息边界，帮助模型区分对话结构',
      C: '加密通信',
      D: '控制输出长度'
    },
    answer: 'B',
    explanation: '特殊标记（如<|im_start|>、<|im_end|>）用于划分不同角色的消息边界，帮助模型区分system、user、assistant的内容。'
  },

  // ===== 主题三：enable_thinking与CoT思维链 10题 =====
  {
    id: 26,
    question: 'enable_thinking参数的主要作用是什么？',
    options: {
      A: '控制模型是否进行联网搜索',
      B: '控制模型是否启用思考模式（思维链推理）',
      C: '控制输出语言',
      D: '控制输出长度'
    },
    answer: 'B',
    explanation: 'enable_thinking控制模型是否启用思维链推理模式，开启后模型会先展示推理过程再给出最终答案，适合复杂推理任务。'
  },
  {
    id: 27,
    question: 'CoT（Chain of Thought）的核心思想是什么？',
    options: {
      A: '让模型直接给出答案',
      B: '让模型在给出答案前，先展示逐步推理的过程',
      C: '让模型连接多个API',
      D: '让模型使用更多计算资源'
    },
    answer: 'B',
    explanation: 'CoT的核心思想是让模型在给出最终答案前展示逐步推理过程，通过中间推理步骤提高复杂任务的准确率。'
  },
  {
    id: 28,
    question: '在数学解题中，使用CoT的主要好处是什么？',
    options: {
      A: '减少计算时间',
      B: '提高复杂推理任务的准确率，并展示解题过程',
      C: '节省内存',
      D: '简化代码'
    },
    answer: 'B',
    explanation: 'CoT通过展示推理步骤帮助发现中间错误、提高数学推理准确率，同时解题过程可被学生和程序验证。'
  },
  {
    id: 29,
    question: 'enable_thinking设为True时，模型输出通常会包含什么？',
    options: {
      A: '只有最终答案',
      B: '思考过程和最终答案',
      C: '更多用户问题',
      D: '代码片段'
    },
    answer: 'B',
    explanation: 'enable_thinking=True时，模型输出包含两部分：推理思考过程（thinking）和最终答案，思考过程通常用特定标记包裹。'
  },
  {
    id: 30,
    question: '对于简单的数学题（如1+1=?），是否需要启用CoT？',
    options: {
      A: '必须启用',
      B: '不一定需要，简单问题直接回答即可',
      C: '不能不启用',
      D: '启用了会出错'
    },
    answer: 'B',
    explanation: '简单问题不需要CoT，直接回答即可。CoT主要用于需要多步推导的复杂推理任务，简单问题使用CoT反而浪费资源。'
  },
  {
    id: 31,
    question: '以下哪项是CoT思维链的正确描述？',
    options: {
      A: 'A推理到B、B推理到C、C推理到答案，每一步都基于前一步',
      B: '直接从问题跳到答案',
      C: '随机思考',
      D: '只需要最后一步'
    },
    answer: 'A',
    explanation: 'CoT是逐步推理链：每一步推理都基于前一步的结论，形成从问题到答案的逻辑链条，如A到B到C到最终答案。'
  },
  {
    id: 32,
    question: '在LMCC的T1任务中，enable_thinking对数学助手有什么影响？',
    options: {
      A: '没有任何影响',
      B: '启用后模型可以先思考再回答，提高数学推理的准确性',
      C: '会降低准确率',
      D: '会增加错误率'
    },
    answer: 'B',
    explanation: '启用思维链后，模型可以先分析问题、逐步推理再给出答案，在数学推理任务中准确率通常更高。'
  },
  {
    id: 33,
    question: '思维链推理的步骤应该怎样组织？',
    options: {
      A: '越多越好',
      B: '逻辑清晰、步步递进，每步基于前一步的结论',
      C: '随意组织',
      D: '只需要一步'
    },
    answer: 'B',
    explanation: '思维链应逻辑清晰、步步递进，每步基于前一步的结论，而非随意堆砌。过多的无效步骤反而可能引入错误。'
  },
  {
    id: 34,
    question: '当enable_thinking设为False时，模型的行为通常是？',
    options: {
      A: '拒绝回答',
      B: '直接给出答案，不展示推理过程',
      C: '报错',
      D: '无限循环'
    },
    answer: 'B',
    explanation: 'enable_thinking=False时，模型跳过推理过程直接给出答案，适合简单任务或对延迟敏感的场景。'
  },
  {
    id: 35,
    question: '以下哪种场景最适合使用CoT？',
    options: {
      A: '回答今天星期几',
      B: '解一道需要多步推导的几何证明题',
      C: '翻译一个单词',
      D: '回答你好'
    },
    answer: 'B',
    explanation: '需要多步推导的复杂任务（如几何证明题）最适合使用CoT，因为每步推理可以验证，中间步骤也有助于发现错误。'
  },

  // ===== 主题四：Few-shot与Zero-shot提示 10题 =====
  {
    id: 36,
    question: 'Zero-shot prompting的含义是什么？',
    options: {
      A: '给模型零个示例，直接让模型完成任务',
      B: '给模型很多示例',
      C: '不使用模型',
      D: '训练一个新模型'
    },
    answer: 'A',
    explanation: 'Zero-shot指不给任何示例，仅通过指令描述任务，让模型直接完成。依赖模型自身的预训练知识和指令理解能力。'
  },
  {
    id: 37,
    question: 'Few-shot prompting的含义是什么？',
    options: {
      A: '不给任何示例',
      B: '给模型少量示例（通常几个），帮助模型理解任务格式',
      C: '给模型大量示例',
      D: '只用一个问题'
    },
    answer: 'B',
    explanation: 'Few-shot指给少量示例（通常3-5个），帮助模型理解任务的输入输出格式和推理方式，引导模型按期望格式回答。'
  },
  {
    id: 38,
    question: '在数学助手中，使用Few-shot的主要好处是什么？',
    options: {
      A: '减少计算量',
      B: '通过示例展示期望的输出格式和推理方式',
      C: '增加模型参数',
      D: '提高运行速度'
    },
    answer: 'B',
    explanation: 'Few-shot通过具体示例展示期望的输出格式和推理方式，让模型模仿示例的结构和风格来回答新问题。'
  },
  {
    id: 39,
    question: 'Few-shot prompting中通常使用几个示例比较合适？',
    options: {
      A: '1-2个',
      B: '3-5个',
      C: '越多越好',
      D: '不需要示例'
    },
    answer: 'B',
    explanation: 'Few-shot通常使用3-5个示例即可。过多示例会占用上下文窗口且边际效益递减，过少则可能不足以让模型理解格式。'
  },
  {
    id: 40,
    question: '以下哪种情况更适合使用Zero-shot？',
    options: {
      A: '任务复杂，需要特定输出格式',
      B: '任务简单直接，模型已具备足够能力',
      C: '需要展示推理过程',
      D: '模型能力较弱'
    },
    answer: 'B',
    explanation: '简单任务或模型已具备足够能力时，Zero-shot即可完成，无需额外示例。复杂任务或需要特定格式时更适合Few-shot。'
  },
  {
    id: 41,
    question: 'Few-shot示例的摆放位置应该在Chat Template中的哪个角色？',
    options: {
      A: 'system',
      B: 'user和assistant交替',
      C: 'tool',
      D: 'function'
    },
    answer: 'B',
    explanation: 'Few-shot示例通过user和assistant交替的方式放入messages列表，模拟多轮对话，让模型从示例中学习输入输出模式。'
  },
  {
    id: 42,
    question: 'Few-shot示例中，示例的输入（问题）应放在哪个角色？',
    options: {
      A: 'system',
      B: 'user',
      C: 'tool',
      D: 'assistant'
    },
    answer: 'B',
    explanation: '示例的输入（问题）放在user角色的消息中，模拟用户提问，让模型理解这是输入部分。'
  },
  {
    id: 43,
    question: 'Few-shot示例中，示例的输出（期望回答）应放在哪个角色？',
    options: {
      A: 'user',
      B: 'assistant',
      C: 'system',
      D: 'tool'
    },
    answer: 'B',
    explanation: '示例的输出（期望回答）放在assistant角色的消息中，模拟模型回复，让模型学习期望的输出格式和推理方式。'
  },
  {
    id: 44,
    question: '使用Few-shot时，示例的质量应该怎样？',
    options: {
      A: '随便选几个就行',
      B: '选择代表性好、格式正确、答案准确的示例',
      C: '越长越好',
      D: '越短越好'
    },
    answer: 'B',
    explanation: '示例应具有代表性、格式正确、答案准确。劣质示例会误导模型，导致输出格式不一致或答案错误。'
  },
  {
    id: 45,
    question: 'Zero-shot和Few-shot的主要区别是什么？',
    options: {
      A: 'Zero-shot不用模型，Few-shot用模型',
      B: 'Zero-shot不给示例，Few-shot给少量示例辅助理解任务',
      C: '两者没有区别',
      D: 'Few-shot只用于训练'
    },
    answer: 'B',
    explanation: 'Zero-shot不给任何示例，仅靠指令描述任务；Few-shot给少量示例辅助模型理解任务格式。两者都是在推理阶段使用的技术。'
  },

  // ===== 主题五：符号映射（数学符号：全角、emoji、特殊字符）10题 =====
  {
    id: 46,
    question: '在数学助手中，符号映射主要解决什么问题？',
    options: {
      A: '让输出更好看',
      B: '将数学符号统一为模型能更好理解和处理的形式',
      C: '减少输出长度',
      D: '加快推理速度'
    },
    answer: 'B',
    explanation: '符号映射将各种形式的数学符号（全角、半角、特殊字符）统一为标准形式，减少模型混淆和解析错误。'
  },
  {
    id: 47,
    question: '以下哪种是全角数字的写法？',
    options: {
      A: '123',
      B: '１２３',
      C: 'one two three',
      D: '一二三'
    },
    answer: 'B',
    explanation: '全角数字指占两个字符宽度的数字字符（如１２３），区别于半角数字123。全角字符在Unicode中编码值不同。'
  },
  {
    id: 48,
    question: '在数学表达式中，全角符号和半角符号的主要区别是？',
    options: {
      A: '没有区别',
      B: '全角占两个字符宽度，半角占一个字符宽度，编码值不同',
      C: '全角只能用于中文',
      D: '半角只能用于英文'
    },
    answer: 'B',
    explanation: '全角字符占两个字符宽度且Unicode编码值不同，半角占一个字符宽度。混用可能导致模型和程序解析困难。'
  },
  {
    id: 49,
    question: '模型在解析数学公式时，混合使用全角和半角符号可能导致什么问题？',
    options: {
      A: '没有问题',
      B: '解析困难，可能导致计算错误',
      C: '输出更快',
      D: '效果更好'
    },
    answer: 'B',
    explanation: '混合使用全角半角符号会导致模型对同一运算产生不同理解，可能引发解析错误和计算偏差，应在System Prompt中统一规范。'
  },
  {
    id: 50,
    question: '在System Prompt中规范数学符号使用，以下哪种做法是正确的？',
    options: {
      A: '随意混用全角半角',
      B: '统一使用半角符号进行数学运算',
      C: '只用全角',
      D: '不需要规范'
    },
    answer: 'B',
    explanation: '统一使用半角符号进行数学运算，减少因编码不同导致的解析错误，让模型和程序都能正确处理数学表达式。'
  },
  {
    id: 51,
    question: '以下哪个是emoji表情在数学助手中的合理用途？',
    options: {
      A: '代替数字',
      B: '用于标记不同题型或步骤，增强可读性',
      C: '代替运算符',
      D: '代替答案'
    },
    answer: 'B',
    explanation: 'emoji可用于标记题型或步骤以增强可读性，但不能代替数字、运算符或答案，否则会干扰数学表达式的解析。'
  },
  {
    id: 52,
    question: '符号映射中，将乘号统一为星号的主要目的是？',
    options: {
      A: '美观',
      B: '减少模型对同一运算不同表示的混淆，统一处理',
      C: '减少字符数',
      D: '适应英文环境'
    },
    answer: 'B',
    explanation: '将不同形式的乘号统一为*，减少模型对同一运算多种表示（如x、乘、*）的混淆，确保计算逻辑一致。'
  },
  {
    id: 53,
    question: '以下哪种特殊字符在数学解题中需要特别注意？',
    options: {
      A: '空格',
      B: '分数线、根号、上下标等数学专用符号',
      C: '逗号',
      D: '句号'
    },
    answer: 'B',
    explanation: '分数线、根号、上下标等数学专用符号需要特别处理，确保模型正确理解和输出，可规定使用LaTeX等统一格式。'
  },
  {
    id: 54,
    question: '在System Prompt中要求模型输出数学公式时，最佳做法是？',
    options: {
      A: '随意输出',
      B: '规定统一的符号格式，如标准数学符号或LaTeX格式',
      C: '只用文字描述',
      D: '不输出公式'
    },
    answer: 'B',
    explanation: '规定统一的符号格式（如标准数学符号或LaTeX），确保公式输出的一致性，便于程序解析和学生阅读。'
  },
  {
    id: 55,
    question: '当模型输入中包含emoji等特殊字符时，可能对数学推理产生什么影响？',
    options: {
      A: '一定提高准确率',
      B: '可能干扰模型对数学表达式的理解，需在System Prompt中规范',
      C: '没有任何影响',
      D: '总是导致报错'
    },
    answer: 'B',
    explanation: '特殊字符可能干扰模型对数学表达式的理解，需在System Prompt中加以规范，如要求模型忽略emoji或将其映射为标准符号。'
  },

  // ===== 主题六：格式约束（【答案】：格式、输出解析）10题 =====
  {
    id: 56,
    question: '在数学助手中，规定输出格式为【答案】：数值的主要目的是？',
    options: {
      A: '美观',
      B: '便于程序通过正则表达式自动提取答案',
      C: '增加字数',
      D: '限制模型思考'
    },
    answer: 'B',
    explanation: '统一的答案格式便于程序通过正则表达式自动提取，实现自动化评测，是T1任务评分的关键环节。'
  },
  {
    id: 57,
    question: '以下哪种输出格式约束最适合数学助手的答案提取？',
    options: {
      A: '请自由输出',
      B: '最终答案请用【答案】：数值 的格式输出',
      C: '把答案放在开头',
      D: '不需要格式'
    },
    answer: 'B',
    explanation: '【答案】：数值 的格式简洁明确，既便于人阅读，又便于程序通过正则表达式精确提取答案数值。'
  },
  {
    id: 58,
    question: '当需要从模型输出中解析答案时，以下哪种方法最常用？',
    options: {
      A: '人工阅读',
      B: '使用正则表达式匹配特定格式的文本',
      C: '随机猜测',
      D: '截取最后一段'
    },
    answer: 'B',
    explanation: '正则表达式可以精确匹配特定格式的文本（如【答案】：(\d+)），是自动提取答案的常用且高效的方法。'
  },
  {
    id: 59,
    question: '格式约束应该写在System Prompt的哪个部分？',
    options: {
      A: '开头',
      B: '明确标注为输出格式要求的部分',
      C: '不需要写',
      D: '最后一句'
    },
    answer: 'B',
    explanation: '格式约束应明确标注为输出格式要求，让模型清楚知道这是必须遵守的规则，而非可选建议。'
  },
  {
    id: 60,
    question: '如果模型输出中【答案】：后面有额外文字，可能导致什么问题？',
    options: {
      A: '没有问题',
      B: '正则解析可能提取到错误内容',
      C: '模型报错',
      D: '答案变正确'
    },
    answer: 'B',
    explanation: '答案标记后如有额外文字，简单的正则可能提取到错误内容。需使用更精确的正则或在System Prompt中约束只输出数值。'
  },
  {
    id: 61,
    question: '以下哪个正则表达式可以匹配【答案】：42中的数字？',
    options: {
      A: '/.*?/',
      B: '/【答案】：(\\d+)/',
      C: '/\\d/',
      D: '/answer/'
    },
    answer: 'B',
    explanation: '正则表达式/【答案】：(\\d+)/可以精确匹配答案标记后的数字部分，括号()用于捕获分组，\\d+匹配一个或多个数字。'
  },
  {
    id: 62,
    question: '在格式约束中，为什么要同时约束解题步骤和答案的输出顺序？',
    options: {
      A: '没有特别原因',
      B: '确保答案在固定位置便于解析，同时步骤可验证推理过程',
      C: '让输出更复杂',
      D: '限制模型能力'
    },
    answer: 'B',
    explanation: '固定的输出顺序（先步骤后答案）确保答案在确定位置便于程序解析，同时解题步骤可用于验证推理的正确性。'
  },
  {
    id: 63,
    question: '如果不使用格式约束，模型输出可能出现什么问题？',
    options: {
      A: '没有问题',
      B: '答案位置不固定、格式不统一，难以自动解析',
      C: '模型不工作',
      D: '答案一定错误'
    },
    answer: 'B',
    explanation: '没有格式约束时，答案位置和格式不固定，程序难以稳定提取。格式约束是自动化评测的基础。'
  },
  {
    id: 64,
    question: '以下哪种做法有助于提高答案提取的准确率？',
    options: {
      A: '不写任何格式要求',
      B: '在System Prompt中规定唯一的答案格式，并在解析时严格匹配',
      C: '让模型每次用不同格式',
      D: '随机解析'
    },
    answer: 'B',
    explanation: '规定唯一格式并严格匹配是提高提取准确率的关键。多种格式并存会增加解析复杂度和出错概率。'
  },
  {
    id: 65,
    question: '在T1任务中，如果模型偶尔不遵守格式约束，可以怎样处理？',
    options: {
      A: '放弃任务',
      B: '在System Prompt中加强格式强调，并在解析时增加容错处理',
      C: '更换模型',
      D: '不解析答案'
    },
    answer: 'B',
    explanation: '加强System Prompt中的格式强调，并在解析时增加容错处理（如多种正则匹配），提高系统的鲁棒性。'
  },

  // ===== 主题七：Temperature、top-k、top-p、do_sample 10题 =====
  {
    id: 66,
    question: 'Temperature参数的作用是什么？',
    options: {
      A: '控制模型大小',
      B: '控制生成文本的随机性和创造性',
      C: '控制输出语言',
      D: '控制运行速度'
    },
    answer: 'B',
    explanation: 'Temperature控制生成文本的随机性：值越高越随机多样，值越低越确定保守。数学解题应使用低Temperature。'
  },
  {
    id: 67,
    question: '当Temperature设为0时，模型生成行为是？',
    options: {
      A: '完全随机',
      B: '贪心解码，选择概率最高的token',
      C: '不生成任何内容',
      D: '生成最长文本'
    },
    answer: 'B',
    explanation: 'Temperature=0时为贪心解码，每步选择概率最高的token，输出最确定。适合需要准确答案的数学解题任务。'
  },
  {
    id: 68,
    question: '以下哪种Temperature设置适合数学解题？',
    options: {
      A: '1.5',
      B: '0或接近0，确保输出确定性和准确性',
      C: '2.0',
      D: '随机值'
    },
    answer: 'B',
    explanation: '数学解题需要确定性答案，应使用低Temperature（0或接近0），确保输出准确稳定，避免随机性引入错误。'
  },
  {
    id: 69,
    question: 'top-k参数的作用是什么？',
    options: {
      A: '限制输出长度为k个字',
      B: '在每步生成时，只从概率最高的k个token中选择',
      C: '生成k个答案',
      D: '跳过k个token'
    },
    answer: 'B',
    explanation: 'top_k限制每步只从概率最高的k个token中选择，减小候选范围。k越小输出越确定，k越大越多样。'
  },
  {
    id: 70,
    question: 'top-p（核采样nucleus sampling）的作用是什么？',
    options: {
      A: '限制输出概率',
      B: '从累积概率达到p的最小token集合中采样',
      C: '选择概率最高的p个token',
      D: '限制输出字数'
    },
    answer: 'B',
    explanation: 'top_p从累积概率达到p的最小token集合中采样，动态调整候选范围。p越小输出越确定，p=1.0时几乎不限制。'
  },
  {
    id: 71,
    question: 'do_sample设为False时，模型的行为是？',
    options: {
      A: '随机生成',
      B: '贪心解码，不进行采样',
      C: '生成多个结果',
      D: '不工作'
    },
    answer: 'B',
    explanation: 'do_sample=False时不进行采样，采用贪心解码，每步选概率最高的token，输出完全确定。适合数学解题。'
  },
  {
    id: 72,
    question: '对于需要确定答案的数学任务，推荐的参数设置是？',
    options: {
      A: 'do_sample=True, temperature=1.0',
      B: 'do_sample=False 或 temperature=0',
      C: 'temperature=2.0',
      D: 'top_k=100, top_p=0.9'
    },
    answer: 'B',
    explanation: '数学任务需要确定性答案，应设do_sample=False或temperature=0，确保输出确定性和可重复性。'
  },
  {
    id: 73,
    question: '以下关于top-k的描述，正确的是？',
    options: {
      A: 'top_k越大，输出越确定',
      B: 'top_k越小，候选token越少，输出越确定',
      C: 'top_k不影响输出',
      D: 'top_k必须设为0'
    },
    answer: 'B',
    explanation: 'top_k越小，候选token越少，输出越确定。top_k=1等价于贪心解码。top_k越大，候选越多，输出越多样。'
  },
  {
    id: 74,
    question: '以下关于top-p的描述，正确的是？',
    options: {
      A: 'top_p=1.0表示最确定',
      B: 'top_p越小，候选token集合越小，输出越确定',
      C: 'top_p不影响输出',
      D: 'top_p必须大于1'
    },
    answer: 'B',
    explanation: 'top_p越小，累积概率达到p所需的最小token集合越小，输出越确定。top_p=1.0时考虑所有token，最不确定。'
  },
  {
    id: 75,
    question: '在创意写作和数学解题中，Temperature的设置应该？',
    options: {
      A: '都设为最高',
      B: '创意写作可适当提高，数学解题应设低或为0',
      C: '都设为0',
      D: '都设为1.0'
    },
    answer: 'B',
    explanation: '创意写作可适当提高Temperature增加多样性和创造性，数学解题应设低或为0确保答案准确性和确定性。'
  },

  // ===== 主题八：RAG（检索增强生成）基础 10题 =====
  {
    id: 76,
    question: 'RAG的全称是什么？',
    options: {
      A: 'Random Access Generator',
      B: 'Retrieval Augmented Generation（检索增强生成）',
      C: 'Rapid Application Generation',
      D: 'Real-time AI Generation'
    },
    answer: 'B',
    explanation: 'RAG全称为Retrieval Augmented Generation，即检索增强生成，先检索外部知识再生成回答的技术。'
  },
  {
    id: 77,
    question: 'RAG的核心思想是什么？',
    options: {
      A: '只靠模型自身知识回答',
      B: '先从外部知识库检索相关信息，再结合检索结果和问题一起输入模型生成回答',
      C: '训练一个更大的模型',
      D: '不需要模型'
    },
    answer: 'B',
    explanation: 'RAG先从外部知识库检索相关信息，再将检索结果和用户问题一起送入模型生成回答，结合了检索和生成两种能力。'
  },
  {
    id: 78,
    question: 'RAG的主要优势是什么？',
    options: {
      A: '减少计算量',
      B: '能利用外部最新知识，减少幻觉，提高回答准确性',
      C: '增加模型参数',
      D: '加快推理速度'
    },
    answer: 'B',
    explanation: 'RAG利用外部知识库的最新信息，减少模型幻觉（编造事实），提高回答准确性和可信度。'
  },
  {
    id: 79,
    question: 'RAG系统中，检索阶段的作用是什么？',
    options: {
      A: '生成回答',
      B: '根据用户问题从知识库中找到最相关的文档或片段',
      C: '训练模型',
      D: '美化输出'
    },
    answer: 'B',
    explanation: '检索阶段根据用户问题从知识库中找到最相关的文档或片段，为生成阶段提供参考知识。'
  },
  {
    id: 80,
    question: 'RAG系统中，生成阶段的作用是什么？',
    options: {
      A: '检索文档',
      B: '将检索到的知识和用户问题一起送入模型，生成最终回答',
      C: '构建索引',
      D: '存储数据'
    },
    answer: 'B',
    explanation: '生成阶段将检索到的相关知识片段和用户问题一起送入大模型，让模型基于检索内容生成准确回答。'
  },
  {
    id: 81,
    question: '以下哪项是RAG的常见应用场景？',
    options: {
      A: '简单的加减法计算',
      B: '基于企业知识库的问答系统',
      C: '图像识别',
      D: '语音转文字'
    },
    answer: 'B',
    explanation: '基于企业知识库的问答系统是RAG的典型应用，如客服机器人从产品文档中检索信息再回答用户问题。'
  },
  {
    id: 82,
    question: 'RAG相比纯大模型直接回答，主要区别是？',
    options: {
      A: '没有区别',
      B: 'RAG引入了外部知识检索，能回答模型训练数据中没有的信息',
      C: 'RAG更慢但不更准',
      D: 'RAG不需要模型'
    },
    answer: 'B',
    explanation: 'RAG引入了外部知识检索，能回答模型训练数据中未覆盖的信息，且答案有据可查，减少幻觉。'
  },
  {
    id: 83,
    question: '在RAG中，向量检索的作用是？',
    options: {
      A: '生成文本',
      B: '将问题和文档转为向量，通过相似度计算找到最相关内容',
      C: '压缩数据',
      D: '加密数据'
    },
    answer: 'B',
    explanation: '向量检索将问题和文档转为向量表示，通过向量相似度（如余弦相似度）计算找到与问题最相关的内容。'
  },
  {
    id: 84,
    question: 'RAG中常见的相似度计算方法有？',
    options: {
      A: '加减法',
      B: '余弦相似度、点积等',
      C: '乘法',
      D: '除法'
    },
    answer: 'B',
    explanation: '余弦相似度（cosine similarity）和点积（dot product）是RAG中最常用的向量相似度计算方法，用于衡量文本相关性。'
  },
  {
    id: 85,
    question: '以下哪项不是RAG系统的组成部分？',
    options: {
      A: '知识库',
      B: '检索器',
      C: '生成模型',
      D: '梯度下降优化器'
    },
    answer: 'D',
    explanation: 'RAG系统由知识库、检索器和生成模型组成。梯度下降优化器是模型训练的工具，不是RAG推理系统的组成部分。'
  },

  // ===== 主题九：LoRA（低秩适配）基础 5题 =====
  {
    id: 86,
    question: 'LoRA的全称是什么？',
    options: {
      A: 'Long Range Adapter',
      B: 'Low-Rank Adaptation（低秩适配）',
      C: 'Local Random Access',
      D: 'Loss Optimization Rate Algorithm'
    },
    answer: 'B',
    explanation: 'LoRA全称为Low-Rank Adaptation，即低秩适配方法，通过注入低秩矩阵实现高效参数微调。'
  },
  {
    id: 87,
    question: 'LoRA的核心思想是什么？',
    options: {
      A: '训练一个全新的模型',
      B: '冻结预训练模型权重，通过注入低秩矩阵实现高效微调',
      C: '增加模型层数',
      D: '减少模型总参数量'
    },
    answer: 'B',
    explanation: 'LoRA冻结预训练模型权重不变，只训练注入的低秩矩阵（两个小矩阵的乘积），大幅减少可训练参数。'
  },
  {
    id: 88,
    question: 'LoRA的主要优势是什么？',
    options: {
      A: '让模型变大',
      B: '大幅减少可训练参数量，降低微调成本，同时保持较好效果',
      C: '提高推理速度',
      D: '不需要任何数据'
    },
    answer: 'B',
    explanation: 'LoRA大幅减少可训练参数量（通常只有原模型的0.1%-1%），降低微调的硬件和成本需求，同时保持接近全量微调的效果。'
  },
  {
    id: 89,
    question: 'LoRA中的低秩是指什么？',
    options: {
      A: '矩阵的秩很低',
      B: '用两个小矩阵的乘积来近似原始权重更新矩阵，减少参数量',
      C: '模型的层级很低',
      D: '数据质量低'
    },
    answer: 'B',
    explanation: '低秩指用一个低秩矩阵（两个小矩阵A和B的乘积）来近似原始的权重更新矩阵，从而大幅减少需要训练的参数数量。'
  },
  {
    id: 90,
    question: '以下哪项是LoRA的常见应用场景？',
    options: {
      A: '从零训练大模型',
      B: '在已有大模型基础上进行特定任务的轻量微调',
      C: '图像压缩',
      D: '数据清洗'
    },
    answer: 'B',
    explanation: 'LoRA常用于在已有大模型基础上进行特定任务的轻量微调，如增强数学推理能力、适配特定领域问答等。'
  },

  // ===== 主题十：模型对齐（RLHF、DPO、SFT）5题 =====
  {
    id: 91,
    question: 'RLHF的全称是什么？',
    options: {
      A: 'Random Loss High Frequency',
      B: 'Reinforcement Learning from Human Feedback（基于人类反馈的强化学习）',
      C: 'Real Language Human Framework',
      D: 'Remote Learning High Function'
    },
    answer: 'B',
    explanation: 'RLHF全称为Reinforcement Learning from Human Feedback，通过人类对模型输出的偏好反馈训练奖励模型，再用强化学习优化。'
  },
  {
    id: 92,
    question: 'SFT（Supervised Fine-Tuning）的含义是？',
    options: {
      A: '无监督学习',
      B: '监督微调，使用标注数据对模型进行微调',
      C: '强化学习',
      D: '自监督学习'
    },
    answer: 'B',
    explanation: 'SFT是监督微调，使用人工标注的问答数据对预训练模型进行微调，让模型学会按照指令格式回答问题。'
  },
  {
    id: 93,
    question: 'DPO（Direct Preference Optimization）的特点是？',
    options: {
      A: '需要先训练奖励模型',
      B: '直接基于人类偏好数据优化模型，无需单独训练奖励模型',
      C: '不需要任何数据',
      D: '只用于图像生成'
    },
    answer: 'B',
    explanation: 'DPO直接基于人类偏好数据（好回答和差回答的对比）优化模型，省去了RLHF中单独训练奖励模型的步骤，更简单高效。'
  },
  {
    id: 94,
    question: '模型对齐的主要目标是？',
    options: {
      A: '让模型更大',
      B: '使模型输出更符合人类价值观和用户意图',
      C: '提高推理速度',
      D: '减少参数量'
    },
    answer: 'B',
    explanation: '模型对齐使模型输出更符合人类价值观（如有用、无害、诚实）和用户意图，提高模型的可用性和安全性。'
  },
  {
    id: 95,
    question: '以下哪项是模型对齐的常用方法？',
    options: {
      A: '增加数据量',
      B: 'SFT、RLHF、DPO等',
      C: '降低temperature',
      D: '使用更大GPU'
    },
    answer: 'B',
    explanation: 'SFT（监督微调）、RLHF（人类反馈强化学习）、DPO（直接偏好优化）都是常用的模型对齐方法，各有优劣。'
  },

  // ===== 主题十一：解码策略（贪心、束搜索、采样）5题 =====
  {
    id: 96,
    question: '贪心解码的特点是？',
    options: {
      A: '每步选择概率最高的token，速度快但可能陷入局部最优',
      B: '随机选择token',
      C: '选择概率最低的token',
      D: '生成多个结果'
    },
    answer: 'A',
    explanation: '贪心解码每步选概率最高的token，简单快速，但因为只看当前最优，可能错过全局更优的序列。'
  },
  {
    id: 97,
    question: 'Beam Search（束搜索）的特点是？',
    options: {
      A: '只保留一条路径',
      B: '同时维护多条候选序列，最终选择综合得分最高的',
      C: '完全随机生成',
      D: '不需要模型'
    },
    answer: 'B',
    explanation: 'Beam Search同时维护beam_width条候选序列，每步扩展并保留得分最高的候选，最终选择综合得分最高的序列。'
  },
  {
    id: 98,
    question: '采样解码的特点是？',
    options: {
      A: '总是选概率最高的token',
      B: '按概率分布随机采样token，增加输出多样性',
      C: '不生成任何内容',
      D: '只选概率最低的token'
    },
    answer: 'B',
    explanation: '采样解码按token的概率分布随机采样，高概率token更可能被选中但非必然，增加输出的多样性和创造性。'
  },
  {
    id: 99,
    question: '以下哪种解码策略最适合数学解题？',
    options: {
      A: '纯随机采样',
      B: '贪心解码或低temperature采样，确保答案的确定性',
      C: '高temperature采样',
      D: '不需要解码策略'
    },
    answer: 'B',
    explanation: '数学解题需要确定性答案，适合贪心解码或低Temperature采样，确保答案准确且可重复。'
  },
  {
    id: 100,
    question: 'Beam Search中beam_width增大时，效果会怎样？',
    options: {
      A: '一定更好',
      B: '候选序列更多，可能找到更优解，但计算开销也更大',
      C: '没有影响',
      D: '一定更差'
    },
    answer: 'B',
    explanation: 'beam_width增大时候选序列更多，可能找到更优解，但计算开销和内存消耗也更大，需在效果和效率间权衡。'
  }
];
