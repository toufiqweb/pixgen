"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MyNavLinks from "../ui/MyNavLinks";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <MyNavLinks href={"/"}>Home</MyNavLinks>
      <MyNavLinks href={"/all-photos"}>All Photos</MyNavLinks>
      <MyNavLinks href={"/pricing"}>Pricing</MyNavLinks>
      <MyNavLinks href={"/profile"}>Profile</MyNavLinks>
    </>
  );

  return (
    <div className="border-b px-2 relative">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="text-2xl font-extrabold tracking-wide bg-linear-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent drop-shadow-sm">
            pixgen.
          </h3>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          {links}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <ul className="flex items-center gap-4 text-sm">
            <li>
              <Link
                href={"/signup"}
                className="rounded-full border border-purple-400 px-5 py-2 font-medium text-white bg-linear-to-r from-pink-500 via-purple-500 to-red-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                SignUp
              </Link>
            </li>

            <li>
              <Link
                href={"/signin"}
                className="rounded-full border border-purple-400 px-5 py-2 font-medium bg-linear-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent transition-all duration-300 hover:text-white hover:bg-linear-to-r hover:from-pink-500 hover:via-purple-500 hover:to-red-500"
              >
                SignIn
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg z-50">
          <ul className="flex flex-col gap-4 p-5 text-sm">
            {links}

            <li>
              <Link
                href={"/signup"}
                className="block text-center rounded-full border border-purple-400 px-5 py-2 font-medium text-white bg-linear-to-r from-pink-500 via-purple-500 to-red-500"
              >
                SignUp
              </Link>
            </li>

            <li>
              <Link
                href={"/signin"}
                className="block text-center rounded-full border border-purple-400 px-5 py-2 font-medium bg-linear-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent"
              >
                SignIn
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;