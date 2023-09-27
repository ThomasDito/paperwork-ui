import * as React from "react";
import { cn } from "@/lib/utils";

export interface RequiredProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function Required({ className }: RequiredProps) {
  return <span className={cn("text-destructive font-bold ml-0.5 inline-block", className)}>*</span>;
}
