"use client";
import { useEffect } from "react";
import "./globals.css";
import { RIDIBatang } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // 확대 방지
    const preventZoom = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };
    document.addEventListener("touchmove", preventZoom, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventZoom);
    };
  }, []);
  return (
    <html lang="en">
      <head>
        <title>수민&현희 청첩장</title>
        <meta name="description" content="12월 21일 오후 2시" />
        <meta property="og:title" content="수민 ❤️ 현희 결혼합니다" />
        <meta property="og:description" content="결혼식에 초대합니다." />
        <meta property="og:image" content="/image/main.jpeg" />
      </head>
      <body className={`${RIDIBatang.className}`}>
        {children}
      </body>
    </html>
  );
}
