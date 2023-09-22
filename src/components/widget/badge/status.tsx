import * as React from "react";
import { OrganizationStatus } from "paperwork-utils";
import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        active: "border-success/10 bg-success-50 text-success",
        inactive: "border-secondary/10 bg-secondary-50 text-secondary",
        revised: "border-warning/10 bg-warning-50 text-warning",
        declined: "border-danger/10 bg-danger-50 text-danger",
        in_review: "border-sky-500/10 bg-sky-50 text-sky-500",
      },
    },
    defaultVariants: {
      variant: "in_review",
    },
  },
);

const badgeLabel: Record<OrganizationStatus, string> = {
  active: "Aktif",
  declined: "Ditolak",
  in_review: "Review",
  inactive: "Tidak Aktif",
  revised: "Revisi",
};

export type BadgeStatusProps = React.HTMLAttributes<HTMLDivElement> & {
  organization_status: OrganizationStatus;
};

function BadgeStatus({
  organization_status = "in_review",
  className,
  ...props
}: BadgeStatusProps) {
  return (
    <div
      className={badgeVariants({ variant: organization_status, className })}
      {...props}
    >
      {badgeLabel[organization_status]}
    </div>
  );
}

export { BadgeStatus };
