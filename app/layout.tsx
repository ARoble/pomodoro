import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import ClientProvider from "../app/context/clientProvider";

import "./globals.css";
import Todo from "./components/Todos";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fowcas",
  description: "Focus and be productive",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { data: session } = useSession();
  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center min-h-screen `}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
