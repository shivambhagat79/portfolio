import Title from "@/components/ui/title";
import { SkillBar } from "./skillBar";
import { skills } from "../../../../public/data/skills/skills";

export default function Skills() {
  return (
    <>
      <Title title="My Skills" />
      <div className="px-20 py-20 border-b-2 border-black">
        <SkillBar items={skills} />
      </div>
    </>
  );
}
