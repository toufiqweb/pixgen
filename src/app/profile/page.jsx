
"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, Chip, Skeleton } from "@heroui/react";

import {
  Mail,
  CalendarDays,
  ShieldCheck,
  Sparkles,
  ImageIcon,
} from "lucide-react";
import UpdateUser from "@/components/ui/UpdateUser";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  if (isPending) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f4f7ff] via-[#eef2ff] to-[#ffffff] flex items-center justify-center px-4">
        <Card className="w-full max-w-5xl bg-white/70 border border-black/5 backdrop-blur-xl p-8 rounded-3xl shadow-xl">
          <div className="flex flex-col md:flex-row gap-8">
            <Skeleton className="rounded-full w-32 h-32" />
            <div className="flex-1 space-y-4">
              <Skeleton className="h-8 w-52 rounded-xl" />
              <Skeleton className="h-4 w-72 rounded-xl" />
              <Skeleton className="h-4 w-44 rounded-xl" />
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f7ff] via-[#eef2ff] to-[#ffffff] px-4 py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Glow Effects */}
        <div className="absolute top-32 left-10 h-72 w-72 rounded-full bg-pink-300/30 blur-[120px]" />
        <div className="absolute top-60 right-10 h-72 w-72 rounded-full bg-purple-300/30 blur-[120px]" />

        {/* Profile Hero */}
        <Card className="relative overflow-hidden rounded-[36px] border border-black/5 bg-white/70 backdrop-blur-2xl shadow-xl">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-transparent to-purple-200/30" />

          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
              {/* Avatar */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />

                <Avatar className="w-36 h-36 text-4xl ring-4 ring-black/10 relative z-10 hover:scale-105 transition duration-500">
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>
              </div>

              {/* User Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <h1 className="text-4xl font-bold text-gray-900">
                    {user?.name || "Guest User"}
                  </h1>

                  <Chip
                    color="secondary"
                    variant="flat"
                    startContent={<ShieldCheck size={14} />}
                    className="bg-purple-100 text-purple-700 border border-purple-200"
                  >
                    Verified Account
                  </Chip>
                </div>

                <p className="text-gray-600 mt-3 max-w-2xl leading-7">
                  Welcome to your creative dashboard. Manage your account,
                  profile, and AI image generation experience.
                </p>

                {/* User Meta */}
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="bg-white/70 border border-black/5 backdrop-blur-md p-4 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="text-pink-500" size={18} />
                      <div>
                        <p className="text-xs text-gray-500">Email</p>
                        <p className="text-sm text-gray-800 truncate">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white/70 border border-black/5 backdrop-blur-md p-4 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <CalendarDays className="text-cyan-500" size={18} />
                      <div>
                        <p className="text-xs text-gray-500">Member Since</p>
                        <p className="text-sm text-gray-800">April 2026</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white/70 border border-black/5 backdrop-blur-md p-4 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <Sparkles className="text-purple-500" size={18} />
                      <div>
                        <p className="text-xs text-gray-500">Plan</p>
                        <p className="text-sm text-gray-800">Free Plan</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                  <UpdateUser user={user} />

                  <Button
                    variant="bordered"
                    className="rounded-2xl border-gray-300 text-gray-800 hover:bg-gray-100"
                  >
                    Account Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="rounded-3xl border border-black/5 bg-white/70 backdrop-blur-xl p-6 hover:-translate-y-1 transition duration-300 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Generated Images</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">148</h2>
              </div>

              <div className="p-4 rounded-2xl bg-pink-100">
                <ImageIcon className="text-pink-500" />
              </div>
            </div>
          </Card>

          <Card className="rounded-3xl border border-black/5 bg-white/70 backdrop-blur-xl p-6 hover:-translate-y-1 transition duration-300 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Credits Remaining</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">520</h2>
              </div>

              <div className="p-4 rounded-2xl bg-purple-100">
                <Sparkles className="text-purple-500" />
              </div>
            </div>
          </Card>

          <Card className="rounded-3xl border border-black/5 bg-white/70 backdrop-blur-xl p-6 hover:-translate-y-1 transition duration-300 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Account Status</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">Active</h2>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-100">
                <ShieldCheck className="text-cyan-500" />
              </div>
            </div>
          </Card>
        </div>

        {/* About Section */}
        <Card className="mt-8 rounded-3xl border border-black/5 bg-white/70 backdrop-blur-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About Profile
          </h2>

          <div className="h-px w-full bg-black/10 my-6" />

          <p className="text-gray-600 leading-8">
            This modern profile dashboard is designed for your AI creative
            platform. You can display user details, generated image stats,
            premium plan information, and account settings with beautiful
            glassmorphism UI and elegant light-mode aesthetics.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;

