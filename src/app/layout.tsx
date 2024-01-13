import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mahmoud's amazing portfolio",
  description: "My personal website, portfolio, and blog.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ overscrollBehavior: "none" }}>
        {children}
      </body>
    </html>
  );
}
