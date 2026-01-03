"use client";

import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Perfect for getting started",
        features: [
            "3 resume templates",
            "Basic ATS scanning",
            "5 job applications/month",
            "Email support",
            "Resume builder",
            "Job search"
        ],
        cta: "Get Started",
        popular: false,
        gradient: "from-secondary/5 to-secondary/10"
    },
    {
        name: "Pro",
        price: "$19",
        period: "per month",
        description: "For serious job seekers",
        features: [
            "Unlimited resume templates",
            "Advanced ATS optimization",
            "Unlimited applications",
            "Priority 24/7 support",
            "AI cover letter generator",
            "Portfolio templates",
            "Application tracker",
            "Interview prep tools"
        ],
        cta: "Start Free Trial",
        popular: true,
        gradient: "from-primary/10 to-accent/10"
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "contact us",
        description: "For teams and organizations",
        features: [
            "Everything in Pro",
            "Dedicated account manager",
            "Custom integrations",
            "Team collaboration",
            "Advanced analytics",
            "White-label options",
            "SLA guarantee",
            "Training & onboarding"
        ],
        cta: "Contact Sales",
        popular: false,
        gradient: "from-navy/5 to-navy/10"
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg md:text-xl text-navy/70 max-w-2xl mx-auto">
                        Choose the plan that fits your needs. All plans include core features.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative group"
                        >
                            {/* Popular badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                                        <Star className="w-4 h-4 fill-white" />
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className={`relative h-full bg-white/50 backdrop-blur-2xl rounded-2xl p-8 border ${
                                plan.popular ? 'border-white/40 shadow-2xl scale-105 shadow-primary/20' : 'border-white/30'
                            } transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-white/50`}>
                                {/* Plan name */}
                                <h3 className="text-2xl font-bold text-accent mb-2">{plan.name}</h3>
                                
                                {/* Description */}
                                <p className="text-navy/60 text-sm mb-6">{plan.description}</p>

                                {/* Price */}
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-extrabold text-primary">{plan.price}</span>
                                        {plan.period !== "contact us" && (
                                            <span className="text-navy/60">/{plan.period}</span>
                                        )}
                                    </div>
                                    {plan.period === "contact us" && (
                                        <p className="text-navy/60 mt-2">{plan.period}</p>
                                    )}
                                </div>

                                {/* CTA Button */}
                                <Button 
                                    className={`w-full h-12 font-semibold mb-8 ${
                                        plan.popular 
                                            ? 'bg-primary hover:bg-accent shadow-lg' 
                                            : 'bg-navy/10 hover:bg-navy/20 text-navy'
                                    }`}
                                >
                                    {plan.cta}
                                </Button>

                                {/* Features list */}
                                <div className="space-y-4">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 ${
                                                plan.popular ? 'text-primary' : 'text-secondary'
                                            } flex-shrink-0 mt-0.5`} />
                                            <span className="text-navy/80 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Decorative bottom line */}
                                {plan.popular && (
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-b-2xl"></div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom note */}
            </div>
        </section>
    );
}
