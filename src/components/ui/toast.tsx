import * as React from "react";
import { CheckmarkIcon, ErrorIcon, ToastOptions, toast } from "react-hot-toast";

export function toastSuccess(message: string, option?: ToastOptions): void {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } pointer-events-auto flex max-w-lg items-center justify-start space-x-3 rounded-lg bg-white p-3 text-sm shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <CheckmarkIcon />
        <span>{message}</span>
      </div>
    ),
    option,
  );
}

export function toastError(message: string, option?: ToastOptions): void {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } pointer-events-auto flex max-w-lg items-center justify-start space-x-3 rounded-lg bg-white p-3 text-sm shadow ring-1 ring-black ring-opacity-5`}
      >
        <ErrorIcon />
        <span>{message}</span>
      </div>
    ),
    option,
  );
}
