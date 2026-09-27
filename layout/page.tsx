import Link from "next/link";
import "./globals.css";
import React from "react";

export const metadata = {
  title: "Rhian Nisnisan Tejedor - Portfolio",
  description: "Aspiring Junior Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-zinc-100 min-h-screen font-sans antialiased selection:bg-zinc-800 selection:text-white">
        
        <header className="sticky top-0 z-50 w-full bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/80">
          <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
            
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-mono text-sm group-hover:border-zinc-600 transition shadow-sm">
                RNT
              </div>
              <span className="text-sm font-mono tracking-wider text-zinc-300 group-hover:text-white transition">
                rhian.x64<span className="text-zinc-500">_</span>
              </span>
            </Link>

            <nav className="flex items-center gap-1.5 p-1.5 rounded-full bg-zinc-900/60 border border-zinc-800/80 shadow-inner">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

          </div>
        </header>
        <main>{children}</main>
        
      </body>
    </html>
  );
}
