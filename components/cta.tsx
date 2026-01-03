"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-navy"></div>
            
            {/* Animated gradient orbs */}
            <motion.div 
                className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary/30 to-transparent rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div 
                className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/30 to-transparent rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="relative max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                        <Sparkles className="w-4 h-4 text-cream" />
                        <span className="text-sm font-medium text-cream">Start Your Journey Today</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Ready to Transform Your Job Search?
                    </h2>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-cream/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Join thousands of professionals who have accelerated their careers with Instant Resume
                    </p>

                    {/* CTA Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                    >
                        <Button 
                            size="lg" 
                            className="group px-10 h-16 text-lg font-semibold bg-white text-navy hover:bg-cream hover:scale-105 transition-all duration-200 shadow-2xl"
                        >
                            Get Started Free
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="px-10 h-16 text-lg font-semibold border-2 border-cream/80 bg-cream/10 text-cream hover:bg-cream/20 hover:border-cream transition-all duration-200 backdrop-blur-sm"
                        >
                            Schedule a Demo
                        </Button>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-cream/80 text-sm"
                    >
                        No credit card required • Free forever plan • Cancel anytime
                    </motion.p>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-background/50 to-transparent blur-2xl"></div>
            </div>
        </section>
    );
}
