const QUIZ_TRANSFORMER = [
  // ========== Transformer架构（编码器、解码器、编码器-解码器）1-10 ==========
  {
    id: 1,
    question: '在自注意力机制中，Q、K、V的来源是什么？',
    options: {
      A: '三个不同的随机初始化矩阵',
      B: '同一个输入通过三个不同的权重矩阵投影得到',
      C: 'Q来自编码器，K和V来自解码器',
      D: 'Q是输入本身，K和V是模型参数'
    },
    answer: 'B',
    explanation: '自注意力中Q、K、V都来自同一个输入x，分别通过Wq、Wk、Wv三个可学习的权重矩阵线性投影得到。'
  },
  {
    id: 2,
    question: '原始Transformer（Attention is All You Need）采用的是什么架构？',
    options: {
      A: '仅编码器（Encoder-only）',
      B: '仅解码器（Decoder-only）',
      C: '编码器-解码器（Encoder-Decoder）',
      D: '没有编码器和解码器'
    },
    answer: 'C',
    explanation: '原始Transformer论文中提出的是编码器-解码器架构，编码器负责理解输入序列，解码器负责生成输出序列。'
  },
  {
    id: 3,
    question: '以下哪个模型采用的是编码器-only架构？',
    options: {
      A: 'GPT系列',
      B: 'BERT',
      C: 'T5',
      D: 'BART'
    },
    answer: 'B',
    explanation: 'BERT是编码器-only架构，只保留了Transformer的编码器部分，适合文本理解任务。GPT是解码器-only，T5和BART是编码器-解码器架构。'
  },
  {
    id: 4,
    question: 'GPT系列模型采用的是哪种Transformer架构？',
    options: {
      A: '编码器-only',
      B: '解码器-only',
      C: '编码器-解码器',
      D: '双编码器'
    },
    answer: 'B',
    explanation: 'GPT系列模型采用解码器-only架构，通过自回归方式逐token生成文本，适合文本生成任务。'
  },
  {
    id: 5,
    question: 'Transformer编码器中的一个标准块包含哪些子层？',
    options: {
      A: '仅自注意力层',
      B: '自注意力层 + 前馈神经网络',
      C: '自注意力层 + 交叉注意力层 + 前馈神经网络',
      D: '交叉注意力层 + 前馈神经网络'
    },
    answer: 'B',
    explanation: '编码器的每个块包含多头自注意力层和前馈神经网络（FFN），每个子层都配有残差连接和层归一化。'
  },
  {
    id: 6,
    question: 'Transformer解码器比编码器多出哪个子层？',
    options: {
      A: '前馈神经网络',
      B: '交叉注意力层（Cross-Attention）',
      C: '自注意力层',
      D: '池化层'
    },
    answer: 'B',
    explanation: '解码器除了自注意力层和前馈神经网络外，还多了一个交叉注意力层，用于关注编码器的输出。'
  },
  {
    id: 7,
    question: 'Transformer中残差连接的作用是什么？',
    options: {
      A: '减少模型参数量',
      B: '帮助梯度流动，缓解深层网络的梯度消失问题',
      C: '增加模型的非线性能力',
      D: '替代层归一化'
    },
    answer: 'B',
    explanation: '残差连接将子层输入直接加到输出上（x + Sublayer(x)），有助于梯度在深层网络中更好地流动，缓解梯度消失。'
  },
  {
    id: 8,
    question: '原始Transformer论文中，编码器和解码器各有多少层？',
    options: {
      A: '编码器6层，解码器6层',
      B: '编码器12层，解码器12层',
      C: '编码器24层，解码器6层',
      D: '编码器6层，解码器12层'
    },
    answer: 'A',
    explanation: '原始Transformer（base模型）使用6层编码器和6层解码器，共12层。大模型（big）同样使用6+6层但维度更大。'
  },
  {
    id: 9,
    question: 'Transformer中的前馈神经网络（FFN）通常包含几层线性变换？',
    options: {
      A: '一层',
      B: '两层，中间有非线性激活函数',
      C: '三层',
      D: '四层'
    },
    answer: 'B',
    explanation: 'FFN通常由两层线性变换组成，中间使用ReLU或GELU等激活函数。第一层将维度从d扩展到4d，第二层再缩回d。'
  },
  {
    id: 10,
    question: 'T5模型采用的架构是什么？',
    options: {
      A: '编码器-only',
      B: '解码器-only',
      C: '编码器-解码器',
      D: '混合架构'
    },
    answer: 'C',
    explanation: 'T5（Text-to-Text Transfer Transformer）采用编码器-解码器架构，将所有任务统一为文本到文本的格式。'
  },
  // ========== 自注意力机制（Q/K/V、缩放点积、多头）11-25 ==========
  {
    id: 11,
    question: '缩放点积注意力（Scaled Dot-Product Attention）的公式是什么？',
    options: {
      A: 'softmax(QK)V',
      B: 'softmax(QK/sqrt(dk))V',
      C: 'softmax(QK/dk)V',
      D: 'softmax(QKT)V'
    },
    answer: 'B',
    explanation: '缩放点积注意力公式为Attention(Q,K,V) = softmax(QK^T / sqrt(dk))V，其中除以sqrt(dk)是为了缩放。'
  },
  {
    id: 12,
    question: '在注意力计算中，为什么要除以sqrt(dk)进行缩放？',
    options: {
      A: '减少计算量',
      B: '防止点积值过大导致softmax梯度消失',
      C: '增加模型的非线性',
      D: '归一化输入向量'
    },
    answer: 'B',
    explanation: '当dk较大时，QK^T的值会很大，导致softmax函数进入饱和区，梯度趋近于零。除以sqrt(dk)将方差控制为1，保持梯度稳定。'
  },
  {
    id: 13,
    question: '自注意力机制的主要优势是什么？',
    options: {
      A: '计算复杂度低',
      B: '能够捕捉长距离依赖关系',
      C: '不需要训练参数',
      D: '不需要位置编码'
    },
    answer: 'B',
    explanation: '自注意力机制让序列中任意两个位置直接交互，路径长度为O(1)，能高效捕捉长距离依赖，相比RNN的O(n)路径有巨大优势。'
  },
  {
    id: 14,
    question: '多头注意力机制中，每个头的维度如何确定？',
    options: {
      A: '每个头的维度等于模型总维度d_model',
      B: '每个头的维度为d_model / num_heads',
      C: '每个头的维度随机分配',
      D: '每个头的维度为d_model * num_heads'
    },
    answer: 'B',
    explanation: '多头注意力将d_model维度拆分成num_heads个头，每个头维度为d_model / num_heads，这样多头拼接后总维度保持不变。'
  },
  {
    id: 15,
    question: '多头注意力中，各个头的输出如何合并？',
    options: {
      A: '取平均值',
      B: '拼接后乘以输出权重矩阵Wo',
      C: '逐元素相加',
      D: '取最大值'
    },
    answer: 'B',
    explanation: '各头的输出沿特征维度拼接（concat），然后乘以输出权重矩阵Wo进行线性变换，得到最终的多头注意力输出。'
  },
  {
    id: 16,
    question: '自注意力机制的时间复杂度是？',
    options: {
      A: 'O(n)',
      B: 'O(n^2 * d)',
      C: 'O(n * log n)',
      D: 'O(n * d^2)'
    },
    answer: 'B',
    explanation: '自注意力需要计算n个位置两两之间的关系，时间复杂度为O(n^2 * d)，其中n是序列长度，d是维度。这也是长序列处理成本高的原因。'
  },
  {
    id: 17,
    question: '在解码器的自注意力中，为什么要使用因果掩码（causal mask）？',
    options: {
      A: '减少计算量',
      B: '防止当前位置看到未来的信息',
      C: '增加模型的表达能力',
      D: '替代位置编码'
    },
    answer: 'B',
    explanation: '因果掩码将注意力矩阵的上三角部分设为负无穷，经softmax后变为零，确保生成第t个token时只能看到前t-1个token，防止信息泄露。'
  },
  {
    id: 18,
    question: '交叉注意力（Cross-Attention）中，Q和K/V分别来自哪里？',
    options: {
      A: 'Q来自解码器，K和V来自编码器输出',
      B: 'Q来自编码器，K和V来自解码器',
      C: 'Q、K、V都来自解码器',
      D: 'Q、K、V都来自编码器'
    },
    answer: 'A',
    explanation: '在交叉注意力中，Q来自解码器的当前层输出，K和V来自编码器的最后一层输出，使解码器能关注输入序列的相关信息。'
  },
  {
    id: 19,
    question: '自注意力与交叉注意力的主要区别是什么？',
    options: {
      A: '计算公式不同',
      B: 'Q、K、V的来源不同：自注意力来自同一序列，交叉注意力来自不同序列',
      C: '使用的激活函数不同',
      D: '残差连接方式不同'
    },
    answer: 'B',
    explanation: '自注意力中Q、K、V来自同一个输入序列，而交叉注意力中Q来自一个序列（如解码器），K和V来自另一个序列（如编码器输出）。'
  },
  {
    id: 20,
    question: '注意力权重矩阵经过softmax后，其每行的和为多少？',
    options: {
      A: '0',
      B: '1',
      C: '序列长度n',
      D: '维度d'
    },
    answer: 'B',
    explanation: 'softmax函数的性质保证每行元素之和为1，这意味着每个位置对其他所有位置的注意力权重之和为1，形成概率分布。'
  },
  {
    id: 21,
    question: '原始Transformer中使用了多少个注意力头？',
    options: {
      A: '4个',
      B: '8个',
      C: '12个',
      D: '16个'
    },
    answer: 'B',
    explanation: '原始Transformer（base模型）使用8个注意力头，模型维度d_model=512，每个头维度为512/8=64。'
  },
  {
    id: 22,
    question: '注意力机制中的softmax是在哪个维度上进行的？',
    options: {
      A: '沿着Q的维度（行方向）',
      B: '沿着K的维度（列方向）',
      C: '沿着V的维度',
      D: '沿着所有维度'
    },
    answer: 'B',
    explanation: 'softmax沿着K的维度（即矩阵的列方向）进行，确保每个查询位置对所有键位置的注意力权重之和为1。'
  },
  {
    id: 23,
    question: '当注意力分数为负无穷时，经softmax后对应的注意力权重是多少？',
    options: {
      A: '0',
      B: '1',
      C: '0.5',
      D: '负无穷'
    },
    answer: 'A',
    explanation: '掩码操作将不需要关注的位置设为负无穷，经softmax后这些位置的权重变为0，实现了选择性关注。'
  },
  {
    id: 24,
    question: '多头注意力机制的主要目的是什么？',
    options: {
      A: '减少参数量',
      B: '让模型从不同表示子空间中关注不同位置的信息',
      C: '加速训练',
      D: '替代前馈神经网络'
    },
    answer: 'B',
    explanation: '多头注意力让不同的头学习不同的关注模式，从多个表示子空间中捕获信息，增强了模型的表达能力。'
  },
  {
    id: 25,
    question: '在Transformer中，每个子层后都有残差连接和层归一化，其顺序通常是？',
    options: {
      A: '先归一化再子层再残差连接',
      B: '先子层再残差连接再归一化，即LayerNorm(x + Sublayer(x))',
      C: '先残差连接再子层再归一化',
      D: '归一化和残差连接可以任意顺序'
    },
    answer: 'B',
    explanation: '原始Transformer采用Post-LN结构，即LayerNorm(x + Sublayer(x))，先做残差连接再做层归一化。后来的Pre-LN结构则先归一化。'
  },
  // ========== GQA、MHA、MQA对比 26-30 ==========
  {
    id: 26,
    question: 'MHA（Multi-Head Attention）中，Q头、K头和V头的数量关系是？',
    options: {
      A: 'Q头数 > K头数 = V头数',
      B: 'Q头数 = K头数 = V头数',
      C: 'Q头数 < K头数 = V头数',
      D: '三者无固定关系'
    },
    answer: 'B',
    explanation: '在MHA中，Q、K、V的头数相同，每个头都有独立的Q、K、V投影矩阵，这是最标准的多头注意力方式。'
  },
  {
    id: 27,
    question: 'MQA（Multi-Query Attention）的特点是什么？',
    options: {
      A: '多个Q头共享一组K和V',
      B: '多个K头共享一组Q和V',
      C: 'Q、K、V各有多个头',
      D: '只有一个Q头'
    },
    answer: 'A',
    explanation: 'MQA中Q保持多头，但所有Q头共享同一组K和V投影，大幅减少了KV cache的内存占用，但可能损失一些表达能力。'
  },
  {
    id: 28,
    question: 'GQA（Grouped Query Attention）是MHA和MQA的折中方案，其特点是？',
    options: {
      A: '所有Q头共享一组K和V',
      B: '将Q头分组，每组共享一对K和V',
      C: '每个Q头有独立的K和V',
      D: '只有一组Q、K、V'
    },
    answer: 'B',
    explanation: 'GQA将Q头分成若干组，每组共享一对K和V投影。当组数=Q头数时退化为MHA，当组数=1时退化为MQA，是两者的折中。'
  },
  {
    id: 29,
    question: '以下关于MHA、MQA、GQA的推理内存消耗排序，正确的是？',
    options: {
      A: 'MHA < GQA < MQA',
      B: 'MQA < GQA < MHA',
      C: 'GQA < MQA < MHA',
      D: 'MHA < MQA < GQA'
    },
    answer: 'B',
    explanation: 'KV cache内存与K/V头数成正比。MQA只有1组KV，内存最少；GQA有若干组KV，居中；MHA每组Q头都有独立KV，内存最多。'
  },
  {
    id: 30,
    question: '以下哪个模型使用了GQA（Grouped Query Attention）？',
    options: {
      A: '原始Transformer',
      B: 'LLaMA-2 70B',
      C: 'BERT',
      D: 'GPT-2'
    },
    answer: 'B',
    explanation: 'LLaMA-2 70B使用了GQA技术来减少推理时的KV cache内存消耗，在保持模型质量的同时提升推理效率。'
  },
  // ========== Tokenizer（AutoTokenizer、BPE、from_pretrained、trust_remote_code）31-40 ==========
  {
    id: 31,
    question: 'AutoTokenizer.from_pretrained()的作用是什么？',
    options: {
      A: '加载预训练模型权重',
      B: '根据模型名称自动加载对应的分词器',
      C: '训练一个新的分词器',
      D: '将文本转为图片'
    },
    answer: 'B',
    explanation: 'AutoTokenizer.from_pretrained()会根据传入的模型名称或路径，自动选择并加载对应的分词器配置和词表。'
  },
  {
    id: 32,
    question: 'BPE（Byte Pair Encoding）分词算法的核心思想是什么？',
    options: {
      A: '按空格分割单词',
      B: '从字符级开始，迭代合并出现频率最高的相邻字节对',
      C: '使用预定义的词表',
      D: '按句子分割'
    },
    answer: 'B',
    explanation: 'BPE从字符级别开始，每一步找到出现频率最高的相邻token对并将其合并为一个新token，逐步构建子词词表，能平衡未见词和词表大小。'
  },
  {
    id: 33,
    question: '使用from_pretrained加载分词器时，trust_remote_code=True的作用是？',
    options: {
      A: '允许加载远程仓库中的自定义分词器代码',
      B: '加密网络传输',
      C: '跳过模型验证',
      D: '自动更新分词器'
    },
    answer: 'A',
    explanation: 'trust_remote_code=True允许执行来自远程仓库的自定义Python代码（如自定义的Tokenizer类），使用时需注意安全风险，仅在信任来源时启用。'
  },
  {
    id: 34,
    question: '以下关于token和subword（子词）的关系，正确的是？',
    options: {
      A: '每个单词就是一个token',
      B: '一个单词可能被分成多个子词token',
      C: '子词和token是完全不同的概念',
      D: '子词只能在中文中使用'
    },
    answer: 'B',
    explanation: 'BPE等子词分词器会将未见或不常见的单词拆分为多个子词token，如unbelievable可能被拆为un、believ、able。常见词则保留为整体。'
  },
  {
    id: 35,
    question: 'tokenizer的vocab_size指的是什么？',
    options: {
      A: '模型能处理的最大文本长度',
      B: '词表中token的总数量',
      C: '嵌入向量的维度',
      D: '训练数据的规模'
    },
    answer: 'B',
    explanation: 'vocab_size是分词器词表的大小，即所有可表示的token数量。每个token对应一个唯一的整数ID，范围从0到vocab_size-1。'
  },
  {
    id: 36,
    question: '以下哪个不是常见的特殊token？',
    options: {
      A: '[CLS]（分类token）',
      B: '[SEP]（分隔token）',
      C: '[PAD]（填充token）',
      D: '[MAX]（最大token）'
    },
    answer: 'D',
    explanation: '常见的特殊token包括[CLS]（序列开始）、[SEP]（序列分隔）、[PAD]（填充）、[MASK]（掩码）等，[MAX]不是标准特殊token。'
  },
  {
    id: 37,
    question: '对于中文文本，BPE分词器通常如何处理？',
    options: {
      A: '每个汉字作为一个token',
      B: '每个汉字可能对应1到多个token，取决于词表',
      C: '中文不分词，直接编码为字节',
      D: '中文必须先分词再编码'
    },
    answer: 'B',
    explanation: 'BPE对中文的处理取决于词表。如果词表包含该汉字，则一个汉字一个token；如果不含，则会被编码为UTF-8字节序列，可能对应多个token。'
  },
  {
    id: 38,
    question: 'WordPiece分词算法与BPE的主要区别是什么？',
    options: {
      A: 'WordPiece按频率合并，BPE按互信息合并',
      B: 'WordPiece按似然值最大化合并，BPE按频率合并',
      C: 'WordPiece只能用于英文',
      D: 'BPE只能用于中文'
    },
    answer: 'B',
    explanation: 'BPE选择出现频率最高的相邻对进行合并，而WordPiece选择使语言模型似然值增加最大的对进行合并，BERT使用的是WordPiece。'
  },
  {
    id: 39,
    question: 'tokenizer的padding作用是什么？',
    options: {
      A: '增加文本长度',
      B: '将不同长度的序列填充到相同长度，便于批处理',
      C: '删除多余的token',
      D: '加密文本内容'
    },
    answer: 'B',
    explanation: 'padding用[PAD]token将短序列填充到批次内最长序列的长度，使所有序列等长，便于GPU高效并行处理（批处理）。'
  },
  {
    id: 40,
    question: 'tokenizer调用时返回的结果中通常包含哪些字段？',
    options: {
      A: 'input_ids 和 attention_mask',
      B: 'input_ids、attention_mask 和 token_type_ids',
      C: '仅input_ids',
      D: 'text 和 labels'
    },
    answer: 'B',
    explanation: 'tokenizer通常返回input_ids（token的ID序列）、attention_mask（标记哪些位置是真实token而非padding）和token_type_ids（区分句子对）。'
  },
  // ========== Chat Template（apply_chat_template、add_generation_prompt、messages格式）41-50 ==========
  {
    id: 41,
    question: 'apply_chat_template()方法的主要作用是什么？',
    options: {
      A: '训练一个新的聊天模型',
      B: '将对话消息列表转换为模型能理解的token序列',
      C: '生成聊天界面',
      D: '评估模型性能'
    },
    answer: 'B',
    explanation: 'apply_chat_template()将结构化的对话消息（messages列表）按照模型特定的模板格式转换为文本字符串，再由tokenizer编码为input_ids。'
  },
  {
    id: 42,
    question: 'add_generation_prompt=True参数的作用是什么？',
    options: {
      A: '自动生成回复',
      B: '在格式化后的输入末尾添加助手指令的起始标记，引导模型生成回复',
      C: '增加训练数据',
      D: '跳过模板格式化'
    },
    answer: 'B',
    explanation: 'add_generation_prompt=True会在对话末尾追加assistant角色的起始标记（如<|im_start|>assistant\n），让模型知道应该开始生成回复。'
  },
  {
    id: 43,
    question: 'messages列表中每条消息的格式通常包含哪些字段？',
    options: {
      A: 'text 和 label',
      B: 'role 和 content',
      C: 'input 和 output',
      D: 'question 和 answer'
    },
    answer: 'B',
    explanation: '标准messages格式中每条消息是包含role（角色，如system/user/assistant）和content（内容）的字典，如{"role": "user", "content": "你好"}。'
  },
  {
    id: 44,
    question: '在对话消息中，常见的角色（role）不包括以下哪个？',
    options: {
      A: 'system',
      B: 'user',
      C: 'assistant',
      D: 'manager'
    },
    answer: 'D',
    explanation: '标准对话格式中的角色包括system（系统设定）、user（用户）和assistant（助手）。manager不是标准对话角色。'
  },
  {
    id: 45,
    question: '为什么不同的模型需要不同的chat template？',
    options: {
      A: '因为不同模型的参数量不同',
      B: '因为不同模型在训练时使用了不同的特殊标记和对话格式',
      C: '因为不同模型使用不同的编程语言',
      D: '没有区别，所有模型共用同一模板'
    },
    answer: 'B',
    explanation: '不同模型在训练时使用不同的特殊token和对话格式（如Qwen用<|im_start|>，LLaMA用[INST]等），推理时必须使用与训练一致的模板才能获得最佳效果。'
  },
  {
    id: 46,
    question: 'system message在对话中的作用是什么？',
    options: {
      A: '存储系统日志',
      B: '设定助手的行为方式、角色设定和约束条件',
      C: '记录用户信息',
      D: '管理对话历史'
    },
    answer: 'B',
    explanation: 'system消息用于设定助手的行为方式，如"你是一个有帮助的助手"或"用中文回答"，指导模型在整个对话中遵循的规则。'
  },
  {
    id: 47,
    question: '如果不使用chat template直接将原始对话文本输入模型，可能产生什么问题？',
    options: {
      A: '模型会崩溃',
      B: '模型无法区分用户和助手的对话轮次，输出质量下降',
      C: '模型训练速度变慢',
      D: '没有影响'
    },
    answer: 'B',
    explanation: '不使用chat template，模型无法识别对话结构和角色边界，导致输出与训练时格式不一致，生成质量显著下降。'
  },
  {
    id: 48,
    question: 'chat template中的Jinja2模板引擎的作用是什么？',
    options: {
      A: '编译模型代码',
      B: '根据消息列表动态渲染生成格式化的对话文本',
      C: '优化模型参数',
      D: '压缩模型权重'
    },
    answer: 'B',
    explanation: 'chat template使用Jinja2模板引擎，根据messages列表中的role和content动态渲染出符合模型训练格式的文本字符串。'
  },
  {
    id: 49,
    question: 'continue_final_message=True参数的作用是什么？',
    options: {
      A: '继续生成最后一条消息',
      B: '将最后一条消息作为assistant回复的开头继续补全，而非从零开始生成',
      C: '删除最后一条消息',
      D: '重复最后一条消息'
    },
    answer: 'B',
    explanation: 'continue_final_message=True将messages列表中最后一条消息的内容作为助手回复的开头，模型会在此基础上继续补全，而不是从全新回复开始。'
  },
  {
    id: 50,
    question: '以下关于chat template和tokenizer关系的描述，正确的是？',
    options: {
      A: 'chat template是tokenizer的一部分，存储在tokenizer配置中',
      B: 'chat template和tokenizer完全独立，互不相关',
      C: 'chat template替代了tokenizer',
      D: 'tokenizer替代了chat template'
    },
    answer: 'A',
    explanation: 'chat template存储在tokenizer的配置文件（如tokenizer_config.json）中，是tokenizer的一部分。apply_chat_template先渲染模板再编码。'
  },
  // ========== AutoModel vs AutoModelForCausalLM（区别、使用场景）51-55 ==========
  {
    id: 51,
    question: 'AutoModel类的主要用途是什么？',
    options: {
      A: '加载模型进行文本生成',
      B: '根据配置自动加载模型，返回隐藏状态（hidden states）',
      C: '训练模型',
      D: '评估模型'
    },
    answer: 'B',
    explanation: 'AutoModel根据配置自动加载模型的基础部分，输出最后一层的隐藏状态，不包含任务特定的输出头（如LM Head）。'
  },
  {
    id: 52,
    question: 'AutoModelForCausalLM类相比AutoModel多出了什么？',
    options: {
      A: '更多的Transformer层',
      B: '语言模型输出头（LM Head），用于预测下一个token的概率分布',
      C: '更好的优化器',
      D: '更大的词表'
    },
    answer: 'B',
    explanation: 'AutoModelForCausalLM在基础模型上增加了LM Head（线性层），将隐藏状态投影到词表维度，输出每个token的logits，用于自回归生成。'
  },
  {
    id: 53,
    question: '以下场景中，应该使用AutoModelForCausalLM而不是AutoModel的是？',
    options: {
      A: '提取文本的向量表示（embedding）',
      B: '文本分类任务',
      C: '文本生成（如对话回复生成）',
      D: '图像处理'
    },
    answer: 'C',
    explanation: '文本生成需要预测下一个token的概率分布，需要LM Head输出logits，因此应使用AutoModelForCausalLM。AutoModel只输出隐藏状态。'
  },
  {
    id: 54,
    question: '如果要从模型中提取文本嵌入向量（embedding），应该使用哪个类？',
    options: {
      A: 'AutoModelForCausalLM',
      B: 'AutoModel',
      C: 'AutoTokenizer',
      D: 'AutoConfig'
    },
    answer: 'B',
    explanation: '提取embedding只需要模型的隐藏状态，不需要LM Head，应使用AutoModel。它返回last_hidden_state，可用于计算文本向量。'
  },
  {
    id: 55,
    question: 'AutoModelForCausalLM的generate()方法默认使用什么解码策略？',
    options: {
      A: 'Beam search',
      B: 'Greedy search（贪心搜索）',
      C: 'Top-k采样',
      D: 'Top-p采样'
    },
    answer: 'B',
    explanation: 'generate()方法默认使用贪心搜索（greedy search），每步选择概率最高的token。可通过设置do_sample=True等参数切换为采样策略。'
  },
  // ========== 位置编码（正弦余弦、RoPE、可学习）56-60 ==========
  {
    id: 56,
    question: 'Transformer为什么需要位置编码？',
    options: {
      A: '增加模型参数量',
      B: '自注意力机制本身没有位置感知能力，需要位置编码注入序列顺序信息',
      C: '加速训练',
      D: '替代词嵌入'
    },
    answer: 'B',
    explanation: '自注意力机制对输入序列的顺序不敏感（排列不变），位置编码将位置信息注入到嵌入中，使模型能利用token的顺序信息。'
  },
  {
    id: 57,
    question: '原始Transformer使用的是什么类型的位置编码？',
    options: {
      A: '可学习的位置编码',
      B: '正弦余弦函数位置编码（Sinusoidal）',
      C: '旋转位置编码（RoPE）',
      D: '相对位置编码'
    },
    answer: 'B',
    explanation: '原始Transformer使用正弦和余弦函数生成不同频率的位置编码，无需训练，能推广到比训练时更长的序列。'
  },
  {
    id: 58,
    question: 'RoPE（Rotary Position Embedding，旋转位置编码）的核心思想是什么？',
    options: {
      A: '通过学习位置嵌入向量',
      B: '通过对Q和K向量进行旋转操作来编码相对位置信息',
      C: '使用正弦函数编码绝对位置',
      D: '将位置信息加到V上'
    },
    answer: 'B',
    explanation: 'RoPE通过对Q和K向量按位置进行旋转，使得Q和K的点积自然包含了它们的相对位置信息，无需额外参数，且支持长度外推。'
  },
  {
    id: 59,
    question: '可学习位置编码（Learned Position Embedding）的缺点是什么？',
    options: {
      A: '计算速度慢',
      B: '模型只能处理训练时见过的最大长度，难以外推到更长序列',
      C: '参数量太少',
      D: '不适用于任何任务'
    },
    answer: 'B',
    explanation: '可学习位置编码为每个位置训练一个嵌入向量，超出训练最大长度的位置没有对应的嵌入，因此难以处理比训练序列更长的输入。'
  },
  {
    id: 60,
    question: '以下哪个模型使用了RoPE（旋转位置编码）？',
    options: {
      A: 'BERT',
      B: 'GPT-2',
      C: 'LLaMA系列',
      D: '原始Transformer'
    },
    answer: 'C',
    explanation: 'LLaMA系列模型使用RoPE旋转位置编码，它将相对位置信息融入Q和K的旋转中，无需额外参数且支持长度外推。'
  },
  // ========== 预训练（MLM、CLM、自回归）61-70 ==========
  {
    id: 61,
    question: 'MLM（Masked Language Modeling，掩码语言模型）的原理是？',
    options: {
      A: '从左到右逐个预测token',
      B: '随机遮盖输入中的部分token，让模型预测被遮盖的token',
      C: '预测下一个句子',
      D: '预测整个文档的主题'
    },
    answer: 'B',
    explanation: 'MLM随机遮盖（如15%）的token，模型利用双向上下文信息预测被遮盖的内容。BERT使用MLM作为预训练任务之一。'
  },
  {
    id: 62,
    question: 'CLM（Causal Language Modeling，因果语言建模）的原理是？',
    options: {
      A: '随机遮盖token后预测',
      B: '根据已生成的前文，自回归地预测下一个token',
      C: '预测句子对的关系',
      D: '同时预测多个token'
    },
    answer: 'B',
    explanation: 'CLM基于已见到的上文（左侧上下文）预测下一个token，是自回归方式。GPT系列使用CLM进行预训练，只能利用单向上下文。'
  },
  {
    id: 63,
    question: 'BERT的预训练任务包含哪些？',
    options: {
      A: '仅MLM',
      B: 'MLM和NSP（下一句预测）',
      C: 'CLM和MLM',
      D: '仅CLM'
    },
    answer: 'B',
    explanation: 'BERT的预训练包含两个任务：MLM（掩码语言模型）和NSP（下一句预测），利用双向注意力学习语言表示。'
  },
  {
    id: 64,
    question: 'GPT系列模型的预训练方式是什么？',
    options: {
      A: 'MLM（掩码语言模型）',
      B: 'CLM（因果语言建模/自回归）',
      C: 'Prefix LM',
      D: '去噪自编码器'
    },
    answer: 'B',
    explanation: 'GPT使用CLM（因果语言建模），从左到右自回归地预测下一个token，天然适合文本生成任务。'
  },
  {
    id: 65,
    question: 'MLM和CLM的主要区别是什么？',
    options: {
      A: 'MLM使用编码器，CLM使用解码器',
      B: 'MLM可利用双向上下文预测被遮盖token，CLM只能利用单向上下文预测下一个token',
      C: 'MLM用于生成，CLM用于理解',
      D: '两者没有区别'
    },
    answer: 'B',
    explanation: 'MLM可以同时看到被遮盖位置左右两侧的上下文（双向），而CLM只能看到当前位置左侧的上下文（单向），这是根本区别。'
  },
  {
    id: 66,
    question: 'T5模型的预训练任务是什么？',
    options: {
      A: 'MLM',
      B: 'CLM',
      C: 'Span Corruption（跨度损坏，掩码连续token片段后预测）',
      D: 'NSP'
    },
    answer: 'C',
    explanation: 'T5使用Span Corruption作为预训练任务，随机遮盖连续的token片段（span），模型以seq2seq方式预测被遮盖的内容。'
  },
  {
    id: 67,
    question: '自回归（Autoregressive）语言模型的含义是？',
    options: {
      A: '模型自动回归到初始状态',
      B: '每一步生成基于之前所有已生成的token，逐步生成序列',
      C: '模型使用回归算法',
      D: '模型自动调整学习率'
    },
    answer: 'B',
    explanation: '自回归是指模型在生成第t个token时，以之前生成的所有token（x1到x_{t-1}）为条件，即P(x_t | x_1,...,x_{t-1})，逐token生成。'
  },
  {
    id: 68,
    question: 'BERT的MLM任务中，被选中的15%的token如何处理？',
    options: {
      A: '全部替换为[MASK]',
      B: '80%替换为[MASK]，10%替换为随机token，10%保持不变',
      C: '全部删除',
      D: '全部替换为[PAD]'
    },
    answer: 'B',
    explanation: 'BERT对15%选中token的处理：80%替换为[MASK]，10%替换为随机token（增加鲁棒性），10%保持原token（学习正确表示）。'
  },
  {
    id: 69,
    question: '预训练-微调范式中，预训练阶段的主要目标是什么？',
    options: {
      A: '针对特定任务优化',
      B: '在大规模无标注文本上学习通用的语言表示',
      C: '减少模型参数',
      D: '生成训练数据'
    },
    answer: 'B',
    explanation: '预训练阶段在海量无标注文本上进行自监督学习，让模型掌握通用的语言知识和表示能力，之后通过微调适配具体任务。'
  },
  {
    id: 70,
    question: '以下哪个不是常见的预训练目标？',
    options: {
      A: '掩码语言建模（MLM）',
      B: '因果语言建模（CLM）',
      C: '下一句预测（NSP）',
      D: '图像分类'
    },
    answer: 'D',
    explanation: '图像分类是计算机视觉任务，不是语言模型的预训练目标。MLM、CLM、NSP、Span Corruption等都是常见的NLP预训练目标。'
  },
  // ========== 微调（SFT、LoRA、全参数微调）71-80 ==========
  {
    id: 71,
    question: 'SFT（Supervised Fine-Tuning，监督微调）的目的是什么？',
    options: {
      A: '预训练模型',
      B: '使用带标签的指令-回复数据让模型学会遵循指令进行对话',
      C: '减少模型参数',
      D: '生成训练数据'
    },
    answer: 'B',
    explanation: 'SFT使用人工标注的指令-回复对训练模型，使其从预训练的语言模型转变为能理解和执行用户指令的对话模型。'
  },
  {
    id: 72,
    question: 'LoRA（Low-Rank Adaptation）的核心思想是什么？',
    options: {
      A: '完全重新训练模型',
      B: '冻结预训练权重，在旁路添加低秩矩阵进行训练',
      C: '删除部分模型层',
      D: '量化模型权重'
    },
    answer: 'B',
    explanation: 'LoRA冻结原始预训练权重W，在其旁添加低秩分解矩阵BA（B和A维度远小于W），训练时只更新A和B，大幅减少可训练参数。'
  },
  {
    id: 73,
    question: 'LoRA中的rank（秩，通常用r表示）参数的作用是什么？',
    options: {
      A: '控制模型的层数',
      B: '控制旁路低秩矩阵的秩，r越大表达能力越强但参数越多',
      C: '控制学习率',
      D: '控制批次大小'
    },
    answer: 'B',
    explanation: 'rank（r）是LoRA低秩矩阵的秩，决定了旁路矩阵BA的中间维度。r越大，可训练参数越多，适应能力越强，但显存消耗也越大。'
  },
  {
    id: 74,
    question: '全参数微调和LoRA微调的主要区别是什么？',
    options: {
      A: '全参数微调更新所有参数，LoRA只训练旁路的低秩矩阵',
      B: '全参数微调更快',
      C: 'LoRA效果一定比全参数微调好',
      D: '两者没有区别'
    },
    answer: 'A',
    explanation: '全参数微调更新模型所有参数，效果可能最好但显存消耗大；LoRA冻结原始权重，只训练少量低秩矩阵参数，节省显存且效果接近。'
  },
  {
    id: 75,
    question: 'LoRA中的alpha参数的作用是什么？',
    options: {
      A: '控制学习率',
      B: '对LoRA的输出进行缩放，调节旁路更新对原权重的影响程度',
      C: '控制训练轮数',
      D: '控制批处理大小'
    },
    answer: 'B',
    explanation: 'alpha是LoRA的缩放因子，旁路输出乘以alpha/r。较大的alpha让LoRA更新对模型影响更大，起到调节旁路贡献比例的作用。'
  },
  {
    id: 76,
    question: 'PEFT（Parameter-Efficient Fine-Tuning）方法家族包含以下哪种？',
    options: {
      A: '仅LoRA',
      B: 'LoRA、Prefix Tuning、P-Tuning、Adapter等多种方法',
      C: '仅全参数微调',
      D: '仅量化'
    },
    answer: 'B',
    explanation: 'PEFT是一类只训练少量参数的微调方法，包括LoRA、Prefix Tuning、P-Tuning、Adapter、IA3等，在保持效果的同时大幅减少训练参数。'
  },
  {
    id: 77,
    question: 'QLoRA相比标准LoRA多出了什么技术？',
    options: {
      A: '更多注意力头',
      B: '4-bit量化，将基础模型权重量化为4位以节省显存',
      C: '更大的词表',
      D: '更深的网络'
    },
    answer: 'B',
    explanation: 'QLoRA在LoRA基础上引入4-bit量化，将预训练权重量化为4位整数存储，大幅减少显存占用，使大模型微调在消费级GPU上可行。'
  },
  {
    id: 78,
    question: '指令微调（Instruction Tuning）属于以下哪个阶段？',
    options: {
      A: '预训练阶段',
      B: '监督微调（SFT）阶段',
      C: '强化学习阶段',
      D: '量化阶段'
    },
    answer: 'B',
    explanation: '指令微调是SFT的一种形式，使用指令格式的数据（如问答对、任务指令）训练模型遵循用户指令，是预训练之后、RLHF之前的阶段。'
  },
  {
    id: 79,
    question: 'LoRA微调完成后，推理时通常如何使用？',
    options: {
      A: '必须使用原始模型单独推理',
      B: '可以将LoRA权重合并到原始权重中，也可保持旁路分开推理',
      C: '必须重新训练整个模型',
      D: 'LoRA权重无法用于推理'
    },
    answer: 'B',
    explanation: 'LoRA权重可以合并到基础模型权重中（W_new = W + BA），无需额外计算开销；也可以保持旁路分开加载，灵活切换不同LoRA。'
  },
  {
    id: 80,
    question: 'LoRA通常应用在Transformer的哪些模块上？',
    options: {
      A: '仅嵌入层',
      B: '注意力的Q、K、V、O投影矩阵和FFN的线性层',
      C: '仅输出层',
      D: '仅归一化层'
    },
    answer: 'B',
    explanation: 'LoRA通常应用在注意力机制和FFN的线性投影矩阵上（如Q、K、V、O、gate、up、down投影），这些是参数最密集的层，微调效果最好。'
  },
  // ========== 对齐（RLHF、DPO、PPO）81-85 ==========
  {
    id: 81,
    question: 'RLHF（Reinforcement Learning from Human Feedback）的主要目标是？',
    options: {
      A: '预训练模型',
      B: '通过人类反馈对模型进行对齐，使其输出更符合人类偏好',
      C: '减少模型参数',
      D: '加速推理'
    },
    answer: 'B',
    explanation: 'RLHF利用人类对模型输出的偏好数据训练奖励模型，再用强化学习（如PPO）优化策略模型，使输出更符合人类价值观和偏好。'
  },
  {
    id: 82,
    question: 'DPO（Direct Preference Optimization）相比RLHF的优势是什么？',
    options: {
      A: '模型效果更好',
      B: '无需训练奖励模型和复杂的RL过程，直接用偏好数据优化模型',
      C: '训练数据更少',
      D: '不需要GPU'
    },
    answer: 'B',
    explanation: 'DPO绕过了RLHF中训练奖励模型和使用PPO等RL算法的复杂步骤，直接使用偏好对数据通过简化的损失函数优化模型，更简单稳定。'
  },
  {
    id: 83,
    question: 'RLHF的标准流程包含哪些步骤？',
    options: {
      A: '仅预训练',
      B: 'SFT模型训练 -> 奖励模型训练 -> PPO强化学习优化',
      C: '仅LoRA微调',
      D: '预训练 -> 量化'
    },
    answer: 'B',
    explanation: 'RLHF标准流程：1) 对SFT模型采样多个回复，人类标注偏好；2) 训练奖励模型；3) 用PPO等RL算法以奖励模型为信号优化策略模型。'
  },
  {
    id: 84,
    question: '奖励模型在RLHF中的作用是什么？',
    options: {
      A: '生成训练数据',
      B: '对模型输出的质量进行评分，作为强化学习的奖励信号',
      C: '减少模型参数',
      D: '替代预训练模型'
    },
    answer: 'B',
    explanation: '奖励模型学习人类的偏好判断，对模型生成的回复进行打分。PPO使用这个分数作为奖励信号，引导策略模型生成更高质量的输出。'
  },
  {
    id: 85,
    question: 'PPO（Proximal Policy Optimization）在RLHF中的角色是？',
    options: {
      A: '分词器',
      B: '强化学习优化算法，用于在奖励模型指导下优化语言模型策略',
      C: '量化方法',
      D: '数据预处理工具'
    },
    answer: 'B',
    explanation: 'PPO是一种策略梯度算法，在RLHF中作为优化器，在奖励模型提供的奖励信号下更新语言模型参数，同时用KL散度约束防止偏离SFT模型太远。'
  },
  // ========== 推理（贪心、束搜索、采样、温度、top-k、top-p）86-95 ==========
  {
    id: 86,
    question: '贪心搜索的解码策略特点是什么？',
    options: {
      A: '每步选择概率最高的token，速度快但容易陷入重复',
      B: '每步随机选择token',
      C: '保留多个候选序列',
      D: '使用概率分布采样'
    },
    answer: 'A',
    explanation: '贪心搜索每步选择概率最大的token，计算简单快速，但由于只看当前最优，可能错过全局更优的序列，且容易生成重复文本。'
  },
  {
    id: 87,
    question: 'Beam Search（束搜索）的核心思想是？',
    options: {
      A: '随机选择token',
      B: '每步保留概率最高的N个候选序列（beam width），最终选总分最高的',
      C: '只选概率最高的单个token',
      D: '反向生成序列'
    },
    answer: 'B',
    explanation: 'Beam Search维护beam_width个候选序列，每步为每个候选扩展所有可能的下一个token，保留总分最高的N个，比贪心搜索更全局最优。'
  },
  {
    id: 88,
    question: 'temperature参数对生成结果的影响是什么？',
    options: {
      A: 'temperature越高，输出越确定和保守',
      B: 'temperature越高，输出越随机多样；越低越确定保守',
      C: 'temperature只影响速度',
      D: 'temperature控制生成长度'
    },
    answer: 'B',
    explanation: 'temperature控制softmax输出的尖锐程度。温度低（如0.1）使分布更尖锐，输出更确定；温度高（如1.5）使分布更平坦，输出更多样随机。'
  },
  {
    id: 89,
    question: 'Top-k采样的原理是什么？',
    options: {
      A: '只保留概率最高的k个token，从中按概率采样',
      B: '保留所有token进行采样',
      C: '删除概率最高的k个token',
      D: '保留概率最低的k个token'
    },
    answer: 'A',
    explanation: 'Top-k采样将下一token的概率分布截断为最高的k个token，在它们之间重新归一化后采样，过滤低概率token，平衡多样性和质量。'
  },
  {
    id: 90,
    question: 'Top-p（nucleus sampling，核采样）的原理是什么？',
    options: {
      A: '保留概率最高的p个token',
      B: '保留累积概率达到p的最小token集合，从中采样',
      C: '保留概率最低的token',
      D: '随机删除p比例的token'
    },
    answer: 'B',
    explanation: 'Top-p按概率从高到低排序，累加直到总和达到p（如0.9），保留这些token进行采样。token集合大小动态变化，比Top-k更灵活。'
  },
  {
    id: 91,
    question: '当temperature=0时，采样等价于哪种解码策略？',
    options: {
      A: '随机采样',
      B: '贪心搜索（greedy search）',
      C: 'Beam search',
      D: 'Top-p采样'
    },
    answer: 'B',
    explanation: 'temperature=0使softmax分布退化为one-hot（概率最大的token概率为1），等价于贪心搜索，每步选概率最高的token。'
  },
  {
    id: 92,
    question: 'Beam Search的beam width（束宽）增大会带来什么影响？',
    options: {
      A: '生成质量可能提升，但计算和内存消耗增加',
      B: '生成速度变快',
      C: '生成质量一定下降',
      D: '没有影响'
    },
    answer: 'A',
    explanation: '束宽增大保留了更多候选序列，可能找到更优解，但计算量和内存消耗与束宽成正比增加，推理速度下降。'
  },
  {
    id: 93,
    question: 'repetition_penalty（重复惩罚）参数的作用是什么？',
    options: {
      A: '加速生成',
      B: '降低已出现token的概率，减少生成内容重复',
      C: '增加生成长度',
      D: '提高生成质量'
    },
    answer: 'B',
    explanation: 'repetition_penalty对已经生成过的token的概率进行惩罚（除以惩罚因子），降低其被再次选中的概率，缓解模型重复生成相同内容的问题。'
  },
  {
    id: 94,
    question: 'do_sample=False参数会使generate方法使用什么策略？',
    options: {
      A: '随机采样',
      B: '贪心搜索或Beam Search（非采样策略）',
      C: 'Top-k采样',
      D: 'Top-p采样'
    },
    answer: 'B',
    explanation: 'do_sample=False关闭随机采样，使用确定性策略。num_beams=1时为贪心搜索，num_beams>1时为Beam Search，结果可复现。'
  },
  {
    id: 95,
    question: 'KV Cache在推理时的作用是什么？',
    options: {
      A: '压缩模型权重',
      B: '缓存已计算的K和V，避免自回归生成时重复计算',
      C: '增加生成长度',
      D: '替代注意力机制'
    },
    answer: 'B',
    explanation: 'KV Cache缓存每一步生成的K和V向量，新token只需计算自己的Q与已缓存的K做注意力，避免对前面所有token重新计算，大幅加速自回归生成。'
  },
  // ========== Embedding与相似度（last-token pooling、mean pooling、padding方向）96-100 ==========
  {
    id: 96,
    question: 'last-token pooling（最后token池化）的原理是什么？',
    options: {
      A: '取所有token嵌入的平均值',
      B: '取序列最后一个非padding token的隐藏状态作为整个序列的向量表示',
      C: '取序列第一个token的嵌入',
      D: '取最大值token的嵌入'
    },
    answer: 'B',
    explanation: 'last-token pooling取最后一个有效token（非padding）的隐藏状态作为句子表示。由于因果注意力，最后token能看到前面所有token的信息。'
  },
  {
    id: 97,
    question: 'mean pooling（平均池化）的原理是什么？',
    options: {
      A: '取最后一个token的嵌入',
      B: '对所有有效token的隐藏状态取平均作为序列表示',
      C: '取概率最大的token',
      D: '取序列中间的token'
    },
    answer: 'B',
    explanation: 'mean pooling对所有非padding token的隐藏状态沿序列维度取平均，得到固定维度的向量表示，综合考虑所有token的信息。'
  },
  {
    id: 98,
    question: '在使用mean pooling时，attention_mask的作用是什么？',
    options: {
      A: '加速计算',
      B: '标识padding位置，确保只对真实token取平均而非padding',
      C: '增加嵌入维度',
      D: '替代位置编码'
    },
    answer: 'B',
    explanation: 'attention_mask标记了哪些位置是真实token（1）哪些是padding（0），mean pooling时需要排除padding位置，否则会稀释真实token的信息。'
  },
  {
    id: 99,
    question: '对于因果语言模型（如LLaMA），做文本嵌入时推荐使用哪种pooling？',
    options: {
      A: 'mean pooling',
      B: 'last-token pooling',
      C: 'max pooling',
      D: 'first-token pooling'
    },
    answer: 'B',
    explanation: '因果模型中每个token只能看到左侧的token，最后一个token能看到全部上文信息，因此last-token pooling最适合。双向模型（如BERT）则常用mean pooling或[CLS]token。'
  },
  {
    id: 100,
    question: '在计算文本相似度时，最常用的度量方法是？',
    options: {
      A: '欧氏距离',
      B: '余弦相似度',
      C: '曼哈顿距离',
      D: '汉明距离'
    },
    answer: 'B',
    explanation: '余弦相似度通过计算两个向量夹角的余弦值来衡量相似度，关注方向而非大小，不受向量模长影响，是文本嵌入相似度计算的最常用方法。'
  }
];
