import Link from "next/link";
import { notFound } from "next/navigation";
import { markdownToHtml } from "@/lib/markdown";
import { Metadata } from "next";

// 模拟数据
const aiNotes = [
  {
    id: "1",
    title: "Transformer 架构详解",
    date: "2024-03-15",
    content: `
# Transformer 架构详解

Transformer 是一种基于注意力机制的神经网络架构，由 Google 在 2017 年提出。

## 核心组件

1. 自注意力机制（Self-Attention）
2. 多头注意力（Multi-Head Attention）
3. 前馈神经网络（Feed Forward）
4. 位置编码（Positional Encoding）

## 优势

- 并行计算能力强
- 长距离依赖处理优秀
- 训练效率高
    `,
    tags: ["AI", "深度学习", "Transformer"],
  },
  // ... 其他笔记数据
];

export async function generateStaticParams() {
  return aiNotes.map((note) => ({
    id: note.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const note = aiNotes.find((note) => note.id === resolvedParams.id);
  if (!note) return { title: "笔记未找到" };
  return { title: note.title };
}

export default async function AINotePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const note = aiNotes.find((note) => note.id === resolvedParams.id);

  if (!note) {
    notFound();
  }

  const content = await markdownToHtml(note.content);

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{note.title}</h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <time dateTime={note.date}>{note.date}</time>
          <span className="mx-2">•</span>
          <div className="flex gap-2">
            {note.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div className="mt-8">
        <Link
          href="/ai"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← 返回 AI 笔记列表
        </Link>
      </div>
    </article>
  );
} 