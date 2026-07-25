"use client";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { SiAngular,SiExpress,SiJavascript,SiMongodb,SiMysql,SiNextdotjs,SiNodedotjs,SiPhp,SiReact,SiTailwindcss } from "react-icons/si";
import { Heading } from "./Section";

const skills=[
 ["JavaScript",SiJavascript,"#f7df1e"],["React.js",SiReact,"#61dafb"],["Next.js",SiNextdotjs,"currentColor"],
 ["Node.js",SiNodedotjs,"#5fa04e"],["Express.js",SiExpress,"currentColor"],["Angular",SiAngular,"#dd0031"],
 ["PHP",SiPhp,"#777bb4"],["MySQL",SiMysql,"#4479a1"],["MongoDB",SiMongodb,"#47a248"],
 ["Tailwind CSS",SiTailwindcss,"#06b6d4"],["AI / LLM",BrainCircuit,"#8066ff"]
] as const;

export default function SkillsWorld(){
 const loop=[...skills,...skills];
 return <section id="skills" className="section overflow-hidden"><div className="container">
  <Heading eyebrow="The toolkit" title={<>A world of <span className="accent-text">technology.</span></>} copy="The production stack behind modern web products, business systems, and AI-assisted workflows."/>
 </div>
 <div className="relative mt-16 overflow-hidden py-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
  <motion.div className="flex w-max gap-5 px-3" animate={{x:["0%","-50%"]}} transition={{duration:28,ease:"linear",repeat:Infinity}}>
   {loop.map(([name,Icon,color],i)=><div key={`${name}-${i}`} className="glass flex h-44 w-44 shrink-0 flex-col items-center justify-center rounded-[2rem] sm:h-52 sm:w-52">
    <Icon size={58} style={{color}}/><span className="mt-6 text-xs font-bold uppercase tracking-[.15em]">{name}</span>
   </div>)}
  </motion.div>
 </div>
 </section>
}
