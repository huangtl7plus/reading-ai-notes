import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "阅读笔记 - 记录我的阅读与思考",
  description: "个人阅读笔记网站，分享书籍阅读和 AI 技术相关的笔记",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b border-gray-200 dark:border-gray-800">
          <nav className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold">
                阅读笔记
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                  首页
                </Link>
                <Link href="/books" className="hover:text-blue-600 dark:hover:text-blue-400">
                  书籍笔记
                </Link>
                <Link href="/ai" className="hover:text-blue-600 dark:hover:text-blue-400">
                  AI 笔记
                </Link>
                <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
                  关于
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-8">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} 阅读笔记. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
