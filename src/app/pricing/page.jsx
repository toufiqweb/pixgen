
import React from "react";
import { Card, Button, Chip } from "@heroui/react";
import { Check, Sparkles, Crown, Rocket } from "lucide-react";

const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for beginners exploring AI image generation.",
    icon: <Sparkles size={28} />,
    highlight: false,
    buttonText: "Get Started",
    features: [
      "20 image generations / month",
      "Basic prompt templates",
      "Community support",
      "Standard resolution exports",
    ],
  },
  {
    title: "Pro",
    price: "$19",
    period: "/month",
    description: "Best choice for creators and designers.",
    icon: <Rocket size={28} />,
    highlight: true,
    buttonText: "Upgrade Now",
    features: [
      "Unlimited image generations",
      "Premium AI styles",
      "Priority generation speed",
      "4K image exports",
      "Private gallery access",
    ],
  },
  {
    title: "Enterprise",
    price: "$49",
    period: "/month",
    description: "Advanced tools for agencies and teams.",
    icon: <Crown size={28} />,
    highlight: false,
    buttonText: "Contact Sales",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Dedicated support",
      "API access",
      "Custom branding",
    ],
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f8ff] via-[#eef2ff] to-[#ffffff] px-4 py-16 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Chip
            variant="flat"
            className="bg-purple-100 text-purple-700 border border-purple-200 px-4 py-2"
          >
            Pricing Plans
          </Chip>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Choose The Perfect Plan
          </h1>

          <p className="mt-6 text-gray-600 text-base md:text-lg leading-8">
            Flexible pricing built for creators, designers, and teams.
            Upgrade anytime and unlock premium AI image generation features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative rounded-[32px] border backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                plan.highlight
                  ? "bg-white shadow-2xl border-purple-200 scale-[1.02]"
                  : "bg-white/70 border-black/5 shadow-lg"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-4 right-4">
                  <Chip
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none"
                    size="sm"
                  >
                    Most Popular
                  </Chip>
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    plan.highlight
                      ? "bg-gradient-to-br from-pink-500 to-purple-500 text-white"
                      : "bg-purple-100 text-purple-600"
                  }`}
                >
                  {plan.icon}
                </div>

                {/* Plan Info */}
                <h2 className="text-2xl font-bold text-gray-900">
                  {plan.title}
                </h2>

                <p className="text-gray-600 mt-3 leading-7">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-8 flex items-end gap-2">
                  <span className="text-5xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 mb-2">{plan.period}</span>
                </div>

                {/* Features */}
                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check size={14} className="text-green-600" />
                      </div>

                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button
                  className={`mt-10 w-full rounded-2xl font-semibold h-12 ${
                    plan.highlight
                      ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white"
                      : "bg-gray-900 text-white"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center rounded-[32px] bg-white/70 border border-black/5 backdrop-blur-xl p-10 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Need a Custom Solution?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-8">
            Contact our team for enterprise-level AI tools, custom workflows,
            dedicated onboarding, and premium support.
          </p>

          <Button
            className="mt-8 rounded-2xl px-8 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
