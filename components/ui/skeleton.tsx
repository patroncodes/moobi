import { cn } from "@/lib/utils"
import React from "react";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-flash rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
