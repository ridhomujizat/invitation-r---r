import React from "react";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "relative border-primary border-[1.4px] bg-opacity-60 bg-[#F4EDE8] rounded-xl " +
        className
      }
    >
      {children}
    </div>
  );
}
