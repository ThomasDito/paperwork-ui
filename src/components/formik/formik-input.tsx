import * as React from "react";
import { useField } from "formik";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type InputProps = {
  name: string;
  type?: string;
  className?: string;
  key?: React.Key | null;
  label?: string;
  containerClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormikInput: React.FC<InputProps> = ({
  type = "text",
  className,
  label,
  containerClassName,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <fieldset key={props.key} className={cn("space-y-2", containerClassName)}>
      {label && (
        <Label htmlFor={props.id}>
          {label}{" "}
          {props.required && (
            <span className={cn("text-destructive font-bold")}>*</span>
          )}
        </Label>
      )}
      <Input
        type={type}
        className={cn(
          className,
          meta.touched &&
            meta.error &&
            "border-destructive ring-danger border focus-visible:ring-0",
        )}
        {...field}
        {...props}
      />

      {meta.touched && meta.error && (
        <span className="text-destructive text-xs">
          {meta.error?.toString()}
        </span>
      )}
    </fieldset>
  );
};

export { FormikInput };
