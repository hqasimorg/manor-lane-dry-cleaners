import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to be contacted" }),
  }),
});

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  serviceType: z.string().min(1, "Please select a service"),
  itemDescription: z.string().min(5, "Please describe your items"),
  quantity: z.coerce.number().optional(),
  preferredDate: z.string().optional(),
  collectionRequired: z.boolean().optional(),
  address: z.string().optional(),
  message: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to be contacted" }),
  }),
});

export const commercialFormSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  sector: z.string().min(1, "Please select a sector"),
  volume: z.string().min(1, "Please select a volume"),
  frequency: z.string().min(1, "Please select a frequency"),
  requirements: z.string().min(10, "Please describe your requirements"),
  address: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to be contacted" }),
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type QuoteFormData = z.infer<typeof quoteFormSchema>;
export type CommercialFormData = z.infer<typeof commercialFormSchema>;
