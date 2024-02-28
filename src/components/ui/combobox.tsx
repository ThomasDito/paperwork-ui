import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./command";

type InputProps = {
  className?: string;
  placeholder?: string;
  placeholderNotFound?: string;
  placeholderSearch?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSelect: (value: string) => void;
  selected?: string;
  values: {
    value: string;
    label: string;
  }[];
  id?: string;
};

const ComboBox: React.FC<InputProps> = ({
  className,
  placeholder,
  placeholderNotFound,
  placeholderSearch,
  open,
  onOpenChange,
  onSelect,
  selected,
  values,
  id,
  ...props
}) => {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild id={id}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("bg-card w-[300px] justify-between", className)}
          {...props}
        >
          <div className="line-clamp-1 w-full text-left font-normal">
            {selected
              ? values.find((item) => item.value === selected)?.label
              : placeholder ?? "Pilih item..."}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-h-[20rem] w-auto max-w-[25rem] overflow-y-auto p-0 lg:max-w-[30rem]">
        <Command>
          <CommandInput placeholder={placeholderSearch ?? "Cari item..."} />
          <CommandEmpty className="m-5 text-center text-sm">
            {placeholderNotFound ?? "Item tidak ditemukan"}
          </CommandEmpty>
          <CommandGroup>
            {values.map((item) => (
              <CommandItem
                key={item.value}
                onSelect={() => {
                  onSelect(item.value === selected ? "" : item.value);
                  onOpenChange?.(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4 flex-shrink-0",
                    selected === item.value ? "opacity-100" : "opacity-0",
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export { ComboBox };
