import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { ToolbarProps, Navigate as navigate, View } from "react-big-calendar";

export function Toolbar({
  label,
  localizer: { messages },
  onNavigate,
  onView,
  view,
  views,
}: ToolbarProps) {
  return (
    <div className="rbc-toolbar">
      <span className={clsx("rbc-btn-group", "nav-button")}>
        <button
          type="button"
          onClick={() => onNavigate(navigate.PREVIOUS)}
          className="aspect-square w-10 !px-0"
          aria-label={messages.previous}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => onNavigate(navigate.TODAY)}
          aria-label={messages.today}
        >
          {messages.today}
        </button>
        <button
          type="button"
          onClick={() => onNavigate(navigate.NEXT)}
          className="aspect-square w-10 !px-0"
          aria-label={messages.next}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </span>
      <span className="rbc-toolbar-label">{label}</span>
      <span className="rbc-btn-group">
        {(views as View[])?.map((name: View) => (
          <button
            type="button"
            key={name}
            className={clsx({ "rbc-active": view === name })}
            onClick={() => onView(name)}
          >
            {messages[name]}
          </button>
        ))}
      </span>
    </div>
  );
}
