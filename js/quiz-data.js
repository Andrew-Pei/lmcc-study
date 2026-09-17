// LMCC Quiz Data - All exam questions with explanations
const QUIZ_DATA = {
  // ===== 第一轮 - 青少年组单选题 =====
  youth_mcq: [
    {
      id: 1,
      question: "在掩码语言模型预训练中，核心任务"掩码预测"的主要目的是什么？",
      options: {
        A: "学习语言的深层双向上下文表征",
        B: "评估模型最终的分类准确率",
        C: "专门优化模型的文本生成流畅度",
        D: "减少模型训练所需的计算资源"
      },
      answer: "A",
      explanation: "掩码预测（MLM）通过遮盖部分token并让模型预测，迫使模型理解上下文的深层双向表征。这是BERT等编码器模型的核心预训练目标。"
    },
    {
      id: 2,
      question: "小华的提示词比小明的更好，从提示词工程的角度分析原因？",
      options: {
        A: "大语言模型的知识库恰好更新了相关数据",
        B: "提示词越长效果越好，文字量与质量成正比",
        C: "提示词设定了明确的角色、受众和约束，有效引导了模型的思维链",
        D: "大语言模型有真正的创造力和情感理解能力"
      },
      answer: "C",
      explanation: "小华的提示词设定了角色（科幻小说家）、受众（中学生）、具体约束（500字、主角、风格、结局），有效引导模型聚焦到高质量输出方向。提示词工程的核心是精确的约束和角色设定，而非简单的长度。"
    },
    {
      id: 3,
      question: "Transformer架构中，使大语言模型能够有效处理长距离依赖关系的关键组件是：",
      options: {
        A: "前馈神经网络",
        B: "层归一化",
        C: "自注意力机制",
        D: "残差连接"
      },
      answer: "C",
      explanation: "自注意力机制允许序列中任意两个位置直接交互，计算复杂度为O(1)的路径长度，使得模型能直接捕捉长距离依赖关系，无需像RNN那样通过递归传播。"
    },
    {
      id: 4,
      question: "指令微调的主要目的是什么？",
      options: {
        A: "让模型从零开始学习海量无标注数据中的通用知识",
        B: "增强模型理解和遵循人类指令或意图的能力，并改善其输出风格",
        C: "大幅降低模型的基础参数量，以提高推理速度",
        D: "专门用于修复模型在预训练阶段产生的事实性错误"
      },
      answer: "B",
      explanation: "指令微调（SFT）使用（指令, 期望输出）的配对数据，让模型学会理解和遵循人类指令，改善输出格式和风格。A描述的是预训练，C和D都不正确。"
    },
    {
      id: 5,
      question: "大语言模型中存在的社会偏见，其主要根源最可能是：",
      options: {
        A: "模型训练时使用的GPU硬件存在设计缺陷",
        B: "模型Transformer架构中的注意力机制算法存在固有偏差",
        C: "模型从预训练数据中学习了现实世界中存在的社会偏见",
        D: "模型在指令微调阶段，工程师有意注入了有偏见的指令"
      },
      answer: "C",
      explanation: "模型从海量互联网文本中学习，这些文本本身反映了现实社会中存在的偏见。模型不是硬件缺陷或算法本身导致的，而是数据驱动的学习结果。"
    },
    {
      id: 6,
      question: "目前主流的生成式大语言模型（如GPT系列）的核心架构通常基于：",
      options: {
        A: "编码器模型",
        B: "编码器-解码器模型",
        C: "解码器模型",
        D: "卷积神经网络模型"
      },
      answer: "C",
      explanation: "GPT系列等主流生成式LLM采用纯解码器（Decoder-only）架构，通过自回归方式逐token生成文本。编码器模型（如BERT）主要用于理解任务，编码器-解码器模型（如T5）用于翻译等seq2seq任务。"
    },
    {
      id: 7,
      question: "用于指令微调的数据通常具有什么典型特征？",
      options: {
        A: "大规模、无标注的原始网页文本",
        B: "由（指令/问题, 期望输出）配对组成的监督数据集",
        C: "纯粹的代码仓库和编程语言片段",
        D: "未经处理的原始音频和图像数据"
      },
      answer: "B",
      explanation: "指令微调数据是监督数据集，每条数据包含一个指令/问题和对应的高质量期望输出，模型通过学习这种映射来提升遵循指令的能力。"
    },
    {
      id: 8,
      question: "关于"贪心搜索"和"束搜索"这两种解码策略，以下哪种说法是最准确的？",
      options: {
        A: "贪心搜索因为每次都选最好的，所以总能生成最完美的句子",
        B: "束搜索需要同时考虑多条路径，计算更复杂，但更有可能找到整体上更通顺、更合理的句子",
        C: "束搜索的速度通常比贪心搜索更快，因为它是并行的",
        D: "这两种策略没有本质区别，无论用哪一种，AI生成的句子质量都完全一样"
      },
      answer: "B",
      explanation: "贪心搜索每步只选概率最高的token，可能错过全局最优解。束搜索同时维护多个候选序列（beam），以更广的搜索空间换取更好的整体质量，但计算量更大。"
    },
    {
      id: 9,
      question: "大模型"人类对齐"的核心目标是使得模型的行为：",
      options: {
        A: "在所有的数学计算上达到零误差",
        B: "无限接近地在所有任务上超越人类专家水平",
        C: "符合人类的价值观、意图，并做到安全、有帮助",
        D: "其内部神经网络的计算过程对人类完全透明可解释"
      },
      answer: "C",
      explanation: "人类对齐（如RLHF）的目标是让模型输出符合人类价值观、有用且安全。不是追求数学零误差或全面超越人类，也不要求完全可解释。"
    },
    {
      id: 10,
      question: "大语言模型生成长思考过程来解题，这种推理模式的主要优势是什么？",
      options: {
        A: "能够确保最终答案的正确性，避免计算错误",
        B: "通过展示详尽的思维过程，提高了解题逻辑的可解释性和可靠性",
        C: "显著减少了模型处理问题所需的总时间和计算资源",
        D: "主要目的是为了生成更多的文本内容，使回答看起来更丰富"
      },
      answer: "B",
      explanation: "思维链（CoT）推理通过将复杂问题分解为多个子步骤并逐步推导，提高了可解释性和可靠性。它不能保证零错误，反而增加计算量。"
    },
    {
      id: 11,
      question: "关于AI智能体的角色配置文件设置，下列哪个说法是最准确的？",
      options: {
        A: "角色配置文件的主要作用是限制智能体的知识量",
        B: "角色配置文件设置一旦完成就无法改变",
        C: "角色配置文件是定义智能体核心身份、行为准则和对话风格的关键，通常通过初始系统指令实现",
        D: "角色配置文件的功能与用户每次对话的提问内容作用相同"
      },
      answer: "C",
      explanation: "角色配置文件（Profile）定义智能体的核心身份、行为准则和对话风格，通常通过system prompt实现。它不是限制知识量的，可以修改，也不同于用户的临时提问。"
    },
    {
      id: 12,
      question: "关于Pass@K的计算和解释，哪一项是正确的？（n=100, k=5, 60个被解决）",
      options: {
        A: "K=5, Pass@5=60%。表示随机抽取一个生成方案，其通过测试的概率是60%",
        B: "K=5, Pass@5=60%。表示通过生成5个方案，智能体成功解决其中60%问题的能力",
        C: "K=100, Pass@100=60%。表示智能体解决了测试集中60%的问题",
        D: "K=5, 但正确计算应为 Pass@5 = 60/(100*5)*100% = 12%"
      },
      answer: "B",
      explanation: "Pass@K表示对于每个问题生成K个方案，只要有一个通过就算解决。Pass@5=60/100=60%，表示智能体通过生成5个方案能解决60%的问题。不是单个方案通过率（A错），也不是总方案通过率（D错）。"
    },
    {
      id: 13,
      question: "下列哪一项通常不属于对大语言模型进行系统评测的核心内容？",
      options: {
        A: "模型训练所用GPU集群的实时功耗与散热效率",
        B: "模型在问答、摘要、代码生成等任务上的准确率与流畅度",
        C: "模型输出是否存在社会偏见、歧视性内容等安全性问题",
        D: "模型在数学推理、常识推理等复杂任务上的泛化能力"
      },
      answer: "A",
      explanation: "GPU功耗与散热效率是硬件运维指标，不属于模型评测的核心内容。模型评测关注：准确率/流畅度（B）、安全性/偏见（C）、泛化能力（D）。"
    },
    {
      id: 14,
      question: "在Transformer的自注意力机制中，关于Query、Key和Value的来源，以下哪一项描述是最准确的？",
      options: {
        A: "Q、K、V是由三个完全不同的、随机初始化的参数矩阵生成的，与输入序列无关",
        B: "Key和Value是输入序列的嵌入向量本身，而Query是目标序列的嵌入向量本身",
        C: "Query来自编码器的最终隐藏状态，而Key和Value来自解码器的输入序列",
        D: "Q、K、V是由同一个输入向量通过三个不同的线性变换层（权重矩阵）投影得到的"
      },
      answer: "D",
      explanation: "自注意力中，Q、K、V都来自同一个输入x，分别通过Wq、Wk、Wv三个可学习的权重矩阵线性投影得到。这是自注意力（Self-Attention）的"自"的含义。"
    },
    {
      id: 15,
      question: "下列哪一项不属于测试时间拓展（Test-Time Scaling, TTS）技术？",
      options: {
        A: "对测试样本进行多种变换并将预测结果集成",
        B: "推理时随机丢弃部分神经元，多次前向传播取平均",
        C: "为每个测试样本定义辅助任务，利用该样本对模型进行一步梯度下降微调",
        D: "在大型源数据集上预训练模型，然后在目标数据集上对所有权重进行微调"
      },
      answer: "D",
      explanation: "D描述的是常规的预训练+微调流程，不是测试时间拓展。TTS是在推理阶段（不修改模型参数，或仅针对单样本微调）提升性能的技术，A、B、C都属于此类。"
    },
    {
      id: 16,
      question: "为了保障"公平安全"，避免模型输出产生歧视性内容，最关键的缓解方法是在哪个阶段介入？",
      options: {
        A: "仅在模型推理部署后，通过实时过滤敏感词来屏蔽有害输出",
        B: "主要依靠扩大模型规模，期望其自动学习并消除偏见",
        C: "在模型预训练和微调阶段，系统性地清洗数据和引入公平性约束",
        D: "完全依赖第三方评测机构在发布前进行一次性的偏见评估"
      },
      answer: "C",
      explanation: "偏见治理需要从数据源头（预训练和微调阶段）系统性清洗数据、引入公平性约束。仅靠推理后过滤（A）或扩大规模（B）是不够的，事前评估（D）也无法解决问题。"
    },
    {
      id: 17,
      question: "当前意义上的"大语言模型"最显著的特征不包括以下哪一项？",
      options: {
        A: "模型参数量巨大，但仅在特定领域的小规模数据上训练",
        B: "展现出强大的涌现能力，如推理、编程和创造性写作",
        C: "基于"下一个词预测"等自监督目标在海量互联网文本上训练",
        D: "具有强大的上下文学习能力，无需梯度更新即可根据提示完成新任务"
      },
      answer: "A",
      explanation: "LLM的特征是在海量互联网文本上训练（非特定领域小规模数据），涌现能力、自监督训练、上下文学习都是LLM的典型特征。A中"仅在特定领域的小规模数据上训练"与LLM的实际训练方式不符。"
    },
    {
      id: 18,
      question: "基于强化学习的推理能力优化方法面临的主要挑战是什么？",
      options: {
        A: "模型会因此完全丧失其原有的语言生成能力",
        B: "推理路径的搜索空间巨大，导致训练不稳定和效率低下",
        C: "强化学习会使模型的词汇量急剧减少",
        D: "该方法只能应用于数学推理，无法泛化到其他领域"
      },
      answer: "B",
      explanation: "RL用于推理优化的主要挑战是推理路径的搜索空间极其巨大，导致训练不稳定、效率低下。模型不会丧失语言能力（A），也不限于数学（D）。"
    },
    {
      id: 19,
      question: "关于语言模型的困惑度，以下描述正确的是：",
      options: {
        A: "困惑度越低，说明模型对测试数据的预测越不确定，性能越差",
        B: "困惑度是模型在训练集上的准确率直接转换而来的指标",
        C: "困惑度反映模型对一组文本的平均预测不确定性，值越低表示模型性能越好",
        D: "困惑度与模型的训练步数无关，只与模型架构有关"
      },
      answer: "C",
      explanation: "困惑度（Perplexity）衡量模型对文本的预测不确定性，值越低说明模型越"不困惑"，预测越准确，性能越好。它基于交叉熵损失计算，不是准确率的直接转换。"
    },
    {
      id: 20,
      question: "关于监督学习和无监督学习的区别，以下说法正确的是：",
      options: {
        A: "监督学习不需要训练数据，无监督学习需要大量标注数据",
        B: "监督学习使用标注数据学习，无监督学习从无标签数据中发现模式",
        C: "无监督学习只能处理数值型数据，监督学习可以处理任何类型数据",
        D: "无监督学习的模型性能总是优于监督学习"
      },
      answer: "B",
      explanation: "监督学习需要标注数据（输入-输出对），无监督学习使用无标签数据发现内在模式。监督学习也需要训练数据（A错），两者都能处理多种数据类型（C错），性能取决于具体任务（D错）。"
    }
  ],

  // ===== 第一轮 - 青少年组程序题 =====
  youth_prog: [
    {
      id: 21,
      question: "在RAG系统的_text_to_vector方法中，第一步将text_batch转换为模型可理解的格式，正确代码是？",
      code: "enc = ____[21]____\nenc = {k: v.to(self.embedder.device) for k, v in enc.items()}",
      options: {
        A: 'self.embedder(text_batch, return_tensors="pt", truncation=True, max_length=512)',
        B: 'self.tokenizer(text_batch, return_tensors="pt", truncation=True, max_length=512)',
        C: 'self.tokenizer.encode(text_batch, return_tensors="pt", truncation=True, max_length=512)',
        D: 'self.embedder(text_batchreturn_tensors="pt", truncation=True, max_length=512)'
      },
      answer: "B",
      explanation: "文本需要通过tokenizer（不是embedder）进行分词和编码。tokenizer()方法直接返回字典（含input_ids和attention_mask），而encode()返回的是单个tensor列表，不符合后续字典解包的需求。"
    },
    {
      id: 22,
      question: "在_text_to_vector中进行前向计算获取隐藏向量，正确代码是？",
      code: "with torch.no_grad():\n    outputs = ____[22]____",
      options: {
        A: "self.embedder(**enc)",
        B: "self.embedder.forward(enc['input_ids'])",
        C: "self.embedder(enc['input_ids'])",
        D: "self.embedder.forward(enc)"
      },
      answer: "A",
      explanation: "PyTorch模型的标准调用方式是model(**inputs)，它会自动调用forward()方法。**enc解包字典为关键字参数，传递input_ids和attention_mask。直接调用forward()或只传input_ids都可能丢失attention_mask信息。"
    },
    {
      id: 23,
      question: "在_text_to_vector中池化得到句向量，正确代码是？（使用attention mask）",
      code: "last_hidden = outputs.last_hidden_state\nattn_mask = enc['attention_mask']\nsent_vecs = ____[23]____",
      options: {
        A: "last_hidden.mean(1)",
        B: "(last_hidden * attn_mask.unsqueeze(-1)).sum(1) / attn_mask.sum(1, keepdim=True)",
        C: "last_hidden[:, 0, :]",
        D: "(last_hidden * attn_mask).sum(1) / attn_mask.sum(1)"
      },
      answer: "B",
      explanation: "正确做法是对padding位置进行mask后再求平均。attn_mask.unsqueeze(-1)将mask扩展到与hidden_dim维度对齐，相乘后sum再除以有效长度。A没有考虑mask，C取[CLS]位置（BERT风格），D的mask维度不对齐。"
    },
    {
      id: 24,
      question: "在rag_answer函数中进行检索得到对应文档，正确代码是？",
      code: "query_vec_tensor = retriever._text_to_vector([query])\nquery_vec = query_vec_tensor.squeeze(0).cpu()\ndocs = ____[24]____",
      options: {
        A: "retriever.index.search(query_vec, topk)",
        B: "retriever.search(query_vec, topk=topk)",
        C: "retriever.build_index(query_vec)",
        D: "retriever.generate(query_vec, topk=topk)"
      },
      answer: "B",
      explanation: "Retriever类定义了search(query_vec, topk)方法用于检索。build_index是构建索引的方法，generate方法不存在，index属性也不是直接search的接口。"
    },
    {
      id: 25,
      question: "在rag_answer函数中对模型输出进行处理，提取新生成的token，正确代码是？",
      code: "with torch.no_grad():\n    output_ids = generator.generate(...)\nnew_tokens = ____[25]____",
      options: {
        A: "output_ids[0][-max_new_tokens:]",
        B: "output_ids[0][inputs['input_ids'].shape[1]:]",
        C: "output_ids[:, -max_new_tokens:]",
        D: "output_ids[:, inputs['input_ids'].shape[1]:]"
      },
      answer: "B",
      explanation: "output_ids包含输入和生成的token，需要从输入长度之后截取。inputs['input_ids'].shape[1]是输入序列长度，output_ids[0]取第一个batch，从这个位置切取到末尾即为新生成的token。"
    },
    {
      id: 26,
      question: "加载Qwen2.5模型的分词器，正确方式是？",
      code: 'tokenizer = ____[26]____',
      options: {
        A: 'AutoTokenizer.from_pretrained(model_name, return_tensors="pt")',
        B: "AutoTokenizer.load(model_name)",
        C: "AutoTokenizer(model_name)",
        D: "AutoTokenizer.from_pretrained(model_name, trust_remote_code=True)"
      },
      answer: "D",
      explanation: "Qwen系列可能包含自定义分词器逻辑，需要trust_remote_code=True来加载与模型端一致的处理逻辑。from_pretrained是正确的类方法，return_tensors不是from_pretrained的参数。"
    },
    {
      id: 27,
      question: "单卡16GB显存下，LoRA配置最合理的是？",
      options: {
        A: "r=64, lora_alpha=32",
        B: "r=8, lora_alpha=64",
        C: "r=8, lora_alpha=16",
        D: "r=32, lora_alpha=8"
      },
      answer: "C",
      explanation: "在16GB显存限制下，r=8是一个相对节省显存的低秩配置，lora_alpha=16（通常lora_alpha=2*r）也是常见的配对值。r=64过大，r=8/lora_alpha=64的比例不常见。"
    },
    {
      id: 28,
      question: "配置LoRA权重的注入位置，以下代码更合理的是？",
      options: {
        A: "['mlp', 'norm']",
        B: "'all_linear_layers'",
        C: "['k_proj', 'o_proj']",
        D: "['q_proj', 'v_proj']"
      },
      answer: "D",
      explanation: "['q_proj', 'v_proj']是LoRA最标准的注入位置，覆盖注意力机制中的Query和Value投影层。题目要求"关键的两个投影层"，q_proj和v_proj是最佳选择。"
    },
    {
      id: 29,
      question: "显存限制下，以下配置最稳妥的是？（全局batch size=8）",
      options: {
        A: "per_device_train_batch_size=2, gradient_accumulation_steps=4",
        B: "global_train_batch_size=8, gradient_accumulation_steps=4",
        C: "global_train_batch_size=8, per_device_train_batch_size=1",
        D: "per_device_train_batch_size=1, gradient_accumulation_steps=8"
      },
      answer: "D",
      explanation: "per_device_train_batch_size=1最节省显存，配合gradient_accumulation_steps=8（1×8=8）达到全局batch size=8的要求。TrainingArguments中没有global_train_batch_size参数（B、C错误）。"
    },
    {
      id: 30,
      question: "为了配置训练的半精度数据类型，以下代码更合理的是？",
      options: {
        A: "fp32=True,",
        B: "fp16=True,",
        C: 'training_type="fp32",',
        D: 'training_type="bf16",'
      },
      answer: "B",
      explanation: "TrainingArguments使用fp16=True启用半精度训练以降低显存占用。fp32=True是全精度，training_type不是有效的参数名。题目明确要求"启用半精度训练"。"
    }
  ],

  // ===== 第一轮 - 成人组单选题 =====
  adult_mcq: [
    {
      id: 1,
      question: "目前主流的生成式大语言模型（如GPT系列）的核心架构通常基于：",
      options: {
        A: "编码器模型",
        B: "编码器-解码器模型",
        C: "解码器模型",
        D: "卷积神经网络模型"
      },
      answer: "C",
      explanation: "GPT系列采用纯解码器（Decoder-only）架构，通过自回归方式逐token生成文本。"
    },
    {
      id: 2,
      question: "用于指令微调的数据通常具有什么典型特征？",
      options: {
        A: "大规模、无标注的原始网页文本",
        B: "由（指令/问题, 期望输出）配对组成的监督数据集",
        C: "纯粹的代码仓库和编程语言片段",
        D: "未经处理的原始音频和图像数据"
      },
      answer: "B",
      explanation: "指令微调数据是监督数据集，每条包含一个指令/问题和对应的高质量期望输出。"
    },
    {
      id: 3,
      question: "关于"贪心搜索"和"束搜索"这两种解码策略，以下哪种说法是最准确的？",
      options: {
        A: "贪心搜索因为每次都选最好的，所以总能生成最完美的句子",
        B: "束搜索需要同时考虑多条路径，计算更复杂，但更有可能找到整体上更通顺、更合理的句子",
        C: "束搜索的速度通常比贪心搜索更快",
        D: "这两种策略没有本质区别"
      },
      answer: "B",
      explanation: "束搜索维护多个候选序列（beam），以更大计算量换取更好的整体质量。贪心搜索可能错过全局最优解。"
    },
    {
      id: 4,
      question: "大模型"人类对齐"的核心目标是使得模型的行为：",
      options: {
        A: "在所有的数学计算上达到零误差",
        B: "无限接近地在所有任务上超越人类专家水平",
        C: "符合人类的价值观、意图，并做到安全、有帮助",
        D: "其内部神经网络的计算过程对人类完全透明可解释"
      },
      answer: "C",
      explanation: "人类对齐（如RLHF）让模型输出符合人类价值观、有用且安全。"
    },
    {
      id: 5,
      question: "大语言模型生成长思考过程来解题，这种推理模式的主要优势是什么？",
      options: {
        A: "能够确保最终答案的正确性",
        B: "通过展示详尽的思维过程，提高了解题逻辑的可解释性和可靠性",
        C: "显著减少了模型处理问题所需的总时间和计算资源",
        D: "主要目的是为了生成更多的文本内容"
      },
      answer: "B",
      explanation: "思维链（CoT）推理通过分步推导提高可解释性和可靠性，但不能保证零错误，反而增加计算量。"
    },
    {
      id: 6,
      question: "关于AI智能体的角色配置文件设置，下列哪个说法是最准确的？",
      options: {
        A: "角色配置文件的主要作用是限制智能体的知识量",
        B: "角色配置文件设置一旦完成就无法改变",
        C: "角色配置文件是定义智能体核心身份、行为准则和对话风格的关键，通常通过初始系统指令实现",
        D: "角色配置文件的功能与用户每次对话的提问内容作用相同"
      },
      answer: "C",
      explanation: "角色配置文件定义智能体的核心身份、行为准则和对话风格，通常通过system prompt实现。"
    },
    {
      id: 7,
      question: "关于Pass@K的计算和解释，哪一项是正确的？（n=100, k=5, 60个被解决）",
      options: {
        A: "K=5, Pass@5=60%。表示随机抽取一个生成方案，其通过测试的概率是60%",
        B: "K=5, Pass@5=60%。表示通过生成5个方案，智能体成功解决其中60%问题的能力",
        C: "K=100, Pass@100=60%。表示智能体解决了测试集中60%的问题",
        D: "K=5, 但正确计算应为 Pass@5 = 60/(100*5)*100% = 12%"
      },
      answer: "B",
      explanation: "Pass@K表示每个问题生成K个方案，只要有一个通过就算解决。Pass@5=60/100=60%。"
    },
    {
      id: 8,
      question: "下列哪一项通常不属于对大语言模型进行系统评测的核心内容？",
      options: {
        A: "模型训练所用GPU集群的实时功耗与散热效率",
        B: "模型在问答、摘要、代码生成等任务上的准确率与流畅度",
        C: "模型输出是否存在社会偏见、歧视性内容等安全性问题",
        D: "模型在数学推理、常识推理等复杂任务上的泛化能力"
      },
      answer: "A",
      explanation: "GPU功耗是硬件运维指标，不属于模型评测核心内容。"
    },
    {
      id: 9,
      question: "在Transformer的自注意力机制中，关于Query、Key和Value的来源，以下哪一项描述是最准确的？",
      options: {
        A: "Q、K、V是由三个完全不同的、随机初始化的参数矩阵生成的，与输入序列无关",
        B: "Key和Value是输入序列的嵌入向量本身，而Query是目标序列的嵌入向量本身",
        C: "Query来自编码器的最终隐藏状态，而Key和Value来自解码器的输入序列",
        D: "Q、K、V是由同一个输入向量通过三个不同的线性变换层（权重矩阵）投影得到的"
      },
      answer: "D",
      explanation: "自注意力中Q、K、V都来自同一个输入，分别通过Wq、Wk、Wv三个权重矩阵线性投影得到。"
    },
    {
      id: 10,
      question: "下列哪一项不属于测试时间拓展（Test-Time Scaling, TTS）技术？",
      options: {
        A: "对测试样本进行多种变换并将预测结果集成",
        B: "推理时随机丢弃部分神经元，多次前向传播取平均",
        C: "为每个测试样本定义辅助任务，利用该样本对模型进行一步梯度下降微调",
        D: "在大型源数据集上预训练模型，然后在目标数据集上对所有权重进行微调"
      },
      answer: "D",
      explanation: "D是常规预训练+微调流程，不是测试时间拓展。TTS是在推理阶段提升性能的技术。"
    },
    {
      id: 11,
      question: "为了保障"公平安全"，最关键的缓解方法是在哪个阶段介入？",
      options: {
        A: "仅在模型推理部署后，通过实时过滤敏感词来屏蔽有害输出",
        B: "主要依靠扩大模型规模，期望其自动学习并消除偏见",
        C: "在模型预训练和微调阶段，系统性地清洗数据和引入公平性约束",
        D: "完全依赖第三方评测机构在发布前进行一次性的偏见评估"
      },
      answer: "C",
      explanation: "偏见治理需要从数据源头（预训练和微调阶段）系统性地清洗数据和引入公平性约束。"
    },
    {
      id: 12,
      question: "当前意义上的"大语言模型"最显著的特征不包括以下哪一项？",
      options: {
        A: "模型参数量巨大，但仅在特定领域的小规模数据上训练",
        B: "展现出强大的涌现能力，如推理、编程和创造性写作",
        C: "基于"下一个词预测"等自监督目标在海量互联网文本上训练",
        D: "具有强大的上下文学习能力，无需梯度更新即可根据提示完成新任务"
      },
      answer: "A",
      explanation: "LLM在海量互联网文本上训练（非特定领域小规模数据），A描述与实际不符。"
    },
    {
      id: 13,
      question: "基于强化学习的推理能力优化方法面临的主要挑战是什么？",
      options: {
        A: "模型会因此完全丧失其原有的语言生成能力",
        B: "推理路径的搜索空间巨大，导致训练不稳定和效率低下",
        C: "强化学习会使模型的词汇量急剧减少",
        D: "该方法只能应用于数学推理，无法泛化到其他领域"
      },
      answer: "B",
      explanation: "RL推理优化的主要挑战是推理路径搜索空间巨大，导致训练不稳定和效率低下。"
    },
    {
      id: 14,
      question: "关于语言模型的困惑度，以下描述正确的是：",
      options: {
        A: "困惑度越低，说明模型对测试数据的预测越不确定，性能越差",
        B: "困惑度是模型在训练集上的准确率直接转换而来的指标",
        C: "困惑度反映模型对一组文本的平均预测不确定性，值越低表示模型性能越好",
        D: "困惑度与模型的训练步数无关，只与模型架构有关"
      },
      answer: "C",
      explanation: "困惑度衡量预测不确定性，值越低模型性能越好。基于交叉熵损失计算。"
    },
    {
      id: 15,
      question: "关于监督学习和无监督学习的区别，以下说法正确的是：",
      options: {
        A: "监督学习不需要训练数据，无监督学习需要大量标注数据",
        B: "监督学习使用标注数据学习，无监督学习从无标签数据中发现模式",
        C: "无监督学习只能处理数值型数据，监督学习可以处理任何类型数据",
        D: "无监督学习的模型性能总是优于监督学习"
      },
      answer: "B",
      explanation: "监督学习使用标注数据，无监督学习使用无标签数据发现内在模式。"
    },
    {
      id: 16,
      question: "在使用LoRA对大语言模型进行微调时，以下哪个操作是其典型的流程？",
      options: {
        A: "首先对原始模型进行奇异值分解，保留主要成分以降低其秩，然后在这个低秩模型上进行全参数微调",
        B: "在模型的注意力机制模块和前馈网络的线性层旁，并联一对低秩矩阵（A和B），在微调时只训练这对矩阵，并将它们的乘积与冻结的原始权重相加作为该层的实际输出",
        C: "准备两套模型参数，一套保持冻结，另一套用于训练，通过比较两套参数的输出来动态决定更新哪一套参数",
        D: "在训练开始时，将原始模型权重复制一份作为可训练参数，然后通过正则化手段强制让这些可训练参数与冻结的原始参数之间的差异矩阵保持低秩"
      },
      answer: "B",
      explanation: "LoRA在原始冻结权重旁并联低秩矩阵A和B（W + BA），只训练A和B，大幅减少训练参数量。不是对原始模型做SVD（A），也不是两套参数动态选择（C），也不是正则化约束（D）。"
    },
    {
      id: 17,
      question: "如果选择直接偏好优化（DPO）方案，可以省去以下哪个关键步骤？",
      options: {
        A: "利用偏好数据对监督微调后的模型进行进一步的优化",
        B: "训练一个独立的模型来预测人类对不同回答的偏好程度，并将其量化为奖励分数",
        C: "在优化过程中，引入KL散度惩罚项以防止模型策略与初始监督微调后的模型偏离过远",
        D: "使用GPU集群进行模型参数的梯度更新"
      },
      answer: "B",
      explanation: "DPO（直接偏好优化）跳过了RLHF中训练奖励模型（Reward Model）的步骤，直接从偏好数据优化模型。它不需要训练独立的奖励预测模型，但仍然需要偏好数据优化（A）、KL约束（C）和梯度更新（D）。"
    },
    {
      id: 18,
      question: "下列哪一项是混合专家模型（MoE）面临的主要挑战？",
      options: {
        A: "模型训练过程极其不稳定，难以收敛",
        B: "训练和推理速度相比同等参数量的稠密模型会变慢",
        C: "专家负载不均衡，可能导致某些专家被过度使用，而其他专家训练不足",
        D: "模型无法处理长序列输入，存在上下文长度的限制"
      },
      answer: "C",
      explanation: "MoE的主要挑战是专家负载不均衡（某些专家被过度使用），需要通过负载均衡损失等机制来缓解。训练可以收敛（A错），推理速度通常更快而非更慢（B错），MoE不限制序列长度（D错）。"
    },
    {
      id: 19,
      question: "vLLM之所以能够极大地提升LLM的高吞吐量服务性能，其最核心的架构创新在于什么？",
      options: {
        A: "采用更快的GPU计算库（如FlashAttention）来优化注意力计算",
        B: "引入了名为PagedAttention的内存管理机制，有效解决了KV Cache的内存碎片化问题",
        C: "使用模型量化技术，降低模型权重占用的显存空间",
        D: "实现了更高效的调度算法，总是优先处理序列长度最短的请求"
      },
      answer: "B",
      explanation: "vLLM的核心创新是PagedAttention，借鉴操作系统的虚拟内存分页机制，解决KV Cache的内存碎片问题，实现高效内存管理和高吞吐量。FlashAttention（A）和量化（C）是其他优化技术。"
    },
    {
      id: 20,
      question: "学习率预热（Learning Rate Warmup）的主要目的是什么？",
      options: {
        A: "在训练初期快速降低损失，以节省训练时间",
        B: "防止在训练初期，由于模型权重随机初始化且训练数据分布不稳定，过大的梯度更新导致模型不稳定或梯度爆炸",
        C: "为了让模型在训练初期有更强的探索能力，避免过早陷入局部最优",
        D: "主要是为了在预热阶段找到一个最优的初始学习率"
      },
      answer: "B",
      explanation: "学习率预热在训练初期使用较小的学习率逐步增大，防止初始阶段因权重随机初始化和数据分布不稳定导致的大梯度更新引起模型不稳定或梯度爆炸。"
    }
  ],

  // ===== 第一轮 - 成人组程序题 =====
  adult_prog: [
    {
      id: 21,
      question: "加载Qwen2.5模型的分词器，正确方式是？",
      options: {
        A: 'AutoTokenizer.from_pretrained(model_name, return_tensors="pt")',
        B: "AutoTokenizer.load(model_name)",
        C: "AutoTokenizer(model_name)",
        D: "AutoTokenizer.from_pretrained(model_name, trust_remote_code=True)"
      },
      answer: "D",
      explanation: "Qwen系列可能包含自定义分词器逻辑，需要trust_remote_code=True。"
    },
    {
      id: 22,
      question: "单卡16GB显存下，LoRA配置最合理的是？",
      options: {
        A: "r=64, lora_alpha=32",
        B: "r=8, lora_alpha=64",
        C: "r=8, lora_alpha=16",
        D: "r=32, lora_alpha=8"
      },
      answer: "C",
      explanation: "r=8是省显存的低秩配置，lora_alpha=16（通常为2×r）是常见配对。"
    },
    {
      id: 23,
      question: "配置LoRA权重的注入位置，以下代码更合理的是？",
      options: {
        A: "['mlp', 'norm']",
        B: "'all_linear_layers'",
        C: "['k_proj', 'o_proj']",
        D: "['q_proj', 'v_proj']"
      },
      answer: "D",
      explanation: "['q_proj', 'v_proj']是LoRA标准注入位置，覆盖注意力中的Query和Value投影层。"
    },
    {
      id: 24,
      question: "显存限制下，以下配置最稳妥的是？（全局batch size=8）",
      options: {
        A: "per_device_train_batch_size=2, gradient_accumulation_steps=4",
        B: "global_train_batch_size=8, gradient_accumulation_steps=4",
        C: "global_train_batch_size=8, per_device_train_batch_size=1",
        D: "per_device_train_batch_size=1, gradient_accumulation_steps=8"
      },
      answer: "D",
      explanation: "per_device_train_batch_size=1最省显存，gradient_accumulation_steps=8（1×8=8）达到全局batch size=8。"
    },
    {
      id: 25,
      question: "为了配置训练的半精度数据类型，以下代码更合理的是？",
      options: {
        A: "fp32=True,",
        B: "fp16=True,",
        C: 'training_type="fp32",',
        D: 'training_type="bf16",'
      },
      answer: "B",
      explanation: "TrainingArguments使用fp16=True启用半精度训练以降低显存占用。"
    },
    {
      id: 26,
      question: "在GQA机制中，将KV张量扩展以匹配Q的头数，以下代码更合理的是？",
      code: "# 2) 将KV扩成H头，以与Q对齐（GQA/MQA共享）\nkH = ____[26]____",
      options: {
        A: "k_all.view(B, head_rep, Kv, Lk+1, D)",
        B: "expand_kv_for_gqa(q, head_rep)",
        C: "expand_kv_for_gqa(k_all, head_rep)",
        D: "k_all.transpose(1, 2)"
      },
      answer: "C",
      explanation: "expand_kv_for_gqa函数已定义用于将KV头扩展到查询头数。需要传入k_all（KV缓存合并后的张量）和head_rep（复制次数）。不能传入q（B错），view和transpose只是改变形状/维度顺序，不能实现真正的复制扩展。"
    },
    {
      id: 27,
      question: "在Scaled Dot-Product Attention中，缩放因子scale应该是？",
      code: "scale = ____[27]____",
      options: {
        A: "1.0 / math.sqrt(H)",
        B: "1.0 / math.sqrt(D)",
        C: "1.0 / D",
        D: "1.0 / H"
      },
      answer: "B",
      explanation: "缩放因子为1/√(dk)，其中dk是头维度D。这防止点积值过大导致softmax进入饱和区（梯度消失）。用头维度D而不是头数H。"
    },
    {
      id: 28,
      question: "计算查询与键的点积得到注意力分数（logits），以下代码更合理的是？",
      code: "logits = ____[28]____",
      options: {
        A: "torch.matmul(q, kH.transpose(-2, -1)) * scale",
        B: "torch.matmul(q, kH) * scale",
        C: "torch.matmul(kH, q) * scale",
        D: "torch.einsum('bh1d,bhld->bh1d', q, kH) * scale"
      },
      answer: "A",
      explanation: "Q·K^T需要将K的最后两个维度转置。q形状(B,H,1,D)，kH.transpose(-2,-1)形状(B,H,D,L)，matmul后得到(B,H,1,L)的注意力分数。注意需要在乘以scale之前或之后都行，但选项中已包含scale。"
    },
    {
      id: 29,
      question: "应用因果掩码防止"看到"未来内容，以下代码更合理的是？",
      code: "logits = ____[29]____",
      options: {
        A: "logits * (causal_mask == 0)",
        B: "logits * causal_mask",
        C: "logits.masked_fill(causal_mask == 0, float('-inf'))",
        D: "torch.where(causal_mask == 0, logits, float('-inf'))"
      },
      answer: "C",
      explanation: "masked_fill将mask为0的位置（不可见位置）填充为负无穷，softmax后这些位置权重为0。乘以mask（A、B）只是将不需要的位置置零，但softmax后仍会有非零权重。torch.where（D）需要输入类型一致，float作为参数不支持。"
    },
    {
      id: 30,
      question: "使用注意力权重对值向量加权求和得到最终输出，以下代码更合理的是？",
      code: "out = ____[30]____",
      options: {
        A: "torch.matmul(attn, vH)",
        B: "torch.matmul(vH, attn)",
        C: "torch.einsum('bh1l,bhld->bhld', attn, vH)",
        D: "torch.einsum(attn, vH, 'bh1l,bhld->bhld')"
      },
      answer: "A",
      explanation: "attn形状(B,H,1,L)，vH形状(B,H,L,D)，matmul后得到(B,H,1,D)。B中维度顺序错误，C和D的einsum写法不正确（D的einsum参数顺序不对，且C输出形状应该是bh1d不是bhld）。"
    }
  ],

  // ===== 第二轮知识点测验 =====
  round2_concepts: [
    {
      id: 1,
      question: "第二轮T1任务中，build_system_prompt()函数的核心作用是什么？",
      options: {
        A: "加载预训练模型权重",
        B: "定义system prompt，引导模型识别各种数学符号并按指定格式输出答案",
        C: "对模型输出进行后处理，提取最终答案",
        D: "设置模型的超参数（如温度、top_p）"
      },
      answer: "B",
      explanation: "build_system_prompt()的作用是编写system prompt，引导模型识别各种数学符号（如⊕、➕、加等）并按照[Answer]: 数值的格式输出答案。评测程序会统一处理输出格式，考生不应在函数中做后处理。"
    },
    {
      id: 2,
      question: "在T1中，apply_chat_template_single()函数使用了哪个关键参数来启用模型的思考模式？",
      options: {
        A: "enable_thinking=True",
        B: "do_sample=True",
        C: "return_tensors='pt'",
        D: "add_special_tokens=True"
      },
      answer: "A",
      explanation: "apply_chat_template_single()调用tokenizer.apply_chat_template时，使用enable_thinking=True启用模型的思考模式（如Qwen3的思维链功能），让模型在输出答案前进行推理。"
    },
    {
      id: 3,
      question: "在T1的generate_batch()中，批量推理需要正确处理什么关键问题？",
      options: {
        A: "随机打乱输入顺序以提高多样性",
        B: "padding和truncation，确保不同长度的输入能组成批次",
        C: "降低模型精度以节省内存",
        D: "将所有输入截断到相同长度"
      },
      answer: "B",
      explanation: "批量推理需要正确处理padding（补齐到同长度）和truncation（截断超长序列），以确保不同长度的输入能组成有效批次。同时需要设置正确的attention_mask和pad_token_id。"
    },
    {
      id: 4,
      question: "第二轮T2任务中，compute_similarity()函数使用了什么pooling策略？",
      options: {
        A: "Mean pooling（平均池化）",
        B: "CLS token pooling",
        C: "Last-token pooling",
        D: "Max pooling"
      },
      answer: "C",
      explanation: "T2使用last-token pooling，提取序列最后一个token的hidden state作为句向量。需要注意左侧padding和右侧padding的不同处理方式。"
    },
    {
      id: 5,
      question: "在T2的相似度计算中，L2 normalization的作用是什么？",
      options: {
        A: "将向量长度统一为1，使点积等于余弦相似度",
        B: "压缩向量到[0,1]范围",
        C: "减少向量的维度",
        D: "增加向量的数值范围"
      },
      answer: "A",
      explanation: "L2归一化将向量除以其L2范数，使向量长度为1。归一化后两个向量的点积就等于余弦相似度，值域为[-1,1]（在embedding模型中通常为[0,1]）。"
    },
    {
      id: 6,
      question: "T2生成数据集要求1024条数据，平均相似度需满足什么条件才能获得满分？",
      options: {
        A: "平均相似度 ≤ 0.3",
        B: "平均相似度 ≤ 0.5",
        C: "平均相似度 ≤ 0.7",
        D: "平均相似度 ≤ 0.1"
      },
      answer: "B",
      explanation: "平均相似度≤0.5获得满分50分。0.5~0.7之间线性给分：int(50*(0.7-avg_sim)/0.2)。>0.7则0分。"
    },
    {
      id: 7,
      question: "T2数据生成中，对答案的要求是什么？",
      options: {
        A: "答案可以是任意整数",
        B: "答案必须是3位数（100-999）",
        C: "答案必须是偶数",
        D: "答案必须为正整数"
      },
      answer: "B",
      explanation: "每条数据的答案必须是3位数（100-999），否则每条扣1分。题目最多3个数字，所有题目必须唯一。"
    },
    {
      id: 8,
      question: "在T2的_last_token_pool函数中，如何判断是否使用了左侧padding？",
      options: {
        A: "检查attention_mask[:, 0]是否全为1",
        B: "检查attention_mask[:, -1].sum() == attention_mask.shape[0]",
        C: "检查input_ids[:, 0]是否为pad_token",
        D: "比较序列长度和最大长度"
      },
      answer: "B",
      explanation: "如果最后一个token的attention_mask全为1（即所有样本的最后一个位置都是有效的），说明使用了左侧padding。此时直接取最后一个token即可。否则需要找到每个样本最后一个有效token的位置。"
    },
    {
      id: 9,
      question: "T1评测中，阶段一（逐条推理）的评分标准是什么？",
      options: {
        A: "8题每题5分，满分40分",
        B: "8题每题10分，答对≥6题给满分60分",
        C: "8题每题10分，全部正确才给满分",
        D: "8题每题7.5分，满分60分"
      },
      answer: "B",
      explanation: "阶段一8题，每题10分，答对≥6题给满分60分。阶段二32题，每题1.5分，满分40分。总分100分。"
    },
    {
      id: 10,
      question: "T2评测中，第一部分相似度计算必须满足什么条件才能进入第二部分？",
      options: {
        A: "得分≥40分",
        B: "必须满分（50分）",
        C: "通过≥5组测试用例",
        D: "没有要求"
      },
      answer: "B",
      explanation: "第一部分10组测试用例，每组5分，允许误差≤0.03，通过≥8组给满分50分。必须满分才能进行第二部分测试，否则总分最多50分。"
    }
  ]
};
