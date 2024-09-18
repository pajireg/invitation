import type { Metadata } from "next";
import "./globals.css";
import { RIDIBatang } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "수민&현희 청첩장",
  description: "결혼식에 초대합니다.",
  openGraph: {
    title: "수민&현희 청첩장",
    description: "결혼식에 초대합니다.",
    images: [
      {
        url: "/invitation/image/main.jpg",
        alt: "수민&현희 청첩장",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${RIDIBatang.className}`}>
        {children}
      </body>
    </html>
  );
}
