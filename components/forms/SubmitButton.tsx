"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/Button";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  children: React.ReactNode;
  loadingText?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  className?: string;
}

export function SubmitButton({
  children,
  loadingText = "Sending...",
  variant = "primary",
  className,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant={variant}
      disabled={pending}
      className={className}
    >
      {pending ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  );
}
