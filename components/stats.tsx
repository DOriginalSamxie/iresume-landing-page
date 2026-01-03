"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "50K+", label: "Active Users", color: "from-primary to-accent" },
    { value: "98%", label: "ATS Pass Rate", color: "from-secondary to-primary" },
    { value: "2.5x", label: "Faster Job Search", color: "from-accent to-secondary" },
    { value: "10K+", label: "Jobs Applied Daily", color: "from-primary to-secondary" }
];

export function Stats() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy to-navy/95 relative overflow-hidden">
            {/* Decorative SVG elements with animations */}
            <div className="absolute inset-0 opacity-10 overflow-hidden">
                <motion.svg 
                    className="absolute -top-20 -left-20 w-96 h-96 text-secondary" 
                    viewBox="0 0 200 200" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.9,76.4C26,83.8,9.2,86,-7.5,86.2C-24.2,86.4,-40.9,84.6,-54.8,77.4C-68.7,70.2,-79.8,57.6,-86.3,43.1C-92.8,28.6,-94.7,12.2,-93.1,-3.9C-91.5,-20,-86.4,-35.8,-77.6,-49.1C-68.8,-62.4,-56.3,-73.2,-42.1,-80.3C-27.9,-87.4,-12.9,-90.8,1.3,-93.1C15.5,-95.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                </motion.svg>
                
                <motion.svg 
                    className="absolute -bottom-20 -right-20 w-96 h-96 text-primary" 
                    viewBox="0 0 200 200" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                        rotate: [0, -360],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <path fill="currentColor" d="M47.3,-79.5C61.1,-71.4,72.1,-58.2,78.8,-43.4C85.5,-28.6,87.9,-12.2,86.8,3.8C85.7,19.8,81.1,35.4,72.9,48.6C64.7,61.8,53,72.6,39.3,78.8C25.6,85,10,86.6,-5.3,85.9C-20.6,85.2,-35.9,82.2,-49.1,75.8C-62.3,69.4,-73.4,59.6,-79.8,47.1C-86.2,34.6,-87.9,19.4,-86.7,4.7C-85.5,-10,-81.4,-24.2,-73.8,-36.8C-66.2,-49.4,-55.1,-60.4,-42.1,-69C-29.1,-77.6,-14.6,-83.8,0.7,-85.1C16,-86.4,33.5,-87.6,47.3,-79.5Z" transform="translate(100 100)" />
                </motion.svg>

                <motion.svg 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-accent" 
                    viewBox="0 0 200 200" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 45,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <path fill="currentColor" d="M39.5,-65.5C52.3,-58.2,64.5,-50.1,71.8,-38.4C79.1,-26.7,81.5,-11.4,80.9,3.7C80.3,18.8,76.7,33.7,69.1,46.8C61.5,59.9,50,71.2,36.8,77.8C23.6,84.4,8.8,86.3,-5.5,85.3C-19.8,84.3,-33.6,80.4,-46.3,73.6C-59,66.8,-70.6,57.1,-76.8,44.8C-83,32.5,-83.8,17.6,-82.5,3.3C-81.2,-11,-77.8,-24.7,-70.9,-36.8C-64,-48.9,-53.6,-59.4,-41.5,-67C-29.4,-74.6,-15.7,-79.3,-2.3,-75.9C11.1,-72.5,26.7,-72.8,39.5,-65.5Z" transform="translate(100 100)" />
                </motion.svg>
            </div>
            
            {/* Additional gradient orbs */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
                        Trusted by Professionals Worldwide
                    </h2>
                    <p className="text-lg text-cream/90 max-w-2xl mx-auto">
                        Join thousands who have transformed their job search with Instant Resume
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center group"
                        >
                            <div className="relative mb-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className={`text-5xl lg:text-6xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-16 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                            </div>
                            <p className="text-cream/90 font-medium text-base lg:text-lg">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold border-2 border-navy">S</div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-sm font-bold border-2 border-navy">M</div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white text-sm font-bold border-2 border-navy">E</div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold border-2 border-navy">+</div>
                        </div>
                        <span className="text-cream text-sm font-medium">Join 50,000+ professionals</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
