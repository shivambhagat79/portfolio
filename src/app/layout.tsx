import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";
import Footer from "@/components/Footer/footer";

const poppins = Poppins({
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
      <body className={poppins.className}>
        <AnimatedCursor
          innerSize={6}
          outerSize={24}
          color="6, 143, 111"
          outerAlpha={0.0}
          innerScale={0.9}
          outerScale={2}
          outerStyle={{
            border: "2px solid rgba(6, 143, 111, 0.5)",
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
