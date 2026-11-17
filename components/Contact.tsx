"use client";
import { AnimatePresence,motion } from "framer-motion";
import { Check,Github,Linkedin,LoaderCircle,Mail,Phone,Send } from "lucide-react";
import { FormEvent,useState } from "react";
import { Heading } from "./Section";

export default function Contact(){
 const [status,setStatus]=useState<"idle"|"loading"|"success"|"error">("idle");
 const [feedback,setFeedback]=useState("");
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();const form=e.currentTarget;setStatus("loading");setFeedback("");
  const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),15000);
  try{
   const body={...Object.fromEntries(new FormData(form)),_subject:"New DevSphere project inquiry",_template:"table",_honey:""};
   const response=await fetch("https://formsubmit.co/ajax/muhibmirza58@gmail.com",{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify(body),signal:controller.signal});
   const data=await response.json().catch(()=>({}));
   if(!response.ok)throw new Error(data.error||"Unable to send your message.");
   setStatus("success");setFeedback("Message sent! DevSphere will get back to you soon.");form.reset();
  }catch(error){
   setStatus("error");
   setFeedback(error instanceof DOMException&&error.name==="AbortError"?"Request timed out. Please try again.":error instanceof Error?error.message:"Unable to send your message.");
  }finally{clearTimeout(timeout)}
 }
 const links=[
  [Mail,"mailto:Muhibmirza58@gmail.com","Muhibmirza58@gmail.com"],
  [Phone,"tel:+923012588832","+92 301 2588832"],
  [Github,"https://github.com/Muhibmirza","GitHub"],
  [Linkedin,"https://www.linkedin.com/in/muhib-mirza","LinkedIn"]
 ] as const;
 return <section id="contact" className="section pb-8"><div className="container">
  <div className="glass overflow-hidden rounded-[2.2rem] p-5 sm:p-10 lg:p-14"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
   <div><Heading eyebrow="Start a project" title={<>Let’s build your <span className="accent-text">next system.</span></>} copy="Tell us what your business needs—whether it’s a new website, mobile product, POS, ERP or custom workflow."/>
    <div className="mt-9 space-y-4 break-words text-sm">{links.map(([Icon,href,label])=><a key={label} className="flex items-center gap-3 text-muted hover:text-accent" href={href} target={href.startsWith("http")?"_blank":undefined} rel="noreferrer"><Icon className="shrink-0" size={17}/>{label}</a>)}</div>
   </div>
   <form onSubmit={submit} className="min-w-0 space-y-4">
    {[["name","Name","Your name"],["email","Email","you@company.com"]].map(x=><label className="block text-xs font-bold uppercase tracking-[.12em]" key={x[0]}>{x[1]}<input required type={x[0]==="email"?"email":"text"} name={x[0]} placeholder={x[2]} className="mt-2 w-full rounded-2xl border border-[var(--glass-border)] bg-transparent p-4 text-base font-normal normal-case tracking-normal outline-none transition focus:border-accent"/></label>)}
    <label className="block text-xs font-bold uppercase tracking-[.12em]">Project details<textarea required name="message" placeholder="What would you like DevSphere to build?" rows={6} className="mt-2 w-full resize-none rounded-2xl border border-[var(--glass-border)] bg-transparent p-4 text-base font-normal normal-case tracking-normal outline-none transition focus:border-accent"/></label>
    <button disabled={status==="loading"} className="btn btn-primary min-w-44 disabled:opacity-60">{status==="loading"?<><LoaderCircle className="animate-spin" size={17}/>Sending...</>:status==="success"?<><Check size={17}/>Message sent!</>:<>Send message <Send size={16}/></>}</button>
    <AnimatePresence>{status!=="idle"&&status!=="loading"&&feedback&&<motion.p role="status" initial={{opacity:0,y:-5}} animate={{opacity:1,y:0}} className={`text-sm ${status==="success"?"text-emerald-400":"text-red-400"}`}>{feedback}</motion.p>}</AnimatePresence>
   </form>
  </div></div>
 </div></section>
}
