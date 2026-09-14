import { HTMLAttributes } from "react";

export function Container({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mx-auto w-full max-w-content px-4 sm:px-6 ${className}`}
      {...props}
    />
  );
}
