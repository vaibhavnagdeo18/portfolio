"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { ChevronDown } from "lucide-react";

// Inline Button component
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ className = "", children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

// BlurText animation component
interface BlurTextProps {
    text: string;
    delay?: number;
    animateBy?: "words" | "letters";
    direction?: "top" | "bottom";
    className?: string;
    style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
    text,
    delay = 50,
    animateBy = "words",
    direction = "top",
    className = "",
    style,
}) => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const segments = useMemo(() => {
        return animateBy === "words" ? text.split(" ") : text.split("");
    }, [text, animateBy]);

    return (
        <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
            {segments.map((segment, i) => (
                <span
                    key={i}
                    style={{
                        display: "inline-block",
                        filter: inView ? "blur(0px)" : "blur(10px)",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
                        transition: `all 0.5s ease-out ${i * delay}ms`,
                    }}
                >
                    {segment}
                    {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
                </span>
            ))}
        </p>
    );
};

export default function PortfolioHero() {
    const [isDark, setIsDark] = useState(true);
    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    return (
        <div
            className="min-h-screen text-foreground transition-colors bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
        >
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 sm:py-6 pointer-events-none">
                <nav className="flex items-center justify-end max-w-screen-2xl mx-auto pointer-events-auto">
                    {/* Signature */}
                    <div className="text-3xl sm:text-4xl text-white" style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}>
                        V
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <main className="relative min-h-screen flex flex-col pt-32 lg:pt-0">
                {/* Centered Main Name - Always Perfectly Centered */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
                    <div className="relative text-center">
                        <div>
                            <BlurText
                                text="VAIBHAV"
                                delay={100}
                                animateBy="letters"
                                direction="top"
                                className="font-bold text-[54px] xs:text-[60px] sm:text-[110px] md:text-[140px] lg:text-[180px] xl:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
                                style={{ color: "#C3E41D", fontFamily: "'Fira Code', monospace" }}
                            />
                        </div>
                        <div>
                            <BlurText
                                text="NAGDEO"
                                delay={100}
                                animateBy="letters"
                                direction="top"
                                className="font-bold text-[54px] xs:text-[60px] sm:text-[110px] md:text-[140px] lg:text-[180px] xl:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
                                style={{ color: "#C3E41D", fontFamily: "'Fira Code', monospace" }}
                            />
                        </div>

                        {/* Profile Picture */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="w-[65px] h-[110px] sm:w-[90px] sm:h-[152px] md:w-[110px] md:h-[185px] lg:w-[129px] lg:h-[218px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer">
                                <img
                                    src="/profile.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tagline - Proper Distance Below Hero */}
                <div className="absolute bottom-12 sm:bottom-14 md:bottom-16 lg:bottom-20 xl:bottom-24 left-1/2 -translate-x-1/2 w-full px-6">
                    <div className="flex flex-col items-center justify-center gap-6">
                        <BlurText
                            text="Building scalable backend systems and AI-driven applications."
                            delay={30}
                            animateBy="words"
                            direction="top"
                            className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center transition-colors duration-300 text-neutral-400 hover:text-black dark:hover:text-white"
                            style={{ fontFamily: "'Antic', sans-serif" }}
                        />
                        <a
                            href="/vaibhav_Zoho2_resume.pdf"
                            download
                            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-bold transition-all duration-300 border border-[#C3E41D] text-[#C3E41D] hover:bg-[#C3E41D] hover:text-black hover:shadow-[0_0_20px_rgba(195,228,29,0.5)] hover:scale-105 active:scale-95"
                            style={{ fontFamily: "'Fira Code', monospace" }}
                        >
                            Download Resume ↓
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <button
                    type="button"
                    onClick={() => {
                        const projectsSection = document.getElementById('projects');
                        projectsSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 transition-colors duration-300"
                    aria-label="Scroll down"
                >
                    <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-300 animate-bounce" />
                </button>
            </main>
        </div>
    );
}
