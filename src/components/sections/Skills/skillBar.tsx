import { cn } from "@/utils/cn";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./skillBar.css";

export function SkillBar({
  items,
  className,
}: {
  items: {
    name: string;
    level: number;
  }[];
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      {items.map((item) => (
        <div
          key={item.name}
          className="skill-bar py-6 flex items-center hover:-translate-y-2 transition-all duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faCircleDot} className="text-teal-700 me-2" />
          <div className=" text-lg basis-[10%]">{item.name}</div>
          <div className="bar  w-full h-1 bg-teal-900/20">
            <div
              className="bar  h-full bg-gradient-to-r from-stone-900 via-teal-900 to-teal-500"
              style={{ width: `${item.level * 10}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
