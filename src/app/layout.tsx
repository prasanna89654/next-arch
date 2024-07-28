import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from '@next/font/local'

const inter = Inter({ subsets: ["latin"] });

const matter = localFont({
  src: '../../public/fonts/Matter-Regular.ttf',
      display: 'swap'
    },
    // {
    //   path: '../../public/fonts/Poppins-Bold.ttf',
    //   weight: '700'
    // }
  // ],
  // variable: '--font-matter'
)


export const metadata: Metadata = {
  title: "Next Architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className = {matter.className}>
 {children}

   </div>
     
    
  );
}
