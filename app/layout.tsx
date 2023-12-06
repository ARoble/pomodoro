import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Todo from "./components/Todos";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fowcas",
  description: "Focus and be productive",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center min-h-screen `}>
        {children}
      </body>
    </html>
  );
}
