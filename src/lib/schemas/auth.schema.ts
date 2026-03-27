// import { z } from "zod";

// export const GOALS = [
//   "Gain weight",
//   "Lose weight",
//   "Get fitter",
//   "Gain more Flexible",
//   "Learn the basic",
// ] as const;

// export const registerSchema = (
//   t: ReturnType<typeof import("use-intl").useTranslations>,
// ) =>
//   z
//     .object({
//       firstName: z
//         .string()
//         .min(2, { message: t("Register.validation.firstName.required") })
//         .max(50, { message: t("Register.validation.firstName.tooLong") }),
//       lastName: z
//         .string()
//         .min(2, "Last name is required")
//         .max(50, "Last name is too long"),
//       email: z.string().email("Invalid email address"),
//       password: z
//         .string()
//         .regex(
//           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
//           "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
//         ),
//       rePassword: z.string().min(1, "Please confirm your password"),

//       gender: z.enum(["male", "female"]),
//       age: z
//         .number()
//         .min(12, "You Should be at least 12 years old")
//         .max(90, "You should be at most 90 years old"),
//       weight: z.number().min(40).max(180),
//       height: z.number().min(120).max(220),

//       goal: z.enum(GOALS),
//       activityLevel: z.enum(["level1", "level2", "level3", "level4", "level5"]),
//     })
//     .refine((data) => data.password === data.rePassword, {
//       message: "Passwords do not match",
//       path: ["rePassword"],
//     });

// export type RegisterSchema = z.infer<ReturnType<typeof registerSchema>>;

import { z } from "zod";

// Goals (you can translate these in the UI)
export const GOALS = [
  "Gain weight",
  "Lose weight",
  "Get fitter",
  "Gain more Flexible",
  "Learn the basic",
] as const;

// Function to create the schema with translations
export const createRegisterSchema = (
  t: ReturnType<typeof import("use-intl").useTranslations>,
) =>
  z
    .object({
      firstName: z
        .string()
        .min(2, { message: t("Register.validation.firstName.required") })
        .max(50, { message: t("Register.validation.firstName.tooLong") }),
      lastName: z
        .string()
        .min(2, { message: t("Register.validation.lastName.required") })
        .max(50, { message: t("Register.validation.lastName.tooLong") }),
      email: z
        .string()
        .email({ message: t("Register.validation.email.invalid") }),
      password: z
        .string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/, {
          message: t("Register.validation.password.strong"),
        }),
      rePassword: z
        .string()
        .min(1, { message: t("Register.validation.rePassword.required") }),

      gender: z.enum(["male", "female"] as const).refine(() => true, {
        message: t("Register.validation.gender.required"),
      }),
      age: z
        .number()
        .min(12, { message: t("Register.validation.age.min") })
        .max(90, { message: t("Register.validation.age.max") }),
      weight: z
        .number()
        .min(40, { message: t("Register.validation.weight.min") })
        .max(180, { message: t("Register.validation.weight.max") }),
      height: z
        .number()
        .min(120, { message: t("Register.validation.height.min") })
        .max(220, { message: t("Register.validation.height.max") }),

      goal: z.enum(GOALS).refine(() => true, {
        message: t("Register.validation.goal.required"),
      }),

      activityLevel: z
        .enum(["level1", "level2", "level3", "level4", "level5"] as const)
        .refine(() => true, {
          message: t("Register.validation.activityLevel.required"),
        }),
    })
    .refine((data) => data.password === data.rePassword, {
      message: t("Register.validation.passwords.notMatch"),
      path: ["rePassword"],
    });

// Type inference
export type RegisterSchema = z.infer<ReturnType<typeof createRegisterSchema>>;
