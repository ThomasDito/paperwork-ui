import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PaginationMeta } from "paperwork-utils";
import { cn } from "../../../lib/utils";

export type PaginationButtonProps = {
  pagination: PaginationMeta;
  handleChange: (page: number) => void;
  pageLimit?: number;
};

function PaginationButton({
  pagination,
  handleChange,
  pageLimit = 3,
}: PaginationButtonProps) {
  if (!pagination || pagination.total_count === 0) return null;

  const currentPage = pagination.current_page;
  const totalPages = pagination.page_count;

  const startPage = Math.max(
    pagination.current_page - Math.floor(pageLimit / 2),
    1,
  );
  const endPage = Math.min(startPage + pageLimit - 1, pagination.page_count);

  const pagesToShow = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );

  return (
    <nav>
      <ul className="flex items-center h-10 space-x-2 text-sm">
        <li>
          <span
            onClick={() =>
              pagination.previous_page
                ? handleChange(pagination.previous_page)
                : null
            }
            className={cn(
              "text-muted-foreground border-input hover:bg-muted flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border bg-white leading-tight",
              (pagination.is_first_page || pagination.previous_page == null) &&
                "text-muted-foreground/30 cursor-not-allowed bg-white hover:bg-white",
            )}
          >
            <span className="sr-only">Sebelumnya</span>
            <ChevronLeft className="w-4 h-4" />
          </span>
        </li>
        {currentPage > pageLimit - 1 && (
          <li>
            <span
              className={cn(
                "flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-md border leading-tight",
                "text-muted-foreground border-input hover:bg-muted cursor-not-allowed bg-white",
              )}
            >
              ...
            </span>
          </li>
        )}
        {pagesToShow.map((page) => {
          return (
            <li key={page}>
              <span
                onClick={() =>
                  currentPage !== page ? handleChange(page) : null
                }
                className={cn(
                  "flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-md border leading-tight",
                  page === currentPage
                    ? "border-primary bg-primary hover:bg-primary/90 pointer-events-none text-white"
                    : "text-muted-foreground border-input hover:bg-muted bg-white",
                )}
              >
                {page}
              </span>
            </li>
          );
        })}
        {currentPage < totalPages - pageLimit + 2 && (
          <li>
            <span
              className={cn(
                "flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-md border leading-tight",
                "text-muted-foreground border-input hover:bg-muted cursor-not-allowed bg-white",
              )}
            >
              ...
            </span>
          </li>
        )}
        <li>
          <span
            onClick={() =>
              pagination.next_page ? handleChange(pagination.next_page) : null
            }
            className={cn(
              "text-muted-foreground border-input hover:bg-muted flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border bg-white leading-tight",
              (pagination.is_last_page || pagination.next_page == null) &&
                "text-muted-foreground/30 cursor-not-allowed bg-white hover:bg-white",
            )}
          >
            <span className="sr-only">Selanjutnya</span>
            <ChevronRight className="w-4 h-4" />
          </span>
        </li>
      </ul>
    </nav>
  );
}

export { PaginationButton };
