"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";
import { submitCommercialEnquiry } from "@/app/actions";
import { getRecaptchaToken } from "@/lib/utils/recaptcha";
import { FormInput } from "@/components/ui/FormInput";
import { FormTextarea } from "@/components/ui/FormTextarea";
import { FormSelect } from "@/components/ui/FormSelect";
import { SubmitButton } from "./SubmitButton";
import { CheckCircle, AlertCircle } from "lucide-react";

const sectorOptions = [
  { value: "hotel", label: "Hotel / B&B" },
  { value: "airbnb", label: "Airbnb Host" },
  { value: "restaurant", label: "Restaurant / Cafe" },
  { value: "salon", label: "Salon / Spa" },
  { value: "office", label: "Office" },
  { value: "other", label: "Other" },
];

const volumeOptions = [
  { value: "small", label: "Small (up to 20kg/week)" },
  { value: "medium", label: "Medium (20-100kg/week)" },
  { value: "large", label: "Large (100kg+/week)" },
];

const frequencyOptions = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "on-demand", label: "On Demand" },
];

const initialState = {
  success: false,
  message: "",
  errors: undefined as Record<string, string[]> | undefined,
};

export function CommercialEnquiryForm() {
  const [state, formAction] = useFormState(submitCommercialEnquiry, initialState);
  const tokenFetched = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (tokenFetched.current) { tokenFetched.current = false; return; }
    e.preventDefault();
    const token = await getRecaptchaToken("commercial");
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
              {state.success ? "Enquiry Sent!" : "Something went wrong"}
            </p>
            <p className="text-sm">{state.message}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Business Name"
          name="businessName"
          type="text"
          placeholder="Your Business Ltd"
          required
          error={state?.errors?.businessName?.[0]}
        />
        <FormInput
          label="Contact Name"
          name="contactName"
          type="text"
          placeholder="John Smith"
          required
          error={state?.errors?.contactName?.[0]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="john@yourbusiness.com"
          required
          error={state?.errors?.email?.[0]}
        />
        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="020 1234 5678"
          required
          error={state?.errors?.phone?.[0]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormSelect
          label="Sector"
          name="sector"
          options={sectorOptions}
          required
          error={state?.errors?.sector?.[0]}
        />
        <FormSelect
          label="Volume"
          name="volume"
          options={volumeOptions}
          required
          error={state?.errors?.volume?.[0]}
        />
        <FormSelect
          label="Frequency"
          name="frequency"
          options={frequencyOptions}
          required
          error={state?.errors?.frequency?.[0]}
        />
      </div>

      <FormTextarea
        label="Requirements"
        name="requirements"
        placeholder="Describe your laundry requirements (types of items, special instructions, etc.)"
        required
        error={state?.errors?.requirements?.[0]}
      />

      <FormTextarea
        label="Business Address (optional)"
        name="address"
        placeholder="Your business address"
        error={state?.errors?.address?.[0]}
      />

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          id="commercialConsent"
          required
          className="mt-1 w-5 h-5 rounded border-neutral-light-grey text-primary focus:ring-primary"
        />
        <label htmlFor="commercialConsent" className="text-sm text-neutral-dark-grey">
          I agree to be contacted by Manor Lane Dry Cleaners regarding this commercial enquiry.
          {" "}
          <span className="text-red-500">*</span>
        </label>
      </div>
      {state?.errors?.consent && (
        <p className="text-sm text-red-500 -mt-4">{state.errors.consent[0]}</p>
      )}

      <SubmitButton className="w-full md:w-auto">
        Submit Enquiry
      </SubmitButton>
    </form>
  );
}
