import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import "../app/globals.css";

const CardWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-[10px] backdrop-blur bg-[#171717]/75 border border-[#242424] gap-2 flex w-full flex-col mb-4 p-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
