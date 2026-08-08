"use client";
import { ArrowUpRight } from "lucide-react"; import { trackCta } from "@/lib/analytics";
export function ButtonLink({href,children,location,secondary=false}:{href:string;children:React.ReactNode;location:string;secondary?:boolean}){return <a href={href} onClick={()=>trackCta(location,String(children))} className={`button ${secondary?"button-secondary":""}`}>{children}<ArrowUpRight size={17}/></a>}
