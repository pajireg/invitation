import type { Metadata } from "next";
import "./globals.css";
import { notoSerif } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "수민&현희 청첩장",
  description: "결혼식에 초대합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerif.className}`}>
        {children}
      </body>
    </html>
  );
}
