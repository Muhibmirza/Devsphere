"use client";
import { Heading, Reveal } from "./Section";

const steps=[
  ["01","Discover","We learn the problem, users and operational reality before defining the right product."],
  ["02","Design","We turn the plan into a clear interface and validate how every important journey should work."],
  ["03","Build","We engineer the product in focused milestones, keeping progress visible and decisions practical."],
  ["04","Launch & evolve","We deploy, support and improve the product as your business and users grow."]
];

export default function Process(){return <section id="process" className="section overflow-hidden"><div className="container"><Heading eyebrow="How we work" title={<>Clarity at every <span className="accent-text">stage.</span></>} copy="A direct, collaborative process designed to turn complex requirements into software people can actually use."/><div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-border)] md:grid-cols-4">{steps.map(([n,title,copy],i)=><Reveal key={n} delay={i*.07} className="h-full"><article className="h-full bg-[color:var(--background)] p-7 sm:p-8"><span className="font-display text-4xl font-bold text-accent">{n}</span><h3 className="mt-12 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{copy}</p></article></Reveal>)}</div></div></section>}
