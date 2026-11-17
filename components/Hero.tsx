"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, MapPin, Sparkles } from "lucide-react";

export default function Hero(){
  const mx=useMotionValue(0),my=useMotionValue(0);const rx=useSpring(useTransform(my,[-.5,.5],[10,-10]));const ry=useSpring(useTransform(mx,[-.5,.5],[-12,12]));
  return <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28"><div className="grid-lines absolute inset-0 -z-10 opacity-40"/><div className="container grid items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
    <div><motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.22em] text-accent2"><span className="h-2 w-2 animate-pulse rounded-full bg-accent2"/>Digital products, engineered around your business</motion.p>
      <h1 className="font-display text-[clamp(3.8rem,9vw,8rem)] font-bold leading-[.82] tracking-[-.085em]"><motion.span className="block" initial={{opacity:0,y:70}} animate={{opacity:1,y:0}} transition={{duration:.8,ease:[.22,1,.36,1]}}>WE BUILD</motion.span><motion.span className="accent-text block" initial={{opacity:0,y:70}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.12,ease:[.22,1,.36,1]}}>WHAT&apos;S NEXT.</motion.span></h1>
      <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">DevSphere creates premium websites, mobile experiences, POS systems, ERP platforms and custom software that simplify work and move businesses forward.</p>
      <div className="mt-8 flex flex-wrap gap-3"><a className="btn btn-primary" href="#work">Explore our work <ArrowDownRight size={16}/></a><a className="btn btn-ghost" href="#contact">Start a project</a></div>
      <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted"><span className="flex gap-1"><MapPin size={14}/>Karachi, Pakistan</span><a href="mailto:Muhibmirza58@gmail.com">Muhibmirza58@gmail.com</a><a href="tel:+923012588832">+92 301 2588832</a></div>
    </div>
    <motion.div className="relative mx-auto w-full max-w-[430px]" style={{perspective:900}} onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();mx.set((e.clientX-r.left)/r.width-.5);my.set((e.clientY-r.top)/r.height-.5)}} onMouseLeave={()=>{mx.set(0);my.set(0)}} initial={{opacity:0,scale:.86}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.35}}>
      <motion.div style={{rotateX:rx,rotateY:ry,transformStyle:"preserve-3d"}} animate={{y:[0,-14,0]}} transition={{y:{duration:5,repeat:Infinity,ease:"easeInOut"}}} className="glass relative aspect-[4/5] overflow-hidden rounded-[2.5rem] p-3 shadow-glow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_28%,rgba(0,202,255,.28),transparent_32%),linear-gradient(145deg,#080818,#14104a_54%,#071827)]"/>
        <div className="absolute inset-8 flex flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/[.035] p-8 text-center backdrop-blur-sm"><Image src="/images/devsphere/devsphere-logo.png" alt="DevSphere logo" width={390} height={130} priority className="h-auto w-full object-contain"/><div className="mt-12 grid w-full grid-cols-3 gap-2 text-white"><span className="rounded-xl border border-white/10 bg-white/5 py-3 text-[10px] uppercase tracking-wider">Web</span><span className="rounded-xl border border-white/10 bg-white/5 py-3 text-[10px] uppercase tracking-wider">Mobile</span><span className="rounded-xl border border-white/10 bg-white/5 py-3 text-[10px] uppercase tracking-wider">Software</span></div></div>
        <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white backdrop-blur"><Sparkles size={14} className="text-cyan-300"/>Built for real operations</div>
      </motion.div><div className="absolute -right-5 -top-5 -z-10 h-28 w-28 rounded-full bg-accent opacity-30 blur-3xl"/><div className="absolute -bottom-8 -left-8 -z-10 h-36 w-36 rounded-full bg-accent2 opacity-25 blur-3xl"/></motion.div>
  </div></section>
}
