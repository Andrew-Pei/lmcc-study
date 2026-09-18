// LMCC Quiz Data - organized by learning module
// Note: Use Chinese quotes inside strings to avoid JS syntax errors
const QUIZ_DATA = {
  // ===== Python基础 =====
  python: [
    {
      id: 1,
      question: '在Python中，以下哪种方式可以正确读取JSONL格式的文件？',
      options: {
        A: 'import json; data = json.load("file.jsonl")',
        B: 'import json; data = [json.loads(line) for line in open("file.jsonl")]',
        C: 'import json; data = json.loads(open("file.jsonl").read())',
        D: 'import json; data = json.read("file.jsonl")'
      },
      answer: 'B',
      explanation: 'JSONL文件每行是一个独立的JSON对象，需要逐行解析。json.load()只能读取整个文件作为单个JSON，json.loads()解析字符串。正确做法是逐行读取并用json.loads()解析每一行。'
    },
    {
      id: 2,
      question: '以下代码的输出是什么？\nprint(type({}.keys()))',
      options: {
        A: "<class 'list'>",
        B: "<class 'dict_keys'>",
        C: "<class 'tuple'>",
        D: "<class 'set'>"
      },
      answer: 'B',
      explanation: 'dict.keys()返回的是dict_keys类型，不是list。它是一个视图对象，支持迭代但不支持索引访问。需要用list(d.keys())才能转换为列表。'
    },
    {
      id: 3,
      question: '在Python中，with语句的主要作用是什么？',
      options: {
        A: '创建上下文管理器对象',
        B: '确保资源（如文件）在使用后被正确关闭，即使发生异常',
        C: '加速代码执行',
        D: '简化异常处理语法'
      },
      answer: 'B',
      explanation: 'with语句（上下文管理器）确保资源在使用后被正确释放。如with open(...) as f: 无论是否发生异常，文件都会自动关闭。'
    },
    {
      id: 4,
      question: '以下哪种方式可以将字符串中的所有中文逗号替换为英文逗号？',
      options: {
        A: 's.replace(，，, ,)',
        B: 's.replace("，", ",")',
        C: 's.sub("，", ",")',
        D: 's.replace_all("，", ",")'
      },
      answer: 'B',
      explanation: 'str.replace(old, new)方法替换所有匹配的子串。参数需要用引号括起来。s.replace("，", ",")正确地将中文逗号替换为英文逗号。'
    },
    {
      id: 5,
      question: 'Python中列表推导式 [x*2 for x in range(5)] 的结果是？',
      options: {
        A: '[0, 2, 4, 6, 8]',
        B: '[2, 4, 6, 8, 10]',
        C: '[0, 1, 2, 3, 4]',
        D: '[1, 2, 3, 4, 5]'
      },
      answer: 'A',
      explanation: 'range(5)生成0,1,2,3,4，每个乘以2得到0,2,4,6,8。列表推导式是Python中快速创建列表的简洁语法。'
    },
    {
      id: 6,
      question: '以下代码输出什么？\ndef f(a, b=10):\n    return a + b\nprint(f(5))',
      options: { A: '5', B: '10', C: '15', D: '报错' },
      answer: 'C',
      explanation: '函数参数b有默认值10。调用f(5)时a=5, b使用默认值10, 返回5+10=15。默认参数让函数调用更灵活。'
    },
    {
      id: 7,
      question: 'Python中，以下哪个不是合法的字典键？',
      options: {
        A: '字符串"name"',
        B: '整数1',
        C: '元组(1, 2)',
        D: '列表[1, 2]'
      },
      answer: 'D',
      explanation: '字典键必须是不可变类型。字符串、整数、元组都是不可变的，可以作为键。列表是可变的，不能作为字典键，会抛出TypeError。'
    },
    {
      id: 8,
      question: '在Python类型标注中，以下哪个表示"字符串列表"？',
      options: {
        A: 'list[str]',
        B: 'List[str]',
        C: 'Both A and B (Python 3.9+)',
        D: 'str[]'
      },
      answer: 'C',
      explanation: 'Python 3.9+支持用list[str]作为类型标注（内置泛型）。之前需要从typing导入List使用List[str]。两者都合法。'
    },
    {
      id: 9,
      question: '以下代码输出什么？\ns = "Hello World"\nprint(s.split())',
      options: {
        A: '["Hello", "World"]',
        B: '["Hello World"]',
        C: '["H", "e", "l", "l", "o"]',
        D: '报错'
      },
      answer: 'A',
      explanation: 'split()无参数时默认按空白字符分割，并去除多余空格。"Hello World"分割为["Hello", "World"]。'
    },
    {
      id: 10,
      question: 'Python中eval("12 + 35")的返回值是什么类型？',
      options: { A: 'str', B: 'int', C: 'float', D: '报错' },
      answer: 'B',
      explanation: 'eval()执行字符串中的Python表达式。"12 + 35"求值结果为整数47，类型是int。注意：eval有安全风险，不应执行不可信的输入。'
    },
    {
      id: 11,
      question: '以下哪种方式可以正确地打开文件并指定UTF-8编码？',
      options: {
        A: 'open("file.txt", "r", encoding="utf-8")',
        B: 'open("file.txt", "r", charset="utf-8")',
        C: 'open("file.txt", "r", codec="utf-8")',
        D: 'open("file.txt", "r", utf8=True)'
      },
      answer: 'A',
      explanation: 'open()函数使用encoding参数指定编码。处理中文内容时必须指定encoding="utf-8"，否则在Windows上可能使用GBK导致乱码。'
    },
    {
      id: 12,
      question: '以下代码输出什么？\nprint("".join(["a", "b", "c"]))',
      options: { A: '["a", "b", "c"]', B: 'a b c', C: 'abc', D: 'a, b, c' },
      answer: 'C',
      explanation: 'str.join()方法将列表中的字符串用指定分隔符连接。""表示无分隔符，结果为"abc"。如果用",".join则得到"a,b,c"。'
    },
    {
      id: 13,
      question: '在Python中，如何判断一个变量是否为None？',
      options: {
        A: 'if x is None:',
        B: 'if x == None:',
        C: 'if x = None:',
        D: 'if not x:'
      },
      answer: 'A',
      explanation: 'PEP 8规范建议用is None判断，而不是==None。is比较的是对象身份（内存地址），对于None这种单例对象更准确。not x对于空字符串、0等也会返回True。'
    },
    {
      id: 14,
      question: '以下哪个正则表达式可以匹配字符串中的所有数字？',
      options: {
        A: 're.findall(r"\\d+", text)',
        B: 're.findall(r"[0-9]", text)',
        C: 're.match(r"\\d+", text)',
        D: 'Both A and B, but A groups digits'
      },
      answer: 'D',
      explanation: 'r"\\d+"匹配一个或多个连续数字，r"[0-9]"匹配单个数字。re.findall返回所有匹配。A会将连续数字作为一组返回，B会将每个数字单独返回。实际使用中A更常用。'
    },
    {
      id: 15,
      question: 'Python中isinstance(42, int)的返回值是？',
      options: { A: 'True', B: 'False', C: '42', D: '报错' },
      answer: 'A',
      explanation: '42是int类型，isinstance()返回True。isinstance()比type() == int更灵活，因为它考虑了继承关系。'
    }
  ],

  // ===== PyTorch基础 =====
  pytorch: [
    {
      id: 1,
      question: '在PyTorch中，torch.no_grad()的主要作用是什么？',
      options: {
        A: '加速模型训练过程',
        B: '禁用梯度计算，节省内存和加速推理',
        C: '防止模型过拟合',
        D: '将模型移到GPU上'
      },
      answer: 'B',
      explanation: 'torch.no_grad()禁用自动梯度计算引擎，推理时不需要梯度，可以节省内存并加速计算。这是模型推理的标准做法。'
    },
    {
      id: 2,
      question: '在PyTorch中，如何将一个tensor移到模型所在的设备上？',
      options: {
        A: 'tensor.to(model.device)',
        B: 'tensor.cuda()',
        C: 'tensor.send(model)',
        D: 'Both A and B'
      },
      answer: 'D',
      explanation: 'tensor.to(device)和tensor.cuda()都可以将tensor移到GPU。推荐用to(model.device)，因为它不依赖具体设备类型。输入和模型必须在同一设备上。'
    },
    {
      id: 3,
      question: 'torch.matmul(a, b)中，如果a形状是(B, L, D)，b形状是(B, D, L)，输出形状是？',
      options: {
        A: '(B, L, L)',
        B: '(B, D, D)',
        C: '(B, L, D)',
        D: '形状不匹配，报错'
      },
      answer: 'A',
      explanation: 'matmul执行批量矩阵乘法。(B,L,D)@(B,D,L)结果为(B,L,L)。这是注意力计算中Q@K^T的典型操作。'
    },
    {
      id: 4,
      question: 'F.normalize(x, p=2, dim=1)的作用是什么？',
      options: {
        A: '将x归一化到[0,1]范围',
        B: '对x的每个样本沿dim=1做L2归一化，使每个样本向量的L2范数为1',
        C: '对x做Batch Normalization',
        D: '将x转换为概率分布'
      },
      answer: 'B',
      explanation: 'F.normalize(x, p=2, dim=1)对x沿dim=1维度做L2归一化，即每个样本向量除以其L2范数。归一化后向量长度为1，点积等于余弦相似度。'
    },
    {
      id: 5,
      question: 'model.generate()方法的max_new_tokens参数控制什么？',
      options: {
        A: '输入序列的最大长度',
        B: '模型生成的最大token数量',
        C: '模型的隐藏层维度',
        D: 'batch size的大小'
      },
      answer: 'B',
      explanation: 'max_new_tokens限制模型最多生成多少个新token。它不同于max_length（限制总序列长度）。在T1考试中需要设置合理的max_new_tokens确保模型有足够空间输出推理和答案。'
    },
    {
      id: 6,
      question: '在PyTorch中，outputs.last_hidden_state的形状通常是？',
      options: {
        A: '(batch_size, hidden_dim)',
        B: '(batch_size, seq_len, hidden_dim)',
        C: '(seq_len, hidden_dim)',
        D: '(batch_size, seq_len)'
      },
      answer: 'B',
      explanation: 'last_hidden_state是Transformer模型最后一层的隐藏状态，形状为(batch_size, seq_len, hidden_dim)。它包含每个位置的隐藏向量，用于后续的pooling操作。'
    },
    {
      id: 7,
      question: '在model.generate()中，do_sample=False表示使用什么解码策略？',
      options: {
        A: '束搜索（Beam Search）',
        B: '贪心搜索（Greedy Search）',
        C: '随机采样',
        D: 'Top-K采样'
      },
      answer: 'B',
      explanation: 'do_sample=False时使用贪心搜索，每步选择概率最高的token。do_sample=True启用随机采样。贪心搜索输出确定性强，适合需要稳定结果的场景如数学计算。'
    },
    {
      id: 8,
      question: '在PyTorch中，如何获取模型参数所在的设备？',
      options: {
        A: 'model.get_device()',
        B: 'next(model.parameters()).device',
        C: 'model.device',
        D: 'model.location'
      },
      answer: 'B',
      explanation: 'next(model.parameters()).device返回模型第一个参数所在设备。这是获取模型设备的标准方法。在将输入tensor移到模型设备时常用。'
    },
    {
      id: 9,
      question: 'tensor.unsqueeze(-1)的作用是什么？',
      options: {
        A: '在最后添加一个维度，如(B, L, D) → (B, L, D, 1)',
        B: '移除最后一个维度',
        C: '转置最后两个维度',
        D: '将tensor展平'
      },
      answer: 'A',
      explanation: 'unsqueeze(-1)在最后添加一个大小为1的维度。在注意力计算中，常用它将attention_mask从(B, L)扩展为(B, L, 1)以便与hidden state做广播。'
    },
    {
      id: 10,
      question: '在model.generate()中，pad_token_id的作用是什么？',
      options: {
        A: '指定输入的padding token',
        B: '指定生成时遇到pad token时停止',
        C: '告诉模型哪个token是padding，避免将其计入生成',
        D: '自动对所有输入添加padding'
      },
      answer: 'C',
      explanation: 'pad_token_id告诉生成器哪个token是padding token，生成时不会将其作为有效输出。通常设为tokenizer.pad_token_id。'
    },
    {
      id: 11,
      question: 'torch.softmax(logits, dim=-1)中，dim=-1表示什么？',
      options: {
        A: '沿最后一个维度做softmax',
        B: '沿第一个维度做softmax',
        C: '对所有维度做softmax',
        D: '只对最后一行做softmax'
      },
      answer: 'A',
      explanation: 'dim=-1表示沿最后一个维度做softmax归一化。在注意力计算中，logits形状为(B, H, L, L)，dim=-1在最后一个L维度上归一化，使每行和为1。'
    },
    {
      id: 12,
      question: '在PyTorch中，tensor.squeeze(0)的作用是什么？',
      options: {
        A: '移除第0个大小为1的维度，如(1, D) → (D,)',
        B: '删除第0行',
        C: '在第0个位置插入一个维度',
        D: '压缩整个tensor'
      },
      answer: 'A',
      explanation: 'squeeze(0)移除第0个维度（如果其大小为1）。常用于将batch_size=1的输出从(1, D)变为(D,)，方便后续处理。'
    },
    {
      id: 13,
      question: '在批量推理时，为什么要设置attention_mask？',
      options: {
        A: '加速模型计算',
        B: '让模型忽略padding位置，不将其计入注意力计算',
        C: '防止模型生成过长的输出',
        D: '减少GPU内存使用'
      },
      answer: 'B',
      explanation: '批量推理时不同序列长度不同，需要padding到同一长度。attention_mask标记哪些位置是有效token，哪些是padding，模型在计算注意力时忽略padding位置。'
    },
    {
      id: 14,
      question: '在PyTorch中，如何从model.generate()输出中提取新生成的token？',
      options: {
        A: 'outputs[0][-max_new_tokens:]',
        B: 'outputs[0][input_len:]',
        C: 'outputs[:, -max_new_tokens:]',
        D: 'Both A and B are valid approaches'
      },
      answer: 'D',
      explanation: 'generate()输出包含输入和生成的token。可以用outputs[0][input_len:]从输入长度处截取，或用outputs[0][-max_new_tokens:]从末尾截取。两种方法都正确，但前者更可靠。'
    },
    {
      id: 15,
      question: 'torch.arange(batch_size, device=tensor.device)的作用是？',
      options: {
        A: '生成0到batch_size-1的序列，放在tensor所在设备上',
        B: '生成batch_size个随机数',
        C: '创建一个全零tensor',
        D: '获取batch_size的值'
      },
      answer: 'A',
      explanation: 'torch.arange(n)生成0到n-1的整数序列。device参数确保生成的tensor在正确的设备上。在last-token pooling中用于按索引提取每个样本的最后一个有效token。'
    }
  ],

  // ===== Transformer基础 =====
  transformer: [
    {
      id: 1,
      question: 'AutoTokenizer.from_pretrained()的trust_remote_code=True参数有什么作用？',
      options: {
        A: '允许从互联网下载模型',
        B: '信任并执行模型仓库中的自定义代码，用于加载非标准分词器',
        C: '跳过安全检查',
        D: '允许远程调试'
      },
      answer: 'B',
      explanation: 'Qwen等模型可能包含自定义分词器逻辑，trust_remote_code=True允许执行这些自定义代码。不设置可能导致分词行为不一致。'
    },
    {
      id: 2,
      question: 'tokenizer.apply_chat_template()的tokenize=False参数返回什么？',
      options: {
        A: '返回token id列表',
        B: '返回渲染后的文本字符串',
        C: '返回PyTorch tensor',
        D: '不返回任何内容'
      },
      answer: 'B',
      explanation: 'tokenize=False让apply_chat_template返回渲染后的文本字符串而非token id。这在需要先获取文本再自行tokenize时使用，例如需要检查渲染结果或自定义padding。'
    },
    {
      id: 3,
      question: 'add_generation_prompt=True在apply_chat_template中的作用是？',
      options: {
        A: '自动生成回答',
        B: '在对话末尾添加模型回复的起始标记，提示模型开始生成',
        C: '添加系统提示词',
        D: '启用思考模式'
      },
      answer: 'B',
      explanation: 'add_generation_prompt=True在对话末尾添加模型回复的角色标记（如<|im_start|>assistant），让模型知道应该开始生成回复了。这是对话模板的关键参数。'
    },
    {
      id: 4,
      question: '在自注意力机制中，Q、K、V的来源是什么？',
      options: {
        A: '三个不同的随机初始化矩阵',
        B: '同一个输入通过三个不同的权重矩阵投影得到',
        C: 'Q来自编码器，K和V来自解码器',
        D: 'Q是输入本身，K和V是模型参数'
      },
      answer: 'B',
      explanation: '自注意力中Q、K、V都来自同一个输入x，分别通过Wq、Wk、Wv三个可学习的权重矩阵线性投影得到。这是"自"注意力的含义。'
    },
    {
      id: 5,
      question: '注意力公式中的缩放因子1/sqrt(dk)的作用是什么？',
      options: {
        A: '加速计算',
        B: '防止点积值过大导致softmax进入饱和区',
        C: '减少参数量',
        D: '归一化输入'
      },
      answer: 'B',
      explanation: 'Q和K的点积随维度dk增大而增大，softmax在输入过大时梯度趋近0（饱和区）。乘以1/sqrt(dk)将方差控制在1附近，保持梯度健康。'
    },
    {
      id: 6,
      question: 'GQA（分组查询注意力）的特点是什么？',
      options: {
        A: '所有头共享同一组QKV',
        B: '查询头数多于KV头数，KV头被复制以匹配Q头数',
        C: '只有一组查询，多组KV',
        D: '不使用注意力机制'
      },
      answer: 'B',
      explanation: 'GQA中查询头数H > KV头数Kv，通过复制KV头来匹配Q头数。这减少了KV Cache的内存占用，同时保持比MQA更好的质量。'
    },
    {
      id: 7,
      question: '在批量推理中，padding=True的作用是什么？',
      options: {
        A: '在序列右侧或左侧添加pad token使所有序列等长',
        B: '在序列末尾添加特殊token',
        C: '截断过长的序列',
        D: '复制序列'
      },
      answer: 'A',
      explanation: 'padding=True将短序列用pad_token填充到批次内最长序列的长度，使所有序列等长，可以组成batch tensor。必须同时设置attention_mask让模型忽略padding位置。'
    },
    {
      id: 8,
      question: 'AutoModel和AutoModelForCausalLM的区别是什么？',
      options: {
        A: '没有区别',
        B: 'AutoModel返回隐藏状态，AutoModelForCausalLM额外支持generate()方法',
        C: 'AutoModel只能用于推理，AutoModelForCausalLM用于训练',
        D: 'AutoModel更快'
      },
      answer: 'B',
      explanation: 'AutoModel返回基础模型的隐藏状态（用于Embedding等），AutoModelForCausalLM在基础模型上添加了LM Head，支持generate()方法进行文本生成。T1用CausalLM，T2用AutoModel。'
    },
    {
      id: 9,
      question: '在因果掩码（causal mask）中，被mask的位置（不可见位置）通常填充什么值？',
      options: {
        A: '0',
        B: '1',
        C: '负无穷（-inf）',
        D: 'NaN'
      },
      answer: 'C',
      explanation: '被mask的位置填充负无穷，经过softmax后这些位置的权重变为0，确保模型不会"看到"未来的token。用masked_fill(mask==0, float("-inf"))实现。'
    },
    {
      id: 10,
      question: 'tokenizer.decode()的skip_special_tokens=True的作用是？',
      options: {
        A: '跳过所有token不解码',
        B: '解码时移除<|im_start|>等特殊token，只输出自然语言文本',
        C: '跳过错误token',
        D: '不解码特殊字符'
      },
      answer: 'B',
      explanation: 'skip_special_tokens=True在解码时移除模型特有的控制token（如<|im_start|>、<|im_end|>等），只保留自然语言文本。这在获取最终答案文本时很重要。'
    },
    {
      id: 11,
      question: '在第一轮理论题中，GPT系列采用的Transformer架构是？',
      options: {
        A: '编码器（Encoder）',
        B: '解码器（Decoder）',
        C: '编码器-解码器',
        D: '卷积神经网络'
      },
      answer: 'B',
      explanation: 'GPT系列采用纯解码器（Decoder-only）架构，通过自回归方式逐token生成文本。编码器（BERT）用于理解任务，编码器-解码器（T5）用于翻译等。'
    },
    {
      id: 12,
      question: '在掩码语言模型（MLM）预训练中，核心任务是什么？',
      options: {
        A: '逐token预测下一个词',
        B: '遮盖部分token后让模型预测被遮盖的内容',
        C: '对文本进行分类',
        D: '生成完整段落'
      },
      answer: 'B',
      explanation: 'MLM（如BERT）随机遮盖部分token并让模型预测，迫使模型理解双向上下文。GPT用的自回归是预测下一个token，是单向的。'
    },
    {
      id: 13,
      question: '在embedding模型中，last-token pooling的含义是什么？',
      options: {
        A: '取序列的第一个token作为句向量',
        B: '取序列最后一个有效token的隐藏状态作为句向量',
        C: '对所有token的隐藏状态取平均',
        D: '取最大值的token'
      },
      answer: 'B',
      explanation: 'last-token pooling提取序列最后一个有效token的hidden state。因果语言模型的最后一个token包含了整个序列的信息（因为它"看到"了前面所有token），适合作为句向量。'
    },
    {
      id: 14,
      question: '在判断是否使用了左侧padding时，检查什么条件？',
      options: {
        A: 'attention_mask[:, 0].sum() == batch_size',
        B: 'attention_mask[:, -1].sum() == batch_size',
        C: 'input_ids[:, 0] == pad_token_id',
        D: 'seq_len == max_len'
      },
      answer: 'B',
      explanation: '如果所有样本的最后一个位置（attention_mask[:, -1]）都是有效token（值为1），且sum等于batch_size，说明使用了左侧padding，最后一个位置是有效的。'
    },
    {
      id: 15,
      question: 'enable_thinking=True在Qwen3中的作用是什么？',
      options: {
        A: '让模型思考如何回答',
        B: '启用模型的思维链推理，模型先在think标签中推理再输出答案',
        C: '加速模型推理',
        D: '启用模型自我修正'
      },
      answer: 'B',
      explanation: 'enable_thinking=True让Qwen3模型在think标签内进行推理，然后输出最终答案。评测程序会自动移除思考内容只提取答案。这能显著提高复杂计算任务的准确性。'
    }
  ],

  // ===== 提示词工程 =====
  prompt: [
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
      explanation: '好的Prompt核心是明确的角色设定（"你是..."）、清晰的任务规则（符号映射、计算步骤）、严格的输出格式约束（[Answer]: 数值）。不是越长越好。'
    },
    {
      id: 2,
      question: '在T1中，System Prompt需要让模型识别哪些数学符号变体？',
      options: {
        A: '只有标准的+和-',
        B: '各种变体如全角＋、emoji➕、特殊⊕、中文"加/减"等',
        C: '只有中文"加"和"减"',
        D: '只有emoji符号'
      },
      answer: 'B',
      explanation: '测试数据中包含多种符号变体：标准+、全角＋、emoji➕、特殊⊕、中文"加/减"等。System Prompt必须明确列出所有变体的映射规则。'
    },
    {
      id: 3,
      question: '在T1的System Prompt中，为什么需要明确说明"⊕不是异或运算"？',
      options: {
        A: '因为模型可能将⊕误解为XOR（异或）运算',
        B: '因为⊕在数学中没有定义',
        C: '因为⊕是Python关键字',
        D: '因为⊕是无效字符'
      },
      answer: 'A',
      explanation: '⊕在计算机科学中通常表示XOR（异或），但在小学数学中表示普通加法。大语言模型可能从训练数据中学到了XOR的含义，需要在Prompt中明确纠正。'
    },
    {
      id: 4,
      question: '思维链（Chain-of-Thought, CoT）的主要优势是什么？',
      options: {
        A: '确保答案完全正确',
        B: '通过分步推理提高可解释性和可靠性',
        C: '减少计算时间和资源',
        D: '简化Prompt设计'
      },
      answer: 'B',
      explanation: 'CoT让模型将复杂问题分解为多步骤推理，提高可解释性和可靠性。它不能保证零错误，反而会增加计算量。在T1中要求模型"分步计算"就是CoT的应用。'
    },
    {
      id: 5,
      question: '在T1中，System Prompt要求的输出格式是什么？',
      options: {
        A: '直接输出数字',
        B: '[Answer]: 数值',
        C: '答案是：数值',
        D: 'Answer = 数值'
      },
      answer: 'B',
      explanation: '评测程序使用固定格式"[Answer]: "来提取答案。Prompt必须严格要求这个格式，否则评测程序无法正确解析模型输出。'
    },
    {
      id: 6,
      question: '提示词工程中"角色设定"的核心作用是什么？',
      options: {
        A: '限制模型的知识量',
        B: '定义模型的核心身份、行为准则和对话风格',
        C: '增加输出长度',
        D: '与用户提问内容作用相同'
      },
      answer: 'B',
      explanation: '角色设定定义模型的核心身份（如"你是精确的数学计算助手"），引导模型以合适的方式处理输入。它不是限制知识量，也与用户的临时提问不同。'
    },
    {
      id: 7,
      question: '在指令微调（SFT）中，训练数据的典型形式是什么？',
      options: {
        A: '大规模无标注文本',
        B: '（指令/问题, 期望输出）配对',
        C: '代码仓库',
        D: '音频和图像数据'
      },
      answer: 'B',
      explanation: 'SFT使用（指令, 期望输出）配对数据，让模型学会遵循人类指令。这与预训练（用无标注文本学通用知识）不同。'
    },
    {
      id: 8,
      question: '在大模型对齐中，人类对齐（如RLHF）的核心目标是什么？',
      options: {
        A: '在数学计算上达到零误差',
        B: '使模型行为符合人类价值观，安全且有帮助',
        C: '在所有任务上超越人类',
        D: '让模型内部计算完全透明'
      },
      answer: 'B',
      explanation: '人类对齐通过RLHF/DPO等方法让模型输出符合人类价值观、安全且有帮助。不追求零误差或全面超越人类。'
    },
    {
      id: 9,
      question: '在第一轮理论题中，关于贪心搜索和束搜索，哪个说法是正确的？',
      options: {
        A: '贪心搜索总能生成最完美的句子',
        B: '束搜索维护多条路径，更有可能找到整体更优的输出',
        C: '束搜索速度比贪心搜索更快',
        D: '两者没有区别'
      },
      answer: 'B',
      explanation: '贪心搜索每步选概率最高的token，可能错过全局最优。束搜索同时维护多个候选序列（beam），以更大计算量换取更好的整体质量。'
    },
    {
      id: 10,
      question: '在第一轮中提到的"困惑度"指标，以下描述正确的是？',
      options: {
        A: '困惑度越低，模型性能越差',
        B: '困惑度反映模型预测不确定性，值越低性能越好',
        C: '困惑度是准确率的直接转换',
        D: '困惑度只与模型架构有关'
      },
      answer: 'B',
      explanation: '困惑度（Perplexity）衡量模型对文本的预测不确定性。值越低说明模型越"不困惑"，预测越准确。基于交叉熵损失计算。'
    },
    {
      id: 11,
      question: '在T1中，为什么不应该在build_system_prompt()中做答案后处理？',
      options: {
        A: '因为评测程序会统一处理输出格式',
        B: '因为后处理会增加计算时间',
        C: '因为后处理会导致错误',
        D: '因为函数只能返回字符串'
      },
      answer: 'A',
      explanation: '评测程序evaluate.py会统一从模型输出中提取答案（用正则匹配[Answer]:）。如果学生在build_system_prompt中做后处理，可能与评测程序的逻辑冲突。函数应该只返回Prompt文本。'
    },
    {
      id: 12,
      question: '在第一轮中，关于提示词对模型输出的影响，以下说法最准确的是？',
      options: {
        A: '提示词长度与输出质量成正比',
        B: '设定明确的角色、受众和约束，能有效引导模型的思维链',
        C: '模型有真正的创造力，提示词影响不大',
        D: '任何提示词都能得到相同质量的结果'
      },
      answer: 'B',
      explanation: '好的提示词通过明确角色、受众、约束条件引导模型聚焦到高质量输出方向。不是越长越好，而是越精确越好。'
    }
  ],

  // ===== 第二轮知识点 =====
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
