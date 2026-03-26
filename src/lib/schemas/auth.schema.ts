import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name is required")
      .max(50, "First name is too long"),
    lastName: z
      .string()
      .min(2, "Last name is required")
      .max(50, "Last name is too long"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
      ),
    rePassword: z.string(),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
