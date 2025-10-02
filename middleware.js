import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log(request, '---REQUEST--');
  if (request.nextUrl.pathname === '/about') {
    return NextResponse.rewrite(new URL('/contact', request.url));
  }

  // const url = request.nextUrl.clone();
  // console.log(url, '---URL--');
  // if (url.pathname === '/about') {
  //   url.pathname = '/contact';
  //   return NextResponse.redirect(url);
  // }
}
