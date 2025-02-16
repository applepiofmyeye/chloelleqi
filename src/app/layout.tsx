import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const regularMonomakh = localFont({
  src: "../fonts/Monomakh-Regular.ttf",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "chloelleqi portfolio",
  description: "dancer, instructor, LASELLE '25",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${regularMonomakh.className} bg-[#8e5b36] antialiased`}>
        {children}
      </body>
    </html>
  );
}
