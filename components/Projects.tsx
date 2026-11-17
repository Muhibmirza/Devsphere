"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Heading, Reveal } from "./Section";

const capabilities=["Bookings & manifests","Customer and carrier directory","Accounting & reports","Role-based administration","Audit logs","Mobile staff access"];

export default function Projects(){
  const x=useMotionValue(0),y=useMotionValue(0);
  const rx=useSpring(useTransform(y,[-.5,.5],[7,-7]));
  const ry=useSpring(useTransform(x,[-.5,.5],[-9,9]));
  return <section id="work" className="section overflow-hidden"><div className="container">
    <Heading eyebrow="Featured client work" title={<>Software that runs a <span className="accent-text">real business.</span></>} copy="Our current featured engagement: a purpose-built courier management platform for N.R Cargo Movers."/>
    <div className="mt-14 grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr]">
      <Reveal><div className="glass rounded-[2rem] p-7 sm:p-9"><div className="flex items-center gap-4"><Image src="/images/devsphere/nr-cargo-logo.png" alt="N.R Cargo Movers" width={76} height={76} className="rounded-2xl"/><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-accent2">Client 01</p><h3 className="mt-1 font-display text-2xl font-bold">N.R Cargo Movers</h3><p className="text-sm text-muted">Door to Door Service</p></div></div><h4 className="mt-9 font-display text-3xl font-bold leading-tight">Courier operations, brought into one clear system.</h4><p className="mt-5 text-sm leading-7 text-muted">DevSphere built a centralized courier management experience for handling bookings, manifests, customers, carriers, accounts, reports and administration from one responsive dashboard.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{capabilities.map(item=><span key={item} className="flex items-center gap-2 text-xs font-semibold"><CheckCircle2 size={16} className="text-accent2"/>{item}</span>)}</div><a className="btn btn-ghost mt-9" href="#contact">Build a system like this <ArrowUpRight size={15}/></a></div></Reveal>
      <motion.div className="relative py-10" style={{perspective:1200}} onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();x.set((e.clientX-r.left)/r.width-.5);y.set((e.clientY-r.top)/r.height-.5)}} onMouseLeave={()=>{x.set(0);y.set(0)}}>
        <div className="absolute inset-[12%] -z-10 rounded-full bg-accent/30 blur-[90px]"/>
        <motion.div style={{rotateX:rx,rotateY:ry,transformStyle:"preserve-3d"}} initial={{opacity:0,y:60,rotateX:10}} whileInView={{opacity:1,y:0,rotateX:0}} viewport={{once:true}} transition={{duration:.9,ease:[.22,1,.36,1]}} className="relative rounded-[1.4rem] border border-white/15 bg-[#101226] p-2 shadow-[0_45px_100px_rgba(0,0,0,.45)]">
          <div className="flex h-8 items-center gap-1.5 px-3"><span className="h-2.5 w-2.5 rounded-full bg-red-400/80"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"/><span className="ml-3 text-[9px] uppercase tracking-[.22em] text-white/40">DevSphere / Operations Console</span></div>
          <div className="relative aspect-[1.86/1] overflow-hidden rounded-xl"><Image src="/images/devsphere/nr-cargo-dashboard.png" alt="N.R Cargo Movers courier management dashboard built by DevSphere" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover"/></div>
        </motion.div>
        <div className="mx-auto h-5 w-[74%] rounded-b-[2rem] bg-gradient-to-b from-slate-500 to-slate-800 shadow-xl"/><div className="mx-auto h-2 w-[38%] rounded-b-full bg-slate-900/60"/>
      </motion.div>
    </div>
    <Reveal className="mt-20"><div className="rounded-[2rem] border border-[var(--glass-border)] bg-gradient-to-br from-[color:var(--accent)]/15 to-[color:var(--accent-secondary)]/5 p-8 sm:p-12"><p className="section-label">Beyond the case study</p><div className="grid gap-7 lg:grid-cols-[1fr_.8fr] lg:items-end"><h3 className="font-display text-3xl font-bold leading-tight sm:text-5xl">The same product thinking, applied to your POS, ERP, website or mobile idea.</h3><p className="text-sm leading-7 text-muted">Every business works differently. We shape the interface, data and workflows around the way yours actually operates—not around a generic template.</p></div></div></Reveal>
  </div></section>
}
