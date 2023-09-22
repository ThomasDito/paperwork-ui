import * as React from "react";
import { PaginationMeta } from "paperwork-utils";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type PaginationLimitProps = {
  pagination?: PaginationMeta;
  limit: number;
  handleChange: (value: number) => void;
};

function PaginationLimit({
  pagination,
  limit,
  handleChange,
}: PaginationLimitProps) {
  if (!pagination || pagination.total_count == 0) return null;

  return (
    <div className="flex items-center text-sm text-muted-foreground">
      Menampilkan{" "}
      <span className="mx-2">
        <Select
          defaultValue={limit.toString()}
          onValueChange={(value) => handleChange(+value)}
        >
          <SelectTrigger className="h-10 mr-3">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </span>{" "}
      dari {pagination?.total_count || 0} data
    </div>
  );
}

export { PaginationLimit };
