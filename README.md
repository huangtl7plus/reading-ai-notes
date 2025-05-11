# Reading AI Notes

一个基于 Next.js 的笔记管理系统，支持 AI 和读书笔记的管理。

## 功能特点

- 用户认证（注册/登录）
- 笔记管理（创建/编辑/删除）
- 分类和标签管理
- 响应式设计
- 暗色模式支持

## 技术栈

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Prisma (SQLite)
- JWT 认证

## 开发环境要求

- Node.js 18.0 或更高版本
- npm 9.0 或更高版本

## 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/your-username/reading-ai-notes.git
cd reading-ai-notes
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
复制 `.env.example` 文件为 `.env`，并填写必要的环境变量：
```bash
cp .env.example .env
```

4. 初始化数据库
```bash
npx prisma generate
npx prisma db push
```

5. 启动开发服务器
```bash
npm run dev
```

## 项目结构

```
reading-ai-notes/
├── prisma/              # 数据库模型和迁移
├── public/             # 静态资源
├── src/
│   ├── app/           # Next.js 应用路由
│   │   ├── admin/     # 管理后台
│   │   └── api/       # API 路由
│   ├── components/    # React 组件
│   └── lib/           # 工具函数
├── .env               # 环境变量
├── .gitignore        # Git 忽略文件
└── package.json      # 项目配置
```

## 开发指南

1. 创建新功能分支
```bash
git checkout -b feature/your-feature-name
```

2. 提交更改
```bash
git add .
git commit -m "描述你的更改"
```

3. 推送到远程仓库
```bash
git push origin feature/your-feature-name
```

## 部署

项目可以部署到 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/reading-ai-notes)

## 许可证

MIT
