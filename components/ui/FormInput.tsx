"use client";

import { cn } from "@/lib/utils/cn";
import { forwardRef } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-neutral-dark-grey">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 border rounded-md text-neutral-black placeholder-neutral-medium-grey transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-neutral-light-grey",
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
