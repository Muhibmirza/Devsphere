import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const policies=[
 ["Privacy Policy","/privacy-policy"],
 ["Refund Policy","/refund-policy"],
 ["Service Policy","/service-policy"],
 ["Terms & Conditions","/terms-and-conditions"]
];
export default function Footer(){return <footer className="border-t border-[var(--glass-border)] py-10"><div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><Link href="/" className="font-display text-2xl font-bold">Muhib Mirza<span className="text-accent">.</span></Link><p className="mt-3 max-w-lg text-sm leading-6 text-muted">Full-Stack &amp; AI Development services for businesses, startups, and digital products.</p><div className="mt-5 flex flex-col gap-2 text-xs text-muted sm:flex-row sm:gap-5"><span className="flex items-center gap-2"><MapPin size={14}/>Karachi, Sindh, Pakistan</span><a className="flex items-center gap-2 hover:text-accent" href="tel:+923012588832"><Phone size={14}/>+92 301 2588832</a><a className="flex items-center gap-2 hover:text-accent" href="mailto:Muhibmirza58@gmail.com"><Mail size={14}/>Muhibmirza58@gmail.com</a></div></div><nav aria-label="Legal policies" className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs">{policies.map(([label,href])=><Link className="text-muted transition hover:text-accent" key={href} href={href}>{label}</Link>)}</nav></div><div className="container mt-8 border-t border-[var(--glass-border)] pt-6 text-xs text-muted">© {new Date().getFullYear()} Muhib Mirza. All rights reserved.</div></footer>}
