import Link from "next/link";
import { notFound } from "next/navigation";
import { markdownToHtml } from "@/lib/markdown";

// 模拟数据
const aiNotes = [
  {
    id: 1,
    title: "Transformer 架构详解",
    date: "2024-04-14",
    content: `
# Transformer 架构详解

## 1. 什么是 Transformer？

Transformer 是一种基于注意力机制的神经网络架构，由 Google 在 2017 年的论文《Attention Is All You Need》中提出。它彻底改变了自然语言处理领域，并成为当前最流行的深度学习架构之一。

## 2. 核心组件

### 2.1 注意力机制

注意力机制允许模型在处理序列数据时，关注输入序列中的不同部分。主要包含：
- 自注意力（Self-Attention）
- 多头注意力（Multi-Head Attention）
- 缩放点积注意力（Scaled Dot-Product Attention）

### 2.2 编码器-解码器结构

Transformer 采用编码器-解码器结构：
- 编码器：处理输入序列
- 解码器：生成输出序列
- 位置编码：提供序列位置信息

## 3. 优势

1. 并行计算能力强
2. 长距离依赖关系处理优秀
3. 训练效率高
4. 可扩展性好

## 4. 应用场景

- 机器翻译
- 文本摘要
- 问答系统
- 文本生成
- 语音识别

## 5. 最新发展

近年来，基于 Transformer 的模型不断发展：
- BERT
- GPT
- T5
- 等等
    `,
    tags: ["深度学习", "NLP", "注意力机制"],
  },
  // ... 其他笔记数据
];

export default async function AINotePage({ params }: { params: { id: string } }) {
  const note = aiNotes.find((note) => note.id === parseInt(params.id));

  if (!note) {
    notFound();
  }

  const content = await markdownToHtml(note.content);

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <Link
          href="/ai"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          ← 返回 AI 笔记列表
        </Link>
      </div>

      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{note.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime={note.date}>{note.date}</time>
          <div className="flex flex-wrap gap-2">
            {note.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
} 