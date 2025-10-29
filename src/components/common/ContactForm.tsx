"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { toast } from "sonner";
import { sendContactMail } from "@/actions/contact.action";
import { Button } from "@/components/ui/button";
import { contactSchema } from "@/utils/validations/schema";
import { z } from "zod";

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
  title?: string;
  description?: string;
}

export default function ContactForm({
  className = "",
  title = "Contact Us",
  description = "Explore insights, stories, and updates from the WINNERS ecosystem—where innovation meets compassion to empower communities."
}: ContactFormProps) {
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, formState, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
    mode: "onBlur",
  });

  const onSubmit = (data: ContactFormValues) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    startTransition(async () => {
      const result = await sendContactMail(formData);

      if (result.success) {
        toast.success("Message sent successfully!");
        reset();
      } else if (result.errors) {
        toast.error("Please correct the highlighted fields.");
      } else {
        toast.error(result.error || "Failed to send message. Try again later.");
      }
    });
  };

  return (
    <div className={`rounded-xl bg-white/20 backdrop-blur-md border border-white/30 p-6 md:p-8 ${className}`}>
      <h3 className="text-center text-white text-xl font-semibold">{title}</h3>
      <p className="text-center text-white/80 text-sm md:text-base mt-2">
        {description}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md border border-white/40 bg-white/20 px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            {...register("name")}
          />
          {formState.errors.name && (
            <p className="text-red-300 text-sm mt-1">{formState.errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-white/40 bg-white/20 px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            {...register("email")}
          />
          {formState.errors.email && (
            <p className="text-red-300 text-sm mt-1">{formState.errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full rounded-md border border-white/40 bg-white/20 px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            {...register("phone")}
          />
          {formState.errors.phone && (
            <p className="text-red-300 text-sm mt-1">{formState.errors.phone.message}</p>
          )}
        </div>

        <div className="flex flex-col md:col-span-2">
          <textarea
            placeholder="Message"
            className="min-h-28 w-full rounded-md border border-white/40 bg-white/20 px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            {...register("message")}
          />
          {formState.errors.message && (
            <p className="text-red-300 text-sm mt-1">{formState.errors.message.message}</p>
          )}
        </div>

        <div className="md:col-span-2 flex justify-end mt-3">
          <Button
            type="submit"
            disabled={isPending}
            className="rounded-full bg-white text-foreground hover:bg-white/90 px-6"
          >
            {isPending ? "Sending..." : "Send"}
          </Button>
        </div>
      </form>
    </div>
  );
}
