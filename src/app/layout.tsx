import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css"
import { ThemeProvider } from "@/components/themes/theme-provider";

// Font files can be colocated inside of `pages`
const matter = localFont({ src: '../../public/fonts/Matter-Regular.ttf' })


export const metadata: Metadata = {
  title: "Next Architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={matter.className}>
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
