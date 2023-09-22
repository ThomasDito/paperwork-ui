import type { OrganizationReviewStatus } from "paperwork-utils";
import * as React from "react";
import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        accepted: "border-success/10 bg-success-50 text-success",
        revised: "border-warning/10 bg-warning-50 text-warning",
        declined: "border-danger/10 bg-danger-50 text-danger",
      },
    },
    defaultVariants: {
      variant: "declined",
    },
  },
);

const badgeLabel: Record<OrganizationReviewStatus, string> = {
  accepted: "Disetujui",
  declined: "Ditolak",
  revised: "Review",
};

export interface BadgeReviewStatusProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  organization_review_status: OrganizationReviewStatus;
}

function BadgeReviewStatus({
  organization_review_status = "declined",
  className,
  ...props
}: BadgeReviewStatusProps) {
  return (
    <div
      className={badgeVariants({
        variant: organization_review_status,
        className,
      })}
      {...props}
    >
      <span>{badgeLabel[organization_review_status]}</span>
    </div>
  );
}

export { BadgeReviewStatus };
