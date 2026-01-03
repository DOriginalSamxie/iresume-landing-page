"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const templates = [
    {
        name: "Professional",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=800&fit=crop",
        color: "from-navy to-navy/90",
        popular: false
    },
    {
        name: "Modern",
        image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600&h=800&fit=crop",
        color: "from-secondary to-primary",
        popular: true
    },
    {
        name: "Creative",
        image: "https://images.unsplash.com/photo-1586281380614-d8d6c4be561c?w=600&h=800&fit=crop",
        color: "from-accent to-secondary",
        popular: false
    },
    {
        name: "Executive",
        image: "https://images.unsplash.com/photo-1586281380923-c59467affc43?w=600&h=800&fit=crop",
        color: "from-primary to-accent",
        popular: false
    }
];

export function Templates() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
            {/* Decorative gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border-2 border-secondary/20 bg-white/80 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-semibold text-secondary">50+ Professional Templates</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Templates Designed{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent">
                            to Get You Hired
                        </span>
                    </h2>
                    <p className="text-lg text-navy/70 max-w-3xl mx-auto">
                        Pick a design that matches your style and industry. Every template is clean, professional, and ATS-friendly.
                    </p>
                </motion.div>

                {/* Templates Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {templates.map((template, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Popular badge */}
                            {template.popular && (
                                <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold">
                                    Most Popular
                                </div>
                            )}

                            {/* Template preview card */}
                            <div className="relative overflow-hidden rounded-2xl border-2 border-white/40 bg-white/50 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-white/60">
                                {/* Template image/mockup */}
                                <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                                    {/* Mock resume content */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${template.color} p-6 text-white`}>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-16 rounded-full bg-white/20"></div>
                                                <div className="space-y-2">
                                                    <div className="h-3 bg-white/40 rounded w-32"></div>
                                                    <div className="h-2 bg-white/30 rounded w-24"></div>
                                                </div>
                                            </div>
                                            <div className="space-y-2 pt-4">
                                                <div className="h-2 bg-white/30 rounded w-full"></div>
                                                <div className="h-2 bg-white/30 rounded w-5/6"></div>
                                                <div className="h-2 bg-white/30 rounded w-4/6"></div>
                                            </div>
                                            <div className="space-y-3 pt-4">
                                                <div className="h-2 bg-white/40 rounded w-1/2"></div>
                                                <div className="space-y-2">
                                                    <div className="h-2 bg-white/20 rounded w-3/4"></div>
                                                    <div className="h-2 bg-white/20 rounded w-2/3"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Button className="bg-white text-navy hover:bg-cream font-semibold">
                                            Use Template
                                        </Button>
                                    </div>
                                </div>

                                {/* Template info */}
                                <div className="p-4 bg-white">
                                    <h3 className="font-bold text-navy text-lg mb-2">{template.name}</h3>
                                    <div className="flex items-center gap-2 text-sm text-navy/60">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span>ATS-Friendly</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Button 
                        size="lg" 
                        variant="outline"
                        className="px-10 h-14 text-lg font-semibold border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200"
                    >
                        View All 50+ Templates
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

