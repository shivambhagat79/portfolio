import Title from "@/components/ui/title";

import { HoverEffect } from "@/components/ui/projects-card-group";
import { projects } from "../../../../public/data/projects/projects";

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
