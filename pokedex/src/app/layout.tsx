import type { Metadata } from "next";
import {Comic_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Providers/theme-providers";

const inter = Comic_Neue({ subsets: ["latin"], weight:'700' });

export const metadata: Metadata = {
  title: "Project Dex ",
  description: "The first project of five",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head />
        
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
