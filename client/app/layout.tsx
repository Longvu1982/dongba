import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Lato, Oswald } from "next/font/google";
import Header from "@/components/common/header";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswaldFont = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const latoFont = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Đông Ba - Giải Pháp Cơ Khí, Dẫn Lối Thành Công",
  description:
    "Tiên phong trong tương lai của kỹ thuật và sản xuất công nghiệp với công nghệ tiên tiến và quy trình do chuyên gia điều hành.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <link rel="icon" href="/logo-icon.png" sizes="any" />
      <body
        className={cn(
          interFont.variable,
          oswaldFont.variable,
          latoFont.variable,
          "antialiased"
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
