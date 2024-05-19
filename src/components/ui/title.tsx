import { cn } from "@/utils/cn";
import { Major_Mono_Display } from "next/font/google";

const major_mono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function Title({ title }: { title: string }) {
  return (
    <div className="border-b-2 border-black py-6 px-60">
      <h1 className={cn(major_mono.className, "text-center text-5xl")}>
        {title}
      </h1>
    </div>
  );
}
