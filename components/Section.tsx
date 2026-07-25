"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const reveal = { hidden:{opacity:0,y:30}, show:{opacity:1,y:0,transition:{duration:.65,ease:[.22,1,.36,1]}} };
export function Reveal({children,className="",delay=0}:{children:ReactNode;className?:string;delay?:number}) {
  return <motion.div className={className} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true,margin:"-70px"}} transition={{delay}}>{children}</motion.div>;
}
export function Heading({eyebrow,title,copy}:{eyebrow:string;title:ReactNode;copy?:string}) {
  return <Reveal><p className="section-label">{eyebrow}</p><h2 className="section-title">{title}</h2>{copy&&<p className="section-copy">{copy}</p>}</Reveal>;
}
