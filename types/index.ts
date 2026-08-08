export type IconName = "briefcase"|"bot"|"video"|"workflow"|"sparkles"|"building";
export interface Service { title:string; description:string; icon:IconName }
export interface Course { title:string; description:string; audience:string; lessons:string[]; icon:IconName }
export interface VideoItem { title:string; views:string; gradient:string }
export interface UtmData { utm_source?:string; utm_medium?:string; utm_campaign?:string; utm_content?:string }
