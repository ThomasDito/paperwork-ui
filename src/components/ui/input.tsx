import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // "border-input bg-card ring-offset-background placeholder:text-muted-foreground focus-visible:ring-primary/0 focus:border-primary invalid:border-danger invalid:ring-danger/50 flex h-10 w-full rounded-md border px-3 py-2 text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium invalid:ring-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 invalid:text-danger",
          "border-input bg-card ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring invalid:text-danger invalid:ring-danger focus-visible:invalid:ring-danger flex h-10 w-full rounded-md border px-3 py-2 text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium invalid:ring-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = "Input"

export { Input }
