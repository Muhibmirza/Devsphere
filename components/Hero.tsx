"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, Download, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero(){
  const [role,setRole]=useState(0); useEffect(()=>{const id=setInterval(()=>setRole(v=>(v+1)%2),2600);return()=>clearInterval(id)},[]);
  const mx=useMotionValue(0),my=useMotionValue(0);const rx=useSpring(useTransform(my,[-.5,.5],[10,-10]));const ry=useSpring(useTransform(mx,[-.5,.5],[-12,12]));
  return <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28"><div className="grid-lines absolute inset-0 -z-10 opacity-40"/><div className="container grid items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
    <div><motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.22em] text-accent2"><span className="h-2 w-2 animate-pulse rounded-full bg-accent2"/>Available for ambitious work</motion.p>
      <h1 className="font-display text-[clamp(4rem,10vw,8.7rem)] font-bold leading-[.78] tracking-[-.085em]">{["MUHIB","MIRZA"].map((w,i)=><motion.span key={w} className={i?"accent-text block":"block"} initial={{opacity:0,y:70}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.12+i*.12,ease:[.22,1,.36,1]}}>{w}</motion.span>)}</h1>
      <div className="mt-7 h-9 overflow-hidden font-display text-xl font-semibold sm:text-2xl"><motion.div key={role} initial={{y:28,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-28,opacity:0}}>{role?"AI Developer":"Full-Stack Software Developer"}<span className="text-accent">_</span></motion.div></div>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">4+ years building production web apps, ERP systems, LMS platforms &amp; e-commerce solutions with React.js, Next.js, Node.js, PHP, MySQL &amp; MongoDB — accelerated with AI-assisted development workflows.</p>
      <div className="mt-8 flex flex-wrap gap-3"><a className="btn btn-primary" href="#projects">View Projects <ArrowDownRight size={16}/></a><a className="btn btn-ghost" href="/resume.pdf" download>Download Resume <Download size={15}/></a><a className="btn btn-ghost" href="#contact">Contact Me</a></div>
      <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted"><span className="flex gap-1"><MapPin size={14}/>Karachi, Pakistan</span><a href="mailto:Muhibmirza58@gmail.com">Muhibmirza58@gmail.com</a><a href="tel:+923012588832">+92 301 2588832</a></div>
    </div>
    <motion.div className="relative mx-auto w-full max-w-[430px]" style={{perspective:900}} onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();mx.set((e.clientX-r.left)/r.width-.5);my.set((e.clientY-r.top)/r.height-.5)}} onMouseLeave={()=>{mx.set(0);my.set(0)}} initial={{opacity:0,scale:.86}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.35}}>
      <motion.div style={{rotateX:rx,rotateY:ry,transformStyle:"preserve-3d"}} animate={{y:[0,-14,0]}} transition={{y:{duration:5,repeat:Infinity,ease:"easeInOut"}}} className="glass relative aspect-[4/5] overflow-hidden rounded-[2.5rem] p-3 shadow-glow">
        <Image src="/images/profile.png" alt="Muhib Mirza" fill priority className="object-cover p-3"/>
        <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-black/55 p-4 text-white backdrop-blur"><p className="text-[10px] uppercase tracking-[.2em] text-cyan-300">Currently building</p><p className="mt-1 font-display text-lg font-bold">Useful things for the web.</p></div>
      </motion.div><div className="absolute -right-5 -top-5 -z-10 h-28 w-28 rounded-full bg-accent opacity-30 blur-3xl"/><div className="absolute -bottom-8 -left-8 -z-10 h-36 w-36 rounded-full bg-accent2 opacity-25 blur-3xl"/></motion.div>
  </div></section>
}
