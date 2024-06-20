import Title from "@/components/ui/title";

import { projects } from "../../../../public/data/projects/projects";
import { HoverEffect } from "./projects-card-group";

export default function Projects() {
  return (
    <div className="border-b-2 border-black">
      <Title title="My Projects" />
      <div className="px-5 md:px-10 xl:px-20 md:py-10 xl:py-20">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
