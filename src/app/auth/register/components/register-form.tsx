import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { User, Mail, Lock } from "lucide-react";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { type RegisterSchema } from "@/lib/schemas/auth.schema";
import SocialLinks from "./social-links";
import { useTranslations } from "use-intl";

export default function RegisterForm({ nextStep }: RegisterFormProps) {
  const t = useTranslations("Register");
  const form = useFormContext<RegisterSchema>();

  const handleNext = async () => {
    // Validate ONLY this step fields
    const isValid = await form.trigger([
      "firstName",
      "lastName",
      "email",
      "password",
      "rePassword",
    ]);

    if (isValid) {
      nextStep?.();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      {/* Header */}
      <header className="flex flex-col items-center gap-3 mb-4">
        <span className="text-lg">{t("hey-there")}</span>
        <h1 className="text-4xl font-bold text-center capitalize">
          {t("create-account")}
        </h1>
      </header>

      {/* Fields */}
      <div className="flex flex-col gap-3 w-full max-w-md sm:max-w-lg">
        {/* First Name */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder={t("first-name")}
                  icon={<User className="h-5 w-5 text-gray-400" />}
                  className="h-12 rounded-2xl"
                />
              </FormControl>
              <FormMessage className="text-red-500 ms-2" />
            </FormItem>
          )}
        />

        {/* Last Name */}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder={t("last-name")}
                  icon={<User className="h-5 w-5 text-gray-400" />}
                  className="h-12 rounded-2xl"
                />
              </FormControl>
              <FormMessage className="text-red-500 ms-2" />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder={t("email")}
                  icon={<Mail className="h-5 w-5 text-gray-400" />}
                  className="h-12 rounded-2xl"
                />
              </FormControl>
              <FormMessage className="text-red-500 ms-2" />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PasswordInput
                  {...field}
                  placeholder={t("password")}
                  icon={<Lock className="h-5 w-5" />}
                  className="h-12 rounded-2xl"
                />
              </FormControl>
              <FormMessage className="text-red-500 ms-2" />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PasswordInput
                  {...field}
                  placeholder={t("confirm-password")}
                  icon={<Lock className="h-5 w-5" />}
                  className="h-12 rounded-2xl"
                />
              </FormControl>
              <FormMessage className="text-red-500 ms-2" />
            </FormItem>
          )}
        />

        {/* Social Links */}
        <SocialLinks />

        {/* Actions */}
        <div className="flex flex-col gap-3 mt-4">
          <Button
            type="button"
            onClick={handleNext}
            className="rounded-3xl text-lg w-full"
          >
            {t("next")}
          </Button>

          <p className="text-center">
            {t("have-account")}{" "}
            <Link to="/login" className="text-primary font-bold underline">
              {t("login")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
