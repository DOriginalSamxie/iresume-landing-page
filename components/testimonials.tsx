"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
    {
        content: "Instant Resume helped me land my dream job at Google! The ATS optimization feature is a game-changer. My resume passed through every screening.",
        author: "Sarah Johnson",
        role: "Software Engineer at Google",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        rating: 5
    },
    {
        content: "The auto-apply feature saved me countless hours. I applied to over 100 jobs in a week and got 15 interviews. Absolutely worth every penny!",
        author: "Michael Chen",
        role: "Product Manager at Microsoft",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        rating: 5
    },
    {
        content: "Best investment in my career. The cover letter generator creates personalized letters that actually get responses. Highly recommended!",
        author: "Emily Rodriguez",
        role: "Marketing Director at Amazon",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
        rating: 5
    },
    {
        content: "The analytics dashboard helped me understand what was working and what wasn't. I optimized my approach and landed 3 offers in one month!",
        author: "David Kim",
        role: "Data Scientist at Meta",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        rating: 5
    },
    {
        content: "The portfolio templates are beautiful and professional. They helped me showcase my work in a way that stood out from other candidates.",
        author: "Lisa Wang",
        role: "UX Designer at Figma",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
        rating: 5
    },
    {
        content: "From creating my resume to landing interviews, everything was seamless. The platform is intuitive and the support team is fantastic!",
        author: "James Anderson",
        role: "Sales Manager at Salesforce",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
        rating: 5
    }
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        setCurrent((prevIndex) => {
            let newIndex = prevIndex + newDirection;
            if (newIndex < 0) newIndex = testimonials.length - 1;
            if (newIndex >= testimonials.length) newIndex = 0;
            return newIndex;
        });
    }, []);

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(() => {
                paginate(1);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [current, isPaused, paginate]);

    return (
        <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-navy/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-accent mb-4"
                    >
                        Loved by Professionals Worldwide
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-navy/70 max-w-2xl mx-auto"
                    >
                        Don&apos;t just take our word for it - hear from people who have transformed their careers with Instant Resume
                    </motion.p>
                </div>

                <div 
                    className="relative max-w-5xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Main carousel */}
                    <div className="relative h-[480px] md:h-[420px] overflow-hidden">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);

                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1);
                                    }
                                }}
                                className="absolute w-full"
                            >
                                <div className="bg-white rounded-2xl shadow-xl border border-navy/10 p-8 md:p-12 mx-4 md:mx-8">
                                    {/* Quote icon */}
                                    <Quote className="w-12 h-12 text-primary/20 mb-6" />

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonials[current].rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="text-lg md:text-xl text-navy/80 leading-relaxed mb-8 min-h-[120px]">
                                        &ldquo;{testimonials[current].content}&rdquo;
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img 
                                            src={testimonials[current].avatar} 
                                            alt={testimonials[current].author}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                                        />
                                        <div>
                                            <p className="font-bold text-accent text-lg">{testimonials[current].author}</p>
                                            <p className="text-navy/60">{testimonials[current].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-0 md:-px-4 pointer-events-none">
                        <Button
                            variant="outline"
                            size="icon"
                            className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white border-navy/10 -translate-x-4 md:-translate-x-16"
                            onClick={() => paginate(-1)}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white border-navy/10 translate-x-4 md:translate-x-16"
                            onClick={() => paginate(1)}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > current ? 1 : -1);
                                    setCurrent(index);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === current 
                                        ? "w-8 bg-primary" 
                                        : "w-2 bg-navy/20 hover:bg-navy/40"
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Additional smaller testimonials grid below (optional) */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                >
                    {testimonials.slice(0, 3).map((testimonial, idx) => (
                        <div 
                            key={idx}
                            className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-navy/10 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex gap-1 mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-sm text-navy/70 mb-4 line-clamp-3">&ldquo;{testimonial.content}&rdquo;</p>
                            <div className="flex items-center gap-3">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img 
                                    src={testimonial.avatar} 
                                    alt={testimonial.author}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                                />
                                <div>
                                    <p className="font-semibold text-accent text-sm">{testimonial.author}</p>
                                    <p className="text-xs text-navy/60">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
