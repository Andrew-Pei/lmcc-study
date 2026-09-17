# LMCC 大模型编程认证学习网站

基于LMCC（Large Model Coding Certification）认证真题制作的学习网站，帮助同学们系统备考。

## 网站内容

### 第一轮：理论知识
- 青少年组真题：20道单选题 + 10道程序题（RAG + LoRA）
- 成人组真题：20道单选题 + 10道程序题（LoRA + GQA）
- 每题附带详细解析和知识点说明

### 第二轮：编程实践
- **T1 小小数学助手**：System Prompt设计、Chat Template构造、单条/批量推理
- **T2 多样性数据生成与相似度计算**：Embedding模型、Last-token Pooling、L2归一化、余弦相似度、数据集生成

### 互动测验系统
- 5个测验类别，70+道真题
- 即时反馈答案与解析
- 答题回顾与成绩统计

## 技术栈
- 纯HTML/CSS/JavaScript，无后端依赖
- 适用于GitHub Pages静态部署

## 文件结构
```
├── index.html         # 首页
├── round1.html        # 第一轮备考
├── round2.html        # 第二轮备考
├── knowledge.html     # 知识库
├── quiz.html          # 模拟测验
├── css/style.css      # 样式
├── js/main.js         # 导航与代码高亮
├── js/quiz-data.js    # 题库数据
└── js/quiz.js         # 测验引擎
```

## 访问地址
部署在GitHub Pages: https://andrew-pei.github.io/lmcc-study/
