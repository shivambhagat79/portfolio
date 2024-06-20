import Title from "@/components/ui/title";
import { experiences } from "../../../../public/data/experiences/experience";
import { HoverEffect } from "./experience-card-group";

export default function Experience() {
  return (
    <>
      <Title title="My Experiences" />
      <div className="px-5 md:px-10 xl:px-20 md:py-10 xl:py-20">
        <HoverEffect items={experiences} />
      </div>
    </>
  );
}
