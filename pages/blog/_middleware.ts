import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  //return new Response('Hello, world!');

  return NextResponse.redirect(
    'https://nextjs-3v9dcf--3000.local.webcontainer.io'
  );
}
