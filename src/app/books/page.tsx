import Link from "next/link";

// 模拟数据
const bookNotes = [
  {
    id: 1,
    title: "《深入理解计算机系统》读书笔记",
    date: "2024-04-15",
    excerpt: "这本书从程序员的角度深入讲解了计算机系统的各个方面...",
    tags: ["计算机系统", "CSAPP", "底层原理"],
  },
  {
    id: 2,
    title: "《代码整洁之道》读书笔记",
    date: "2024-04-13",
    excerpt: "如何写出清晰、可维护的代码是每个程序员都应该掌握的技能...",
    tags: ["代码规范", "软件工程", "最佳实践"],
  },
  {
    id: 3,
    title: "《算法导论》读书笔记",
    date: "2024-04-10",
    excerpt: "经典算法教材的学习笔记，包含各种算法思想和实现...",
    tags: ["算法", "数据结构", "计算机科学"],
  },
  {
    id: 4,
    title: "《设计模式》读书笔记",
    date: "2024-04-08",
    excerpt: "23种设计模式的学习和实践总结...",
    tags: ["设计模式", "面向对象", "软件架构"],
  },
];

// 模拟标签数据
const tags = [
  { name: "全部", count: 12 },
  { name: "计算机系统", count: 3 },
  { name: "算法", count: 2 },
  { name: "设计模式", count: 2 },
  { name: "代码规范", count: 1 },
  { name: "软件工程", count: 4 },
];

export default function BooksPage() {
  return (
    <div className="space-y-8">
      {/* 页面标题 */}
      <div>
        <h1 className="text-3xl font-bold">书籍笔记</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          记录阅读过程中的思考和收获
        </p>
      </div>

      {/* 标签筛选 */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag.name}
            className="px-3 py-1 text-sm rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            {tag.name} ({tag.count})
          </button>
        ))}
      </div>

      {/* 笔记列表 */}
      <div className="grid gap-6">
        {bookNotes.map((note) => (
          <Link
            key={note.id}
            href={`/books/${note.id}`}
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
  );
} 