"use client";
import { GraduationCap } from "lucide-react";
import { Heading, Reveal } from "./Section";
const items=[["BS Computer Science (In Progress)","Virtual University of Pakistan","Expected 2030"],["Diploma","Aptech Learning Pakistan","Aug 2022 — Aug 2025"],["Intermediate","Govt. Degree Boys College 7-D","June 2023 — August 2025"]];
export default function Education(){return <section className="section"><div className="container"><Heading eyebrow="Education" title="Built on strong foundations."/><div className="mt-12 grid gap-4 md:grid-cols-3">{items.map((x,i)=><Reveal delay={i*.08} key={x[0]} className="glass rounded-3xl p-7"><GraduationCap className="text-accent"/><h3 className="mt-8 font-display text-xl font-bold">{x[0]}</h3><p className="mt-2 text-sm text-muted">{x[1]}</p><p className="mt-5 text-xs font-bold uppercase tracking-[.15em] text-accent2">{x[2]}</p></Reveal>)}</div></div></section>}
