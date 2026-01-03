"use client";

import { motion } from "framer-motion";

const companies = [
    { name: "Google", textColor: "text-[#4285F4]" },
    { name: "Microsoft", textColor: "text-[#00A4EF]" },
    { name: "Amazon", textColor: "text-[#FF9900]" },
    { name: "Meta", textColor: "text-[#0668E1]" },
    { name: "Apple", textColor: "text-[#000000]" },
    { name: "Netflix", textColor: "text-[#E50914]" },
    { name: "Tesla", textColor: "text-[#CC0000]" },
    { name: "Salesforce", textColor: "text-[#00A1E0]" }
];

// Duplicate companies for seamless loop
const allCompanies = [...companies, ...companies];

export function Companies() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-navy/10 overflow-hidden relative">
            {/* Decorative SVG shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Top decorative shapes */}
                <svg className="absolute -top-10 -left-10 w-40 h-40 text-secondary/20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.9,76.4C26,83.8,9.2,86,-7.5,86.2C-24.2,86.4,-40.9,84.6,-54.8,77.4C-68.7,70.2,-79.8,57.6,-86.3,43.1C-92.8,28.6,-94.7,12.2,-93.1,-3.9C-91.5,-20,-86.4,-35.8,-77.6,-49.1C-68.8,-62.4,-56.3,-73.2,-42.1,-80.3C-27.9,-87.4,-12.9,-90.8,1.3,-93.1C15.5,-95.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
                
                <svg className="absolute top-20 right-20 w-32 h-32 text-primary/15" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M39.5,-65.5C52.3,-58.2,64.5,-50.1,71.8,-38.4C79.1,-26.7,81.5,-11.4,80.9,3.7C80.3,18.8,76.7,33.7,69.1,46.8C61.5,59.9,50,71.2,36.8,77.8C23.6,84.4,8.8,86.3,-5.5,85.3C-19.8,84.3,-33.6,80.4,-46.3,73.6C-59,66.8,-70.6,57.1,-76.8,44.8C-83,32.5,-83.8,17.6,-82.5,3.3C-81.2,-11,-77.8,-24.7,-70.9,-36.8C-64,-48.9,-53.6,-59.4,-41.5,-67C-29.4,-74.6,-15.7,-79.3,-2.3,-75.9C11.1,-72.5,26.7,-72.8,39.5,-65.5Z" transform="translate(100 100)" />
                </svg>

                {/* Bottom decorative shapes */}
                <svg className="absolute -bottom-10 right-1/4 w-48 h-48 text-accent/15" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M47.3,-79.5C61.1,-71.4,72.1,-58.2,78.8,-43.4C85.5,-28.6,87.9,-12.2,86.8,3.8C85.7,19.8,81.1,35.4,72.9,48.6C64.7,61.8,53,72.6,39.3,78.8C25.6,85,10,86.6,-5.3,85.9C-20.6,85.2,-35.9,82.2,-49.1,75.8C-62.3,69.4,-73.4,59.6,-79.8,47.1C-86.2,34.6,-87.9,19.4,-86.7,4.7C-85.5,-10,-81.4,-24.2,-73.8,-36.8C-66.2,-49.4,-55.1,-60.4,-42.1,-69C-29.1,-77.6,-14.6,-83.8,0.7,-85.1C16,-86.4,33.5,-87.6,47.3,-79.5Z" transform="translate(100 100)" />
                </svg>

                {/* Floating circles */}
                <motion.div 
                    className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-2xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-1/3 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 blur-2xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
                        <p className="text-sm font-bold text-primary uppercase tracking-[0.3em] mx-4">
                            Trusted by Job Seekers
                        </p>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-navy/80">
                        From Top Companies
                    </h2>
                </motion.div>

                {/* Marquee Container */}
                <div className="relative">
                    {/* Gradient overlays for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    {/* Marquee animation */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-16 items-center"
                            animate={{
                                x: [0, -1920],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 25,
                                    ease: "linear",
                                },
                            }}
                        >
                            {allCompanies.map((company, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center min-w-[180px]"
                                >
                                    <div className={`text-3xl font-bold ${company.textColor} hover:scale-110 transition-transform duration-200 whitespace-nowrap`}>
                                        {company.name}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Additional info */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-navy/60 text-sm mt-8"
                >
                    Join professionals landing roles at Fortune 500 companies
                </motion.p>
            </div>
        </section>
    );
}
