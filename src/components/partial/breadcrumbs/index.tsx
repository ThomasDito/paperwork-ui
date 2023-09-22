import { cn } from "@/lib/utils";
import * as React from "react";

export interface BreadcrumbsProps
  extends React.OlHTMLAttributes<HTMLOListElement> {
  separator?: React.ReactNode;
  className?: string;
}

export function Breadcrumbs({
  children,
  separator,
  ...props
}: React.PropsWithChildren<BreadcrumbsProps>) {
  return (
    <div className="text-left w-max">
      <nav aria-label="breadcrumb">
        <ol
          {...props}
          className={cn(
            "flex w-full flex-wrap items-center rounded-md px-4 py-2 first:pl-0",
            props.className,
          )}
        >
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              return (
                <>
                  <li
                    className={cn(
                      "hover:text-primary text-foreground/60 last:text-foreground flex cursor-pointer items-center text-sm transition-colors duration-300",
                      {},
                    )}
                  >
                    {child}
                  </li>
                  {index !== React.Children.count(children) - 1 && (
                    <span
                      className={
                        "text-foreground/60 pointer-events-none mx-2 select-none"
                      }
                    >
                      {separator}
                    </span>
                  )}
                </>
              );
            }
            return null;
          })}
        </ol>
      </nav>
    </div>
  );
}
