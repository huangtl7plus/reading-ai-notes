"use client";

import { useState } from "react";
import Link from "next/link";

// 模拟数据
const aiNotes = [
  {
    id: 1,
    title: "Transformer 架构详解",
    date: "2024-04-14",
    excerpt: "Transformer 是当前最流行的深度学习架构之一...",
    tags: ["深度学习", "NLP", "注意力机制"],
  },
  {
    id: 2,
    title: "大语言模型原理",
    date: "2024-04-12",
    excerpt: "大语言模型是如何工作的？从预训练到微调...",
    tags: ["LLM", "预训练", "微调"],
  },
];

export default function AIPage() {
  const [question, setQuestion] = useState("");
  const [title, setTitle] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    try {
      // TODO: 调用 AI API
      // 这里先用模拟数据
      const mockAnswer = `这是关于 "${question}" 的回答：
      
1. 首先，我们需要理解问题的核心
2. 然后，我们可以从多个角度分析
3. 最后，给出具体的解决方案

希望这个回答对您有所帮助！`;
      
      setAnswer(mockAnswer);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = () => {
    if (!title.trim() || !answer.trim()) return;
    
    // TODO: 保存笔记到数据库
    console.log("保存笔记:", { title, content: answer });
    alert("笔记已保存！");
  };

  return (
    <div className="space-y-8">
      {/* 页面标题 */}
      <div>
        <h1 className="text-3xl font-bold">AI 技术笔记</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          向 AI 提问，获取技术见解，并保存为笔记
        </p>
      </div>

      {/* 提问表单 */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            笔记标题
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="输入笔记标题"
          />
        </div>
        <div>
          <label htmlFor="question" className="block text-sm font-medium mb-1">
            您的问题
          </label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="输入您的问题..."
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isLoading ? "思考中..." : "获取回答"}
        </button>
      </form>

      {/* AI 回答 */}
      {answer && (
        <div className="space-y-4">
          <div className="prose dark:prose-invert max-w-none p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            保存为笔记
          </button>
        </div>
      )}

      {/* 历史笔记 */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">历史笔记</h2>
        <div className="grid gap-6">
          {aiNotes.map((note) => (
            <Link
              key={note.id}
              href={`/ai/${note.id}`}
              className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>{note.date}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{note.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 