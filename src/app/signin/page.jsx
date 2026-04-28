"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    console.log({ data, error });
  };

  const handleSocialLogin = async (provider) => {
    await authClient.signIn.social({
      provider,
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#050816] via-[#1f1147] to-[#3b0764] flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl">
        <div className="grid md:grid-cols-2">
          {/* Left Side */}
          <div className="hidden md:flex flex-col justify-center bg-linear-to-br from-pink-500/20 via-purple-500/10 to-cyan-500/10 p-10 text-white relative overflow-hidden">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative z-10">
              <h1 className="text-4xl font-bold leading-tight mb-4">
                Welcome Back to Pixgen
              </h1>

              <p className="text-white/70 text-base leading-7">
                Sign in to continue generating stunning AI images and access
                your creative dashboard.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-pink-400" />
                  <p className="text-sm text-white/80">
                    Secure authentication system
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                  <p className="text-sm text-white/80">
                    Continue your AI creations
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-purple-400" />
                  <p className="text-sm text-white/80">
                    Fast & seamless login experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white p-8 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
              <p className="text-gray-500 mt-2">
                Login to continue your creative journey
              </p>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-3 gap-3 mb-6 justify-items-center">
              <Button
                variant="bordered"
                className="h-12 rounded-2xl border-gray-300 hover:bg-gray-100"
                onPress={() => handleSocialLogin("google")}
              >
                <FaGoogle className="text-lg" />
              </Button>

              <Button
                variant="bordered"
                className="h-12 rounded-2xl border-gray-300 hover:bg-gray-100"
                onPress={() => handleSocialLogin("github")}
              >
                <FaGithub className="text-lg" />
              </Button>

              <Button
                variant="bordered"
                className="h-12 rounded-2xl border-gray-300 hover:bg-gray-100"
                onPress={() => handleSocialLogin("facebook")}
              >
                <FaFacebookF className="text-lg" />
              </Button>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">OR</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Sign In Form */}
            <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
              <TextField isRequired name="email" type="email">
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
              </TextField>

              <TextField isRequired name="password" type="password">
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
              </TextField>

              <div className="flex justify-end w-full">
                <Link
                  href="/forgot-password"
                  className="text-sm text-pink-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <Button
                type="submit"
                className="h-12 rounded-2xl bg-linear-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg"
              >
                Sign In
              </Button>
            </Form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="font-semibold text-pink-500 hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
