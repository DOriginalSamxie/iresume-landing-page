"use client";

import { motion } from "framer-motion";
import { Upload, Sparkles, Target, Rocket, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Upload,
        title: "Upload or Start Fresh",
        description: "Already have a resume? Upload it and let AI polish it. Starting new? Choose from recruiter-approved templates and skip the hassle of formatting.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
        color: "from-secondary/20 via-secondary/10 to-transparent",
        iconBg: "bg-secondary"
    },
    {
        number: "02",
        icon: Sparkles,
        title: "Enhance with AI",
        description: "Our AI suggests powerful bullet points, adds missing keywords, and ensures your resume is ATS-friendly. Every line shows impact and relevance.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=500&fit=crop",
        color: "from-primary/20 via-primary/10 to-transparent",
        iconBg: "bg-primary"
    },
    {
        number: "03",
        icon: Target,
        title: "Optimize & Tailor",
        description: "Paste any job description and instantly boost your match score. AI tailors your resume for each application in seconds.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop",
        color: "from-accent/20 via-accent/10 to-transparent",
        iconBg: "bg-accent"
    },
    {
        number: "04",
        icon: Rocket,
        title: "Download & Apply",
        description: "In just minutes, export a professional resume in PDF or Word. Confidently apply to jobs knowing your resume is recruiter-ready.",
        image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=400&h=500&fit=crop",
        color: "from-navy/20 via-navy/10 to-transparent",
        iconBg: "bg-navy"
    }
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-cream/50 relative overflow-hidden">
            {/* Decorative gradients */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-secondary/15 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-tl from-primary/15 to-transparent rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border-2 border-primary/20 bg-white/80 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">Simple Process</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Build your resume{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent">
                            in 3 simple steps
                        </span>
                    </h2>
                    <p className="text-lg text-navy/70 max-w-3xl mx-auto">
                        From upload to download—our AI makes resume building effortless, accurate, and fast.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="space-y-32">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content */}
                            <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-16 h-16 rounded-2xl ${step.iconBg} flex items-center justify-center shadow-lg`}>
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <span className="text-6xl font-bold text-navy/10">{step.number}</span>
                                </div>
                                <h3 className="text-3xl font-bold text-navy mb-4">{step.title}</h3>
                                <p className="text-lg text-navy/70 mb-6 leading-relaxed">
                                    {step.description}
                                </p>
                                {index < steps.length - 1 && (
                                    <div className="flex items-center gap-2 text-secondary font-semibold">
                                        <span>Next Step</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                )}
                            </div>

                            {/* Visual/Mockup */}
                            <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-2xl`}></div>
                                <div className="relative bg-white rounded-2xl shadow-2xl border border-navy/10 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                    <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-100 relative">
                                        {/* Mock interface based on step */}
                                        {index === 0 && (
                                            <div className="p-8 space-y-6">
                                                {/* Upload interface */}
                                                <div className="border-2 border-dashed border-secondary/30 rounded-xl p-12 text-center bg-secondary/5">
                                                    <Upload className="w-16 h-16 text-secondary mx-auto mb-4" />
                                                    <p className="text-navy font-semibold">Drop your resume here</p>
                                                    <p className="text-sm text-navy/60 mt-2">or browse files</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-navy/60 font-medium mb-4">Or start with a template</p>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <div className="h-32 bg-navy/10 rounded-lg"></div>
                                                        <div className="h-32 bg-primary/10 rounded-lg"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {index === 1 && (
                                            <div className="p-8 space-y-4">
                                                {/* AI enhancement interface */}
                                                <div className="bg-white border border-navy/10 rounded-xl p-4 shadow-sm">
                                                    <div className="flex items-start gap-3 mb-3">
                                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                                            <Sparkles className="w-4 h-4 text-white" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="text-xs font-semibold text-primary mb-1">AI Improving writing</p>
                                                            <p className="text-sm text-navy/80">Empower your brand storytelling with our AI-powered Ebook Maker – the strategic marketing tool that turns content into captivating audience-engaging narratives, driving brand recognition and sales.</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <button className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-lg">Accept</button>
                                                        <button className="px-3 py-1 bg-navy/5 text-navy text-xs font-semibold rounded-lg">Regenerate</button>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="h-3 bg-navy/10 rounded-full w-full"></div>
                                                    <div className="h-3 bg-navy/10 rounded-full w-5/6"></div>
                                                    <div className="h-3 bg-navy/10 rounded-full w-4/6"></div>
                                                </div>
                                                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                        <span className="text-xs font-bold text-green-700">ATS Score: 98%</span>
                                                    </div>
                                                    <div className="h-2 bg-green-200 rounded-full overflow-hidden">
                                                        <div className="h-full bg-green-500 w-[98%]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {index === 2 && (
                                            <div className="p-8 space-y-4">
                                                {/* Job matching interface */}
                                                <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-4">
                                                    <p className="text-xs font-semibold text-accent mb-2">Job Description Pasted</p>
                                                    <div className="space-y-2">
                                                        <div className="h-2 bg-accent/20 rounded-full w-full"></div>
                                                        <div className="h-2 bg-accent/20 rounded-full w-4/5"></div>
                                                        <div className="h-2 bg-accent/20 rounded-full w-3/5"></div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between bg-white border border-navy/10 rounded-xl p-4">
                                                    <span className="text-sm font-semibold text-navy">Match Score</span>
                                                    <span className="text-2xl font-bold text-accent">87%</span>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center">
                                                            <span className="text-green-600 text-xs">✓</span>
                                                        </div>
                                                        <div className="h-2 bg-green-100 rounded-full flex-1"></div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center">
                                                            <span className="text-green-600 text-xs">✓</span>
                                                        </div>
                                                        <div className="h-2 bg-green-100 rounded-full flex-1"></div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-5 h-5 rounded bg-yellow-100 flex items-center justify-center">
                                                            <span className="text-yellow-600 text-xs">!</span>
                                                        </div>
                                                        <div className="h-2 bg-yellow-100 rounded-full flex-1"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {index === 3 && (
                                            <div className="p-8 space-y-6">
                                                {/* Download interface */}
                                                <div className="bg-white border-2 border-primary rounded-xl p-6 shadow-lg">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded border border-primary/30"></div>
                                                        <div>
                                                            <p className="font-bold text-navy">Maria_Resume_Final.pdf</p>
                                                            <p className="text-xs text-navy/60">Ready to download</p>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <button className="px-4 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg shadow-lg">
                                                            Download PDF
                                                        </button>
                                                        <button className="px-4 py-3 border-2 border-navy/20 text-navy font-semibold rounded-lg">
                                                            Download Word
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                                                    <Rocket className="w-12 h-12 text-green-600 mx-auto mb-2" />
                                                    <p className="font-bold text-green-700">Your resume is ready!</p>
                                                    <p className="text-sm text-green-600 mt-1">Start applying with confidence</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
