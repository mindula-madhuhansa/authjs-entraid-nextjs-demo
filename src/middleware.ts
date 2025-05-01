import { NextResponse } from "next/server";

import { auth } from "@/auth";

const protectedRoutes = ["/profile"]; // protected routes

const authPagesRoutes = ["/"]; // login page

const apiAuthPrefix = "/api/auth";

export default auth((req) => {
  const { nextUrl } = req;

  const isLoggedIn = !!req.auth;

  const path = nextUrl.pathname;
  const isApiAuthRoute = path.startsWith(apiAuthPrefix);
  const isProtectedRoute = protectedRoutes.includes(path);
  const isAuthPageRoute = authPagesRoutes.includes(path);

  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  if (isLoggedIn && isAuthPageRoute) {
    return NextResponse.redirect(new URL("/profile", req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
