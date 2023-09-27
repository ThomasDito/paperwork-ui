import * as React from "react";
import { FieldHookConfig, useField } from "formik";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Required } from "../widget/required";

type InputProps = {
  className?: string;
  placeholder?: string;
  children?: React.ReactNode;
  label?: string;
} & SelectPrimitive.SelectProps;

const FormikSelect: React.FC<InputProps & FieldHookConfig<string>> = ({
  className,
  children,
  placeholder,
  label,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);

  return (
    <fieldset key={props.key} className="space-y-2">
      {label && (
        <Label htmlFor={props.id}>
          {label}
          {props.required && <Required />}
        </Label>
      )}
      <Select
        onValueChange={(value) => helpers.setValue(value)}
        onOpenChange={() => helpers.setTouched(true)}
        value={field.value}
        {...props}
      >
        <SelectTrigger
          className={cn(
            meta.touched && meta.error && "border-destructive border",
            "w-[180px]",
            className,
          )}
          id={props.id}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>

      {meta.touched && meta.error && (
        <span className="text-xs text-destructive">
          {meta.error?.toString()}
        </span>
      )}
    </fieldset>
  );
};

export { FormikSelect };
