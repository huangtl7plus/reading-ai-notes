import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* 页面标题 */}
      <div>
        <h1 className="text-3xl font-bold">关于我</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          分享我的学习历程和思考
        </p>
      </div>

      {/* 个人介绍 */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold">你好，我是 XXX</h2>
            <p className="text-gray-600 dark:text-gray-400">
              我是一名热爱技术的开发者，专注于 AI 和 Web 开发领域。
              我喜欢阅读技术书籍，并将学习过程中的思考和收获记录下来。
              这个网站就是我分享这些笔记的地方。
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Twitter
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 网站说明 */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">关于这个网站</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            这个网站是我用来记录和分享学习笔记的平台，主要包含两个部分：
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 书籍笔记部分 */}
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                书籍笔记
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                在这里，我会分享阅读技术书籍时的笔记和思考。每篇笔记都包含：
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  书籍的核心内容总结
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  重要的概念和原理
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  实践经验和心得
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  相关的代码示例
                </li>
              </ul>
            </div>

            {/* AI 技术笔记部分 */}
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                AI 技术笔记
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                这个部分主要记录 AI 相关的学习内容，包括：
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  AI 基础知识
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  最新的 AI 技术动态
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  实践经验和案例
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  AI 工具的使用心得
                </li>
              </ul>
            </div>
          </div>

          {/* 技术栈部分 */}
          <div className="mt-8 p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              网站技术栈
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              这个网站使用以下技术构建：
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Next.js", desc: "React 框架" },
                { name: "TypeScript", desc: "类型安全的 JavaScript" },
                { name: "Tailwind CSS", desc: "实用优先的 CSS 框架" },
                { name: "Markdown", desc: "笔记内容格式" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <div className="font-medium">{tech.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {tech.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 联系我 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">联系我</h2>
        <p className="text-gray-600 dark:text-gray-400">
          如果你有任何问题或建议，欢迎通过以下方式联系我：
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
          <li>📧 Email: your.email@example.com</li>
          <li>🐦 Twitter: @yourusername</li>
          <li>💻 GitHub: github.com/yourusername</li>
        </ul>
      </section>
    </div>
  );
} 