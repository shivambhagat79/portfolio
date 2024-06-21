import Gallery from "@/components/Gallery/gallery";
import Navbar from "@/components/Navbar/navbar";
import { cn } from "@/utils/cn";
import { Major_Mono_Display } from "next/font/google";

const major_mono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function ForFun() {
  return (
    <>
      <Navbar />
      <div className="px-5 py-10 md:px-20 xl:py-20 xl:px-48 border-b-2 border-black">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full flex justify-center">
            <h1
              className={cn(major_mono.className, "text-5xl lg:text-7xl mb-10")}
            >
              When I<br /> Am Not
              <br /> Working
            </h1>
          </div>
          <div>
            <p className="text-stone-700 text-sm md:text-base xl:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              assumenda. Ab quas hic eaque eligendi, quos fugiat optio, quidem
              corrupti repellat nihil omnis adipisci possimus asperiores iusto
              nostrum molestias ullam rem quo totam quibusdam quod sequi! Eaque
              quaerat voluptatem obcaecati? Omnis molestiae delectus
              consequuntur at, quae quaerat ipsum alias expedita quia aperiam
              distinctio dolores odio! Perspiciatis earum, maxime numquam
              inventore ipsum, sunt veritatis distinctio tempore voluptas a
              dignissimos quos recusandae similique quas.
            </p>
          </div>
        </div>
      </div>
      <Gallery />
    </>
  );
}
