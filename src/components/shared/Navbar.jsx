"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MyNavLinks from "../ui/MyNavLinks";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const links = (
    <>
      <MyNavLinks href={"/"}>Home</MyNavLinks>
      <MyNavLinks href={"/all-photos"}>All Photos</MyNavLinks>
      <MyNavLinks href={"/pricing"}>Pricing</MyNavLinks>
      <MyNavLinks href={"/profile"}>Profile</MyNavLinks>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#ffff]/80 backdrop-blur-xl">
      <div className="px-4">
        <nav className="flex h-20 items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              width={36}
              height={36}
              priority
              className="object-contain"
            />
            <h3 className="text-2xl font-extrabold tracking-wide bg-linear-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
              pixgen.
            </h3>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-6 text-sm text-white/80">
              {links}
            </ul>
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            {isPending ? (
              <div className="h-10 w-28  rounded-full bg-white/10" />
            ) : user ? (
              <div className="flex items-center gap-4">
                <Link href="/profile">
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <Avatar>
                      <Avatar.Image alt={user?.name} src={user?.image} />
                      <Avatar.Fallback>JD</Avatar.Fallback>
                    </Avatar>

                    <div className="hidden lg:flex flex-col leading-tight">
                      <span className="text-sm font-semibold ">
                        {user?.name}
                      </span>
                      <span className="text-xs ">{user?.email}</span>
                    </div>
                  </div>
                </Link>

                <Button
                  size="sm"
                  variant="outline"
                  onPress={handleSignOut}
                  className="rounded-full border-red-500/40 text-red-400 hover:bg-red-500/10"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/signup"
                  className="rounded-full border border-purple-400 px-5 py-2 text-sm font-medium text-white bg-linear-to-r from-pink-500 via-purple-500 to-red-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  SignUp
                </Link>

                <Link
                  href="/signin"
                  className="rounded-full border border-purple-400 px-5 py-2 text-sm font-medium text-purple-300 hover:bg-white/10 transition-all duration-300"
                >
                  SignIn
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden ">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10  bg-[#ffff]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-5 py-6">
            {/* Mobile User */}
            {user && (
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-5">
                <Avatar>
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>

                <div>
                  <p className="font-semibold text-white text-sm">
                    {user?.name}
                  </p>
                  <p className="text-xs text-white/50">{user?.email}</p>
                </div>
              </div>
            )}

            {/* Mobile Links */}
            <ul
              className="flex flex-col gap-5 text-white/80"
              onClick={() => setOpen(false)}
            >
              {links}
            </ul>

            {/* Mobile Auth */}
            <div className="mt-8">
              {user ? (
                <Button
                 size="sm"
                  variant="outline"
                  onPress={handleSignOut}
                  className="rounded-full border-red-500/40 text-red-400 hover:bg-red-500/10"
                >
                  Sign Out
                </Button>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    href="/signup"
                    className="rounded-2xl text-center border border-purple-400 px-5 py-3 text-sm font-medium text-white bg-linear-to-r from-pink-500 via-purple-500 to-red-500"
                  >
                    SignUp
                  </Link>

                  <Link
                    href="/signin"
                    className="rounded-2xl text-center border border-purple-400 px-5 py-3 text-sm font-medium text-purple-300 hover:bg-white/10"
                  >
                    SignIn
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
