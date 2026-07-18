"use server";

import { z } from "zod";
import { contactFormSchema, quoteFormSchema, commercialFormSchema } from "@/lib/utils/validators";

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey || !token) return true; // Skip verification if not configured
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    });
    const data = await res.json();
    return data.success && data.score >= 0.5;
  } catch {
    return true; // Fail open if verify call errors
  }
}

// Helper to send email (placeholder - implement with nodemailer)
async function sendEmail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  // TODO: Implement with nodemailer using SMTP credentials
  console.log("Email sent:", { to, subject, body });
  return { success: true };
}

export async function submitContactForm(
  prevState: { success: boolean; message: string; errors?: Record<string, string[]> } | null,
  formData: FormData
) {
  try {
    const recaptchaToken = formData.get("recaptchaToken") as string;
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return { success: false, message: "Security check failed. Please try again." };
    }

    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      consent: formData.get("consent") === "on",
    };

    const validated = contactFormSchema.safeParse(rawData);

    if (!validated.success) {
      return {
        success: false,
        message: "Please fix the errors below.",
        errors: validated.error.flatten().fieldErrors,
      };
    }

    const data = validated.data;

    // Send admin notification
    await sendEmail({
      to: process.env.ADMIN_EMAIL || "manorlane.drycleaners176@gmail.com",
      subject: `New Contact Form from ${data.name}`,
      body: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Message: ${data.message}
      `,
    });

    // Send customer confirmation
    await sendEmail({
      to: data.email,
      subject: "We've received your message - Manor Lane Dry Cleaners",
      body: `
Hi ${data.name},

Thank you for getting in touch. We've received your message and will get back to you within 24 hours.

If you need immediate assistance, please call us on 020 8297 1411.

Best regards,
Manor Lane Dry Cleaners
      `,
    });

    return {
      success: true,
      message: "Thank you! We'll be in touch within 24 hours.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or call us directly.",
    };
  }
}

export async function submitQuoteForm(
  prevState: { success: boolean; message: string; errors?: Record<string, string[]> } | null,
  formData: FormData
) {
  try {
    const recaptchaToken = formData.get("recaptchaToken") as string;
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return { success: false, message: "Security check failed. Please try again." };
    }

    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      serviceType: formData.get("serviceType") as string,
      itemDescription: formData.get("itemDescription") as string,
      quantity: formData.get("quantity") as string,
      preferredDate: formData.get("preferredDate") as string,
      collectionRequired: formData.get("collectionRequired") === "on",
      address: formData.get("address") as string,
      message: formData.get("message") as string,
      consent: formData.get("consent") === "on",
    };

    const validated = quoteFormSchema.safeParse(rawData);

    if (!validated.success) {
      return {
        success: false,
        message: "Please fix the errors below.",
        errors: validated.error.flatten().fieldErrors,
      };
    }

    const data = validated.data;

    await sendEmail({
      to: process.env.ADMIN_EMAIL || "manorlane.drycleaners176@gmail.com",
      subject: `New Quote Request from ${data.name}`,
      body: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.serviceType}
Items: ${data.itemDescription}
Quantity: ${data.quantity || "Not specified"}
Preferred Date: ${data.preferredDate || "Not specified"}
Collection Required: ${data.collectionRequired ? "Yes" : "No"}
Address: ${data.address || "Not provided"}
Additional Message: ${data.message || "None"}
      `,
    });

    await sendEmail({
      to: data.email,
      subject: "Quote Request Received - Manor Lane Dry Cleaners",
      body: `
Hi ${data.name},

Thank you for requesting a quote. We've received your details and will prepare your quote within 24 hours.

Service: ${data.serviceType}
Items: ${data.itemDescription}

If you need immediate assistance, please call us on 020 8297 1411.

Best regards,
Manor Lane Dry Cleaners
      `,
    });

    return {
      success: true,
      message: "Quote request sent! We'll be in touch within 24 hours.",
    };
  } catch (error) {
    console.error("Quote form error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or call us directly.",
    };
  }
}

export async function submitCommercialEnquiry(
  prevState: { success: boolean; message: string; errors?: Record<string, string[]> } | null,
  formData: FormData
) {
  try {
    const recaptchaToken = formData.get("recaptchaToken") as string;
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return { success: false, message: "Security check failed. Please try again." };
    }

    const rawData = {
      businessName: formData.get("businessName") as string,
      contactName: formData.get("contactName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      sector: formData.get("sector") as string,
      volume: formData.get("volume") as string,
      frequency: formData.get("frequency") as string,
      requirements: formData.get("requirements") as string,
      address: formData.get("address") as string,
      consent: formData.get("consent") === "on",
    };

    const validated = commercialFormSchema.safeParse(rawData);

    if (!validated.success) {
      return {
        success: false,
        message: "Please fix the errors below.",
        errors: validated.error.flatten().fieldErrors,
      };
    }

    const data = validated.data;

    await sendEmail({
      to: process.env.ADMIN_EMAIL || "manorlane.drycleaners176@gmail.com",
      subject: `Commercial Enquiry from ${data.businessName}`,
      body: `
Business: ${data.businessName}
Contact: ${data.contactName}
Email: ${data.email}
Phone: ${data.phone}
Sector: ${data.sector}
Volume: ${data.volume}
Frequency: ${data.frequency}
Requirements: ${data.requirements}
Address: ${data.address || "Not provided"}
      `,
    });

    await sendEmail({
      to: data.email,
      subject: "Commercial Enquiry Received - Manor Lane Dry Cleaners",
      body: `
Hi ${data.contactName},

Thank you for your commercial laundry enquiry. Our business team will review your requirements and get back to you within 24 hours.

Business: ${data.businessName}
Sector: ${data.sector}

Best regards,
Manor Lane Dry Cleaners Business Team
      `,
    });

    return {
      success: true,
      message: "Enquiry sent! Our business team will be in touch within 24 hours.",
    };
  } catch (error) {
    console.error("Commercial form error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or call us directly.",
    };
  }
}
