import * as React from "react";
import { cn } from "./../../lib/utils";

// ضفنا الـ interface عشان نستقبل الأيقونة
interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode;
}

function Input({ className, type, icon, ...props }: InputProps) {
  return (
    <div className="relative flex items-center w-full">
      {icon && (
        <div
          className={cn(
            "absolute left-4 flex items-center pointer-events-none text-white/70",
            className,
          )}
        >
          {/* icon */}
          {icon}
        </div>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "h-12 w-full min-w-0 py-2 rounded-3xl border border-input bg-transparent text-base text-white border-white/80 transition-colors outline-none",
          "placeholder:text-muted-foreground focus:border-white/90 disabled:pointer-events-none disabled:cursor-not-allowed",
          "md:text-sm dark:bg-input/30",
          icon ? "pl-12 pr-4" : "px-4",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
