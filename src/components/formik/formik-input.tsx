import * as React from "react"
import { useField } from "formik"
import { cn } from "@/lib/utils"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

type InputProps = {
  name: string
  type?: string
  className?: string
  key?: React.Key | null
  label?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const FormikInput: React.FC<InputProps> = ({
  type = "text",
  className,
  label,
  ...props
}) => {
  const [field, meta] = useField(props)

  return (
    <fieldset key={props.key} className="space-y-2">
      <Label htmlFor={props.id}>
        {label} {props.required && <span className={cn("text-destructive font-bold")}>*</span>}
      </Label>
      <Input
        type={type}
        className={cn(
          className,
          meta.touched &&
            meta.error &&
            "border-destructive ring-destructive border focus-visible:ring-0",
        )}
        {...field}
        {...props}
      />

      {meta.touched && meta.error && (
        <span className="mt-2 text-xs text-destructive">{meta.error?.toString()}</span>
      )}
    </fieldset>
  )
}

export { FormikInput }
