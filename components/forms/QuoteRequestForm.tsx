"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";
import { submitQuoteForm } from "@/app/actions";
import { getRecaptchaToken } from "@/lib/utils/recaptcha";
import { FormInput } from "@/components/ui/FormInput";
import { FormTextarea } from "@/components/ui/FormTextarea";
import { FormSelect } from "@/components/ui/FormSelect";
import { SubmitButton } from "./SubmitButton";
import { CheckCircle, AlertCircle } from "lucide-react";

const serviceOptions = [
  { value: "dry-cleaning", label: "Dry Cleaning" },
  { value: "laundry", label: "Laundry Service" },
  { value: "wash-iron", label: "Wash & Iron" },
  { value: "alterations", label: "Alterations" },
  { value: "duvet-bedding", label: "Duvet & Bedding" },
  { value: "commercial", label: "Commercial Laundry" },
];

const initialState = {
  success: false,
  message: "",
  errors: undefined as Record<string, string[]> | undefined,
};

export function QuoteRequestForm() {
  const [state, formAction] = useFormState(submitQuoteForm, initialState);
  const tokenFetched = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (tokenFetched.current) { tokenFetched.current = false; return; }
    e.preventDefault();
    const token = await getRecaptchaToken("quote");
    const input = e.currentTarget.querySelector<HTMLInputElement>('[name="recaptchaToken"]');
    if (input) input.value = token;
    tokenFetched.current = true;
    e.currentTarget.requestSubmit();
  };

  return (
    <form action={formAction} onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="recaptchaToken" />
      {state?.message && (
        <div
          className={`p-4 rounded-lg flex items-start gap-3 ${
            state.success
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {state.success ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          )}
          <div>
            <p className="font-medium">
              {state.success ? "Quote Requested!" : "Something went wrong"}
            </p>
            <p className="text-sm">{state.message}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Your Name"
          name="name"
          type="text"
          placeholder="John Smith"
          required
          error={state?.errors?.name?.[0]}
        />
        <FormInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          error={state?.errors?.email?.[0]}
        />
      </div>

      <FormInput
        label="Phone Number"
        name="phone"
        type="tel"
        placeholder="020 1234 5678"
        required
        error={state?.errors?.phone?.[0]}
      />

      <FormSelect
        label="Service Type"
        name="serviceType"
        options={serviceOptions}
        required
        error={state?.errors?.serviceType?.[0]}
      />

      <FormTextarea
        label="Item Description"
        name="itemDescription"
        placeholder="Describe the items you need cleaned (e.g., 2 suits, 3 dresses, 1 duvet)"
        required
        error={state?.errors?.itemDescription?.[0]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Quantity (optional)"
          name="quantity"
          type="number"
          placeholder="e.g., 5"
          error={state?.errors?.quantity?.[0]}
        />
        <FormInput
          label="Preferred Date (optional)"
          name="preferredDate"
          type="date"
          error={state?.errors?.preferredDate?.[0]}
        />
      </div>

      <div className="flex items-center gap-3 p-4 bg-accent rounded-lg">
        <input
          type="checkbox"
          name="collectionRequired"
          id="collectionRequired"
          className="w-5 h-5 rounded border-neutral-light-grey text-primary focus:ring-primary"
        />
        <label htmlFor="collectionRequired" className="text-sm text-neutral-dark-grey">
          I need collection & delivery service
        </label>
      </div>

      <FormTextarea
        label="Collection Address (if required)"
        name="address"
        placeholder="Your full address including postcode"
        error={state?.errors?.address?.[0]}
      />

      <FormTextarea
        label="Additional Notes (optional)"
        name="message"
        placeholder="Any special requirements or questions?"
        error={state?.errors?.message?.[0]}
      />

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          id="quoteConsent"
          required
          className="mt-1 w-5 h-5 rounded border-neutral-light-grey text-primary focus:ring-primary"
        />
        <label htmlFor="quoteConsent" className="text-sm text-neutral-dark-grey">
          I agree to be contacted by Manor Lane Dry Cleaners regarding my quote request.
          {" "}
          <span className="text-red-500">*</span>
        </label>
      </div>
      {state?.errors?.consent && (
        <p className="text-sm text-red-500 -mt-4">{state.errors.consent[0]}</p>
      )}

      <SubmitButton className="w-full md:w-auto">
        Request Quote
      </SubmitButton>
    </form>
  );
}
