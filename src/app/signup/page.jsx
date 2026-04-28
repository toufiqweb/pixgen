"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Description,
} from "@heroui/react";
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";

export default function SignUpPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { name, email, password, image } = Object.fromEntries(
      formData.entries(),
    );

    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      image,
    });
    console.log({ data, error });
  };

  // Hello@1234
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
                Join Pixgen & Start Creating AI Images
              </h1>

              <p className="text-white/70 text-base leading-7">
                Build your creative journey with AI-powered image generation.
                Sign up to access modern tools, create stunning visuals, and
                explore endless creativity.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-pink-400" />
                  <p className="text-sm text-white/80">
                    Modern AI-powered dashboard
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                  <p className="text-sm text-white/80">
                    Create images from text prompts
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-purple-400" />
                  <p className="text-sm text-white/80">
                    Fast, modern & responsive experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white p-8 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Create Account
              </h2>
              <p className="text-gray-500 mt-2">
                Sign up to continue your creative journey
              </p>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-3 gap-3 mb-6 justify-items-center">
              <Button
                variant="bordered"
                className="h-12 rounded-2xl border-gray-300 hover:bg-gray-100"
              >
                <FaGoogle className="text-lg" />
              </Button>

              <Button
                variant="bordered"
                className="h-12 rounded-2xl border-gray-300 hover:bg-gray-100"
              >
                <FaGithub className="text-lg" />
              </Button>

              <Button
                variant="bordered"
                className="h-12 rounded-2xl border-gray-300 hover:bg-gray-100"
              >
                <FaFacebookF className="text-lg" />
              </Button>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">OR</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
              <TextField isRequired name="name" type="text">
                <Label>Name</Label>
                <Input placeholder="Enter your name" className="rounded-xl" />
                <FieldError />
              </TextField>

              <TextField isRequired name="image" type="text">
                <Label>Image URL</Label>
                <Input placeholder="Profile image URL" className="rounded-xl" />
                <FieldError />
              </TextField>

              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }
                  return null;
                }}
              >
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>

              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
                  return null;
                }}
              >
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
                <Description>
                  Must be at least 8 characters with 1 uppercase and 1 number
                </Description>
                <FieldError />
              </TextField>

              <Button
                type="submit"
                className="h-12 rounded-2xl bg-linear-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg"
              >
                <Check />
                Create Account
              </Button>
            </Form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <span className="font-semibold text-pink-500 cursor-pointer hover:underline">
                Sign In
              </span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
