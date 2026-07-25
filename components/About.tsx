"use client";
import { motion } from "framer-motion";
import { BrainCircuit, Code2, Network, PanelsTopLeft, type LucideIcon } from "lucide-react";
import { Heading, Reveal } from "./Section";
const groups: [string, LucideIcon, string[]][]=[
 ["Languages & Frameworks",Code2,["JavaScript","React.js","Next.js","Node.js","Express.js","Angular","PHP (OOP/MVC)","MySQL","MongoDB / MERN"]],
 ["AI-Assisted Development",BrainCircuit,["Prompt engineering","Spec-to-code workflows","AI-assisted debugging","Iterative refactoring"]],
 ["Architecture & Practices",PanelsTopLeft,["MVC patterns","RESTful APIs","LMS / ERP systems","Admin dashboards","Responsive UI"]],
 ["IT & Infrastructure",Network,["Network topology","Kerio Control","Backup & recovery","System administration"]]
];
export default function About(){return <section id="about" className="section"><div className="container"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><Heading eyebrow="About me" title={<>Developer at the <span className="accent-text">intersection.</span></>} copy="Full-stack developer with 4+ years of experience building production applications, ERP systems, LMS platforms, and e-commerce solutions. I use detailed technical prompting and iterative AI refinement to accelerate delivery without compromising code quality — while also managing infrastructure, security, and resilient backup systems."/><div className="grid gap-4 sm:grid-cols-2">{groups.map(([title,Icon,tags],i)=><Reveal delay={i*.08} key={title} className="glass rounded-3xl p-6"><Icon className="mb-8 text-accent" size={25}/><h3 className="font-display text-lg font-bold">{title}</h3><div className="mt-4 flex flex-wrap gap-2">{tags.map(t=><motion.span initial={{opacity:0,scale:.85}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} key={t} className="rounded-full border border-[var(--glass-border)] px-3 py-1.5 text-[11px] text-muted">{t}</motion.span>)}</div></Reveal>)}</div></div></div></section>}
