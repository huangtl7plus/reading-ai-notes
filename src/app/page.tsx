import Link from "next/link";

// 模拟数据
const latestNotes = [
  {
    id: 1,
    title: "《深入理解计算机系统》读书笔记",
    category: "books",
    date: "2024-04-15",
    excerpt: "这本书从程序员的角度深入讲解了计算机系统的各个方面...",
  },
  {
    id: 2,
    title: "Transformer 架构详解",
    category: "ai",
    date: "2024-04-14",
    excerpt: "Transformer 是当前最流行的深度学习架构之一...",
  },
  {
    id: 3,
    title: "《代码整洁之道》读书笔记",
    category: "books",
    date: "2024-04-13",
    excerpt: "如何写出清晰、可维护的代码是每个程序员都应该掌握的技能...",
  },
];

const categories = [
  {
    name: "书籍笔记",
    path: "/books",
    description: "记录阅读过程中的思考和收获",
    count: 12,
  },
  {
    name: "AI 笔记",
    path: "/ai",
    description: "分享 AI 技术相关的学习笔记",
    count: 8,
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* 最新笔记部分 */}
      <section>
        <h2 className="text-2xl font-bold mb-6">最新笔记</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestNotes.map((note) => (
            <Link
              key={note.id}
              href={`/${note.category}/${note.id}`}
              className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span className="capitalize">{note.category}</span>
                <span>•</span>
                <span>{note.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{note.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 分类导航部分 */}
      <section>
        <h2 className="text-2xl font-bold mb-6">笔记分类</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.path}
              href={category.path}
              className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {category.description}
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                {category.count} 篇笔记
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
