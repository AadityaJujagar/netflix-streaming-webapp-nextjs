import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Sidebar from "@/components/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Netflix | Next.js",
  description:
    "Netflix like streaming webapp created using Next.js, Typescript and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/icons8-video-windows-11-color-16.png" />
        <link rel="icon" href="/favicon/icons8-video-windows-11-color-32.png" />
        <link rel="icon" href="/favicon/icons8-video-windows-11-color-96.png" />
      </head>
      <body className="flex m-0 p-0 box-border w-screen h-screen overflow-x-hidden overflow-y-auto bg-[#232323]">
        <div className="w-1/12">
          <Sidebar />
        </div>
        <div className="w-11/12">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
