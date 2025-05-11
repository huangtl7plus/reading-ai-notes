import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

// 需要保护的路由
const protectedRoutes = ["/admin"];
// 不需要保护的路由
const publicRoutes = [
  "/admin/login",
  "/admin/register",
  "/api/auth/login",
  "/api/auth/register"
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 检查是否是公开路由
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // 检查是否需要保护
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      // 如果没有 token，重定向到登录页面
      const url = new URL("/admin/login", request.url);
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }

    try {
      // 验证 token
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "your-secret-key"
      );
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      // token 无效，重定向到登录页面
      const url = new URL("/admin/login", request.url);
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// 配置中间件匹配的路由
export const config = {
  matcher: [
    /*
     * 匹配所有路径除了:
     * - api/auth/* (认证相关 API)
     * - _next/static (静态文件)
     * - _next/image (图片优化)
     * - favicon.ico (网站图标)
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
}; 