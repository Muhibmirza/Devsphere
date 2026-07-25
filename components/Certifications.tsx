"use client";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Heading, Reveal } from "./Section";
const certs=[
 ["/images/aptech-logo.png","Higher Diploma in Software Engineering (HDSE)","Aptech Pakistan","Diploma covering software engineering fundamentals, full-stack development, and database design."],
 ["/images/aaapparels-logo.png","IT Infrastructure Certificate","Amna Ashraf Apparels","Awarded for leading IT infrastructure, network management, and automated backup systems for company servers, file storage, and ERP software."],
 ["/images/sysborg-logo.png","Next.js Developer Certificate","SYSBORG","Awarded for contributions to frontend & backend modules and Next.js development work during tenure (2021–2023)."],
 ["/images/elixir-logo.png","PHP Backend Developer Certificate","Elixir Company","Awarded for developing backend systems using PHP & MySQL and building/optimizing RESTful APIs (2023–2024)."]
];
export default function Certifications(){return <section className="section"><div className="container"><Heading eyebrow="Certifications" title={<>Proof of <span className="accent-text">practice.</span></>}/><div className="mt-12 grid gap-4 sm:grid-cols-2">{certs.map((c,i)=><Reveal key={c[1]} delay={i*.07}><article className="glass group h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-[color:var(--accent)]"><div className="flex items-start justify-between"><div className="relative h-16 w-28 overflow-hidden rounded-xl bg-white"><Image src={c[0]} alt={`${c[2]} logo`} fill className="object-contain p-2"/></div><BadgeCheck className="text-accent"/></div><h3 className="mt-7 font-display text-xl font-bold">{c[1]}</h3><p className="mt-2 text-xs font-bold uppercase tracking-[.14em] text-accent2">{c[2]}</p><p className="mt-4 text-sm leading-6 text-muted">{c[3]}</p></article></Reveal>)}</div></div></section>}
