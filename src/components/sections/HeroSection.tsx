"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const MARQUEE = [
  "12-Stage Puresense","Copper Enrichment","Alkaline Balance","Smart LED Monitor",
  "RO · UV · UF","Life-Long Service","pH 7.5–9.5","Ayurvedic Wellness","99.9% Purity","Auto-Sanitisation",
];
const STRIP = [...MARQUEE, ...MARQUEE];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={ref} className="relative flex flex-col items-center overflow-hidden bg-[#06100F]" style={{ minHeight: "100dvh", paddingTop: "72px" }}>
      
      {/* Cinematic Background Lighting */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] pointer-events-none opacity-30" 
        style={{ background: "radial-gradient(circle at 70% 30%, rgba(34,97,95,0.4) 0%, rgba(6,16,15,0) 60%)" }} />
      <div className="absolute bottom-0 left-0 w-[60%] h-[60%] pointer-events-none opacity-20" 
        style={{ background: "radial-gradient(circle at 30% 70%, rgba(172,136,91,0.15) 0%, rgba(6,16,15,0) 60%)" }} />
      {/* Subtle Noise/Dot Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-40" 
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] flex-1 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 py-12 lg:py-0">
        
        {/* LEFT / TOP — Typography & CTAs */}
        <div className="flex-1 w-full lg:max-w-[50%] flex flex-col justify-center mt-4 lg:mt-0">
          <motion.div initial={{ opacity:0, x:-12 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.6 }} className="mb-5 lg:mb-8">
            <span className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color:"#AC885B" }}>
              Skyliqua · Puresense Technology
            </span>
          </motion.div>

          <div className="mb-6 lg:mb-8">
            <div className="overflow-hidden pb-4 -mb-4">
              <motion.h1 initial={{ y:"110%" }} animate={{ y:0 }} transition={{ duration:1.0, ease:EASE }}
                className="font-display m-0"
                style={{ fontStyle:"italic", color:"#A5CBC1", fontSize:"clamp(3.5rem,7vw,7rem)", lineHeight:1.1, letterSpacing:"-0.02em" }}>
                Water,
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-4 -mb-4">
              <motion.h1 initial={{ y:"110%" }} animate={{ y:0 }} transition={{ duration:1.0, ease:EASE, delay:0.05 }}
                className="font-display m-0"
                style={{ color:"#FFFFFF", fontSize:"clamp(3.5rem,7vw,7rem)", lineHeight:1.1, letterSpacing:"-0.02em" }}>
                Reimagined.
              </motion.h1>
            </div>
          </div>

          <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.8, delay:0.3, ease:"easeOut" }}
            className="h-px mb-6 lg:mb-8 w-16" style={{ background:"#AC885B", transformOrigin:"left" }} />

          <motion.p initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.4 }}
            className="text-base lg:text-lg leading-relaxed font-light max-w-[420px] mb-8 lg:mb-12"
            style={{ color:"rgba(255,255,255,0.6)" }}>
            Twelve stages of precision purification, copper-enriched and alkaline-balanced —
            engineered for the family that demands the absolute best.
          </motion.p>

          <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.5 }}
            className="flex flex-wrap items-center gap-5 lg:gap-8 mb-12 lg:mb-0">
            <a href="#products"
              className="inline-flex items-center gap-3 rounded-sm font-semibold tracking-wide transition-all duration-300 hover:opacity-90 active:scale-95 group"
              style={{ padding:"16px 32px", background:"#AC885B", color:"#06100F", fontSize:"13px" }}>
              Explore Collection
              <svg className="transition-transform group-hover:translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a href="#puresense" className="text-[13px] font-semibold tracking-wide uppercase transition-colors hover:text-white"
              style={{ color:"rgba(255,255,255,0.4)" }}>
              How it works
            </a>
          </motion.div>
        </div>

        {/* RIGHT / BOTTOM — Product Image */}
        <div className="flex-1 w-full lg:h-full relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0 min-h-[350px] lg:min-h-0">
          <motion.div style={{ y:imgY }} className="relative w-full max-w-[320px] lg:max-w-[480px] aspect-[4/5] lg:aspect-square flex items-center justify-center">
            {/* Soft backdrop glow behind the product */}
            <div className="absolute inset-0 rounded-full blur-[80px] opacity-25 pointer-events-none" style={{ background:"radial-gradient(circle, #A5CBC1 0%, transparent 70%)" }} />
            
            <motion.div initial={{ opacity:0, scale:0.92, y:20 }} animate={{ opacity:1, scale:1, y:0 }} transition={{ duration:1.2, delay:0.2, ease:"easeOut" }} className="relative w-full h-full">
              <motion.div animate={{ y:[0,-20,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
                className="absolute inset-0 cursor-pointer">
                <Image src="/assets/products/elite-removed.png" alt="Skyliqua Elite Water Purifier"
                  fill className="object-contain transition-transform duration-700 ease-out hover:scale-105" priority
                  style={{ filter:"drop-shadow(0 30px 60px rgba(0,0,0,0.4))" }}
                  sizes="(max-width: 1024px) 320px, 480px" />
              </motion.div>
            </motion.div>

            {/* Floating Tags (Desktop Only) */}
            <motion.div initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.6, delay:1.2 }}
              className="hidden lg:flex absolute top-10 right-0 items-center gap-3 backdrop-blur-md"
              style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.1)", padding:"8px 16px", borderRadius:"100px" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background:"#AC885B" }} />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Premium Collection</span>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Stats at bottom (Overlaid on the dark background) */}
      <div className="relative z-20 w-full max-w-[1440px] px-6 sm:px-10 md:px-14 lg:px-20 pb-10 lg:pb-12">
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 pt-8"
          style={{ borderTop:"1px solid rgba(255,255,255,0.08)" }}>
          {[
            { v:"12",    l:"Purification Stages" },
            { v:"10 L",  l:"Storage Capacity"    },
            { v:"99.9%", l:"Bacteria Eliminated" },
            { v:"∞",     l:"Lifetime Service"    },
          ].map((s, i) => (
            <div key={s.v} className={`${i>0 && "md:border-l"} md:pl-6`} style={{ borderColor:"rgba(255,255,255,0.05)" }}>
              <div className="font-display text-3xl lg:text-4xl mb-2 leading-none" style={{ color:"#A5CBC1" }}>{s.v}</div>
              <div className="text-[10px] lg:text-xs font-semibold tracking-[0.1em] uppercase" style={{ color:"rgba(255,255,255,0.4)" }}>{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee strip - absolute bottom */}
      <div className="w-full relative z-20 flex-shrink-0 flex items-center overflow-hidden"
        style={{ height:"44px", background:"rgba(0,0,0,0.3)", borderTop:"1px solid rgba(255,255,255,0.04)", backdropFilter:"blur(10px)" }}>
        <div className="animate-marquee flex items-center" style={{ width:"max-content" }}>
          {STRIP.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-8">
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase whitespace-nowrap"
                style={{ color:"rgba(255,255,255,0.3)" }}>{item}</span>
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background:"#AC885B" }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
