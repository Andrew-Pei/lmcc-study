const QUIZ_PYTHON = [
  {
    id: 1,
    question: '在Python中，type(3.14)的返回结果是什么？',
    options: {
      A: '<class “int”>',
      B: '<class “float”>',
      C: '<class “double”>',
      D: '<class “number”>'
    },
    answer: 'B',
    explanation: 'Python中没有double类型，带小数点的数字统称为float（浮点数）。3.14是一个浮点数，所以type(3.14)返回float类型。'
  },
  {
    id: 2,
    question: '在Python中，表达式True + True的值是多少？',
    options: {
      A: '2',
      B: 'True',
      C: '1',
      D: '报错'
    },
    answer: 'A',
    explanation: '在Python中，布尔值True等于整数1，False等于整数0。因此True + True等于1 + 1 = 2。布尔类型是int的子类。'
  },
  {
    id: 3,
    question: '以下哪种方式可以正确创建一个空集合（set）？',
    options: {
      A: 's = {}',
      B: 's = set()',
      C: 's = []',
      D: 's = ()'
    },
    answer: 'B',
    explanation: '使用{}创建的是空字典（dict）而不是空集合。创建空集合必须使用set()。可以通过type({})验证，其结果为dict类型。'
  },
  {
    id: 4,
    question: '在Python中，type([1, 2, 3])的结果是什么？',
    options: {
      A: '<class “tuple”>',
      B: '<class “array”>',
      C: '<class “list”>',
      D: '<class “set”>'
    },
    answer: 'C',
    explanation: '用方括号[]括起来的数据结构是列表（list）。列表是有序、可变的序列类型，可以包含不同类型的元素。'
  },
  {
    id: 5,
    question: '以下哪种数据类型是不可变的（immutable）？',
    options: {
      A: 'list',
      B: 'dict',
      C: 'set',
      D: 'tuple'
    },
    answer: 'D',
    explanation: '元组（tuple）是不可变的，创建后不能修改其元素。列表、字典和集合都是可变的，可以添加、删除或修改元素。'
  },
  {
    id: 6,
    question: '在Python中，如何检查一个变量的类型？',
    options: {
      A: 'typeof(x)',
      B: 'type(x)',
      C: 'gettype(x)',
      D: 'typeof x'
    },
    answer: 'B',
    explanation: 'Python使用type()函数来检查变量的类型。例如type(42)返回int类型，type(“hello”)返回str类型。这与JavaScript的typeof不同。'
  },
  {
    id: 7,
    question: '在Python中，int(“42”)的结果是什么？',
    options: {
      A: '“42”',
      B: '42.0',
      C: '42',
      D: '报错'
    },
    answer: 'C',
    explanation: 'int()函数可以将数字字符串转换为整数。int(“42”)将字符串“42”转换为整数42。注意结果是整数类型，不是字符串也不是浮点数。'
  },
  {
    id: 8,
    question: '在Python中，bool(“”)的返回值是什么？',
    options: {
      A: 'True',
      B: 'False',
      C: 'None',
      D: '报错'
    },
    answer: 'B',
    explanation: '空字符串“”在布尔上下文中被视为False。bool()函数对空字符串返回False，对非空字符串返回True。这是Python的假值规则。'
  },
  {
    id: 9,
    question: '在Python中，如何正确创建一个只包含一个元素的元组？',
    options: {
      A: 't = (1)',
      B: 't = (1,)',
      C: 't = [1]',
      D: 't = {1}'
    },
    answer: 'B',
    explanation: '(1)只是普通整数1加括号，不是元组。创建单元素元组必须在元素后加逗号，即(1,)。不加逗号Python会将其视为普通表达式。'
  },
  {
    id: 10,
    question: '在Python中，type({“name”: “Tom”})的结果是什么？',
    options: {
      A: '<class “list”>',
      B: '<class “set”>',
      C: '<class “tuple”>',
      D: '<class “dict”>'
    },
    answer: 'D',
    explanation: '用花括号{}包裹的键值对数据结构是字典（dict）。字典以键值对形式存储数据，例如{“name”: “Tom”}中“name”是键，“Tom”是值。'
  },
  {
    id: 11,
    question: '在Python中，“hello”.replace(“l”, “L”)的结果是什么？',
    options: {
      A: 'heLLo',
      B: 'heLlo',
      C: 'heLo',
      D: 'hello'
    },
    answer: 'A',
    explanation: 'replace()方法将字符串中所有指定的子串替换为新子串。“hello”中所有的字母l都会被替换为L，结果是heLLo。'
  },
  {
    id: 12,
    question: '在Python中，“a,b,c”.split(“,”)的结果是什么？',
    options: {
      A: '“abc”',
      B: '[“a”, “b”, “c”]',
      C: '(“a”, “b”, “c”)',
      D: '“a b c”'
    },
    answer: 'B',
    explanation: 'split()方法按指定分隔符将字符串分割成列表。“a,b,c”以逗号为分隔符，split(“,”)返回列表[“a”, “b”, “c”]。'
  },
  {
    id: 13,
    question: '在Python中，“,”.join([“a”, “b”, “c”])的结果是什么？',
    options: {
      A: '[“a”, “b”, “c”]',
      B: 'a,b,c',
      C: 'abc',
      D: 'a b c'
    },
    answer: 'B',
    explanation: 'join()方法将列表中的字符串用指定字符连接起来。“,”.join([“a”,“b”,“c”])用逗号连接各元素，结果为字符串a,b,c。'
  },
  {
    id: 14,
    question: '在Python中，以下f-string的输出是什么？\nname = “World”\nprint(f“Hello, {name}!”)',
    options: {
      A: 'Hello, {name}!',
      B: 'Hello, World!',
      C: 'Hello, name!',
      D: '报错'
    },
    answer: 'B',
    explanation: 'f-string（格式化字符串）在引号前加字母f，花括号{}内的变量会被替换为其值。{name}会被替换为变量name的值“World”。'
  },
  {
    id: 15,
    question: '在Python中，“  hello  ”.strip()的结果是什么？',
    options: {
      A: 'hello',
      B: '  hello',
      C: 'hello  ',
      D: '  hello  '
    },
    answer: 'A',
    explanation: 'strip()方法移除字符串首尾的空白字符（包括空格、制表符、换行符）。“  hello  ”.strip()去掉首尾空格后结果为hello。'
  },
  {
    id: 16,
    question: '在Python中，“hello”.upper()的结果是什么？',
    options: {
      A: 'Hello',
      B: 'HELLO',
      C: 'hello',
      D: '报错'
    },
    answer: 'B',
    explanation: 'upper()方法将字符串中所有小写字母转换为大写字母。“hello”.upper()的结果是HELLO。对应地，lower()方法将所有字母转为小写。'
  },
  {
    id: 17,
    question: '在Python中，“hello”[1:3]的结果是什么？',
    options: {
      A: 'he',
      B: 'el',
      C: 'ell',
      D: 'hel'
    },
    answer: 'B',
    explanation: '字符串切片[1:3]表示从索引1开始（含）到索引3结束（不含）。“hello”中索引1是e，索引2是l，所以结果是el。'
  },
  {
    id: 18,
    question: '在Python中，len(“中文测试”)的结果是什么？',
    options: {
      A: '4',
      B: '8',
      C: '12',
      D: '报错'
    },
    answer: 'A',
    explanation: '在Python 3中，字符串默认使用Unicode编码，每个中文字符算一个字符。len(“中文测试”)返回4，因为有四个中文字符。'
  },
  {
    id: 19,
    question: '在Python中，“Hello” + “ ” + “World”的结果是什么？',
    options: {
      A: 'HelloWorld',
      B: 'Hello World',
      C: 'Hello  World',
      D: '报错'
    },
    answer: 'B',
    explanation: '加号+用于字符串拼接，将多个字符串连接成一个。“Hello” + “ ” + “World”将三个字符串按顺序拼接，结果为Hello World。'
  },
  {
    id: 20,
    question: '在Python中，“{:.2f}”.format(3.14159)的结果是什么？',
    options: {
      A: '3.14',
      B: '3.14159',
      C: '3.15',
      D: '3.1'
    },
    answer: 'A',
    explanation: 'format方法的格式说明符:.2f表示保留两位小数。3.14159保留两位小数后为3.14（注意是截断到两位小数，不是四舍五入到3.14）。'
  },
  {
    id: 21,
    question: '在Python中，定义函数使用哪个关键字？',
    options: {
      A: 'function',
      B: 'def',
      C: 'func',
      D: 'define'
    },
    answer: 'B',
    explanation: 'Python使用def关键字定义函数，语法为：def 函数名(参数):。这与JavaScript的function关键字不同。例如：def greet(name): ...'
  },
  {
    id: 22,
    question: '以下代码的输出是什么？\ndef greet(name=“World”):\n    return f“Hello, {name}!”\nprint(greet())',
    options: {
      A: 'Hello, !',
      B: 'Hello, World!',
      C: '报错',
      D: 'Hello, name!'
    },
    answer: 'B',
    explanation: '函数greet的参数name有默认值“World”。当调用greet()不传参数时，name使用默认值“World”，所以输出Hello, World!。'
  },
  {
    id: 23,
    question: '在Python中，如果一个函数没有return语句，它返回什么？',
    options: {
      A: '0',
      B: '空字符串',
      C: 'None',
      D: '报错'
    },
    answer: 'C',
    explanation: '如果函数没有return语句或return后没有值，Python会默认返回None。None是Python中表示“无”的特殊值，类似于其他语言的null。'
  },
  {
    id: 24,
    question: '以下代码的输出是什么？\ndef add(*args):\n    return sum(args)\nprint(add(1, 2, 3))',
    options: {
      A: '6',
      B: '(1, 2, 3)',
      C: '报错',
      D: '123'
    },
    answer: 'A',
    explanation: '*args收集所有位置参数为一个元组。add(1, 2, 3)中args为(1, 2, 3)，sum(args)计算1+2+3=6。*args允许函数接受任意数量的参数。'
  },
  {
    id: 25,
    question: '以下代码的输出是什么？\ndef show(**kwargs):\n    return kwargs\nprint(show(a=1, b=2))',
    options: {
      A: '(a=1, b=2)',
      B: '[“a”, “b”]',
      C: '{“a”: 1, “b”: 2}',
      D: '报错'
    },
    answer: 'C',
    explanation: '**kwargs收集所有关键字参数为一个字典。show(a=1, b=2)中kwargs为{“a”: 1, “b”: 2}。print输出字典的内容。'
  },
  {
    id: 26,
    question: '在Python中，以下类型注解的含义是什么？\ndef add(a: int, b: int) -> int:\n    return a + b',
    options: {
      A: 'a和b必须是整数，返回值必须是整数',
      B: 'a和b会被转换为整数',
      C: '函数只能接受整数参数',
      D: '这是函数注释，不影响运行'
    },
    answer: 'A',
    explanation: '类型注解表示参数和返回值的预期类型。a: int表示a应为int类型，-> int表示返回值应为int类型。但类型注解只是提示，不会强制检查。'
  },
  {
    id: 27,
    question: '以下代码的输出是什么？\nsquare = lambda x: x ** 2\nprint(square(5))',
    options: {
      A: '10',
      B: '25',
      C: '5',
      D: '报错'
    },
    answer: 'B',
    explanation: 'lambda是匿名函数，lambda x: x ** 2定义了一个计算x平方的函数。square(5)计算5的平方，即5 ** 2 = 25。'
  },
  {
    id: 28,
    question: '在Python中，以下函数可以返回几个值？\ndef swap(a, b):\n    return b, a',
    options: {
      A: '只能返回1个值',
      B: '返回2个值，以元组形式',
      C: '返回2个独立的值',
      D: '报错'
    },
    answer: 'B',
    explanation: 'Python函数可以返回多个值，实际上返回的是一个元组。return b, a等价于return (b, a)。可以用x, y = swap(1, 2)解包。'
  },
  {
    id: 29,
    question: '以下代码的输出是什么？\ndef info(name, age=18):\n    return f“{name} is {age}”\nprint(info(“Tom”, age=20))',
    options: {
      A: 'Tom is 18',
      B: 'Tom is 20',
      C: '报错',
      D: 'Tom is age'
    },
    answer: 'B',
    explanation: '调用函数时使用关键字参数age=20，显式指定age的值为20，覆盖了默认值18。所以结果为Tom is 20。'
  },
  {
    id: 30,
    question: '以下代码的输出是什么？\nx = 10\ndef foo():\n    x = 20\n    print(x)\nfoo()\nprint(x)',
    options: {
      A: '20 20',
      B: '10 20',
      C: '20 10',
      D: '10 10'
    },
    answer: 'C',
    explanation: '函数内部的x = 20创建了一个局部变量，不影响全局变量x。所以foo()内部打印20，函数外部打印全局变量x的值10。'
  },
  {
    id: 31,
    question: '在Python中，定义类使用哪个关键字？',
    options: {
      A: 'class',
      B: 'Class',
      C: 'def',
      D: 'struct'
    },
    answer: 'A',
    explanation: 'Python使用class关键字定义类（注意小写）。例如：class Dog: 定义了一个名为Dog的类。类名通常使用驼峰命名法。'
  },
  {
    id: 32,
    question: '在Python类中，__init__方法的作用是什么？',
    options: {
      A: '销毁对象时调用',
      B: '初始化对象的属性',
      C: '定义类的静态方法',
      D: '返回对象的字符串表示'
    },
    answer: 'B',
    explanation: '__init__是构造方法，在创建对象时自动调用，用于初始化对象的属性。例如：def __init__(self, name): self.name = name。'
  },
  {
    id: 33,
    question: '在Python类的方法中，self参数的作用是什么？',
    options: {
      A: '表示类的父类',
      B: '指向当前实例对象本身',
      C: '表示类的静态属性',
      D: '是一个可选参数'
    },
    answer: 'B',
    explanation: 'self指向当前正在操作的实例对象本身。通过self可以访问实例的属性和其他方法。调用方法时Python自动传入self，不需要手动指定。'
  },
  {
    id: 34,
    question: '以下代码的输出是什么？\nclass Cat:\n    def speak(self):\n        return “Meow”\nc = Cat()\nprint(c.speak())',
    options: {
      A: 'Meow',
      B: 'None',
      C: '报错',
      D: 'Cat'
    },
    answer: 'A',
    explanation: 'Cat类定义了speak方法返回“Meow”。创建Cat实例c后，调用c.speak()会执行该方法并返回“Meow”。self参数由Python自动传入。'
  },
  {
    id: 35,
    question: '在Python中，子类继承父类使用什么语法？',
    options: {
      A: 'class Child(Parent):',
      B: 'class Child extends Parent:',
      C: 'class Child inherits Parent:',
      D: 'class Child: Parent'
    },
    answer: 'A',
    explanation: 'Python在类名后的括号中写父类名来表示继承。class Child(Parent):表示Child继承自Parent。子类可以访问父类的属性和方法。'
  },
  {
    id: 36,
    question: '在Python中，super()函数的作用是什么？',
    options: {
      A: '返回父类对象，调用父类方法',
      B: '创建一个新对象',
      C: '删除当前对象',
      D: '返回类的名称'
    },
    answer: 'A',
    explanation: 'super()返回父类对象，常用于在子类中调用父类的方法。例如：super().__init__(name)可以调用父类的构造方法，避免重复代码。'
  },
  {
    id: 37,
    question: '以下代码中，count属于什么属性？\nclass Counter:\n    count = 0\n    def add(self):\n        Counter.count += 1',
    options: {
      A: '实例属性',
      B: '类属性',
      C: '私有属性',
      D: '局部变量'
    },
    answer: 'B',
    explanation: 'count定义在类体中但在方法之外，是类属性（也叫静态属性）。类属性属于类本身，所有实例共享同一个类属性。通过Counter.count访问。'
  },
  {
    id: 38,
    question: '在Python中，__str__方法的作用是什么？',
    options: {
      A: '比较两个对象是否相等',
      B: '返回对象的字符串表示',
      C: '初始化对象',
      D: '销毁对象'
    },
    answer: 'B',
    explanation: '__str__方法返回对象的字符串表示，在使用print()或str()时自动调用。如果没有定义__str__，默认返回类似<__main__.ClassName object at 0x...>的形式。'
  },
  {
    id: 39,
    question: '在Python中，@classmethod装饰器的作用是什么？',
    options: {
      A: '将方法标记为静态方法',
      B: '将方法标记为类方法，第一个参数是类本身',
      C: '将方法标记为实例方法',
      D: '将方法标记为私有方法'
    },
    answer: 'B',
    explanation: '@classmethod装饰的方法是类方法，第一个参数是类本身（通常命名为cls），而不是实例。可以通过类名直接调用，也可以通过实例调用。'
  },
  {
    id: 40,
    question: '在Python中，@property装饰器的作用是什么？',
    options: {
      A: '将方法变为只读属性',
      B: '将属性变为私有',
      C: '将方法变为静态方法',
      D: '将方法标记为抽象方法'
    },
    answer: 'A',
    explanation: '@property装饰器将方法转换为只读属性，可以像访问属性一样调用方法而不需要括号。常用于计算属性或对属性访问进行控制。'
  },
  {
    id: 41,
    question: '在Python中，open(“test.txt”, “r”)中“r”表示什么？',
    options: {
      A: '以二进制模式读取',
      B: '以只读模式打开文件',
      C: '以写入模式打开文件',
      D: '以追加模式打开文件'
    },
    answer: 'B',
    explanation: '“r”表示只读模式（read），是open函数的默认模式。以该模式打开的文件只能读取，不能写入。如果文件不存在会抛出FileNotFoundError。'
  },
  {
    id: 42,
    question: '在Python中，open(“test.txt”, “w”)的作用是什么？',
    options: {
      A: '读取文件内容',
      B: '写入文件，覆盖原有内容',
      C: '在文件末尾追加内容',
      D: '创建文件但不写入'
    },
    answer: 'B',
    explanation: '“w”表示写入模式（write）。如果文件存在会清空原有内容再写入，如果文件不存在会创建新文件。使用时要小心数据丢失。'
  },
  {
    id: 43,
    question: '以下哪种方式打开文件后不需要手动关闭文件？',
    options: {
      A: 'f = open(“file.txt”)',
      B: 'with open(“file.txt”) as f:',
      C: 'open(“file.txt”).read()',
      D: 'f = open(“file.txt”, “r”)'
    },
    answer: 'B',
    explanation: 'with语句（上下文管理器）会在代码块执行完毕后自动关闭文件，即使发生异常也会正确关闭。这是Python推荐的文件操作方式。'
  },
  {
    id: 44,
    question: '在Python中，读取包含中文的文本文件时，应该指定哪个参数？',
    options: {
      A: 'mode=“utf-8”',
      B: 'encoding=“utf-8”',
      C: 'charset=“utf-8”',
      D: 'code=“utf-8”'
    },
    answer: 'B',
    explanation: '使用encoding=“utf-8”参数指定文件编码为UTF-8。如果不指定，Windows默认使用GBK编码，可能导致读取中文文件时出现乱码或报错。'
  },
  {
    id: 45,
    question: '在Python中，readlines()方法的返回值是什么类型？',
    options: {
      A: '字符串',
      B: '列表',
      C: '元组',
      D: '字典'
    },
    answer: 'B',
    explanation: 'readlines()读取文件所有行并返回一个列表，每个元素是文件中的一行（包含换行符\\n）。例如读取三行文件，返回[“第一行\\n”, “第二行\\n”, “第三行\\n”]。'
  },
  {
    id: 46,
    question: '在Python中，file.write(“Hello”)的返回值是什么？',
    options: {
      A: '写入的字符串',
      B: '写入的字符数',
      C: 'None',
      D: 'True'
    },
    answer: 'B',
    explanation: 'write()方法返回写入的字符数。file.write(“Hello”)返回5，因为“Hello”有5个字符。可以用这个返回值验证是否写入成功。'
  },
  {
    id: 47,
    question: '在Python中，open(“log.txt”, “a”)中“a”表示什么？',
    options: {
      A: '以只读模式打开',
      B: '以追加模式打开，在末尾写入',
      C: '以覆盖模式打开',
      D: '以二进制模式打开'
    },
    answer: 'B',
    explanation: '“a”表示追加模式（append），在文件末尾添加新内容，不会清空原有内容。如果文件不存在则创建新文件。常用于日志文件的写入。'
  },
  {
    id: 48,
    question: '在Python中，read()和readline()的主要区别是什么？',
    options: {
      A: 'read()读取全部内容，readline()读取一行',
      B: 'read()读取一行，readline()读取全部',
      C: '两者完全相同',
      D: 'read()只读取数字，readline()只读取文字'
    },
    answer: 'A',
    explanation: 'read()一次性读取整个文件内容为一个字符串，readline()每次只读取一行。大文件推荐用readline()或逐行迭代，避免内存不足。'
  },
  {
    id: 49,
    question: '在Python中，使用open()打开文件后忘记close()可能导致什么问题？',
    options: {
      A: '文件内容丢失',
      B: '文件被锁定，无法再次打开',
      C: '系统资源泄露',
      D: 'Python程序崩溃'
    },
    answer: 'C',
    explanation: '忘记close()会导致文件描述符等系统资源泄露。虽然Python有垃圾回收机制会最终关闭文件，但不应依赖它。推荐使用with语句自动管理。'
  },
  {
    id: 50,
    question: '在Python中，要以二进制模式读取文件，应该使用哪种模式？',
    options: {
      A: '“r”',
      B: '“rb”',
      C: '“rt”',
      D: '“br”'
    },
    answer: 'B',
    explanation: '“rb”表示以二进制只读模式打开文件（read binary）。二进制模式读取的数据是bytes类型而非字符串，适用于图片、视频等非文本文件。'
  },
  {
    id: 51,
    question: '在Python中，json.loads()函数的作用是什么？',
    options: {
      A: '将JSON字符串解析为Python对象',
      B: '将Python对象转换为JSON字符串',
      C: '从文件读取JSON',
      D: '将JSON写入文件'
    },
    answer: 'A',
    explanation: 'json.loads()将JSON格式的字符串解析为Python对象。loads中的“s”代表string。例如json.loads(\'{“a”: 1}\')返回字典{“a”: 1}。'
  },
  {
    id: 52,
    question: '在Python中，json.dumps()函数的作用是什么？',
    options: {
      A: '将JSON字符串解析为Python对象',
      B: '将Python对象转换为JSON字符串',
      C: '从文件读取JSON',
      D: '将JSON写入文件'
    },
    answer: 'B',
    explanation: 'json.dumps()将Python对象转换为JSON格式的字符串。dumps中的“s”代表string。例如json.dumps({“a”: 1})返回字符串\'{“a”: 1}\'。'
  },
  {
    id: 53,
    question: '在Python中，json.load()和json.loads()的主要区别是什么？',
    options: {
      A: 'json.load()从文件读取，json.loads()从字符串解析',
      B: 'json.load()从字符串解析，json.loads()从文件读取',
      C: '两者完全相同',
      D: 'json.load()更快，json.loads()更慢'
    },
    answer: 'A',
    explanation: 'json.load()接受文件对象参数，直接从文件读取JSON数据。json.loads()接受字符串参数，从字符串解析JSON。load不带“s”处理文件，带“s”处理字符串。'
  },
  {
    id: 54,
    question: '在Python中，json.dump()和json.dumps()的主要区别是什么？',
    options: {
      A: 'json.dump()写入文件，json.dumps()返回字符串',
      B: 'json.dump()返回字符串，json.dumps()写入文件',
      C: '两者完全相同',
      D: 'json.dump()用于读取，json.dumps()用于写入'
    },
    answer: 'A',
    explanation: 'json.dump()将Python对象以JSON格式写入文件，需要传入文件对象参数。json.dumps()返回JSON字符串但不写入文件。dump不带“s”操作文件。'
  },
  {
    id: 55,
    question: '在Python中，以下哪种方式可以正确读取JSONL格式的文件？',
    options: {
      A: 'import json; data = json.load(“file.jsonl”)',
      B: 'import json; data = [json.loads(line) for line in open(“file.jsonl”)]',
      C: 'import json; data = json.loads(open(“file.jsonl”).read())',
      D: 'import json; data = json.read(“file.jsonl”)'
    },
    answer: 'B',
    explanation: 'JSONL文件每行是一个独立的JSON对象，需要逐行解析。json.load()只能读取整个文件作为单个JSON，json.loads()解析字符串。正确做法是逐行读取并用json.loads()解析每一行。'
  },
  {
    id: 56,
    question: '在Python中，json.dumps({“name”: “张三”}, ensure_ascii=False)的作用是什么？',
    options: {
      A: '将中文字符转为ASCII编码',
      B: '保留中文字符，不转为\\uXXXX形式',
      C: '删除中文字符',
      D: '报错'
    },
    answer: 'B',
    explanation: '默认情况下json.dumps()会将非ASCII字符（如中文）转为\\uXXXX转义序列。设置ensure_ascii=False可以保留原始中文字符，使JSON字符串更易读。'
  },
  {
    id: 57,
    question: '在Python中，json.dumps(data, indent=2)中indent参数的作用是什么？',
    options: {
      A: '设置JSON的最大深度',
      B: '设置缩进空格数，美化输出',
      C: '设置JSON的键的数量',
      D: '限制JSON的长度'
    },
    answer: 'B',
    explanation: 'indent参数设置缩进的空格数，使JSON输出带有换行和缩进，更美观易读。indent=2表示每层缩进2个空格。不设置indent则输出紧凑的单行JSON。'
  },
  {
    id: 58,
    question: '在Python中，当json.loads()解析无效JSON字符串时会怎样？',
    options: {
      A: '返回空字典',
      B: '返回None',
      C: '抛出json.JSONDecodeError异常',
      D: '返回原始字符串'
    },
    answer: 'C',
    explanation: '当JSON字符串格式不正确时，json.loads()会抛出json.JSONDecodeError异常。应该用try-except捕获此异常，防止程序因格式错误而崩溃。'
  },
  {
    id: 59,
    question: '在Python中，将字典{“name”: “Tom”, “age”: 18}转为JSON字符串，应使用哪个函数？',
    options: {
      A: 'json.load({“name”: “Tom”, “age”: 18})',
      B: 'json.dumps({“name”: “Tom”, “age”: 18})',
      C: 'json.parse({“name”: “Tom”, “age”: 18})',
      D: 'str({“name”: “Tom”, “age”: 18})'
    },
    answer: 'B',
    explanation: 'json.dumps()将Python字典转换为JSON字符串。结果为\'{“name”: “Tom”, “age”: 18}\'。注意JSON中键必须用双引号，与Python字典的表示略有不同。'
  },
  {
    id: 60,
    question: '在Python中，JSON的数组对应哪种Python数据类型？',
    options: {
      A: 'tuple',
      B: 'list',
      C: 'dict',
      D: 'set'
    },
    answer: 'B',
    explanation: 'JSON数组（如[1, 2, 3]）对应Python的列表（list）。JSON对象对应字典（dict），JSON字符串对应str，JSON数字对应int或float，JSON布尔值对应bool。'
  },
  {
    id: 61,
    question: '在Python中，以下列表推导式的结果是什么？\n[x * 2 for x in range(3)]',
    options: {
      A: '[0, 1, 2]',
      B: '[0, 2, 4]',
      C: '[2, 4, 6]',
      D: '[1, 2, 3]'
    },
    answer: 'B',
    explanation: '列表推导式[x*2 for x in range(3)]遍历range(3)即0,1,2，对每个元素乘以2，结果为[0, 2, 4]。range(3)生成0到2的整数序列。'
  },
  {
    id: 62,
    question: '在Python中，以下列表推导式的结果是什么？\n[x for x in range(10) if x % 2 == 0]',
    options: {
      A: '[1, 3, 5, 7, 9]',
      B: '[0, 2, 4, 6, 8]',
      C: '[0, 1, 2, 3, 4]',
      D: '[2, 4, 6, 8, 10]'
    },
    answer: 'B',
    explanation: '该推导式遍历0到9的整数，if x % 2 == 0筛选偶数。结果为[0, 2, 4, 6, 8]。条件if放在for之后，用于过滤元素。'
  },
  {
    id: 63,
    question: '在Python中，以下字典推导式的结果是什么？\n{x: x ** 2 for x in range(3)}',
    options: {
      A: '{0: 0, 1: 1, 2: 4}',
      B: '{0: 0, 1: 2, 2: 4}',
      C: '[0, 1, 4]',
      D: '{0: 0, 1: 1, 2: 2}'
    },
    answer: 'A',
    explanation: '字典推导式{x: x**2 for x in range(3)}对0,1,2分别计算键值对，键为x，值为x的平方。结果为{0: 0, 1: 1, 2: 4}。'
  },
  {
    id: 64,
    question: '在Python中，以下集合推导式的结果是什么？\n{x % 3 for x in [1, 2, 3, 4, 5, 6]}',
    options: {
      A: '{1, 2, 0}',
      B: '[1, 2, 0, 1, 2, 0]',
      C: '{1, 2, 3, 4, 5, 6}',
      D: '{0, 1, 2}'
    },
    answer: 'D',
    explanation: '集合推导式用花括号{}表示，结果自动去重。1%3=1, 2%3=2, 3%3=0, 4%3=1, 5%3=2, 6%3=0。去重后为{0, 1, 2}。集合是无序的。'
  },
  {
    id: 65,
    question: '在Python中，以下嵌套列表推导式的结果是什么？\n[x for row in [[1, 2], [3, 4]] for x in row]',
    options: {
      A: '[[1, 2], [3, 4]]',
      B: '[1, 2, 3, 4]',
      C: '[1, 3]',
      D: '[2, 4]'
    },
    answer: 'B',
    explanation: '嵌套推导式先遍历外层[[1,2],[3,4]]得到row，再遍历row得到x。相当于展开二维列表，结果为[1, 2, 3, 4]。多个for从左到右嵌套。'
  },
  {
    id: 66,
    question: '在Python中，以下列表推导式的结果是什么？\n[“偶” if x % 2 == 0 else “奇” for x in range(4)]',
    options: {
      A: '[“偶”, “奇”, “偶”, “奇”]',
      B: '[“偶”, “偶”, “偶”, “偶”]',
      C: '[“奇”, “奇”, “奇”, “奇”]',
      D: '[“奇”, “偶”, “奇”, “偶”]'
    },
    answer: 'A',
    explanation: '条件表达式“偶” if x % 2 == 0 else “奇”在推导式中：0是偶数返回“偶”，1是奇数返回“奇”，2返回“偶”，3返回“奇”。结果为[“偶”, “奇”, “偶”, “奇”]。'
  },
  {
    id: 67,
    question: '在Python中，以下列表推导式的结果是什么？\n[x * y for x in range(2) for y in range(2)]',
    options: {
      A: '[0, 0, 0, 1]',
      B: '[0, 1, 0, 1]',
      C: '[0, 0, 1, 1]',
      D: '[0, 1, 1, 1]'
    },
    answer: 'A',
    explanation: '双重for循环：x=0时y=0,1得0*0=0,0*1=0；x=1时y=0,1得1*0=0,1*1=1。结果为[0, 0, 0, 1]。多个for相当于嵌套循环。'
  },
  {
    id: 68,
    question: '在Python中，以下表达式的类型是什么？\n(x ** 2 for x in range(5))',
    options: {
      A: 'list（列表）',
      B: 'tuple（元组）',
      C: 'generator（生成器）',
      D: 'set（集合）'
    },
    answer: 'C',
    explanation: '用圆括号()包裹的是生成器表达式，不是列表推导式。生成器是惰性求值的，不会立即计算所有值，节省内存。可以用list()转换为列表。'
  },
  {
    id: 69,
    question: '以下两种写法，哪种更适合处理大数据量？\n方式A: [x for x in range(1000000)]\n方式B: (x for x in range(1000000))',
    options: {
      A: '方式A，列表推导式更快',
      B: '方式B，生成器表达式更节省内存',
      C: '两者没有区别',
      D: '方式A，列表推导式更节省内存'
    },
    answer: 'B',
    explanation: '生成器表达式(方式B)是惰性求值的，不会一次性生成所有元素，节省大量内存。列表推导式(方式A)会立即创建包含所有元素的列表，大数据量时内存消耗大。'
  },
  {
    id: 70,
    question: '以下列表推导式的作用是什么？\n[word.upper() for word in “hello world”.split()]',
    options: {
      A: '将字符串转为大写',
      B: '将每个单词转为大写，返回列表',
      C: '将字符串拆分为字符',
      D: '删除字符串中的空格'
    },
    answer: 'B',
    explanation: 'split()将字符串按空格分割为单词列表[“hello”, “world”]，推导式对每个单词调用upper()转为大写，结果为[“HELLO”, “WORLD”]。'
  },
  {
    id: 71,
    question: '在Python中，if-elif-else语句的执行顺序是什么？',
    options: {
      A: '所有条件都会被检查',
      B: '从上到下检查，匹配第一个满足条件的分支后跳过其余',
      C: '从下到上检查',
      D: '随机选择一个分支执行'
    },
    answer: 'B',
    explanation: 'if-elif-else从上到下依次检查条件，一旦某个条件为True就执行对应代码块，然后跳出整个if结构。如果都不满足，执行else分支。'
  },
  {
    id: 72,
    question: '在Python中，以下for循环的输出是什么？\nfor i in range(3):\n    print(i, end=“ ”)',
    options: {
      A: '1 2 3',
      B: '0 1 2',
      C: '0 1 2 3',
      D: '1 2'
    },
    answer: 'B',
    explanation: 'range(3)生成0到2的整数序列（不含3）。for循环遍历每个值并打印，end=“ ”用空格代替默认换行。输出为0 1 2。'
  },
  {
    id: 73,
    question: '以下while循环执行几次？\ncount = 0\nwhile count < 3:\n    count += 1',
    options: {
      A: '2次',
      B: '3次',
      C: '4次',
      D: '无限循环'
    },
    answer: 'B',
    explanation: 'count初始为0，每次循环加1。count=0时0<3为True执行，count=1时1<3为True执行，count=2时2<3为True执行，count=3时3<3为False停止。共执行3次。'
  },
  {
    id: 74,
    question: '在Python中，break语句的作用是什么？',
    options: {
      A: '跳过当前迭代，继续下一次循环',
      B: '立即终止当前循环',
      C: '暂停循环',
      D: '跳转到循环末尾'
    },
    answer: 'B',
    explanation: 'break语句立即终止当前循环，跳出循环体。常用于在满足某条件时提前结束循环。与continue不同，continue只跳过当前这一次迭代。'
  },
  {
    id: 75,
    question: '在Python中，continue语句的作用是什么？',
    options: {
      A: '终止整个循环',
      B: '跳过当前迭代剩余代码，进入下一次循环',
      C: '重启循环',
      D: '跳出函数'
    },
    answer: 'B',
    explanation: 'continue跳过当前这一次循环中剩余的代码，直接进入下一次迭代。例如跳过偶数的处理：if x % 2 == 0: continue会跳过所有偶数。'
  },
  {
    id: 76,
    question: '在Python中，range(1, 10, 2)生成的序列是什么？',
    options: {
      A: '1, 2, 3, 4, 5, 6, 7, 8, 9',
      B: '1, 3, 5, 7, 9',
      C: '1, 3, 5, 7',
      D: '2, 4, 6, 8, 10'
    },
    answer: 'B',
    explanation: 'range(1, 10, 2)从1开始到10结束（不含10），步长为2。生成的序列为1, 3, 5, 7, 9。三个参数分别是起始值、结束值和步长。'
  },
  {
    id: 77,
    question: '以下嵌套循环的输出是什么？\nfor i in range(2):\n    for j in range(2):\n        print(i * j, end=“ ”)',
    options: {
      A: '0 0 0 1',
      B: '0 1 0 1',
      C: '0 0 1 1',
      D: '1 1 1 1'
    },
    answer: 'A',
    explanation: '外层i=0: j=0得0*0=0, j=1得0*1=0；外层i=1: j=0得1*0=0, j=1得1*1=1。输出为0 0 0 1。嵌套循环内层完整执行后外层才前进。'
  },
  {
    id: 78,
    question: '在Python中，以下for...else语句何时执行else部分？\nfor i in range(5):\n    if i == 3:\n        break\nelse:\n    print(“完成”)',
    options: {
      A: '总是执行',
      B: '循环正常结束（没有break）时执行',
      C: '循环被break终止时执行',
      D: '从不执行'
    },
    answer: 'B',
    explanation: 'for...else中else块仅在循环正常结束（没有被break中断）时执行。此例中i==3时break跳出循环，所以else不执行。如果循环没有被break，else会执行。'
  },
  {
    id: 79,
    question: '在Python中，pass语句的作用是什么？',
    options: {
      A: '跳过当前循环迭代',
      B: '作为占位符，不执行任何操作',
      C: '终止函数',
      D: '抛出异常'
    },
    answer: 'B',
    explanation: 'pass是空操作语句，不做任何事情。常用作占位符，保持语法完整性。例如定义空函数def foo(): pass，或空类class Empty: pass。'
  },
  {
    id: 80,
    question: '在Python中，三元表达式 x if condition else y 的作用是什么？',
    options: {
      A: '如果condition为True返回x，否则返回y',
      B: '如果x为True返回condition，否则返回y',
      C: '如果y为True返回x，否则返回condition',
      D: '三个条件选择一个'
    },
    answer: 'A',
    explanation: 'Python三元表达式格式为：x if condition else y。当condition为True时返回x，为False时返回y。例如：“偶数” if n%2==0 else “奇数”。'
  },
  {
    id: 81,
    question: '在Python中，len([1, 2, 3, 4, 5])的结果是什么？',
    options: {
      A: '4',
      B: '5',
      C: '15',
      D: '报错'
    },
    answer: 'B',
    explanation: 'len()函数返回对象的长度。列表[1, 2, 3, 4, 5]包含5个元素，所以len()返回5。len()也可以用于字符串、元组、字典等。'
  },
  {
    id: 82,
    question: '在Python中，list(range(5))的结果是什么？',
    options: {
      A: '[1, 2, 3, 4, 5]',
      B: '[0, 1, 2, 3, 4]',
      C: '[0, 1, 2, 3, 4, 5]',
      D: '[5]'
    },
    answer: 'B',
    explanation: 'range(5)生成0到4的整数序列（不含5）。用list()将range对象转换为列表，结果为[0, 1, 2, 3, 4]。range起始值默认为0。'
  },
  {
    id: 83,
    question: '以下代码的输出是什么？\nfor index, value in enumerate([“a”, “b”, “c”]):\n    print(index, value, end=“ ”)',
    options: {
      A: '0 a 1 b 2 c',
      B: '1 a 2 b 3 c',
      C: 'a b c',
      D: '0 1 2'
    },
    answer: 'A',
    explanation: 'enumerate()为可迭代对象添加索引，返回(索引, 值)对。列表[“a”, “b”, “c”]的索引从0开始，所以输出0 a 1 b 2 c。比手动维护计数器更优雅。'
  },
  {
    id: 84,
    question: '以下代码的输出是什么？\nfor a, b in zip([1, 2], [“x”, “y”]):\n    print(a, b, end=“ ”)',
    options: {
      A: '1 x 2 y',
      B: '1 2 x y',
      C: '(1, x) (2, y)',
      D: '1 x'
    },
    answer: 'A',
    explanation: 'zip()将多个可迭代对象的对应元素打包成元组。[1,2]和[“x”,“y”]打包为(1,“x”)和(2,“y”)，循环解包后输出1 x 2 y。'
  },
  {
    id: 85,
    question: '以下代码的输出是什么？\nresult = list(map(lambda x: x ** 2, [1, 2, 3]))\nprint(result)',
    options: {
      A: '[1, 4, 9]',
      B: '[1, 2, 3]',
      C: '[2, 4, 6]',
      D: '[1, 8, 27]'
    },
    answer: 'A',
    explanation: 'map()将函数应用到可迭代对象的每个元素。lambda x: x**2计算平方，对1,2,3分别计算得1,4,9。list()将map对象转为列表，结果为[1, 4, 9]。'
  },
  {
    id: 86,
    question: '以下代码的输出是什么？\nresult = list(filter(lambda x: x > 3, [1, 2, 3, 4, 5]))\nprint(result)',
    options: {
      A: '[1, 2, 3]',
      B: '[4, 5]',
      C: '[1, 2, 3, 4, 5]',
      D: '[]'
    },
    answer: 'B',
    explanation: 'filter()根据函数返回值过滤元素。lambda x: x > 3对每个元素判断是否大于3，只有4和5满足条件，结果为[4, 5]。'
  },
  {
    id: 87,
    question: '在Python中，sorted([3, 1, 4, 1, 5], reverse=True)的结果是什么？',
    options: {
      A: '[1, 1, 3, 4, 5]',
      B: '[5, 4, 3, 1, 1]',
      C: '[5, 4, 3, 2, 1]',
      D: '[1, 3, 4, 5]'
    },
    answer: 'B',
    explanation: 'sorted()默认升序排列。设置reverse=True变为降序。[3,1,4,1,5]降序排列为[5, 4, 3, 1, 1]。sorted()返回新列表，不修改原列表。'
  },
  {
    id: 88,
    question: '在Python中，sum([1, 2, 3, 4, 5])的结果是什么？',
    options: {
      A: '15',
      B: '5',
      C: '10',
      D: '120'
    },
    answer: 'A',
    explanation: 'sum()函数计算可迭代对象中所有元素的和。1+2+3+4+5=15。sum()还可以指定起始值，如sum([1,2], 10)从10开始累加，结果为13。'
  },
  {
    id: 89,
    question: '在Python中，isinstance(42, int)的结果是什么？',
    options: {
      A: 'True',
      B: 'False',
      C: '“int”',
      D: '42'
    },
    answer: 'A',
    explanation: 'isinstance()检查对象是否是指定类型的实例。42是整数，isinstance(42, int)返回True。比type()==int更推荐使用isinstance()，因为它考虑继承关系。'
  },
  {
    id: 90,
    question: '在Python中，any([False, False, True])的结果是什么？',
    options: {
      A: 'False',
      B: 'True',
      C: 'None',
      D: '报错'
    },
    answer: 'B',
    explanation: 'any()只要有一个元素为True就返回True。列表[False, False, True]中有一个True，所以any()返回True。对应地，all()需要所有元素为True才返回True。'
  },
  {
    id: 91,
    question: '在Python中，re.findall(r“\\d+”, “a1b2c33”)的结果是什么？',
    options: {
      A: '[“1”, “2”, “33”]',
      B: '[“a”, “b”, “c”]',
      C: '[“1”, “2”, “3”]',
      D: '[“a1”, “b2”, “c33”]'
    },
    answer: 'A',
    explanation: 're.findall()返回字符串中所有匹配正则表达式的子串。\\d+匹配一个或多个连续数字。“a1b2c33”中匹配到“1”、“2”和“33”。\\d匹配数字，+表示一次或多次。'
  },
  {
    id: 92,
    question: '在Python中，re.sub(r“\\d+”, “#”, “a1b2c3”)的结果是什么？',
    options: {
      A: 'a1b2c3',
      B: 'a#b#c#',
      C: '#1#2#3',
      D: 'abc'
    },
    answer: 'B',
    explanation: 're.sub()用替换字符串替换所有匹配正则表达式的子串。\\d+匹配数字，“#”是替换文本。“a1b2c3”中的1、2、3分别被替换为#，结果为a#b#c#。'
  },
  {
    id: 93,
    question: '在Python中，re.match(r“hello”, “hello world”)的结果是什么？',
    options: {
      A: '返回一个匹配对象',
      B: '返回None',
      C: '返回True',
      D: '返回[“hello”]'
    },
    answer: 'A',
    explanation: 're.match()从字符串开头匹配正则表达式。“hello”匹配“hello world”的开头，返回一个匹配对象。如果开头不匹配则返回None。注意match只从开头匹配。'
  },
  {
    id: 94,
    question: '在Python中，re.search(r“world”, “hello world”)和re.match(r“world”, “hello world”)的区别是什么？',
    options: {
      A: 'search找到匹配，match返回None',
      B: '两者都找到匹配',
      C: '两者都返回None',
      D: 'match找到匹配，search返回None'
    },
    answer: 'A',
    explanation: 're.search()搜索整个字符串找第一个匹配，能找到“world”。re.match()只从字符串开头匹配，“hello world”开头不是“world”，所以返回None。'
  },
  {
    id: 95,
    question: '正则表达式r“\\d{3}”的含义是什么？',
    options: {
      A: '匹配3个任意字符',
      B: '匹配恰好3个连续数字',
      C: '匹配3的倍数',
      D: '匹配第3个数字'
    },
    answer: 'B',
    explanation: '\\d匹配一个数字，{3}表示恰好重复3次。\\d{3}匹配恰好3个连续数字，如“123”。\\d{3,}匹配至少3个数字，\\d{3,5}匹配3到5个数字。'
  },
  {
    id: 96,
    question: '在Python中，re.split(r“[,;]”, “a,b;c,d”)的结果是什么？',
    options: {
      A: '[“a,b;c,d”]',
      B: '[“a”, “b”, “c”, “d”]',
      C: '[“a,b”, “c,d”]',
      D: '[“a”, “b;c”, “d”]'
    },
    answer: 'B',
    explanation: 're.split()按正则表达式分割字符串。[,;]匹配逗号或分号任意一个。“a,b;c,d”被逗号和分号分割为[“a”, “b”, “c”, “d”]。比字符串split更灵活。'
  },
  {
    id: 97,
    question: '在Python中，“hello world”.find(“world”)的结果是什么？',
    options: {
      A: '5',
      B: '6',
      C: '-1',
      D: 'True'
    },
    answer: 'B',
    explanation: 'find()返回子串第一次出现的索引位置。“world”在“hello world”中从索引6开始（h=0,e=1,l=2,l=3,o=4,空格=5,w=6）。如果找不到返回-1。'
  },
  {
    id: 98,
    question: '在Python中，“banana”.count(“a”)的结果是什么？',
    options: {
      A: '2',
      B: '3',
      C: '1',
      D: '0'
    },
    answer: 'B',
    explanation: 'count()方法统计子串在字符串中出现的次数。“banana”中字母a出现了3次（b-a-n-a-n-a），所以count(“a”)返回3。'
  },
  {
    id: 99,
    question: '在Python中，“hello.py”.endswith(“.py”)的结果是什么？',
    options: {
      A: 'True',
      B: 'False',
      C: '“py”',
      D: '4'
    },
    answer: 'A',
    explanation: 'endswith()检查字符串是否以指定后缀结尾。“hello.py”以“.py”结尾，返回True。对应的startswith()检查字符串是否以指定前缀开头。'
  },
  {
    id: 100,
    question: '在Python中，re.compile(r“\\d+”)的作用是什么？',
    options: {
      A: '编译正则表达式，提高重复使用效率',
      B: '删除字符串中的数字',
      C: '将正则表达式转为字符串',
      D: '验证正则表达式是否正确'
    },
    answer: 'A',
    explanation: 're.compile()预编译正则表达式为正则对象，可以在多处重复使用，避免每次都重新编译，提高效率。编译后的对象有findall、sub、match等方法。'
  }
];
