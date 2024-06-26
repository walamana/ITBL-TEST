import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " grid grid-cols-4 h-dvh"} style={{gridTemplateRows: "min-content 1fr"}}>
        <div className="col-span-4 p-5 bg-slate-900 h-full">
          <span className="font-sans text-lg">Header</span>
        </div>
        <div className="col-span-1 p-5 bg-slate-950 h-full flex flex-col">
          <Link className="p-3" href="/">Home</Link>
          <Link className="p-3" href="/about">About</Link>
          <Link className="p-3" href="/products">Products</Link>
          <Link className="p-3" href="/contact">Contact</Link>
          <Link className="p-3" href="/search">Search</Link>
          <Link className="p-3" href="/docs">Docs</Link>
        </div>
        <div className="col-span-3 p-5 h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
