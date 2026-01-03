"use client";

import { motion } from "framer-motion";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Product",
            links: [
                { name: "Features", href: "#features" },
                { name: "Pricing", href: "#pricing" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Testimonials", href: "#testimonials" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Contact", href: "#" }
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Help Center", href: "#" },
                { name: "Resume Templates", href: "#" },
                { name: "Cover Letter Examples", href: "#" },
                { name: "Career Advice", href: "#" }
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Cookie Policy", href: "#" },
                { name: "Accessibility", href: "#" }
            ]
        }
    ];

    const socialLinks = [
        { name: "Twitter", icon: "𝕏", href: "#" },
        { name: "LinkedIn", icon: "in", href: "#" },
        { name: "Facebook", icon: "f", href: "#" },
        { name: "Instagram", icon: "📷", href: "#" }
    ];

    return (
        <footer className="bg-navy text-cream pt-20 pb-10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
                    {/* Brand column */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-2xl">📄</span>
                                </div>
                                <span className="text-2xl font-bold text-cream">Instant Resume</span>
                            </div>
                            <p className="text-cream/70 leading-relaxed mb-6 max-w-sm">
                                Your comprehensive career management platform. Create, manage, and optimize your professional journey with AI-powered tools.
                            </p>
                            
                            {/* Social links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10"
                                        aria-label={social.name}
                                    >
                                        <span className="text-lg font-bold">{social.icon}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Links columns */}
                    {footerSections.map((section, sectionIndex) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: sectionIndex * 0.1 }}
                        >
                            <h3 className="font-bold text-cream mb-4 text-lg">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-cream/70 hover:text-primary transition-colors inline-block group"
                                        >
                                            <span className="relative">
                                                {link.name}
                                                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-cream/10"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-cream/60 text-sm">
                            © {currentYear} Instant Resume. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-cream/60 hover:text-primary transition-colors">
                                Privacy
                            </a>
                            <a href="#" className="text-cream/60 hover:text-primary transition-colors">
                                Terms
                            </a>
                            <a href="#" className="text-cream/60 hover:text-primary transition-colors">
                                Cookies
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
