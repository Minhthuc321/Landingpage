import { Bot, BriefcaseBusiness, Building2, Clapperboard, Sparkles, Workflow } from "lucide-react";
import type { IconName } from "@/types";
const icons={bot:Bot,briefcase:BriefcaseBusiness,building:Building2,video:Clapperboard,sparkles:Sparkles,workflow:Workflow};
export function AppIcon({name,className=""}:{name:IconName;className?:string}){const Icon=icons[name];return <Icon className={className} aria-hidden/>}
