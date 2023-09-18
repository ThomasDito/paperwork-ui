import * as React from "react"
import { FieldHookConfig, useField } from "formik"
import { cn } from "@/lib/utils"
import { DayPickerSingleProps } from "react-day-picker"
import { ButtonProps } from "../ui/button"
import { DatePicker } from "../ui/datepicker"
import { Label } from "../ui/label"

type InputProps = {
  className?: string
  placeholder?: string
  label?: string
} & { ButtonProps?: ButtonProps }

const FormikDatePicker: React.FC<
  InputProps &
    FieldHookConfig<any> & {
      DatePickerProps?: Omit<DayPickerSingleProps, "mode">
    }
> = ({ className, placeholder, DatePickerProps, ButtonProps, onSelect, label, id, ...props }) => {
  const [field, meta, helpers] = useField(props)

  return (
    <fieldset key={props.key} className="space-y-2">
      <Label htmlFor={id} className="block">
        {label} {props.required && <span className={cn("text-destructive font-bold")}>*</span>}
      </Label>
      <DatePicker
        {...DatePickerProps}
        ButtonProps={{ ...ButtonProps, id }}
        className={cn(meta.touched && meta.error && "border-destructive border", className)}
        placeholder={placeholder}
        selected={field.value}
        onOpenChange={() => helpers.setTouched(true)}
        onSelect={(date) => {
          helpers.setValue(date)
        }}
        {...props}
      />

      {meta.touched && meta.error && (
        <span className="mt-2 text-xs text-destructive">{meta.error?.toString()}</span>
      )}
    </fieldset>
  )
}

export { FormikDatePicker }
