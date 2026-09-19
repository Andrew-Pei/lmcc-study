// LMCC Quiz Data - organized by learning module
// Note: Use Chinese quotes inside strings to avoid JS syntax errors
const QUIZ_DATA = {
  // ===== Python基础 (25题) =====
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
    },
    {
      id: 16,
      question: '以下代码输出什么？\nprint("{}".format("hello"))',
      options: { A: 'hello', B: '{}', C: '报错', D: 'None' },
      answer: 'A',
      explanation: 'str.format()方法用参数替换花括号占位符。"{}".format("hello")将"hello"填入{}中，输出"hello"。'
    },
    {
      id: 17,
      question: '在Python中，以下哪种方式可以将列表反转？',
      options: {
        A: 'list.reverse()',
        B: 'list[::-1]',
        C: 'reversed(list)',
        D: 'All of the above can work'
      },
      answer: 'D',
      explanation: 'list.reverse()原地反转（返回None），list[::-1]创建反转副本，reversed(list)返回迭代器。三者都能实现反转，但行为不同。'
    },
    {
      id: 18,
      question: '以下代码输出什么？\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)',
      options: { A: '[1, 2, 3]', B: '[1, 2, 3, 4]', C: '[4, 1, 2, 3]', D: '报错' },
      answer: 'B',
      explanation: 'a和b指向同一个列表对象。对b的修改也会影响a。如果需要独立副本，应使用b = a.copy()或b = a[:]。'
    },
    {
      id: 19,
      question: 'Python中，以下哪种方式可以正确处理文件编码读取中文？',
      options: {
        A: 'open("file.txt", encoding="utf-8")',
        B: 'open("file.txt", "r")',
        C: 'open("file.txt", "r", "utf-8")',
        D: 'open("file.txt", mode="r", enc="utf-8")'
      },
      answer: 'A',
      explanation: 'encoding参数指定文件编码。在Windows上不指定编码可能默认使用GBK，导致读取UTF-8编码的中文文件出现乱码。'
    },
    {
      id: 20,
      question: '以下代码输出什么？\nprint([x for x in range(10) if x % 2 == 0])',
      options: { A: '[2, 4, 6, 8]', B: '[0, 2, 4, 6, 8]', C: '[1, 3, 5, 7, 9]', D: '[0, 1, 2, 3, 4]' },
      answer: 'B',
      explanation: '列表推导式带条件过滤。range(10)生成0-9，过滤偶数得到0,2,4,6,8。注意0也是偶数。'
    },
    {
      id: 21,
      question: '在Python中，try-except-finally中finally块什么时候执行？',
      options: {
        A: '只在发生异常时执行',
        B: '只在没有异常时执行',
        C: '无论是否发生异常都会执行',
        D: '在return之前不执行'
      },
      answer: 'C',
      explanation: 'finally块无论是否发生异常、是否return都会执行。常用于资源清理，如关闭文件或数据库连接。'
    },
    {
      id: 22,
      question: '以下代码输出什么？\nprint(type([]) == list)',
      options: { A: 'True', B: 'False', C: '报错', D: 'None' },
      answer: 'A',
      explanation: 'type([])返回list类型，与list比较相等。也可以用isinstance([], list)来判断，后者更Pythonic。'
    },
    {
      id: 23,
      question: '在Python中，*args和**kwargs的区别是什么？',
      options: {
        A: '*args接收关键字参数，**kwargs接收位置参数',
        B: '*args接收位置参数（元组），**kwargs接收关键字参数（字典）',
        C: '两者没有区别',
        D: '*args只能在类中使用'
      },
      answer: 'B',
      explanation: '*args收集多余的位置参数为元组，**kwargs收集多余的关键字参数为字典。args和kwargs只是约定名称，*和**才是关键。'
    },
    {
      id: 24,
      question: '以下代码输出什么？\ns = "abc"\nprint(s * 3)',
      options: { A: 'abcabcabc', B: 'abc3', C: '报错', D: 'aaaaaaaaaa' },
      answer: 'A',
      explanation: '字符串乘法将字符串重复指定次数。"abc" * 3 = "abcabcabc"。列表也支持类似操作：[1,2] * 3 = [1,2,1,2,1,2]。'
    },
    {
      id: 25,
      question: '在Python中，以下哪种方式可以安全地获取字典中不存在的键的值？',
      options: {
        A: 'd["key"]',
        B: 'd.get("key", default_value)',
        C: 'd.key',
        D: 'd["key"] or default_value'
      },
      answer: 'B',
      explanation: 'd.get("key", default)在键不存在时返回default而不报错。d["key"]在键不存在时会抛出KeyError。这是处理可选键的安全方式。'
    }
  ],

  // ===== PyTorch基础 (25题) =====
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
        A: '在最后添加一个维度，如(B, L, D) 变为 (B, L, D, 1)',
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
        A: '移除第0个大小为1的维度，如(1, D) 变为 (D,)',
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
    },
    {
      id: 16,
      question: '在PyTorch中，torch.tensor([1, 2, 3])创建的tensor默认是什么数据类型？',
      options: { A: 'torch.float32', B: 'torch.int64', C: 'torch.float16', D: 'torch.int32' },
      answer: 'B',
      explanation: '从整数列表创建的tensor默认是int64。如果需要float类型，可以用torch.tensor([1.0, 2.0, 3.0])或torch.tensor([1, 2, 3], dtype=torch.float32)。'
    },
    {
      id: 17,
      question: '在PyTorch中，tensor.dim()的作用是什么？',
      options: {
        A: '返回tensor的维度数（rank）',
        B: '返回tensor的形状',
        C: '返回tensor的元素个数',
        D: '返回tensor的数据类型'
      },
      answer: 'A',
      explanation: 'tensor.dim()返回tensor的维度数（rank）。如torch.zeros(3, 4, 5).dim()返回3。tensor.shape或tensor.size()返回具体形状。'
    },
    {
      id: 18,
      question: '在PyTorch中，tensor.shape[0]通常表示什么？',
      options: {
        A: '序列长度',
        B: 'batch size',
        C: '隐藏层维度',
        D: '取决于tensor的具体含义'
      },
      answer: 'D',
      explanation: 'tensor.shape[0]是第一个维度的大小，具体含义取决于tensor的约定。在深度学习中通常是batch size，但也可能是序列长度或其他维度。'
    },
    {
      id: 19,
      question: '在PyTorch中，@运算符等价于哪个函数？',
      options: { A: 'torch.mul()', B: 'torch.matmul()', C: 'torch.dot()', D: 'torch.mm()' },
      answer: 'B',
      explanation: '@运算符是torch.matmul()的简写，用于矩阵乘法。a @ b等价于torch.matmul(a, b)。在T2相似度计算中常用：embeddings[0] @ embeddings[1]。'
    },
    {
      id: 20,
      question: 'tensor.item()的作用是什么？',
      options: {
        A: '返回tensor中所有元素',
        B: '将单元素tensor转换为Python标量',
        C: '获取tensor的第0个元素',
        D: '将tensor转换为列表'
      },
      answer: 'B',
      explanation: 'tensor.item()只能用于单元素tensor，将其转换为Python标量。在T2中常用：similarity = (emb1 @ emb2).item()将相似度从tensor转为float。'
    },
    {
      id: 21,
      question: '在PyTorch中，model.eval()的作用是什么？',
      options: {
        A: '评估模型性能',
        B: '将模型设置为评估模式，关闭Dropout和BatchNorm更新',
        C: '删除模型参数',
        D: '导出模型'
      },
      answer: 'B',
      explanation: 'model.eval()将模型设为评估模式，关闭Dropout、冻结BatchNorm统计量。推理前应调用model.eval()，配合torch.no_grad()使用。'
    },
    {
      id: 22,
      question: '在PyTorch中，torch.cat([a, b], dim=0)的作用是什么？',
      options: {
        A: '沿dim=0拼接两个tensor',
        B: '沿dim=0相加两个tensor',
        C: '堆叠两个tensor创建新维度',
        D: '比较两个tensor'
      },
      answer: 'A',
      explanation: 'torch.cat沿指定维度拼接tensor。dim=0沿batch维度拼接，dim=1沿特征维度拼接。注意cat在已有维度上拼接，stack创建新维度。'
    },
    {
      id: 23,
      question: '在PyTorch中，如何获取tensor的形状？',
      options: {
        A: 'tensor.shape',
        B: 'tensor.size()',
        C: 'Both A and B',
        D: 'tensor.dimensions()'
      },
      answer: 'C',
      explanation: 'tensor.shape和tensor.size()都返回tensor的形状。tensor.shape是torch.Size类型（类似元组），可以索引访问如tensor.shape[0]。'
    },
    {
      id: 24,
      question: '在PyTorch中，masked_fill(mask, value)的作用是什么？',
      options: {
        A: '将mask为True的位置填充value',
        B: '将mask为False的位置填充value',
        C: '移除mask为True的位置',
        D: '复制mask指定的位置'
      },
      answer: 'A',
      explanation: 'masked_fill(mask, value)将mask中为True的位置替换为value。在注意力中常用masked_fill(mask==0, float("-inf"))屏蔽padding位置。'
    },
    {
      id: 25,
      question: '在PyTorch中，model.parameters()返回什么？',
      options: {
        A: '模型的配置参数字典',
        B: '模型所有可学习参数的生成器',
        C: '模型的超参数',
        D: '模型的层列表'
      },
      answer: 'B',
      explanation: 'model.parameters()返回模型所有可学习参数的生成器。常用next(model.parameters()).device获取模型设备，或用于优化器初始化。'
    }
  ],

  // ===== Transformer基础 (25题) =====
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
      options: { A: '0', B: '1', C: '负无穷（-inf）', D: 'NaN' },
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
      options: { A: '编码器（Encoder）', B: '解码器（Decoder）', C: '编码器-解码器', D: '卷积神经网络' },
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
    },
    {
      id: 16,
      question: '在Transformer中，位置编码的作用是什么？',
      options: {
        A: '加速训练',
        B: '让模型知道序列中token的顺序信息',
        C: '减少参数量',
        D: '归一化输入'
      },
      answer: 'B',
      explanation: '由于自注意力机制本身是排列不变的（不考虑顺序），需要位置编码注入序列顺序信息。Transformer使用正弦/余弦或可学习的位置编码。'
    },
    {
      id: 17,
      question: '在Transformer中，多头注意力的"多头"指的是什么？',
      options: {
        A: '多个输入序列',
        B: '将QKV投影到多个不同的子空间并行计算注意力',
        C: '多个Transformer层堆叠',
        D: '多个输出头'
      },
      answer: 'B',
      explanation: '多头注意力将QKV投影到h个不同的子空间，每个子空间独立计算注意力，然后拼接。这让模型能同时关注不同位置的不同方面信息。'
    },
    {
      id: 18,
      question: '在Transformers库中，return_tensors="pt"返回什么类型的输入？',
      options: {
        A: 'Python列表',
        B: 'NumPy数组',
        C: 'PyTorch tensor',
        D: 'JSON对象'
      },
      answer: 'C',
      explanation: 'return_tensors="pt"返回PyTorch tensor。"np"返回NumPy数组，不指定返回普通Python列表。考试中需要将输入转为PyTorch tensor再送入模型。'
    },
    {
      id: 19,
      question: '在Transformer的残差连接中，输出的计算方式是？',
      options: {
        A: 'output = layer(x)',
        B: 'output = x + layer(x)',
        C: 'output = x * layer(x)',
        D: 'output = layer(x) - x'
      },
      answer: 'B',
      explanation: '残差连接将输入直接加到子层输出上：output = x + Sublayer(x)。这缓解了深层网络的梯度消失问题，使训练更稳定。'
    },
    {
      id: 20,
      question: 'LayerNorm在Transformer中的作用是什么？',
      options: {
        A: '加速计算',
        B: '对每个样本的特征维度做归一化，稳定训练',
        C: '减少参数量',
        D: '增加非线性'
      },
      answer: 'B',
      explanation: 'LayerNorm对每个样本沿特征维度归一化（均值为0方差为1），不同于BatchNorm沿batch维度。它稳定了深层Transformer的训练。'
    },
    {
      id: 21,
      question: '在Transformers库中，tokenizer.truncation=True的作用是？',
      options: {
        A: '截断输入序列到模型最大长度',
        B: '截断输出序列',
        C: '移除特殊token',
        D: '压缩文本'
      },
      answer: 'A',
      explanation: 'truncation=True将超过模型最大长度的输入序列截断。max_length参数控制最大长度。不设置可能导致输入过长报错。'
    },
    {
      id: 22,
      question: '在Transformer中，前馈网络（FFN）通常包含什么？',
      options: {
        A: '一个线性层',
        B: '两个线性层中间一个激活函数',
        C: '卷积层',
        D: '循环层'
      },
      answer: 'B',
      explanation: 'FFN通常由两个线性变换和一个非线性激活组成：FFN(x) = W2 * activation(W1 * x + b1) + b2。它增加了模型的非线性表达能力。'
    },
    {
      id: 23,
      question: '在自注意力计算中，Q @ K^T的结果形状是？(Q和K形状均为(B, H, L, D))',
      options: {
        A: '(B, H, L, D)',
        B: '(B, H, L, L)',
        C: '(B, H, D, D)',
        D: '(B, H, L, 1)'
      },
      answer: 'B',
      explanation: 'Q @ K^T中Q是(B,H,L,D)，K^T是(B,H,D,L)，矩阵乘法结果为(B,H,L,L)。这表示每个位置对其他所有位置的注意力分数。'
    },
    {
      id: 24,
      question: '在Transformer解码器中，cross-attention的Q和KV分别来自哪里？',
      options: {
        A: 'Q来自解码器，KV来自编码器',
        B: 'Q来自编码器，KV来自解码器',
        C: 'QKV都来自解码器',
        D: 'QKV都来自编码器'
      },
      answer: 'A',
      explanation: 'cross-attention（交叉注意力）中Q来自解码器当前层，K和V来自编码器最后一层输出。这让解码器能"看到"编码器的输出。自注意力中QKV来自同一来源。'
    },
    {
      id: 25,
      question: '在Transformers库中，model.save_pretrained()保存的是什么？',
      options: {
        A: '模型代码',
        B: '模型权重和配置文件',
        C: '训练数据',
        D: '分词器'
      },
      answer: 'B',
      explanation: 'save_pretrained()保存模型权重（pytorch_model.bin或safetensors）和配置文件（config.json）。分词器需要用tokenizer.save_pretrained()单独保存。'
    }
  ],

  // ===== 提示词工程 (25题) =====
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
    },
    {
      id: 13,
      question: '少样本提示（Few-shot Prompting）的核心思想是什么？',
      options: {
        A: '用少量训练数据微调模型',
        B: '在Prompt中给出几个输入-输出示例，引导模型按示例格式输出',
        C: '减少模型参数量',
        D: '只用一个样本测试'
      },
      answer: 'B',
      explanation: 'Few-shot prompting在Prompt中包含几个示例（如"问题→答案"对），让模型从示例中学习输出格式和规律，无需微调。'
    },
    {
      id: 14,
      question: '零样本提示（Zero-shot Prompting）与少样本提示的区别是？',
      options: {
        A: '零样本不给出任何示例',
        B: '零样本使用更小的模型',
        C: '零样本不输入任何文本',
        D: '零样本效果一定更差'
      },
      answer: 'A',
      explanation: 'Zero-shot prompting不给任何示例，直接让模型完成任务。Few-shot给出几个示例引导。对于简单任务零样本可能足够，复杂任务few-shot更可靠。'
    },
    {
      id: 15,
      question: '在Prompt中，"格式约束"为什么重要？',
      options: {
        A: '让输出更美观',
        B: '确保模型输出可以被程序正确解析和评分',
        C: '减少输出长度',
        D: '提高模型推理速度'
      },
      answer: 'B',
      explanation: '格式约束（如"[Answer]: 数值"）确保模型输出能被评测程序用正则匹配正确提取。格式不对会导致答案无法被解析，直接影响评分。'
    },
    {
      id: 16,
      question: '在第一轮中提到的RLHF（人类反馈强化学习），训练流程通常包含几个阶段？',
      options: { A: '1个', B: '2个', C: '3个', D: '4个' },
      answer: 'C',
      explanation: 'RLHF通常包含三个阶段：1) SFT监督微调，2) 训练奖励模型，3) 用奖励模型通过PPO优化策略。这三个阶段让模型逐步对齐人类偏好。'
    },
    {
      id: 17,
      question: 'DPO（Direct Preference Optimization）相比RLHF的优势是什么？',
      options: {
        A: '效果更好',
        B: '不需要训练奖励模型，直接用偏好数据优化',
        C: '训练速度更慢',
        D: '需要更多数据'
      },
      answer: 'B',
      explanation: 'DPO跳过了训练奖励模型的步骤，直接用偏好对数据优化模型。相比RLHF流程更简单，但效果可能在某些任务上略有差距。'
    },
    {
      id: 18,
      question: '在T1中，为什么建议在System Prompt中列出所有符号变体？',
      options: {
        A: '让Prompt更长',
        B: '确保模型能识别所有测试数据中的符号变体',
        C: '增加模型推理时间',
        D: '因为评测程序会检查Prompt内容'
      },
      answer: 'B',
      explanation: '测试数据中包含多种符号变体。如果System Prompt没有列出某种变体，模型可能无法正确识别和转换，导致计算错误。'
    },
    {
      id: 19,
      question: '在第一轮理论题中，LoRA微调的主要优势是什么？',
      options: {
        A: '完全替代全参数微调',
        B: '通过低秩分解大幅减少可训练参数，节省显存',
        C: '提高模型精度',
        D: '不需要训练数据'
      },
      answer: 'B',
      explanation: 'LoRA将权重更新分解为两个低秩矩阵的乘积，大幅减少可训练参数。相比全参数微调，LoRA显著节省显存和训练时间，同时保持接近的效果。'
    },
    {
      id: 20,
      question: '在Prompt设计中，"负面指令"（告诉模型不要做什么）的效果通常如何？',
      options: {
        A: '总是有效',
        B: '不如正面指令（告诉模型应该做什么）可靠',
        C: '完全无效',
        D: '只在英文中有效'
      },
      answer: 'B',
      explanation: '负面指令（如"不要输出小数"）不如正面指令（如"只输出整数"）可靠。模型有时会忽略"不要"的部分。建议优先用正面表述。'
    },
    {
      id: 21,
      question: '在T1考试中，apply_chat_template中messages列表的结构是什么？',
      options: {
        A: '[{"role": "system", "content": "..."}, {"role": "user", "content": "..."}]',
        B: '["system: ...", "user: ..."]',
        C: '{"system": "...", "user": "..."}',
        D: '[("system", "..."), ("user", "...")]'
      },
      answer: 'A',
      explanation: 'messages是一个列表，每个元素是包含role和content键的字典。role通常是system/user/assistant，content是对应的文本内容。'
    },
    {
      id: 22,
      question: '在第一轮中提到的RAG（检索增强生成），其核心流程是？',
      options: {
        A: '先生成再检索',
        B: '先检索相关文档，再将检索结果拼入Prompt让模型生成',
        C: '只检索不生成',
        D: '只生成不检索'
      },
      answer: 'B',
      explanation: 'RAG先用检索器找到与问题相关的文档片段，然后将这些片段作为上下文拼入Prompt，让模型基于检索内容生成答案。这缓解了模型的知识幻觉问题。'
    },
    {
      id: 23,
      question: '在T1中，enable_thinking=True时，模型输出的think标签内容会被评测程序如何处理？',
      options: {
        A: '计入答案内容',
        B: '被自动移除，只提取think标签外的最终答案',
        C: '导致评分扣分',
        D: '不影响评分'
      },
      answer: 'B',
      explanation: '评测程序会自动移除think标签内的推理过程，只提取标签外的最终答案。所以启用thinking模式不会影响评分，但能提高答案准确性。'
    },
    {
      id: 24,
      question: '在Prompt中，为什么建议明确告知模型"⊕就是普通加法+"？',
      options: {
        A: '因为模型不知道⊕的含义',
        B: '因为模型可能将⊕理解为异或运算，需要明确纠正',
        C: '因为⊕是特殊符号需要转义',
        D: '因为评测程序会检查是否包含这句话'
      },
      answer: 'B',
      explanation: '大模型从训练数据中可能学到了⊕表示XOR（异或）。在数学任务中⊕表示加法，必须明确告知模型以免计算错误。'
    },
    {
      id: 25,
      question: '在T1批量推理中，为什么需要正确处理padding？',
      options: {
        A: '加速推理',
        B: '不同长度的输入需要padding到等长才能组成batch，同时需要attention_mask避免padding影响结果',
        C: '减少显存使用',
        D: '提高模型精度'
      },
      answer: 'B',
      explanation: '批量推理要求所有输入等长，需要padding。但padding位置不是有效内容，必须通过attention_mask告诉模型忽略这些位置，否则会影响推理结果。'
    }
  ],

  // ===== 第二轮知识点 (10题) =====
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
