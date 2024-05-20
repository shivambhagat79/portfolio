import Title from "@/components/ui/title";

import { projects } from "../../../../public/data/projects/projects";
import { HoverEffect } from "./projects-card-group";

export default function Projects() {
  return (
    <>
      <Title title="My Projects" />
      <div className="px-20">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
