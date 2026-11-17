"use client";
import { AppWindow, Boxes, Code2, Database, MonitorSmartphone, ShoppingCart } from "lucide-react";
import { Heading, Reveal } from "./Section";

const services=[
 ["websites","Websites & Web Apps",Code2,"Fast, responsive marketing sites, portals and full-stack web applications shaped around your goals."],
 ["mobile","Mobile Experiences",MonitorSmartphone,"Polished mobile-first products and application interfaces with clear, intuitive user journeys."],
 ["pos","POS & Retail Systems",AppWindow,"Purpose-built billing, inventory, sales and reporting systems for day-to-day retail operations."],
 ["erp","ERP & Operations Software",Boxes,"Connected tools for bookings, logistics, finance, staff and workflows—without spreadsheet chaos."],
 ["commerce","E-Commerce Platforms",ShoppingCart,"Online storefronts with product management, checkout, local payments and order administration."],
 ["backend","Custom Software & APIs",Database,"Secure databases, integrations, automations and backend architecture built to fit your business."]
] as const;
export default function Services(){return <section id="services" className="section"><div className="container"><Heading eyebrow="What we build" title={<>One studio. Every <span className="accent-text">digital layer.</span></>} copy="From the first customer touchpoint to the software your team uses every day, DevSphere builds complete, dependable digital products."/><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(([id,title,Icon,description],i)=><Reveal key={id} delay={(i%3)*.06}><article id={`service-${id}`} className="glass group flex min-h-72 scroll-mt-28 flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-[color:var(--accent)]"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--accent)] text-white shadow-glow"><Icon size={23}/></div><span className="mt-10 text-[10px] font-bold uppercase tracking-[.18em] text-accent2">Capability {String(i+1).padStart(2,"0")}</span><h3 className="mt-3 font-display text-xl font-bold leading-tight">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{description}</p></article></Reveal>)}</div></div></section>}
