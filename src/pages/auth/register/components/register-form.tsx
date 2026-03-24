import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail, User } from "lucide-react";
import { registerSchema, type RegisterSchema } from "@/lib/schemas/auth.schema";
import { PasswordInput } from "@/components/ui/password-input";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SocialLinks from "./social-links";

export default function RegisterForm({
  data,
  setData,
  nextStep,
}: RegisterFormProps) {
  // Form state and validation
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      email: data.email || "",
      password: data.password || "",
      rePassword: data.rePassword || "",
    },
  });

  // Submit handler
  const onSubmit = (formData: RegisterSchema) => {
    setData({ ...data, ...formData });
    nextStep();
  };

  return (
    <div className="w-full">
      <header className="flex flex-col justify-between items-center gap-3 mb-4">
        <span className="text-lg">Hey There</span>
        <h1 className="text-4xl capitalize font-bold text-center">
          create an account
        </h1>
      </header>
      <Form {...form}>
        <form
          className="flex flex-col gap-3 border-2 border-white py-10 px-10 sm:px-16 md:px-20 rounded-4xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative focus-visible:ring-0">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#808080]" />
                    <Input
                      {...field}
                      type="text"
                      placeholder="First Name"
                      className="pl-10 h-12 pr-4 sm:pr-6 md:pr-10 rounded-2xl"
                    />
                  </div>
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
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <Input
                      {...field}
                      type="text"
                      placeholder="Last Name"
                      className="pl-10 h-12 pr-4 sm:pr-6 md:pr-10 rounded-2xl"
                    />
                  </div>
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
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email"
                      className="pl-10 h-12 pr-4 sm:pr-6 md:pr-10 rounded-2xl"
                    />
                  </div>
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
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <PasswordInput
                      {...field}
                      placeholder="Password"
                      className="pl-10 h-12 pr-4 sm:pr-6 md:pr-10 rounded-2xl"
                    />
                  </div>
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
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <PasswordInput
                      {...field}
                      placeholder="Confirm Password"
                      className="pl-10 h-12 pr-4 sm:pr-6 md:pr-10 rounded-2xl"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-red-500 ms-2" />
              </FormItem>
            )}
          />

          {/* Forgot Password link */}
          <Link
            to="/forgot-password"
            className="text-base font-bold text-primary underline self-end"
          >
            Forgot Password ?
          </Link>

          <SocialLinks />

          {/* Submit Button */}
          <div className="flex justify-center items-center flex-col gap-3">
            <Button
              type="submit"
              className="flex mx-auto rounded-3xl text-lg w-full py-5 cursor-pointer hover:bg-primary/80 transition-colors duration-300"
            >
              Register
            </Button>
            <p className="mx-auto text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-bold underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
