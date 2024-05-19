import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";
import Footer from "@/components/Footer/footer";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shivam Bhagat",
  description: "A personal portfolio website for Shivam Bhagat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto_mono.className} bg-gradient-to-l from-emerald-800 via-gray-50 to-slate-50`}
      >
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
