/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useState } from "react";

export default function ExperienceIconComponent({
  description,
  textColor,
  children,
}: {
  description: string;
  textColor: string;
  children: any;
}): ReactElement {
  const [hovering, setHovering] = useState<boolean>(false);
  return (
    <div
      className="relative flex flex-col items-center rounded-md bg-neutral-800 text-4xl p-2 hover:bg-neutral-700 transition-all cursor-pointer"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {hovering && (
        <div className="absolute bg-neutral-800 backdrop-blur-lg p-4 rounded-md border border-neutral-700 top-[3.5rem] z-[99]">
          <h4 className="text-neutral-300 font-bold text-lg">{description}</h4>
        </div>
      )}
      <div className={`${textColor}`}>{children}</div>
    </div>
  );
}
