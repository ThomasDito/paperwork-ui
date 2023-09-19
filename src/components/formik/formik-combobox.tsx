import * as React from "react"
import { FieldHookConfig, useField } from "formik"
import { cn } from "@/lib/utils"
import { ComboBox } from "../ui/combobox"
import { Label } from "../ui/label"

type InputProps = {
  className?: string
  placeholder?: string
  placeholderNotFound?: string
  placeholderSearch?: string
  values: {
    value: string
    label: string
  }[]
  label?: string
}

const FormikComboBox: React.FC<InputProps & FieldHookConfig<any>> = ({
  className,
  values,
  onSelect,
  label,
  ...props
}) => {
  const [field, meta, helpers] = useField(props)

  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <fieldset key={props.key} className="space-y-2">
      {label && (
        <Label htmlFor={props.id}>
          {label} {props.required && <span className={cn("text-destructive font-bold")}>*</span>}
        </Label>
      )}

      <ComboBox
        open={open}
        onOpenChange={(open) => {
          helpers.setTouched(true)
          setOpen(open)
        }}
        onSelect={(value) => {
          helpers.setTouched(true)
          helpers.setValue(value)
        }}
        selected={field.value}
        values={values}
        className={cn(meta.touched && meta.error && "border-destructive border", className)}
        {...props}
      />

      {meta.touched && meta.error && (
        <span className="text-xs text-destructive">{meta.error?.toString()}</span>
      )}
    </fieldset>
  )
}

export { FormikComboBox }
