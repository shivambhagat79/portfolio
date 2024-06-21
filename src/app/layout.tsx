import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/footer";
import { cn } from "@/utils/cn";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivam's Playground",
  description: "A personal portfolio website for Shivam Bhagat.",
  icons: {
    icon: ["/favicon.png?v=4"],
    apple: ["/favicon.png?v=4"],
    shortcut: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(roboto_mono.className, "bg-stone-100")}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
