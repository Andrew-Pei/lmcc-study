const QUIZ_PYTORCH = [
  // ===== 张量创建 (1-10) =====
  {
    id: 1,
    question: '在PyTorch中，以下哪个代码可以从Python列表创建一个张量？',
    options: {
      A: 'torch.tensor([1, 2, 3])',
      B: 'torch.make([1, 2, 3])',
      C: 'torch.create([1, 2, 3])',
      D: 'torch.array([1, 2, 3])'
    },
    answer: 'A',
    explanation: 'torch.tensor()是PyTorch中从Python列表或NumPy数组创建张量的标准方法。它会自动推断数据类型并创建新的张量。'
  },
  {
    id: 2,
    question: '以下代码的输出结果是什么？\ntorch.zeros(3, 4).shape',
    options: {
      A: 'torch.Size([4, 3])',
      B: 'torch.Size([3, 4])',
      C: 'torch.Size([12])',
      D: 'torch.Size([3, 3])'
    },
    answer: 'B',
    explanation: 'torch.zeros(3, 4)创建一个3行4列的全零张量，其形状为(3, 4)。参数依次表示各维度的大小。'
  },
  {
    id: 3,
    question: '在PyTorch中，torch.ones(2, 3)创建的张量中所有元素的值是多少？',
    options: {
      A: '0',
      B: '2',
      C: '1',
      D: '3'
    },
    answer: 'C',
    explanation: 'torch.ones()创建一个所有元素都为1的张量。torch.ones(2, 3)创建一个2行3列的全1张量。'
  },
  {
    id: 4,
    question: 'torch.arange(0, 10, 2)生成的张量包含哪些元素？',
    options: {
      A: '[0, 2, 4, 6, 8, 10]',
      B: '[0, 2, 4, 6, 8]',
      C: '[2, 4, 6, 8, 10]',
      D: '[0, 1, 2, 3, 4]'
    },
    answer: 'B',
    explanation: 'torch.arange(start, end, step)生成从start开始、步长为step、不包含end的序列。arange(0, 10, 2)生成[0, 2, 4, 6, 8]，不包含10。'
  },
  {
    id: 5,
    question: 'torch.randn(3, 4)创建的张量，其数据服从什么分布？',
    options: {
      A: '均匀分布[0, 1)',
      B: '标准正态分布（均值0，方差1）',
      C: '正态分布（均值1，方差0）',
      D: '均匀分布[-1, 1)'
    },
    answer: 'B',
    explanation: 'torch.randn()生成服从标准正态分布（均值为0、标准差为1）的随机数张量。而torch.rand()生成的是[0, 1)区间内的均匀分布随机数。'
  },
  {
    id: 6,
    question: '以下哪个说法正确区分了torch.rand()和torch.randn()？',
    options: {
      A: '两者完全相同',
      B: 'torch.rand()生成正态分布，torch.randn()生成均匀分布',
      C: 'torch.rand()生成[0,1)均匀分布，torch.randn()生成标准正态分布',
      D: 'torch.rand()生成整数，torch.randn()生成浮点数'
    },
    answer: 'C',
    explanation: 'torch.rand()生成[0, 1)区间内的均匀分布随机数，而torch.randn()生成均值为0、标准差为1的标准正态分布随机数。两者在深度学习权重初始化中都有应用。'
  },
  {
    id: 7,
    question: '在PyTorch中，如何创建一个数据类型为float32的张量？',
    options: {
      A: 'torch.tensor([1, 2], type=float32)',
      B: 'torch.tensor([1, 2], dtype=torch.float32)',
      C: 'torch.tensor([1, 2], dtype=float32)',
      D: 'torch.tensor([1, 2], torch.float32)'
    },
    answer: 'B',
    explanation: 'PyTorch中使用dtype参数指定张量的数据类型。torch.float32是32位浮点数，是深度学习中最常用的数据类型。也可以用torch.float作为简写。'
  },
  {
    id: 8,
    question: 'torch.full((2, 3), 7.0)创建的张量是什么形状和内容？',
    options: {
      A: '形状为(3, 2)，全填充7.0',
      B: '形状为(2, 3)，全填充7.0',
      C: '形状为(2, 3)，全填充0',
      D: '形状为(2, 3)，随机填充'
    },
    answer: 'B',
    explanation: 'torch.full(shape, value)创建一个指定形状、所有元素都填充为指定值的张量。torch.full((2, 3), 7.0)创建2行3列、全为7.0的张量。'
  },
  {
    id: 9,
    question: 'torch.linspace(0, 10, 5)生成的张量包含哪些元素？',
    options: {
      A: '[0, 2, 4, 6, 8]',
      B: '[0, 2.5, 5, 7.5, 10]',
      C: '[0, 1, 2, 3, 4]',
      D: '[0, 5, 10]'
    },
    answer: 'B',
    explanation: 'torch.linspace(start, end, steps)生成从start到end（包含两端）均匀分布的steps个点。linspace(0, 10, 5)生成[0, 2.5, 5.0, 7.5, 10.0]，步长为(10-0)/(5-1)=2.5。'
  },
  {
    id: 10,
    question: '以下代码创建的张量形状是什么？\ntorch.tensor([[1, 2, 3], [4, 5, 6]])',
    options: {
      A: 'torch.Size([3, 2])',
      B: 'torch.Size([2, 3])',
      C: 'torch.Size([6])',
      D: 'torch.Size([2, 2, 3])'
    },
    answer: 'B',
    explanation: 'torch.tensor()可以从嵌套列表创建多维张量。[[1, 2, 3], [4, 5, 6]]是一个2行3列的二维列表，因此创建的张量形状为(2, 3)。'
  },
  // ===== 张量操作 (11-20) =====
  {
    id: 11,
    question: '在PyTorch中，reshape()方法的作用是什么？',
    options: {
      A: '只能展平张量',
      B: '在不改变数据的情况下改变张量的形状',
      C: '转置张量的维度',
      D: '删除张量的某些维度'
    },
    answer: 'B',
    explanation: 'reshape()方法在不改变张量数据内容和元素顺序的前提下，改变张量的形状。例如，一个形状为(6,)的张量可以reshape为(2, 3)或(3, 2)。'
  },
  {
    id: 12,
    question: '以下关于view()方法的说法，正确的是？',
    options: {
      A: 'view()会复制张量数据',
      B: 'view()要求张量在内存中是连续的',
      C: 'view()可以改变张量的数据类型',
      D: 'view()只能用于一维张量'
    },
    answer: 'B',
    explanation: 'view()方法返回一个新的视图，不复制数据，但要求原张量在内存中是连续的（contiguous）。如果张量不连续，需要先调用contiguous()再使用view()，否则会报错。'
  },
  {
    id: 13,
    question: '以下关于view()和reshape()的区别，哪个说法是正确的？',
    options: {
      A: '两者完全相同，可以互换使用',
      B: 'view()要求内存连续，reshape()不要求',
      C: 'reshape()只能用于二维张量',
      D: 'view()会复制数据，reshape()不会'
    },
    answer: 'B',
    explanation: 'view()要求张量在内存中连续，如果张量经过转置等操作变得不连续，view()会报错。reshape()则不要求连续性，当不连续时会自动复制数据。优先使用view()以节省内存。'
  },
  {
    id: 14,
    question: 'torch.squeeze()方法的作用是什么？',
    options: {
      A: '删除张量中所有大小为1的维度',
      B: '删除张量中所有维度',
      C: '压缩张量的数据大小',
      D: '将张量转换为一维'
    },
    answer: 'A',
    explanation: 'squeeze()方法移除张量中所有大小为1的维度。例如，形状为(1, 3, 1, 4)的张量经过squeeze()后变为(3, 4)。也可以指定dim参数只移除特定维度。'
  },
  {
    id: 15,
    question: '以下代码的输出形状是什么？\nx = torch.tensor([1, 2, 3])\nx.unsqueeze(0).shape',
    options: {
      A: 'torch.Size([3])',
      B: 'torch.Size([1, 3])',
      C: 'torch.Size([3, 1])',
      D: 'torch.Size([1, 1, 3])'
    },
    answer: 'B',
    explanation: 'unsqueeze(dim)在指定位置插入一个大小为1的新维度。x原本形状为(3,)，unsqueeze(0)在第0维插入新维度，结果形状为(1, 3)。这在添加batch维度时非常常用。'
  },
  {
    id: 16,
    question: '以下代码的输出形状是什么？\nx = torch.randn(2, 3, 4)\nx.transpose(0, 1).shape',
    options: {
      A: 'torch.Size([2, 3, 4])',
      B: 'torch.Size([3, 2, 4])',
      C: 'torch.Size([2, 4, 3])',
      D: 'torch.Size([4, 3, 2])'
    },
    answer: 'B',
    explanation: 'transpose(dim0, dim1)交换两个指定维度。x形状为(2, 3, 4)，transpose(0, 1)交换第0维和第1维，结果形状为(3, 2, 4)。'
  },
  {
    id: 17,
    question: '以下代码的输出形状是什么？\nx = torch.randn(2, 3, 4)\nx.permute(2, 0, 1).shape',
    options: {
      A: 'torch.Size([2, 3, 4])',
      B: 'torch.Size([4, 2, 3])',
      C: 'torch.Size([3, 2, 4])',
      D: 'torch.Size([4, 3, 2])'
    },
    answer: 'B',
    explanation: 'permute()按指定顺序重新排列所有维度。permute(2, 0, 1)表示新张量的第0维是原张量的第2维（大小4），第1维是原第0维（大小2），第2维是原第1维（大小3），结果为(4, 2, 3)。'
  },
  {
    id: 18,
    question: '以下哪种情况下需要调用contiguous()方法？',
    options: {
      A: '创建新张量后',
      B: '使用view()之前，张量经过transpose等操作变得不连续时',
      C: '将张量移到GPU之前',
      D: '保存模型之前'
    },
    answer: 'B',
    explanation: '当张量经过transpose()、permute()等操作后，在内存中可能变得不连续。此时如果需要使用view()，必须先调用contiguous()使张量在内存中连续，否则会报错。'
  },
  {
    id: 19,
    question: '在PyTorch中，x.T的作用是什么？',
    options: {
      A: '返回x的转置（仅适用于二维张量）',
      B: '返回x的副本',
      C: '将x展平为一维',
      D: '反转x中所有元素的顺序'
    },
    answer: 'A',
    explanation: '.T属性返回张量的转置。对于二维张量，它交换行和列。但对于高维张量，.T会反转所有维度的顺序。注意.T等价于permute()反转所有维度。'
  },
  {
    id: 20,
    question: '以下代码的输出形状是什么？\nx = torch.randn(2, 3, 4)\nx.flatten().shape',
    options: {
      A: 'torch.Size([2, 12])',
      B: 'torch.Size([24])',
      C: 'torch.Size([6, 4])',
      D: 'torch.Size([2, 3, 4])'
    },
    answer: 'B',
    explanation: 'flatten()将张量展平为一维。x形状为(2, 3, 4)，总元素数为2*3*4=24，flatten()后形状为(24,)。也可以用flatten(start_dim)指定从哪一维开始展平。'
  },
  // ===== 数学运算 (21-30) =====
  {
    id: 21,
    question: '在PyTorch中，以下哪种方式可以计算两个矩阵的乘积？',
    options: {
      A: 'a * b',
      B: 'a @ b 或 torch.matmul(a, b)',
      C: 'a + b',
      D: 'a.dot(b)'
    },
    answer: 'B',
    explanation: '@运算符和torch.matmul()用于计算矩阵乘法。a * b是逐元素乘法（element-wise），不是矩阵乘法。矩阵乘法要求第一个矩阵的列数等于第二个矩阵的行数。'
  },
  {
    id: 22,
    question: '以下代码的输出是什么？\na = torch.tensor([1, 2, 3])\nb = torch.tensor([4, 5, 6])\na + b',
    options: {
      A: 'tensor([4, 10, 18])',
      B: 'tensor([5, 7, 9])',
      C: 'tensor([1, 2, 3, 4, 5, 6])',
      D: 'tensor([4, 8, 12])'
    },
    answer: 'B',
    explanation: '+运算符对两个张量进行逐元素加法。a + b = [1+4, 2+5, 3+6] = [5, 7, 9]。要求两个张量形状相同或可广播。'
  },
  {
    id: 23,
    question: '以下代码的输出是什么？\na = torch.tensor([1, 2, 3])\nb = torch.tensor([4, 5, 6])\na * b',
    options: {
      A: 'tensor([4, 10, 18])',
      B: 'tensor([5, 7, 9])',
      C: 'tensor([4, 7, 9])',
      D: 'tensor([1, 2, 3])'
    },
    answer: 'A',
    explanation: '*运算符对两个张量进行逐元素乘法。a * b = [1*4, 2*5, 3*6] = [4, 10, 18]。这与矩阵乘法@不同，逐元素乘法要求形状相同或可广播。'
  },
  {
    id: 24,
    question: '以下代码的输出是什么？\nx = torch.tensor([[1, 2], [3, 4]])\nx.sum()',
    options: {
      A: 'tensor(10)',
      B: 'tensor([3, 7])',
      C: 'tensor([4, 6])',
      D: 'tensor(3)'
    },
    answer: 'A',
    explanation: 'sum()默认对张量所有元素求和。1+2+3+4=10，结果是一个标量张量tensor(10)。可以指定dim参数沿特定维度求和。'
  },
  {
    id: 25,
    question: '以下代码的输出是什么？\nx = torch.tensor([1.0, 2.0, 3.0, 4.0])\nx.mean()',
    options: {
      A: 'tensor(2.5)',
      B: 'tensor(10.)',
      C: 'tensor(1.0)',
      D: 'tensor(2.)'
    },
    answer: 'A',
    explanation: 'mean()计算张量所有元素的均值。(1+2+3+4)/4 = 2.5。注意mean()通常要求浮点类型张量，整数类型可能报错。可以指定dim参数沿特定维度计算均值。'
  },
  {
    id: 26,
    question: '以下代码的输出是什么？\nx = torch.tensor([3, 1, 4, 1, 5])\nx.max()',
    options: {
      A: 'tensor(1)',
      B: 'tensor(3)',
      C: 'tensor(4)',
      D: 'tensor(5)'
    },
    answer: 'D',
    explanation: 'max()返回张量中的最大值。x中最大值为5，所以返回tensor(5)。如果指定dim参数，还会返回最大值的索引。'
  },
  {
    id: 27,
    question: '以下代码的输出是什么？\nx = torch.tensor([3, 1, 4, 1, 5])\nx.min()',
    options: {
      A: 'tensor(1)',
      B: 'tensor(3)',
      C: 'tensor(4)',
      D: 'tensor(5)'
    },
    answer: 'A',
    explanation: 'min()返回张量中的最小值。x中最小值为1，所以返回tensor(1)。与max()类似，指定dim参数会同时返回最小值和索引。'
  },
  {
    id: 28,
    question: '以下代码的输出是什么？\na = torch.tensor([4.0, 6.0, 8.0])\nb = torch.tensor([2.0, 3.0, 4.0])\na / b',
    options: {
      A: 'tensor([2., 2., 2.])',
      B: 'tensor([8., 18., 32.])',
      C: 'tensor([6., 9., 12.])',
      D: 'tensor([0.5, 0.5, 0.5])'
    },
    answer: 'A',
    explanation: '/运算符进行逐元素除法。a / b = [4/2, 6/3, 8/4] = [2.0, 2.0, 2.0]。结果为tensor([2., 2., 2.])。'
  },
  {
    id: 29,
    question: '以下代码的输出是什么？\na = torch.tensor([[1, 2], [3, 4]])\nb = torch.tensor([10, 20])\na + b',
    options: {
      A: '报错，形状不匹配',
      B: 'tensor([[11, 22], [13, 24]])',
      C: 'tensor([[11, 12], [13, 14]])',
      D: 'tensor([[10, 20], [10, 20]])'
    },
    answer: 'B',
    explanation: 'PyTorch的广播机制允许不同形状的张量进行运算。b的形状(2,)会自动广播为(2, 2)，即[[10, 20], [10, 20]]，然后与a逐元素相加，结果为[[11, 22], [13, 24]]。'
  },
  {
    id: 30,
    question: '以下代码的输出是什么？\na = torch.tensor([5, 6, 7])\nb = torch.tensor([2, 3, 4])\na - b',
    options: {
      A: 'tensor([3, 3, 3])',
      B: 'tensor([7, 9, 11])',
      C: 'tensor([10, 18, 28])',
      D: 'tensor([2.5, 2., 1.75])'
    },
    answer: 'A',
    explanation: '-运算符进行逐元素减法。a - b = [5-2, 6-3, 7-4] = [3, 3, 3]。结果为tensor([3, 3, 3])。'
  },
  // ===== 设备管理 (31-40) =====
  {
    id: 31,
    question: '在PyTorch中，以下哪种方式可以将张量移到GPU上？',
    options: {
      A: 'tensor.gpu()',
      B: 'tensor.to(torch.device(\u201ccuda\u201d)) 或 tensor.to(\u201ccuda\u201d)',
      C: 'tensor.move(\u201cgpu\u201d)',
      D: 'tensor.transfer(\u201ccuda\u201d)'
    },
    answer: 'B',
    explanation: '.to(device)是将张量移动到指定设备的标准方法。可以使用字符串或torch.device对象指定设备。.to()还可以同时转换数据类型，如tensor.to(device, torch.float32)。'
  },
  {
    id: 32,
    question: '以下关于.cuda()方法的说法，正确的是？',
    options: {
      A: '.cuda()只能将模型移到GPU',
      B: '.cuda()将张量移到默认的CUDA设备（GPU）',
      C: '.cuda()会删除梯度信息',
      D: '.cuda()将张量从GPU移到CPU'
    },
    answer: 'B',
    explanation: '.cuda()将张量移动到默认的CUDA设备（通常是第一个GPU）。等价于.to(cuda)。也可以指定设备号，如.cuda(0)指定第一个GPU。它既可用于张量也可用于模型。'
  },
  {
    id: 33,
    question: '以下哪个方法可以将GPU上的张量移回CPU？',
    options: {
      A: 'tensor.to_cpu()',
      B: 'tensor.cpu()',
      C: 'tensor.back_to_cpu()',
      D: 'tensor.device(cpu)'
    },
    answer: 'B',
    explanation: '.cpu()方法将张量从GPU移回CPU。等价于.to(cpu)。在需要将GPU上的张量转换为NumPy数组时，必须先调用.cpu()，因为NumPy不支持GPU张量。'
  },
  {
    id: 34,
    question: '在PyTorch中，如何将整个模型移到GPU上？',
    options: {
      A: 'model.gpu()',
      B: 'model.to(device) 或 model.cuda()',
      C: 'model.move_to_gpu()',
      D: 'model.transfer(device)'
    },
    answer: 'B',
    explanation: 'model.to(device)和model.cuda()都可以将模型的所有参数和缓冲区移到GPU上。在进行训练或推理前，必须确保模型和数据在同一设备上，否则会报错。'
  },
  {
    id: 35,
    question: '以下代码创建的设备对象是什么？\ndevice = torch.device(\u201ccuda\u201d if torch.cuda.is_available() else \u201ccpu\u201d)',
    options: {
      A: '总是CPU设备',
      B: '如果GPU可用则为CUDA设备，否则为CPU设备',
      C: '总是CUDA设备',
      D: '一个字符串'
    },
    answer: 'B',
    explanation: 'torch.cuda.is_available()检测是否有可用的GPU。如果有GPU，则device为CUDA设备；否则为CPU设备。这种模式是PyTorch中的最佳实践，确保代码在不同环境中都能运行。'
  },
  {
    id: 36,
    question: '在PyTorch中，如何查看张量当前所在的设备？',
    options: {
      A: 'tensor.location',
      B: 'tensor.device',
      C: 'tensor.get_device()',
      D: 'tensor.where()'
    },
    answer: 'B',
    explanation: '.device属性返回张量当前所在的设备信息。CPU上的张量返回device类型为cpu的设备对象，GPU上的张量返回类似device类型为cuda且index为0的设备信息。'
  },
  {
    id: 37,
    question: '以下哪种情况会导致运行时错误？',
    options: {
      A: '模型和数据都在CPU上',
      B: '模型和数据都在GPU上',
      C: '模型在GPU上，数据在CPU上',
      D: '模型在CPU上，数据也在CPU上'
    },
    answer: 'C',
    explanation: 'PyTorch要求模型和输入数据必须在同一设备上。如果模型在GPU上但输入数据在CPU上，运行时会报错。最佳实践是在推理前确保两者都在同一设备上。'
  },
  {
    id: 38,
    question: '以下代码的作用是什么？\nmodel.to(device)\ntensor.to(device)',
    options: {
      A: '仅移动模型',
      B: '仅移动张量',
      C: '同时确保模型和张量在同一设备上',
      D: '删除模型参数'
    },
    answer: 'C',
    explanation: '首先将模型移到目标设备，然后将输入张量也移到同一设备。这是PyTorch中进行推理或训练前的标准操作，确保模型和数据在同一设备上，避免设备不匹配的错误。'
  },
  {
    id: 39,
    question: '当遇到RuntimeError: Expected all tensors to be on the same device错误时，最可能的原因是什么？',
    options: {
      A: '模型参数未初始化',
      B: '张量位于不同的设备上（如一个在CPU，一个在GPU）',
      C: '张量形状不匹配',
      D: '数据类型不一致'
    },
    answer: 'B',
    explanation: '这个错误表示参与运算的张量位于不同设备上。例如模型在GPU上但输入数据在CPU上，或者两个需要运算的张量一个在CPU一个在GPU。解决方法是使用.to(device)统一设备。'
  },
  {
    id: 40,
    question: '以下代码的作用是什么？\nx = torch.tensor([1, 2, 3], dtype=torch.int32)\nx = x.to(torch.float32)',
    options: {
      A: '将张量移到GPU',
      B: '将张量的数据类型从int32转换为float32',
      C: '删除张量的梯度',
      D: '将张量展平'
    },
    answer: 'B',
    explanation: '.to()方法不仅可以移动设备，还可以转换数据类型。x.to(torch.float32)将int32张量转换为float32类型。也可以同时指定设备和类型，如x.to(device, torch.float32)。'
  },
  // ===== no_grad与eval模式 (41-50) =====
  {
    id: 41,
    question: '在PyTorch中，torch.no_grad()的主要作用是什么？',
    options: {
      A: '加速模型训练过程',
      B: '禁用梯度计算，节省内存和加速推理',
      C: '防止模型过拟合',
      D: '将模型移到GPU上'
    },
    answer: 'B',
    explanation: 'torch.no_grad()禁用自动梯度计算引擎，推理时不需要梯度，可以节省内存并加速计算。在模型评估和推理阶段，通常都会使用torch.no_grad()。'
  },
  {
    id: 42,
    question: 'model.eval()方法的主要作用是什么？',
    options: {
      A: '删除模型参数',
      B: '将模型设置为评估模式，影响Dropout和BatchNorm层的行为',
      C: '编译模型以加速推理',
      D: '保存模型到磁盘'
    },
    answer: 'B',
    explanation: 'model.eval()将模型设置为评估模式。在评估模式下，Dropout层不再随机丢弃神经元，BatchNorm层使用全局统计量而非批次统计量。这是推理前的必要步骤。'
  },
  {
    id: 43,
    question: '以下关于torch.inference_mode()的说法，正确的是？',
    options: {
      A: '与torch.no_grad()完全相同',
      B: '比torch.no_grad()更快的推理模式，但创建的张量不能在梯度计算中使用',
      C: '只能用于训练',
      D: '会修改模型的权重'
    },
    answer: 'B',
    explanation: 'torch.inference_mode()是PyTorch 1.9引入的更快的推理上下文管理器。它比torch.no_grad()更高效，但在该模式下创建的张量不能用于需要梯度的计算。推理时推荐使用inference_mode()。'
  },
  {
    id: 44,
    question: '以下哪种方式可以使用torch.no_grad()？',
    options: {
      A: '只能作为函数调用',
      B: '作为with语句的上下文管理器，或作为装饰器',
      C: '只能作为装饰器',
      D: '只能通过命令行参数'
    },
    answer: 'B',
    explanation: 'torch.no_grad()既可以作为上下文管理器使用（with torch.no_grad():），也可以作为装饰器使用（@torch.no_grad()）。两种方式都会禁用该作用域内的梯度计算。'
  },
  {
    id: 45,
    question: '以下关于model.eval()和model.train()的说法，正确的是？',
    options: {
      A: 'eval()删除模型，train()创建模型',
      B: 'eval()将模型设为评估模式，train()将模型设为训练模式',
      C: '两者完全相同',
      D: 'eval()保存模型，train()加载模型'
    },
    answer: 'B',
    explanation: 'model.eval()将模型设为评估模式，model.train()将模型设为训练模式。两种模式的主要区别在于Dropout和BatchNorm层的行为：训练模式下Dropout激活、BatchNorm使用批次统计；评估模式下Dropout关闭、BatchNorm使用全局统计。'
  },
  {
    id: 46,
    question: '以下代码的作用是什么？\nfor param in model.parameters():\n    param.requires_grad = False',
    options: {
      A: '删除模型所有参数',
      B: '冻结模型所有参数，使其在反向传播时不更新',
      C: '将模型移到GPU',
      D: '初始化模型参数'
    },
    answer: 'B',
    explanation: '设置requires_grad=False会冻结参数，使其不参与梯度计算和更新。这在迁移学习（如冻结预训练模型的底层）和推理时非常有用，可以节省内存和计算资源。'
  },
  {
    id: 47,
    question: '在进行模型推理时，以下哪种做法是最佳实践？',
    options: {
      A: '只使用model.eval()',
      B: '只使用torch.no_grad()',
      C: '同时使用model.eval()和torch.no_grad()',
      D: '不需要任何额外设置'
    },
    answer: 'C',
    explanation: '推理时最佳实践是同时使用model.eval()（确保Dropout和BatchNorm处于评估模式）和torch.no_grad()（禁用梯度计算节省内存）。两者作用不同，需要同时使用。'
  },
  {
    id: 48,
    question: '使用torch.no_grad()进行推理时，以下哪项资源会被节省？',
    options: {
      A: 'GPU显存中用于存储梯度的空间',
      B: '模型的参数数量',
      C: '模型的层数',
      D: '数据的批量大小'
    },
    answer: 'A',
    explanation: '在默认情况下，PyTorch会为每个操作构建计算图并保存中间激活值以便反向传播。使用torch.no_grad()后，不构建计算图，不保存梯度信息，大幅节省GPU显存。'
  },
  {
    id: 49,
    question: '在model.eval()模式下，Dropout层的行为如何变化？',
    options: {
      A: 'Dropout比例增大',
      B: 'Dropout层被禁用，所有神经元都参与计算',
      C: 'Dropout比例减小',
      D: '行为不变'
    },
    answer: 'B',
    explanation: '在评估模式下，Dropout层被禁用，所有神经元都参与前向传播，不再随机丢弃神经元。这确保了推理结果的确定性和可重复性。在训练模式下，Dropout会按指定概率随机丢弃神经元。'
  },
  {
    id: 50,
    question: '在model.eval()模式下，BatchNorm层使用什么统计数据？',
    options: {
      A: '当前批次的统计量',
      B: '训练过程中累积的全局统计量（running均值和方差）',
      C: '随机统计量',
      D: '全为0的统计量'
    },
    answer: 'B',
    explanation: '在评估模式下，BatchNorm使用训练过程中通过指数移动平均累积的全局running均值和方差，而非当前批次的统计量。这使得单个样本或小批量数据的推理结果更稳定。'
  },
  // ===== 前向传播与模型输出 (51-60) =====
  {
    id: 51,
    question: '在PyTorch中，model(**inputs)中的**操作符的作用是什么？',
    options: {
      A: '计算指数',
      B: '将字典解包为关键字参数传递给模型的forward方法',
      C: '将张量相乘',
      D: '将列表转换为元组'
    },
    answer: 'B',
    explanation: '**操作符将字典解包为关键字参数。如果inputs是包含input_ids和attention_mask等键的字典，则model(**inputs)会将字典的键值对作为关键字参数传递给模型的forward方法。'
  },
  {
    id: 52,
    question: '在PyTorch中，调用model(x)实际上执行了什么操作？',
    options: {
      A: '直接调用model.__call__(x)，内部调用model.forward(x)',
      B: '只调用model.forward(x)',
      C: '调用model.backward(x)',
      D: '调用model.predict(x)'
    },
    answer: 'A',
    explanation: '在PyTorch中，调用model(x)会触发__call__方法，__call__方法内部会调用forward()方法。直接调用model.forward(x)也可以，但不建议，因为__call__还包含钩子（hooks）等额外逻辑。'
  },
  {
    id: 53,
    question: '在Transformer模型中，last_hidden_state通常代表什么？',
    options: {
      A: '模型的损失值',
      B: '最后一层隐藏层的输出，即每个token的上下文向量表示',
      C: '模型的梯度',
      D: '输入的token IDs'
    },
    answer: 'B',
    explanation: 'last_hidden_state是Transformer模型最后一层隐藏层的输出，形状通常为(batch_size, sequence_length, hidden_size)。它包含了每个token经过自注意力机制后的上下文表示，可用于下游任务如文本分类、相似度计算等。'
  },
  {
    id: 54,
    question: '以下哪种是HuggingFace Transformer模型输出的常见形式？',
    options: {
      A: '只返回一个张量',
      B: '返回一个包含last_hidden_state、pooler_output等的字典或对象',
      C: '返回一个Python列表',
      D: '返回一个JSON字符串'
    },
    answer: 'B',
    explanation: 'HuggingFace Transformer模型的输出通常是ModelOutput对象（类似字典），包含last_hidden_state、pooler_output等字段。可以通过属性方式（output.last_hidden_state）或键索引方式获取各字段。'
  },
  {
    id: 55,
    question: '在NLP模型中，input_ids通常是什么类型的数据？',
    options: {
      A: '原始文本字符串',
      B: '分词后每个token对应的数字索引',
      C: '词向量',
      D: '文本的字节表示'
    },
    answer: 'B',
    explanation: 'input_ids是分词器（Tokenizer）将文本分词后，将每个token映射为词表中对应索引得到的数字序列。例如文本经分词后可能得到input_ids为[101, 2023, 2003, 1037, 3231, 102]这样的数字序列。'
  },
  {
    id: 56,
    question: '在调用模型时传入attention_mask的作用是什么？',
    options: {
      A: '指定使用哪种GPU',
      B: '告诉模型哪些位置是真实token（值为1），哪些是填充token（值为0）',
      C: '控制学习率',
      D: '指定批次大小'
    },
    answer: 'B',
    explanation: 'attention_mask告诉模型哪些位置是真实的token（值为1），哪些是填充token（值为0）。模型在计算注意力时会忽略mask为0的位置，确保填充不影响结果。例如[1, 1, 1, 0, 0]表示前3个位置是真实token，后2个是填充。'
  },
  {
    id: 57,
    question: '以下代码的作用是什么？\ninputs = tokenizer(text, return_tensors=\u201cpt\u201d)',
    options: {
      A: '将文本转换为图像',
      B: '将文本分词并返回PyTorch张量格式的输入',
      C: '将文本翻译成英文',
      D: '加载预训练模型'
    },
    answer: 'B',
    explanation: 'tokenizer将文本分词并转换为模型可接受的输入格式。return_tensors设为pt表示返回PyTorch张量（Tensor），设为tf返回TensorFlow张量。返回的字典通常包含input_ids、attention_mask等字段。'
  },
  {
    id: 58,
    question: '以下代码的作用是什么？\noutputs = model(**inputs)\nlogits = outputs.logits',
    options: {
      A: '加载模型',
      B: '对输入进行前向推理并获取模型输出logits',
      C: '训练模型',
      D: '保存模型'
    },
    answer: 'B',
    explanation: 'model(**inputs)将分词后的输入传递给模型进行前向传播，outputs.logits是模型最后一层的原始输出，形状通常为(batch_size, num_classes)。logits经过softmax后可得到各类别的概率。'
  },
  {
    id: 59,
    question: '在分类模型中，logits通常指什么？',
    options: {
      A: '经过softmax后的概率分布',
      B: '模型最后一层的原始输出，未经softmax处理',
      C: '模型的损失值',
      D: '输入的token索引'
    },
    answer: 'B',
    explanation: 'logits是模型最后一层的原始输出，未经softmax或归一化处理。在分类任务中，logits的形状通常为(batch_size, num_classes)，需要经过softmax才能得到概率分布。在推理时通常取logits的最大值作为预测类别。'
  },
  {
    id: 60,
    question: '以下哪种方式可以获取模型输出的logits？',
    options: {
      A: 'outputs.logits 或 outputs[0]',
      B: 'outputs.predictions',
      C: 'outputs.probabilities',
      D: 'outputs.labels'
    },
    answer: 'A',
    explanation: '当return_dict为True时（默认），模型输出是一个对象，可通过属性访问如outputs.logits。如果return_dict为False，输出是一个元组，可通过索引访问如outputs[0]获取logits。logits是分类任务的原始预测值。'
  },
  // ===== 归一化与相似度 (61-70) =====
  {
    id: 61,
    question: 'F.normalize(x, p=2, dim=-1)的作用是什么？',
    options: {
      A: '将张量沿指定维度进行L2归一化',
      B: '将张量转换为整数',
      C: '计算张量的范数',
      D: '将张量移到GPU'
    },
    answer: 'A',
    explanation: 'F.normalize(x, p=2, dim=-1)沿指定维度（默认最后一个维度）对张量进行L2归一化。归一化后该维度上每个向量的L2范数为1，公式为x / ||x||_2。这在计算余弦相似度前对向量进行归一化时非常常用。'
  },
  {
    id: 62,
    question: 'L2归一化的公式是什么？',
    options: {
      A: 'x_norm = x / ||x||_2',
      B: 'x_norm = x - mean(x)',
      C: 'x_norm = x * 2',
      D: 'x_norm = x + 1'
    },
    answer: 'A',
    explanation: 'L2归一化的公式为x_norm = x / ||x||_2，其中||x||_2是向量的L2范数（即各元素平方和的平方根）。归一化后向量的L2范数为1。F.normalize(x, p=2, dim=-1)即实现了这个操作。'
  },
  {
    id: 63,
    question: '以下哪个公式正确计算两个向量的余弦相似度？',
    options: {
      A: 'cos_sim(a, b) = (a . b) / (||a|| * ||b||)',
      B: 'cos_sim(a, b) = (||a|| * ||b||) / (a . b)',
      C: 'cos_sim(a, b) = (a . b) * ||a|| * ||b||',
      D: 'cos_sim(a, b) = a + b'
    },
    answer: 'A',
    explanation: '余弦相似度公式为cos_sim(a, b) = (a . b) / (||a|| * ||b||)，即两个向量的点积除以各自L2范数的乘积。值域为[-1, 1]，值越接近1表示两个向量越相似。如果向量已归一化，则余弦相似度等于点积。'
  },
  {
    id: 64,
    question: '在计算文本相似度时，为什么要先对嵌入向量进行L2归一化？',
    options: {
      A: '提高计算速度',
      B: '使余弦相似度简化为点积运算，且消除向量长度的影响',
      C: '减少内存使用',
      D: '防止数值溢出'
    },
    answer: 'B',
    explanation: '归一化后向量的L2范数为1，此时余弦相似度等于向量的点积。此外，归一化消除了向量长度的影响，使相似度计算只关注方向（角度），这在语义相似度比较中更为合理。'
  },
  {
    id: 65,
    question: '以下哪种方式可以正确导入F.normalize函数？',
    options: {
      A: 'import torch.nn.functional as F',
      B: 'import F from torch',
      C: 'import normalize',
      D: 'from torch import math'
    },
    answer: 'A',
    explanation: 'torch.nn.functional是PyTorch中包含各种函数式操作的模块，通常使用import torch.nn.functional as F导入。F.normalize、F.softmax、F.relu等常用函数都在此模块中。'
  },
  {
    id: 66,
    question: 'F.normalize(x, p=2, dim=1)中dim=1参数的作用是什么？',
    options: {
      A: '指定使用L2范数',
      B: '沿第1维度（列方向）进行归一化',
      C: '指定归一化的阶数',
      D: '指定批次大小'
    },
    answer: 'B',
    explanation: 'dim参数指定沿哪个维度进行归一化。dim=1表示沿第1维度归一化，即对该维度上的向量进行归一化。对于(batch_size, hidden_size)的张量，dim=1表示对每个样本的特征向量进行归一化。dim=-1表示沿最后一个维度。'
  },
  {
    id: 67,
    question: '以下代码的作用是什么？\nemb1 = F.normalize(emb1, p=2, dim=-1)\nemb2 = F.normalize(emb2, p=2, dim=-1)\nsimilarity = (emb1 @ emb2.T)',
    options: {
      A: '计算两个嵌入矩阵的余弦相似度',
      B: '计算两个嵌入矩阵的欧氏距离',
      C: '训练模型',
      D: '将嵌入矩阵展平'
    },
    answer: 'A',
    explanation: '先对两个嵌入矩阵进行L2归一化，然后用矩阵乘法计算余弦相似度。归一化后，向量点积等于余弦相似度。emb1 @ emb2.T的结果矩阵中每个元素表示emb1中对应行向量与emb2中对应行向量的余弦相似度。'
  },
  {
    id: 68,
    question: 'F.normalize(x, p=1, dim=-1)中p=1的作用是什么？',
    options: {
      A: '进行L2归一化',
      B: '进行L1归一化，即除以向量元素的绝对值之和',
      C: '计算L1距离',
      D: '将张量乘以1'
    },
    answer: 'B',
    explanation: 'p参数指定归一化的范数阶数。p=1使用L1范数（元素绝对值之和），p=2使用L2范数（元素平方和的平方根）。深度学习中常用p=2的L2归一化，因为它与余弦相似度的计算直接相关。'
  },
  {
    id: 69,
    question: '在PyTorch中，以下哪个操作计算两个一维向量的点积？',
    options: {
      A: 'a @ b 或 torch.dot(a, b)',
      B: 'a * b',
      C: 'a + b',
      D: 'a - b'
    },
    answer: 'A',
    explanation: '@运算符或torch.dot()计算两个一维向量的点积。点积是对应元素相乘后求和。a * b是逐元素乘法，结果仍是一维向量而非标量。对于二维矩阵，@运算符计算矩阵乘法。'
  },
  {
    id: 70,
    question: '以下关于余弦相似度和欧氏距离的说法，正确的是？',
    options: {
      A: '两者完全等价',
      B: '余弦相似度衡量方向相似性，欧氏距离衡量绝对距离',
      C: '余弦相似度值越大表示越不相似',
      D: '欧氏距离值越大表示越相似'
    },
    answer: 'B',
    explanation: '余弦相似度衡量两个向量方向的相似性，值域为[-1, 1]，越接近1越相似。欧氏距离衡量两个向量的绝对距离，值域为[0, 正无穷)，越小越相似。在文本嵌入任务中，余弦相似度通常更合适，因为它不受向量长度影响。'
  },
  // ===== softmax与注意力掩码 (71-80) =====
  {
    id: 71,
    question: 'softmax函数的作用是什么？',
    options: {
      A: '将输入向量转换为概率分布，所有元素之和为1',
      B: '找出向量中的最大值',
      C: '对向量进行归一化使L2范数为1',
      D: '将向量展平'
    },
    answer: 'A',
    explanation: 'softmax函数将任意实数向量转换为概率分布。它对每个元素计算exp(x_i) / sum(exp(x_j))，使得所有输出元素为正且和为1。常用于多分类任务的最后一层，将模型输出转换为类别概率。'
  },
  {
    id: 72,
    question: '以下代码的作用是什么？\nprobs = F.softmax(logits, dim=-1)',
    options: {
      A: '将logits转换为概率分布',
      B: '计算logits的均值',
      C: '将logits归一化为L2范数为1',
      D: '找出logits中的最大值'
    },
    answer: 'A',
    explanation: 'F.softmax(logits, dim=-1)沿最后一个维度对logits应用softmax函数，将其转换为概率分布。每个元素为正且沿指定维度的和为1。dim=-1表示沿最后一个维度操作，在分类任务中通常对应类别维度。'
  },
  {
    id: 73,
    question: '在注意力机制中，attention mask的主要作用是什么？',
    options: {
      A: '加速矩阵运算',
      B: '指定哪些位置可以参与注意力计算，哪些位置被屏蔽',
      C: '减少模型参数量',
      D: '增加模型的层数'
    },
    answer: 'B',
    explanation: 'attention mask用于指定注意力计算中哪些位置可以参与、哪些位置被屏蔽。被屏蔽的位置在softmax前被设为负无穷大，经softmax后注意力权重接近0，从而不参与信息聚合。常用于处理变长序列的填充位置。'
  },
  {
    id: 74,
    question: '以下代码的作用是什么？\nscores = scores.masked_fill(mask == 0, float(\u201c-inf\u201d))',
    options: {
      A: '将mask为0对应位置的score设为负无穷',
      B: '将mask为0对应位置的score设为0',
      C: '将所有score设为负无穷',
      D: '删除mask为0的位置'
    },
    answer: 'A',
    explanation: 'masked_fill(mask, value)将mask中为True位置的原张量元素替换为value。在注意力计算中，将填充位置的注意力分数设为负无穷，经softmax后这些位置的注意力权重接近0，从而不参与信息聚合。'
  },
  {
    id: 75,
    question: '在处理变长序列时，padding mask的作用是什么？',
    options: {
      A: '增加序列长度',
      B: '防止模型关注填充位置，使注意力计算忽略padding token',
      C: '加速训练过程',
      D: '减少模型参数'
    },
    answer: 'B',
    explanation: '在批量处理变长序列时，需要将短序列填充到相同长度。padding mask确保模型在注意力计算时忽略这些填充位置，不会将填充token的信息聚合到真实token的表示中，保证推理结果的正确性。'
  },
  {
    id: 76,
    question: '以下代码的输出形状是什么？\nlogits = torch.randn(2, 3)\nprobs = F.softmax(logits, dim=1)',
    options: {
      A: 'torch.Size([2])',
      B: 'torch.Size([3])',
      C: 'torch.Size([2, 3])',
      D: 'torch.Size([3, 2])'
    },
    answer: 'C',
    explanation: 'softmax不改变张量的形状。logits形状为(2, 3)，沿dim=1应用softmax后，每一行的3个元素被转换为概率分布，输出形状仍为(2, 3)，但每行元素之和为1。'
  },
  {
    id: 77,
    question: '在注意力计算中，被mask的位置在softmax之前通常被设为什么值？',
    options: {
      A: '0',
      B: '1',
      C: '负无穷大（如-1e9或更小的值）',
      D: '正无穷大'
    },
    answer: 'C',
    explanation: '在softmax之前，被mask位置的注意力分数设为负无穷大。这样经过softmax后，这些位置的权重接近0，不会影响其他位置的概率分布。实际代码中常用-1e9或torch.finfo().min代替负无穷大以避免数值问题。'
  },
  {
    id: 78,
    question: '注意力权重（attention weights）经过softmax后具有什么性质？',
    options: {
      A: '所有元素为整数',
      B: '每行（或每列）元素之和为1，且每个元素在(0, 1)之间',
      C: '每行元素之和为0',
      D: '所有元素相等'
    },
    answer: 'B',
    explanation: '注意力权重经过softmax后，沿指定维度的元素之和为1，每个元素在0到1之间。这表示每个query对各个key的注意力分配比例，权重越大表示越关注对应的key。'
  },
  {
    id: 79,
    question: '因果掩码（causal mask）在Transformer解码器中的作用是什么？',
    options: {
      A: '加速计算',
      B: '确保每个位置只能关注当前及之前的位置，不能关注未来位置',
      C: '减少参数量',
      D: '增加序列长度'
    },
    answer: 'B',
    explanation: '因果掩码（也称为三角掩码）用于Transformer解码器，确保在生成第t个token时只能看到第1到第t个token的信息，不能看到未来第t+1及以后的token。这是一个下三角矩阵，上三角部分被mask为负无穷。'
  },
  {
    id: 80,
    question: '在自注意力计算中，attention mask的形状通常是什么？',
    options: {
      A: '(batch_size,)',
      B: '(batch_size, seq_len)',
      C: '(batch_size, seq_len, seq_len) 或可广播为此形状',
      D: '(seq_len, hidden_size)'
    },
    answer: 'C',
    explanation: '自注意力中mask的形状通常为(batch_size, 1, seq_len)或(batch_size, seq_len, seq_len)，可广播到注意力分数矩阵的形状(batch_size, num_heads, seq_len, seq_len)。mask的每个位置指示对应的query-key对是否允许参与注意力计算。'
  },
  // ===== 张量属性与索引 (81-90) =====
  {
    id: 81,
    question: '以下代码的输出类型是什么？\nx = torch.tensor([5.0])\nx.item()',
    options: {
      A: 'tensor',
      B: 'Python float',
      C: 'Python int',
      D: 'Python list'
    },
    answer: 'B',
    explanation: '.item()方法将只有一个元素的张量转换为Python标量。对于浮点型张量返回float，对于整型张量返回int。注意.item()只能用于单元素张量，否则会报错。常用于获取损失值或预测结果。'
  },
  {
    id: 82,
    question: '以下代码的输出是什么？\nx = torch.randn(2, 3, 4)\nx.dim()',
    options: {
      A: '2',
      B: '3',
      C: '4',
      D: '24'
    },
    answer: 'B',
    explanation: '.dim()返回张量的维度数（即rank）。x形状为(2, 3, 4)，是一个三维张量，所以dim()返回3。.dim()等价于len(x.shape)。'
  },
  {
    id: 83,
    question: '以下代码的输出是什么？\nx = torch.randn(3, 4, 5)\nx.shape',
    options: {
      A: 'torch.Size([3, 4, 5])',
      B: 'torch.Size([5, 4, 3])',
      C: 'torch.Size([12])',
      D: 'torch.Size([60])'
    },
    answer: 'A',
    explanation: '.shape属性返回张量的形状，是一个torch.Size对象。torch.randn(3, 4, 5)创建三维张量，shape返回torch.Size([3, 4, 5])。torch.Size是tuple的子类，支持索引和迭代。'
  },
  {
    id: 84,
    question: '以下代码的输出是什么？\nx = torch.tensor([[1, 2], [3, 4]])\nx.size()',
    options: {
      A: 'torch.Size([2])',
      B: 'torch.Size([2, 2])',
      C: 'torch.Size([4])',
      D: 'torch.Size([2, 2, 1])'
    },
    answer: 'B',
    explanation: '.size()方法返回张量的形状，与.shape属性等价。x是一个2行2列的二维张量，size()返回torch.Size([2, 2])。也可以指定dim参数获取特定维度的大小，如x.size(0)返回2。'
  },
  {
    id: 85,
    question: '以下代码的输出是什么？\nx = torch.tensor([10, 20, 30])\nx[0]',
    options: {
      A: 'tensor(10)',
      B: 'tensor(20)',
      C: 'tensor(30)',
      D: 'tensor([10, 20, 30])'
    },
    answer: 'A',
    explanation: '使用索引访问张量元素与Python列表类似。x[0]访问第0个元素，返回tensor(10)。注意返回值仍是张量，使用.item()可获取Python标量。负索引从末尾开始，如x[-1]返回tensor(30)。'
  },
  {
    id: 86,
    question: '以下代码的输出是什么？\nx = torch.tensor([1, 2, 3, 4, 5])\nx[1:4]',
    options: {
      A: 'tensor([1, 2, 3])',
      B: 'tensor([2, 3, 4])',
      C: 'tensor([2, 3, 4, 5])',
      D: 'tensor([1, 2, 3, 4])'
    },
    answer: 'B',
    explanation: '切片操作与Python列表类似。x[1:4]返回索引1到3（不包含4）的元素，即[2, 3, 4]。切片不会复制数据，而是返回原张量的视图。'
  },
  {
    id: 87,
    question: '以下代码的输出是什么？\nx = torch.tensor([10, 20, 30, 40])\nx[-1]',
    options: {
      A: 'tensor(10)',
      B: 'tensor(20)',
      C: 'tensor(30)',
      D: 'tensor(40)'
    },
    answer: 'D',
    explanation: '负索引从末尾开始计数。x[-1]访问最后一个元素，返回tensor(40)。同理x[-2]返回tensor(30)。这在不知道张量长度时访问末尾元素非常方便。'
  },
  {
    id: 88,
    question: '以下代码的输出是什么？\nx = torch.randn(2, 3, 4)\nx.numel()',
    options: {
      A: '2',
      B: '3',
      C: '4',
      D: '24'
    },
    answer: 'D',
    explanation: '.numel()返回张量中元素的总数（number of elements）。x形状为(2, 3, 4)，总元素数为2*3*4=24。.numel()等价于各维度大小的乘积。'
  },
  {
    id: 89,
    question: '以下代码的输出是什么？\nx = torch.tensor([[1, 2, 3], [4, 5, 6]])\nx[1, 2]',
    options: {
      A: 'tensor(1)',
      B: 'tensor(3)',
      C: 'tensor(6)',
      D: 'tensor(5)'
    },
    answer: 'C',
    explanation: '对于二维张量，x[i, j]访问第i行第j列的元素。x[1, 2]访问第1行第2列，即6，返回tensor(6)。也可以使用x[1][2]的方式，但x[1, 2]更高效，因为它只索引一次。'
  },
  {
    id: 90,
    question: '以下代码的输出是什么？\nx = torch.tensor([1, 2, 3, 4, 5])\nmask = x > 3\nx[mask]',
    options: {
      A: 'tensor([1, 2, 3])',
      B: 'tensor([4, 5])',
      C: 'tensor([1, 2, 3, 4, 5])',
      D: 'tensor([3, 4, 5])'
    },
    answer: 'B',
    explanation: '布尔索引用掩码选择满足条件的元素。x > 3生成布尔张量[False, False, False, True, True]，x[mask]返回True对应位置的元素，即[4, 5]。这是PyTorch中非常强大的数据筛选方式。'
  },
  // ===== 批处理与填充 (91-100) =====
  {
    id: 91,
    question: '在深度学习中，为什么要使用批次（batch）处理数据？',
    options: {
      A: '批次处理可以逐个处理样本，更精确',
      B: '批次处理可以利用GPU并行计算，提高效率并使训练更稳定',
      C: '批次处理会降低计算效率',
      D: '批次处理只能用于CPU计算'
    },
    answer: 'B',
    explanation: '批次处理将多个样本组成一个批次一起输入模型，可以充分利用GPU的并行计算能力，提高处理效率。此外，批次训练使梯度估计更稳定（基于多个样本的平均梯度），有助于模型收敛。批次大小是重要的超参数。'
  },
  {
    id: 92,
    question: '在批次处理中，为什么要对变长序列进行填充（padding）？',
    options: {
      A: '增加数据量',
      B: '使同一批次内所有序列长度一致，满足张量的矩形形状要求',
      C: '提高模型精度',
      D: '减少内存使用'
    },
    answer: 'B',
    explanation: 'PyTorch张量要求每个维度的尺寸固定，因此同一批次内的所有序列必须具有相同长度。对于变长序列，通过在短序列末尾添加特殊的padding token使其长度与批次中最长序列一致，从而组成一个规则的矩形张量。'
  },
  {
    id: 93,
    question: '以下代码的作用是什么？\ninputs = tokenizer(texts, padding=True, return_tensors=\u201cpt\u201d)\nattention_mask = inputs.attention_mask',
    options: {
      A: '获取输入的token IDs',
      B: '获取注意力掩码，标识哪些位置是真实token，哪些是填充',
      C: '获取模型的输出',
      D: '获取词向量'
    },
    answer: 'B',
    explanation: '当padding为True时，分词器会自动对短序列填充padding token，并生成attention_mask。attention_mask中1表示真实token，0表示填充token。模型在计算时利用此掩码忽略填充位置。'
  },
  {
    id: 94,
    question: '在分词器中设置padding_side的作用是什么？',
    options: {
      A: '控制模型的输出方向',
      B: '控制padding token添加在序列的开头还是末尾',
      C: '控制学习率的大小',
      D: '控制批次大小'
    },
    answer: 'B',
    explanation: 'padding_side指定padding token添加的位置。设为left在序列开头填充，设为right在序列末尾填充。大多数编码器模型使用右填充，而某些解码器模型（如GPT）可能需要左填充。'
  },
  {
    id: 95,
    question: '以下关于批次大小（batch size）的说法，正确的是？',
    options: {
      A: '批次大小越大越好',
      B: '批次大小越小越好',
      C: '批次大小需要在GPU内存和训练效率之间权衡',
      D: '批次大小不影响训练结果'
    },
    answer: 'C',
    explanation: '批次大小是重要的超参数。较大的批次可以提高GPU利用率和训练速度，但需要更多显存，且可能降低泛化性能。较小的批次梯度更嘈杂但可能帮助跳出局部最优。需要在GPU内存限制、训练效率和模型性能之间权衡选择。'
  },
  {
    id: 96,
    question: '以下关于动态填充（dynamic padding）的说法，正确的是？',
    options: {
      A: '每个批次填充到数据集中最长的序列长度',
      B: '每个批次填充到该批次内最长的序列长度，而不是固定长度',
      C: '不需要任何填充',
      D: '每个批次填充到长度1'
    },
    answer: 'B',
    explanation: '动态填充是指每个批次内填充到该批次中最长序列的长度，而不是填充到固定的最大长度。这样可以减少不必要的填充token，提高计算效率。HuggingFace的DataCollatorWithPadding可实现动态填充。'
  },
  {
    id: 97,
    question: '在attention_mask中，0和1分别代表什么？',
    options: {
      A: '0代表真实token，1代表填充token',
      B: '0代表填充token，1代表真实token',
      C: '0代表GPU，1代表CPU',
      D: '0代表训练模式，1代表评估模式'
    },
    answer: 'B',
    explanation: 'attention_mask中1表示该位置是真实的token，模型应该关注；0表示该位置是填充token，模型应该忽略。例如序列长度为3，填充到5，则attention_mask为[1, 1, 1, 0, 0]。'
  },
  {
    id: 98,
    question: '以下代码的作用是什么？\ninputs = tokenizer(text, max_length=512, truncation=True)',
    options: {
      A: '将文本翻译成英文',
      B: '将文本分词，超过512个token时截断，确保不超过最大长度',
      C: '加载预训练模型',
      D: '计算文本相似度'
    },
    answer: 'B',
    explanation: '当truncation为True且指定max_length时，分词器会截断超过max_length的序列，确保输出不超过指定长度。这在处理长文本时非常重要，因为大多数Transformer模型有最大输入长度限制（如BERT为512）。'
  },
  {
    id: 99,
    question: '以下代码的作用是什么？\ninputs = tokenizer(texts, padding=True, max_length=128, truncation=True, return_tensors=\u201cpt\u201d)',
    options: {
      A: '批量分词文本，填充到128，超过128截断，返回PyTorch张量',
      B: '创建一个128维的词向量',
      C: '训练模型128轮',
      D: '将文本翻译成128种语言'
    },
    answer: 'A',
    explanation: '这行代码完成以下操作：批量分词多个文本，padding为True将短序列填充，max_length为128指定最大长度，truncation为True截断超长序列，return_tensors设为pt返回PyTorch张量格式。这是NLP任务中最常见的预处理代码。'
  },
  {
    id: 100,
    question: '以下代码的作用是什么？\nwith torch.no_grad():\n    outputs = model(**inputs)\n    logits = outputs.logits\n    predictions = logits.argmax(dim=-1)',
    options: {
      A: '训练模型',
      B: '在无梯度模式下批量推理，获取预测类别',
      C: '保存模型',
      D: '加载模型权重'
    },
    answer: 'B',
    explanation: '这段代码展示了标准的批量推理流程：torch.no_grad()禁用梯度计算节省内存，model(**inputs)进行前向传播，outputs.logits获取模型输出，argmax(dim=-1)沿最后一个维度取最大值索引作为预测类别。'
  }
];