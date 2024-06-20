import Title from "@/components/ui/title";
import { experiences } from "../../../../public/data/experiences/experience";
import { HoverEffect } from "./experience-card-group";

export default function Experience() {
  return (
    <>
      <Title title="My Experiences" />
      <div className=" px-20 py-20">
        <HoverEffect items={experiences} />
      </div>
    </>
  );
}
