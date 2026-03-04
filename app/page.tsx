"use client";

import React from "react";
import PortfolioHero from "@/components/ui/portfolio-hero";
import { CardStack } from "@/components/ui/card-stack";
import ProfileCard from "@/components/ui/profile-card";
import { SterlingGateKineticNavigation } from "@/components/ui/sterling-gate-kinetic-navigation";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { Timeline } from "@/components/ui/timeline";
import { GraduationCap, Briefcase, BookOpen, Mail, Github, Linkedin } from "lucide-react";

const projectItems = [
  {
    id: 1,
    title: "Payment / Wallet Backend",
    tag: "Secure Transaction Architecture",
    description: "Architected a scalable backend wallet system supporting authentication, balance management, and peer-to-peer transactions using Node.js, PostgreSQL, and Prisma with ACID compliance.",
    imageSrc: "/Gemini_Generated_Image_nhhylpnhhylpnhhy.png",
    imageClassName: "scale-[1.15] origin-top-left",
    href: "https://github.com/vaibhavnagdeo18/payment-wallet-system",
    ctaLabel: "View Source"
  },
  {
    id: 2,
    title: "ConfigGuardian AI",
    tag: "AI Infrastructure Analysis",
    description: "Engineered a multi-stage AI pipeline to evaluate infrastructure configuration changes using AWS Bedrock (Nova). Designed risk scoring mechanisms to detect high-risk configurations.",
    imageSrc: "/configguardian.jpg",
    href: "https://github.com/vaibhavnagdeo18/configguardian-ai",
    ctaLabel: "Launch App"
  },
  {
    id: 5,
    title: "Architect AI",
    tag: "Autonomous Infrastructure Reasoning",
    description: "Deploy a fleet of specialized AI agents — FinOps, SRE, and Performance — to validate your cloud architecture before writing a single line of code. Built with Multi-agent AI, AWS, and Node.js.",
    imageSrc: "/multiagent architecture.jpeg",
    href: "https://github.com/vaibhavnagdeo18/gemini3hackathon",
    ctaLabel: "Launch App"
  },
  {
    id: 4,
    title: "Genaiversity Hackathon Winner",
    tag: "AI Motion Arts Visualizer",
    description: "Built AI Manim Visualizer: an AI-driven animation generator converting natural language into Manim-based mathematical visualizations.",
    imageSrc: "/genaiversity.jpg",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7388748428886822912/",
    ctaLabel: "View Post"
  }
];

export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="w-full relative bg-zinc-950">
      <PortfolioHero />

      {/* Container for subsequent sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24 sm:space-y-32 pb-24 sm:pb-32">

        {/* Projects / Experience Section */}
        <section id="projects" className="pt-20 sm:pt-24 flex flex-col items-center overflow-hidden">
          <div id="experience" className="absolute -translate-y-24" />
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 font-mono tracking-tight">Experience & Projects</h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              A curated selection of my professional work, hackathon wins, and production-grade backend architectures.
            </p>
          </div>
          <div className="w-full flex justify-center px-4 sm:px-0">
            <CardStack
              items={projectItems}
              autoAdvance
              intervalMs={3000}
              className="mt-8"
              cardWidth={isMobile ? window.innerWidth - 32 : 800}
              cardHeight={isMobile ? 400 : 450}
            />
          </div>
        </section>

        {/* Education & Experience Timeline Section */}
        <section id="education" className="pt-20 sm:pt-24 pb-12 border-t border-zinc-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 font-mono tracking-tight mb-4 text-center">
              Timeline
            </h2>
            <p className="text-zinc-400 text-center mb-12 sm:mb-16 max-w-2xl mx-auto" style={{ fontFamily: "'Antic', sans-serif" }}>
              My academic and professional journey.
            </p>

            <div className="bg-zinc-950/50 p-6 sm:p-12 rounded-2xl border border-zinc-800/50 shadow-2xl">
              <Timeline
                variant="spacious"
                timestampPosition={isMobile ? "top" : "inline"}
                items={[
                  {
                    id: "grad",
                    title: "Expected Graduation",
                    timestamp: "2027",
                    description: "B.Tech Information Technology · CMR Engineering College",
                    status: "pending",
                    icon: <GraduationCap className="h-4 w-4" />
                  },
                  {
                    id: "intern",
                    title: "SDE Intern at Bluestock Fintech",
                    timestamp: "Jul 2025 – Aug 2025",
                    description: "Optimized full-stack web apps using React.js, Node.js, and Firebase · Increased user engagement by 30% · Integrated AI-driven systems improving efficiency by 25%",
                    status: "completed",
                    icon: <Briefcase className="h-4 w-4" />
                  },
                  {
                    id: "start",
                    title: "Started B.Tech in Information Technology",
                    timestamp: "2023",
                    description: "CMR Engineering College, Hyderabad · CGPA: 8.29/10",
                    status: "completed",
                    icon: <BookOpen className="h-4 w-4" />
                  }
                ]}
              />
            </div>
          </div>
        </section>

        {/* Tech Stacks Section */}
        <section id="skills" className="pt-20 sm:pt-24 pb-12 border-t border-zinc-800/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-0">
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 font-mono tracking-tight mb-6">
                Tech Stacks
              </h2>
              <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-lg mb-8 mx-auto lg:mx-0" style={{ fontFamily: "'Antic', sans-serif" }}>
                A collection of technologies I work with to build scalable backend systems, AI applications, and modern web experiences.
              </p>
              <a
                href="#skills"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all duration-300 border border-[#C3E41D]/30 text-[#C3E41D] hover:bg-[#C3E41D] hover:text-black hover:shadow-[0_0_20px_rgba(195,228,29,0.4)]"
              >
                View All Skills &rarr;
              </a>
            </div>

            {/* Right Column: Icon Cloud */}
            <div className="relative flex size-full min-h-[400px] items-center justify-center overflow-hidden rounded-lg bg-transparent">
              <IconCloud iconSlugs={[
                "javascript",
                "java",
                "python",
                "react",
                "tailwindcss",
                "html5",
                "css3",
                "nodedotjs",
                "express",
                "fastapi",
                "mongodb",
                "mysql",
                "postgresql",
                "amazonaws",
                "git",
                "github",
                "postman",
                "render",
                "prisma"
              ]} />
            </div>
          </div>
        </section>

        {/* About / Contact Section */}
        <section id="contact" className="pt-12 pb-16 border-t border-zinc-800/50 flex flex-col items-center">
          <div id="about" className="absolute -translate-y-24" />
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white font-mono tracking-tight">Let's Connect</h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              I am a Software Engineering student focused on backend systems and scalable app design. Reach out if you'd like to collaborate.
            </p>
          </div>
          <div className="flex flex-col items-center gap-10">
            <ProfileCard
              imageSrc="/profile.jpg"
              name="Vaibhav Nagdeo"
              role="SDE / AI Engineer"
            />

            {/* Social Link Buttons */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/vaibhavnagdeo18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#C3E41D] hover:border-[#C3E41D]/50 hover:shadow-[0_0_15px_rgba(195,228,29,0.2)] transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhavnagdeo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#C3E41D] hover:border-[#C3E41D]/50 hover:shadow-[0_0_15px_rgba(195,228,29,0.2)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:vaibhavnagdeo@gmail.com"
                className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#C3E41D] hover:border-[#C3E41D]/50 hover:shadow-[0_0_15px_rgba(195,228,29,0.2)] transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </section>
      </div>

      <SterlingGateKineticNavigation />
    </main>
  );
}
