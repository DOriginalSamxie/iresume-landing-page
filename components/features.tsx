"use client";

import { motion } from "framer-motion";
import { FileText, Zap, Target, CheckCircle, Mail, Briefcase } from "lucide-react";

const features = [
    {
        icon: FileText,
        title: "ATS-Optimized Resumes",
        description: "Create professional resumes that pass through Applicant Tracking Systems with ease. Our AI ensures your resume gets noticed.",
        gradient: "from-primary/10 to-accent/10",
        iconColor: "text-primary"
    },
    {
        icon: Zap,
        title: "AI Auto-Apply",
        description: "Let our intelligent system apply to relevant jobs automatically while you focus on interview preparation and skill development.",
        gradient: "from-accent/10 to-secondary/10",
        iconColor: "text-accent"
    },
    {
        icon: Target,
        title: "Job Matching",
        description: "Smart algorithms match you with opportunities that align with your skills, experience, and career goals.",
        gradient: "from-secondary/10 to-primary/10",
        iconColor: "text-secondary"
    },
    {
        icon: Mail,
        title: "Cover Letter Generator",
        description: "Generate personalized, compelling cover letters for each application in seconds with AI assistance.",
        gradient: "from-primary/10 to-secondary/10",
        iconColor: "text-primary"
    },
    {
        icon: Briefcase,
        title: "Portfolio Templates",
        description: "Showcase your work with beautiful, customizable portfolio templates that make you stand out from other candidates.",
        gradient: "from-secondary/10 to-accent/10",
        iconColor: "text-secondary"
    },
    {
        icon: CheckCircle,
        title: "Application Tracker",
        description: "Keep track of all your applications, interviews, and follow-ups in one organized dashboard.",
        gradient: "from-accent/10 to-primary/10",
        iconColor: "text-accent"
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
            {/* Decorative SVG background elements with animations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.svg 
                    className="absolute top-10 right-10 w-72 h-72 text-secondary/20" 
                    viewBox="0 0 200 200" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                        rotate: [0, 360],
                        x: [0, 20, 0],
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 28,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.9,76.4C26,83.8,9.2,86,-7.5,86.2C-24.2,86.4,-40.9,84.6,-54.8,77.4C-68.7,70.2,-79.8,57.6,-86.3,43.1C-92.8,28.6,-94.7,12.2,-93.1,-3.9C-91.5,-20,-86.4,-35.8,-77.6,-49.1C-68.8,-62.4,-56.3,-73.2,-42.1,-80.3C-27.9,-87.4,-12.9,-90.8,1.3,-93.1C15.5,-95.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                </motion.svg>
                
                <motion.svg 
                    className="absolute bottom-20 left-10 w-64 h-64 text-accent/20" 
                    viewBox="0 0 200 200" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                        rotate: [0, -360],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 32,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <path fill="currentColor" d="M39.5,-65.5C52.3,-58.2,64.5,-50.1,71.8,-38.4C79.1,-26.7,81.5,-11.4,80.9,3.7C80.3,18.8,76.7,33.7,69.1,46.8C61.5,59.9,50,71.2,36.8,77.8C23.6,84.4,8.8,86.3,-5.5,85.3C-19.8,84.3,-33.6,80.4,-46.3,73.6C-59,66.8,-70.6,57.1,-76.8,44.8C-83,32.5,-83.8,17.6,-82.5,3.3C-81.2,-11,-77.8,-24.7,-70.9,-36.8C-64,-48.9,-53.6,-59.4,-41.5,-67C-29.4,-74.6,-15.7,-79.3,-2.3,-75.9C11.1,-72.5,26.7,-72.8,39.5,-65.5Z" transform="translate(100 100)" />
                </motion.svg>

                <motion.svg 
                    className="absolute top-1/2 left-1/3 w-80 h-80 text-primary/15" 
                    viewBox="0 0 200 200" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                        rotate: [0, 360],
                        y: [0, 25, 0],
                    }}
                    transition={{
                        duration: 38,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <path fill="currentColor" d="M47.3,-79.5C61.1,-71.4,72.1,-58.2,78.8,-43.4C85.5,-28.6,87.9,-12.2,86.8,3.8C85.7,19.8,81.1,35.4,72.9,48.6C64.7,61.8,53,72.6,39.3,78.8C25.6,85,10,86.6,-5.3,85.9C-20.6,85.2,-35.9,82.2,-49.1,75.8C-62.3,69.4,-73.4,59.6,-79.8,47.1C-86.2,34.6,-87.9,19.4,-86.7,4.7C-85.5,-10,-81.4,-24.2,-73.8,-36.8C-66.2,-49.4,-55.1,-60.4,-42.1,-69C-29.1,-77.6,-14.6,-83.8,0.7,-85.1C16,-86.4,33.5,-87.6,47.3,-79.5Z" transform="translate(100 100)" />
                </motion.svg>
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
                        Everything You Need to Land Your Dream Job
                    </h2>
                    <p className="text-lg md:text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
                        A comprehensive suite of tools designed to streamline your job search and maximize your success rate
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                className={`group relative bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10`}
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-navy/70 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Hover effect line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-navy/80 font-medium">All features included in the free plan</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
