"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Footer = () => {
  const { data: session } = authClient.useSession();

  

  const user = session?.user;
  const currentYear = new Date().getFullYear();

  // Prevent hydration mismatch
  // if (!mounted) return null;

  return (
    <footer className="relative mt-24">
      {/* Divider */}
      <div className="mt-12 h-px w-full  bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="pixgen logo"
                width={32}
                height={32}
                className="brightness-200"
              />

              <h2 className="text-xl font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                pixgen
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 max-w-xs">
              Create production-ready AI visuals in seconds. Built for speed,
              scale, and creativity.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Product
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/generate" className="hover:text-black transition">
                  Generate
                </Link>
              </li>
              <li>
                <Link href="/all-photos" className="hover:text-black transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-black transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-black transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-black transition">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">
              Start creating
            </h3>

            <p className="text-sm text-gray-600">
              Generate your first AI image today.
            </p>

            <Link
              href={user ? "/" : "/signup"}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 px-5 py-2 text-sm font-medium text-white transition hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} pixgen. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-black transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-black transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;