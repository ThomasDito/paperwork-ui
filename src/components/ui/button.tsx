import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-warning-300 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap text-center",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground border border-primary hover:bg-primary-100 hover:text-primary-foreground focus:bg-transparent focus:text-primary-foreground focus:ring-warning-300 focus:ring-2 focus:bg-primary-150 focus:border-transparent active:text-primary-foreground active:bg-primary-20 active:ring-transparent active:border-primary-200 disabled:text-dark-grey disabled:border-silver disabled:bg-silver",
        secondary:
          "bg-transparent border border-primary text-primary hover:bg-primary-100 hover:text-primary-foreground focus:bg-transparent focus:text-primary-150 focus:ring-warning-300 focus:ring-2 focus:bg-transparent focus:border-transparent active:text-primary-200 active:bg-transparent active:ring-transparent active:border-primary-200 disabled:text-light-grey disabled:border-light-grey",
        tertiary:
          "bg-transparent border border-primary text-primary hover:bg-primary-100 hover:text-primary-foreground focus:bg-transparent focus:text-primary-150 focus:ring-warning-300 focus:ring-2 focus:bg-transparent focus:border-transparent active:text-primary-200 active:bg-transparent active:ring-transparent disabled:text-light-grey disabled:border-transparent",
        gradient:
          "bg-gradient-to-r from-primary shadow-xl shadow-primary/20 to-rose-pink text-primary-foreground border border-transparent disabled:text-dark-grey disabled:bg-none   disabled:shadow disabled:shadow-foreground/10 disabled:border-silver disabled:bg-silver",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  },
)

Button.displayName = "Button"
