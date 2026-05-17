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
    <section ref={ref} className="relative flex flex-col items-center overflow-hidden bg-white" style={{ minHeight: "100dvh", paddingTop: "72px" }}>
      
      {/* Marble Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/assets/hero-bg.jpg" alt="Marble Background" fill className="object-cover" priority quality={100} />
      </div>
      
      {/* Light Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] flex-1 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 py-12 lg:py-0">
        
        {/* LEFT / TOP — Typography & CTAs */}
        <div className="flex-1 w-full lg:max-w-[50%] flex flex-col justify-center mt-4 lg:mt-0">
          
          <div className="mb-4 lg:mb-6">
            <div className="overflow-hidden pb-4 -mb-4">
              <motion.h1 initial={{ y:"110%" }} animate={{ y:0 }} transition={{ duration:1.0, ease:EASE }}
                className="font-display m-0 font-bold"
                style={{ color:"#041D1A", fontSize:"clamp(2.8rem,5.5vw,5.5rem)", lineHeight:1.05, letterSpacing:"-0.02em", textTransform:"uppercase" }}>
                Skyliqua<br/>Water Purifiers
              </motion.h1>
            </div>
          </div>

          <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.8, delay:0.3, ease:"easeOut" }}
            className="h-px mb-4 lg:mb-6 w-16" style={{ background:"#AC885B", transformOrigin:"left" }} />

          <motion.p initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.4 }}
            className="text-lg lg:text-xl font-medium tracking-wide mb-8 lg:mb-12"
            style={{ color:"#AC885B" }}>
            Pure Water. Pure Life.
          </motion.p>

          <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.5 }}
            className="flex flex-wrap items-center gap-5 lg:gap-8 mb-12 lg:mb-0">
            <a href="#products"
              className="inline-flex items-center gap-3 rounded-sm font-bold tracking-wide transition-all duration-300 hover:opacity-90 active:scale-95 group"
              style={{ padding:"16px 32px", background:"#041D1A", color:"#FFFFFF", fontSize:"13px", textTransform:"uppercase" }}>
              Explore Collection
              <svg className="transition-transform group-hover:translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a href="#puresense" className="text-[13px] font-bold tracking-wide uppercase transition-colors hover:text-[#041D1A]"
              style={{ color:"rgba(4,29,26,0.5)" }}>
              How it works
            </a>
          </motion.div>
        </div>

        {/* RIGHT / BOTTOM — Product Image */}
        <div className="flex-1 w-full lg:h-full relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0 min-h-[350px] lg:min-h-0">
          <motion.div style={{ y:imgY }} className="relative w-full max-w-[320px] lg:max-w-[480px] aspect-[4/5] lg:aspect-square flex items-center justify-center">
            
            <motion.div initial={{ opacity:0, scale:0.92, y:20 }} animate={{ opacity:1, scale:1, y:0 }} transition={{ duration:1.2, delay:0.2, ease:"easeOut" }} className="relative w-full h-full">
              <motion.div animate={{ y:[0,-15,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
                className="absolute inset-0 cursor-pointer">
                <Image src="/assets/products/elite-removed.png" alt="Skyliqua Elite Water Purifier"
                  fill className="object-contain transition-transform duration-700 ease-out hover:scale-105" priority
                  style={{ filter:"drop-shadow(0 40px 60px rgba(4,29,26,0.15))" }}
                  sizes="(max-width: 1024px) 320px, 480px" />
              </motion.div>
            </motion.div>

            {/* Floating Tags (Desktop Only) */}
            <motion.div initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.6, delay:1.2 }}
              className="hidden lg:flex absolute top-10 right-0 items-center gap-3 backdrop-blur-md"
              style={{ background:"rgba(255,255,255,0.7)", border:"1px solid rgba(172,136,91,0.2)", padding:"8px 16px", borderRadius:"100px", boxShadow:"0 10px 30px rgba(4,29,26,0.05)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background:"#AC885B" }} />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#041D1A]">Marble White & Black Gold</span>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Stats at bottom (Overlaid on the light background) */}
      <div className="relative z-20 w-full max-w-[1440px] px-6 sm:px-10 md:px-14 lg:px-20 pb-10 lg:pb-12">
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 pt-8"
          style={{ borderTop:"1px solid rgba(4,29,26,0.1)" }}>
          {[
            { title:"Filtration", sub:"Advanced" },
            { title:"Protection", sub:"Multiple" },
            { title:"Recovery",   sub:"High Water" },
            { title:"Eco-Friendly", sub:"Healthy &" },
          ].map((s, i) => (
            <div key={s.title} className={`${i>0 && "md:border-l"} md:pl-6`} style={{ borderColor:"rgba(4,29,26,0.08)" }}>
              <div className="font-display text-2xl lg:text-3xl mb-1.5 font-bold" style={{ color:"#041D1A" }}>{s.title}</div>
              <div className="text-[10px] lg:text-xs font-bold tracking-[0.1em] uppercase" style={{ color:"#AC885B" }}>{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee strip - absolute bottom */}
      <div className="w-full relative z-20 flex-shrink-0 flex items-center overflow-hidden"
        style={{ height:"44px", background:"#041D1A", borderTop:"1px solid rgba(255,255,255,0.04)" }}>
        <div className="animate-marquee flex items-center" style={{ width:"max-content" }}>
          {STRIP.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-8">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase whitespace-nowrap"
                style={{ color:"#AC885B" }}>{item}</span>
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background:"rgba(255,255,255,0.2)" }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
