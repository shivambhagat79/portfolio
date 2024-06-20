import { cn } from "@/utils/cn";
import Title from "../ui/title";

export default function Gallery() {
  const img_no = 11;
  return (
    <>
      <Title title="Gallery" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 py-10 md:p-10 xl:p-20">
        {Array.from({ length: img_no }, (_, i) => (
          <div
            key={i}
            className={cn(
              "rounded-2xl aspect-square overflow-hidden",
              i == 2
                ? "row-span-2 col-span-2 aspect-[1/1] md:row-span-2 md:col-span-1 md:aspect-[1/2] lg:row-span-1 lg:col-span-1 lg:aspect-[1/1]"
                : "",
              i == 3
                ? "col-span-1 row-span-2 aspect-[1/2] md:col-span-2 md:row-span-2 md:aspect-[1/1] lg:row-span-2 lg:col-span-1 lg:aspect-[1/2]"
                : "",
              i == 4 ? "lg:col-span-2 lg:row-span-2" : "",
              i == 6
                ? "col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-1"
                : "",
              i == 8
                ? "col-span-2 row-span-1 aspect-[2/1] md:col-span-1 md:row-span-1 md:aspect-[1/1]"
                : "",
              i == 9 ? "lg:col-span-2 lg:aspect-[2/1]" : ""
            )}
          >
            <img
              src={`/img/gallery/gallery_${i + 1}.jpg`}
              alt={`Image ${i + 1}`}
              className="rounded-2xl w-full h-full object-cover overflow-hidden transition-all transform hover:scale-90 border-4 border-white "
            />
          </div>
        ))}
      </div>
    </>
  );
}