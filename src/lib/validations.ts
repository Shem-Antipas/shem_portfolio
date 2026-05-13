import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  projectType: z.string().min(1, "Select a project type."),
  budgetRange: z.string().min(1, "Select a budget range."),
  message: z.string().min(20, "Share a little more context about the project."),
});

export type ContactInput = z.infer<typeof contactSchema>;
