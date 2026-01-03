"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
            {/* Clean white background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-cream/20 to-secondary/5 -z-10"></div>
            
            {/* Decorative SVG shapes with animations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.svg 
                    className="absolute top-20 left-10 w-64 h-64 text-secondary/30" 
                    viewBox="0 0 200 200" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.9,76.4C26,83.8,9.2,86,-7.5,86.2C-24.2,86.4,-40.9,84.6,-54.8,77.4C-68.7,70.2,-79.8,57.6,-86.3,43.1C-92.8,28.6,-94.7,12.2,-93.1,-3.9C-91.5,-20,-86.4,-35.8,-77.6,-49.1C-68.8,-62.4,-56.3,-73.2,-42.1,-80.3C-27.9,-87.4,-12.9,-90.8,1.3,-93.1C15.5,-95.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                </motion.svg>
                
                <motion.svg 
                    className="absolute top-1/3 right-20 w-48 h-48 text-primary/25" 
                    viewBox="0 0 200 200" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                        rotate: [0, -360],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <path fill="currentColor" d="M39.5,-65.5C52.3,-58.2,64.5,-50.1,71.8,-38.4C79.1,-26.7,81.5,-11.4,80.9,3.7C80.3,18.8,76.7,33.7,69.1,46.8C61.5,59.9,50,71.2,36.8,77.8C23.6,84.4,8.8,86.3,-5.5,85.3C-19.8,84.3,-33.6,80.4,-46.3,73.6C-59,66.8,-70.6,57.1,-76.8,44.8C-83,32.5,-83.8,17.6,-82.5,3.3C-81.2,-11,-77.8,-24.7,-70.9,-36.8C-64,-48.9,-53.6,-59.4,-41.5,-67C-29.4,-74.6,-15.7,-79.3,-2.3,-75.9C11.1,-72.5,26.7,-72.8,39.5,-65.5Z" transform="translate(100 100)" />
                </motion.svg>

                <motion.svg 
                    className="absolute bottom-20 left-1/4 w-56 h-56 text-accent/20" 
                    viewBox="0 0 200 200" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.15, 1],
                        x: [0, 15, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <path fill="currentColor" d="M47.3,-79.5C61.1,-71.4,72.1,-58.2,78.8,-43.4C85.5,-28.6,87.9,-12.2,86.8,3.8C85.7,19.8,81.1,35.4,72.9,48.6C64.7,61.8,53,72.6,39.3,78.8C25.6,85,10,86.6,-5.3,85.9C-20.6,85.2,-35.9,82.2,-49.1,75.8C-62.3,69.4,-73.4,59.6,-79.8,47.1C-86.2,34.6,-87.9,19.4,-86.7,4.7C-85.5,-10,-81.4,-24.2,-73.8,-36.8C-66.2,-49.4,-55.1,-60.4,-42.1,-69C-29.1,-77.6,-14.6,-83.8,0.7,-85.1C16,-86.4,33.5,-87.6,47.3,-79.5Z" transform="translate(100 100)" />
                </motion.svg>
            </div>
            
            {/* Decorative curved shapes */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-secondary/20 via-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/15 via-primary/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
            
            {/* Animated gradient orbs */}
            <motion.div 
                className="absolute top-1/3 left-10 w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-left">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border-2 border-primary/20 bg-white/80 backdrop-blur-sm shadow-lg"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">AI-Powered Career Platform</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-navy"
                    >
                        Land your dream job{" "}
                        <span className="block mt-2">
                            with{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                                AI-powered resumes
                            </span>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg lg:text-xl text-navy/70 mb-8 leading-relaxed max-w-xl"
                    >
                        Build a job-winning resume in minutes with tailored suggestions, recruiter-approved templates, and instant ATS scoring.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-start gap-4 mb-10"
                    >
                        <Button 
                            size="lg" 
                            className="px-8 h-14 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl group"
                        >
                            Create Free Resume
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="px-8 h-14 text-lg font-semibold border-2 border-navy/20 hover:border-secondary hover:bg-secondary/5 transition-all duration-200"
                        >
                            See Templates
                        </Button>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center gap-6"
                    >
                        <div className="flex -space-x-3">
                            <Image 
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                                alt="User" 
                                width={48}
                                height={48}
                                className="w-12 h-12 rounded-full border-3 border-white object-cover shadow-md"
                                unoptimized
                            />
                            <Image 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                                alt="User" 
                                width={48}
                                height={48}
                                className="w-12 h-12 rounded-full border-3 border-white object-cover shadow-md"
                                unoptimized
                            />
                            <Image 
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" 
                                alt="User" 
                                width={48}
                                height={48}
                                className="w-12 h-12 rounded-full border-3 border-white object-cover shadow-md"
                                unoptimized
                            />
                            <Image 
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" 
                                alt="User" 
                                width={48}
                                height={48}
                                className="w-12 h-12 rounded-full border-3 border-white object-cover shadow-md"
                                unoptimized
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-sm text-navy/70">
                                <span className="font-bold text-navy">+1000 students</span> have already benefited
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Right - Resume Mockup */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Main resume mockup */}
                    <div className="relative">
                        {/* Decorative background shapes */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-3xl blur-xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-accent/30 to-secondary/30 rounded-3xl blur-xl"></div>
                        
                        {/* Resume preview card */}
                        <div className="relative bg-white/60 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:border-white/60">
                            {/* Header with profile */}
                            <div className="bg-gradient-to-r from-navy to-navy/90 p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
                                <div className="relative flex items-center gap-6">
                                    <div className="w-24 h-24 rounded-full bg-secondary/20 border-4 border-white/20 overflow-hidden">
                                        <Image 
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" 
                                            alt="Professional" 
                                            width={96}
                                            height={96}
                                            className="w-full h-full object-cover"
                                            unoptimized
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">Maria Meza Zuñiga</h3>
                                        <p className="text-secondary text-lg">Graphic Designer</p>
                                    </div>
                                </div>
                            </div>

                            {/* Resume content preview */}
                            <div className="p-8 space-y-6">
                                {/* About section */}
                                <div>
                                    <h4 className="text-sm font-bold text-navy/40 uppercase tracking-wider mb-3">About</h4>
                                    <div className="space-y-2">
                                        <div className="h-2 bg-navy/10 rounded-full w-full"></div>
                                        <div className="h-2 bg-navy/10 rounded-full w-5/6"></div>
                                        <div className="h-2 bg-navy/10 rounded-full w-4/6"></div>
                                    </div>
                                </div>

                                {/* Education section */}
                                <div>
                                    <h4 className="text-sm font-bold text-navy/40 uppercase tracking-wider mb-3">Education</h4>
                                    <div className="space-y-3">
                                        <div className="space-y-2">
                                            <div className="h-3 bg-primary/20 rounded-full w-3/4"></div>
                                            <div className="h-2 bg-navy/10 rounded-full w-2/4"></div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-3 bg-primary/20 rounded-full w-4/5"></div>
                                            <div className="h-2 bg-navy/10 rounded-full w-1/2"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Skills section */}
                                <div>
                                    <h4 className="text-sm font-bold text-navy/40 uppercase tracking-wider mb-3">Skills</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                            <div className="h-2 bg-secondary/20 rounded-full flex-1"></div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                            <div className="h-2 bg-primary/20 rounded-full flex-1"></div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-accent"></div>
                                            <div className="h-2 bg-accent/20 rounded-full flex-1"></div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                            <div className="h-2 bg-secondary/20 rounded-full flex-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ATS-Friendly badge */}
                            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl shadow-lg transform rotate-3">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" />
                                    <span className="font-bold">ATS-Optimized</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating feature callouts */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="absolute -left-6 top-1/4 bg-white px-4 py-3 rounded-xl shadow-lg border border-secondary/20"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-sm font-semibold text-navy">AI Bullet Points</span>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="absolute -right-6 top-2/3 bg-white px-4 py-3 rounded-xl shadow-lg border border-primary/20"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                <span className="text-sm font-semibold text-navy">One-Click Tailoring</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
