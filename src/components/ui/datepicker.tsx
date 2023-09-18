import * as React from "react"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button, ButtonProps } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { DayPickerSingleProps, SelectSingleEventHandler } from "react-day-picker"
import moment from "moment"

type InputProps = {
  className?: string
  placeholder?: string
  onSelect?: SelectSingleEventHandler
  onOpenChange?: (open: boolean) => void
  selected?: Date
  format?: string
}

const DatePicker: React.FC<
  InputProps & Omit<DayPickerSingleProps, "mode"> & { ButtonProps?: ButtonProps }
> = ({
  className,
  placeholder,
  onOpenChange,
  onSelect,
  selected,
  format,
  ButtonProps,
  ...props
}) => {
  return (
    <Popover onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          {...ButtonProps}
          variant={"outline"}
          className={cn(
            "bg-card w-[240px] justify-start text-left font-normal shadow-sm",
            !selected && "text-muted-foreground",
            ButtonProps.className,
            className,
          )}
        >
          <CalendarIcon className="w-4 h-4 mr-2" />
          {selected ? (
            moment(selected).format(format ?? "DD MMMM YYYY")
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={selected} onSelect={onSelect} {...props} id="hello" initialFocus />
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker }
