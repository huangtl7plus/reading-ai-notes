import Link from "next/link";
import { notFound } from "next/navigation";
import { markdownToHtml } from "@/lib/markdown";

// 模拟数据
const bookNotes = [
  {
    id: 1,
    title: "《深入理解计算机系统》读书笔记",
    date: "2024-04-15",
    content: `
# 《深入理解计算机系统》读书笔记

## 第一章：计算机系统漫游

计算机系统是由硬件和系统软件组成的，它们共同工作来运行应用程序。理解计算机系统的工作原理对于写出高效、可靠的程序至关重要。

### 1.1 信息就是位+上下文

计算机系统中的所有信息都是由一串比特表示的。区分不同数据对象的唯一方法是我们读到这些数据对象时的上下文。

### 1.2 程序被其他程序翻译成不同的格式

一个典型的编译系统包括以下组件：
- 预处理器
- 编译器
- 汇编器
- 链接器

## 第二章：信息的表示和处理

### 2.1 信息存储

大多数计算机使用8位的块，或者字节（byte），作为最小的可寻址的内存单位。

### 2.2 整数表示

计算机使用不同的编码方式来表示整数，包括：
- 无符号编码
- 补码编码
- 浮点数编码

## 总结

这本书从程序员的角度深入讲解了计算机系统的各个方面，包括：
- 程序的机器级表示
- 处理器体系结构
- 程序的性能优化
- 虚拟内存
- 系统级I/O
- 网络编程
- 并发编程

通过阅读这本书，我对计算机系统有了更深入的理解，这对我的编程工作有很大的帮助。
    `,
    tags: ["计算机系统", "CSAPP", "底层原理"],
  },
  // ... 其他笔记数据
];

export default async function BookNotePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const note = bookNotes.find((note) => note.id === parseInt(resolvedParams.id));

  if (!note) {
    notFound();
  }

  const content = await markdownToHtml(note.content);

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-8">
        <Link
          href="/books"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          ← 返回书籍笔记列表
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