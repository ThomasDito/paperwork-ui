import * as React from "react";
import { Calendar, CalendarProps } from "react-big-calendar";
import withDragAndDrop, { withDragAndDropProps } from "react-big-calendar/lib/addons/dragAndDrop";

const DnDCalendar = withDragAndDrop(Calendar);
export interface CalendarEventProps extends withDragAndDropProps, CalendarProps {}

export function CalendarEvent({ ...props }: CalendarEventProps) {
  const defaultProps = React.useMemo<CalendarProps>(
    () => ({
      defaultView: "month",
      localizer: props.localizer,
      resizable: false,
      popup: true,
      selectable: true,
      views: {
        month: true,
        week: false,
        day: false,
        agenda: true,
      },
      className: "bg-card rounded-md p-4 py-6 shadow-sm max-h-[calc(24rem*2.2)]",
      style: {
        height: "100vh",
      },
    }),
    [],
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <DnDCalendar {...defaultProps} {...props} />;
}
