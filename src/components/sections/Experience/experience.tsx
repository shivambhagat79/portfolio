import { HoverEffect } from "@/components/ui/experience-card-group";
import Title from "@/components/ui/title";
import { experiences } from "../../../../public/data/experiences/experience";

export default function Experience() {
  return (
    <div className="border-b-2 border-black">
      <Title title="My Experiences" />
      <div className="px-20">
        <HoverEffect items={experiences} />
      </div>
    </div>
  );
}
