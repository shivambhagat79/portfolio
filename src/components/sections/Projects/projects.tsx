import Title from "@/components/ui/title";

import { projects } from "../../../../public/data/projects/projects";
import { HoverEffect } from "./projects-card-group";

export default function Projects() {
  return (
    <div className="border-b-2 border-black">
      <Title title="My Projects" />
      <div className="px-20 py-20">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
