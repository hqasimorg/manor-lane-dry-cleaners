"use client";

import { cn } from "@/lib/utils/cn";
import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: string;
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, options, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-neutral-dark-grey">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "w-full px-4 py-3 border rounded-md text-neutral-black bg-white appearance-none transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
              error
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-neutral-light-grey",
              className
            )}
            {...props}
          >
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-medium-grey pointer-events-none" />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FormSelect.displayName = "FormSelect";
