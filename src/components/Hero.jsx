"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { personalDetails } from "@/data/portfolioData";
import { ArrowDownRight, ArrowUpRight, Zap, Code, ShieldCheck, Layers } from "lucide-react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="about"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-8 bg-grid-pattern overflow-hidden border-b-2 border-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Availability Pill */}
            <div className="hero-animate inline-flex items-center gap-2.5 px-4 py-2 bg-white border-2 border-black rounded-full shadow-outline-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wide uppercase font-mono text-black">
                {personalDetails.availability}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="hero-animate text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-[1.15]">
                👋 Hi, I'm <span className="underline decoration-4 decoration-black underline-offset-8">Fuad Hasan</span>
              </h1>
              <p className="hero-animate text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-snug">
                I build Next.js applications & design WordPress websites.
              </p>
            </div>

            {/* Sub-description */}
            <p className="hero-animate text-base sm:text-lg text-neutral-700 font-medium leading-relaxed max-w-xl">
              I build custom Next.js web applications and design WordPress sites, including E-Commerce stores, LMS platforms, corporate websites, speed optimization, and security.
            </p>

            {/* Micro Badges */}
            <div className="hero-animate flex flex-wrap gap-3 pt-1">
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white border-2 border-black rounded-xl text-xs font-bold text-black shadow-outline-sm">
                <Zap className="w-4 h-4 text-black" />
                <span>6+ Years Exp</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white border-2 border-black rounded-xl text-xs font-bold text-black shadow-outline-sm">
                <Layers className="w-4 h-4 text-black" />
                <span>150+ Projects</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white border-2 border-black rounded-xl text-xs font-bold text-black shadow-outline-sm">
                <ShieldCheck className="w-4 h-4 text-black" />
                <span>Next.js & WordPress Specialist</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-animate flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-black text-white font-extrabold text-sm sm:text-base rounded-2xl border-2 border-black shadow-outline-hover transition-all"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black font-extrabold text-sm sm:text-base rounded-2xl border-2 border-black shadow-outline-hover transition-all hover:bg-neutral-100"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Profile Photo Column */}
          <div className="lg:col-span-5 hero-animate">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo Frame Container */}
              <div className="bg-white border-2 border-black rounded-3xl p-4 shadow-outline-lg relative group">
                
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-black px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-black" />
                    <div className="w-3 h-3 rounded-full bg-neutral-300 border border-black" />
                    <div className="w-3 h-3 rounded-full bg-neutral-100 border border-black" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-black bg-neutral-100 px-2.5 py-0.5 rounded border border-black">
                    fuad-hasan.jpg
                  </span>
                </div>

                {/* Bright Elegant Black & White Profile Photo */}
                <div className="relative w-full h-[400px] sm:h-[440px] rounded-2xl overflow-hidden border-2 border-black bg-neutral-100">
                  <Image
                    src="/fuad.jpg"
                    alt="Fuad Hasan - Next.js Developer & WordPress Specialist"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-top filter grayscale brightness-105 contrast-[102%] hover:grayscale-0 hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Subtle Caption Overlay at Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm text-white p-3 rounded-xl border border-white/20 space-y-0.5">
                    <div className="font-extrabold text-base flex items-center justify-between">
                      <span>Fuad Hasan</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <p className="text-xs font-mono text-neutral-300">
                      Next.js Developer & WordPress Specialist
                    </p>
                  </div>
                </div>

                {/* Bottom Spec Badge */}
                <div className="mt-3 p-3 bg-black text-white rounded-xl border-2 border-black flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-white" />
                    <span className="text-xs font-mono font-bold">150+ Projects Completed</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-white text-black px-2 py-0.5 rounded font-extrabold">
                    Verified
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
