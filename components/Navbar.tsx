"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const links=["Services","About","Experience","Projects","Contact"];
export default function Navbar(){
  const [dark,setDark]=useState(true); const [open,setOpen]=useState(false);
  useEffect(()=>{const saved=localStorage.getItem("theme");const isDark=saved?saved==="dark":true;setDark(isDark);document.documentElement.dataset.theme=isDark?"dark":"light"},[]);
  const toggle=()=>{const n=!dark;setDark(n);document.documentElement.dataset.theme=n?"dark":"light";localStorage.setItem("theme",n?"dark":"light")};
  return <header className="fixed top-0 z-50 w-full px-4 pt-4"><nav className="glass mx-auto flex max-w-[1180px] items-center justify-between rounded-full px-5 py-3">
    <a href="/#home" className="font-display text-lg font-bold tracking-[-.06em]">MM<span className="text-accent">.</span></a>
    <div className="hidden items-center gap-6 md:flex">{links.map(x=><a key={x} className="text-xs font-semibold text-muted transition hover:text-fg" href={`/#${x.toLowerCase()}`}>{x}</a>)}</div>
    <div className="flex items-center gap-2"><button onClick={toggle} aria-label="Toggle theme" className="relative grid h-9 w-9 place-items-center rounded-full border border-[var(--glass-border)]">
      <AnimatePresence mode="wait" initial={false}>{dark?<motion.span key="sun" initial={{scale:0,rotate:-90}} animate={{scale:1,rotate:0}} exit={{scale:0,rotate:90}}><Sun size={16}/></motion.span>:<motion.span key="moon" initial={{scale:0,rotate:-90}} animate={{scale:1,rotate:0}} exit={{scale:0,rotate:90}}><Moon size={16}/></motion.span>}</AnimatePresence>
    </button><button className="grid h-9 w-9 place-items-center md:hidden" onClick={()=>setOpen(!open)}>{open?<X size={19}/>:<Menu size={19}/>}</button></div>
  </nav>{open&&<motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} className="glass mx-auto mt-2 flex max-w-[1180px] flex-col rounded-3xl p-5 md:hidden">{links.map(x=><a onClick={()=>setOpen(false)} className="py-3 font-semibold" key={x} href={`/#${x.toLowerCase()}`}>{x}</a>)}</motion.div>}</header>
}
