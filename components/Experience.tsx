"use client";
import { motion } from "framer-motion";
import { Heading } from "./Section";
const jobs=[
 ["2024 — 2026","Web Developer & IT Manager","Amna Ashraf Apparels","Lead IT infrastructure, networks and automated backups for servers, storage and ERP software. Deliver internal web apps with AI-assisted coding workflows."],
 ["Current","Software Developer","Viralage","Build and maintain web application features as part of the core development team."],
 ["Current","Web App Developer","We Are You Studio · Remote","Develop full-stack web application features remotely for client projects."],
 ["Current","Web App Developer","Progenix · Remote","Develop and maintain web applications as part of a distributed team."],
 ["2023 — 2024","Backend Developer (PHP)","Elixir Company","Developed PHP and MySQL backend systems and built, optimized RESTful APIs."],
 ["2021 — 2023","Software Developer","SYSBORG","Contributed to frontend and backend modules; assisted with IT management and system implementation."]
];
export default function Experience(){return <section id="experience" className="section"><div className="container"><Heading eyebrow="Experience" title={<>Four years. <span className="accent-text">Real systems.</span></>}/><div className="relative mt-16"><motion.div initial={{scaleY:0}} whileInView={{scaleY:1}} viewport={{once:true}} transition={{duration:1.4}} className="absolute bottom-0 left-3 top-0 w-px origin-top bg-gradient-to-b from-accent via-accent2 to-transparent md:left-1/2"/>
{jobs.map((j,i)=><motion.article key={j[1]} initial={{opacity:0,x:i%2?-45:45}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:"-80px"}} transition={{delay:i*.06}} className={`relative mb-7 pl-11 md:w-1/2 ${i%2?"md:ml-auto md:pl-12":"md:pr-12 md:text-right"}`}><span className={`absolute top-8 h-3 w-3 rounded-full bg-accent shadow-glow ${i%2?"left-[6px] md:-left-[6px]":"left-[6px] md:-right-[6px]"}`}/><div className="glass rounded-3xl p-6"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-accent2">{j[0]}</p><h3 className="mt-2 font-display text-xl font-bold">{j[1]}</h3><p className="mt-1 text-sm font-semibold text-accent">{j[2]}</p><p className="mt-4 text-sm leading-6 text-muted">{j[3]}</p></div></motion.article>)}</div></div></section>}
