"use client";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";
import Footer from "@/components/Footer/footer";
import { cn } from "@/utils/cn";
import { useState, useEffect } from "react";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

const useWidth = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return width;
};

// export const metadata: Metadata = {
//   title: "Shivam's Playground",
//   description: "A personal portfolio website for Shivam Bhagat.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(roboto_mono.className, "bg-stone-100")}>
        {useWidth() > 600 ? (
          <AnimatedCursor
            innerSize={8}
            outerSize={36}
            color="0,0,0"
            outerAlpha={0.0}
            innerScale={0.9}
            outerScale={3}
            outerStyle={{
              border: "2px solid rgba(6, 143, 111, 0.9)",
            }}
          />
        ) : null}
        {children}
        <Footer />
      </body>
    </html>
  );
}
