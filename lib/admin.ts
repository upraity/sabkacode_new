import {cookies} from 'next/headers';import {createHmac,timingSafeEqual} from 'crypto';
const C='sc_admin',S=()=>process.env.ADMIN_SESSION_SECRET!;const sign=(v:string)=>createHmac('sha256',S()).update(v).digest('hex');
export const token=(email:string)=>{const v=`${email}|${Date.now()}`;return `${v}.${sign(v)}`};
const MAX_AGE_MS=1000*60*60*24; // 24h — tokens never expired before this, so a leaked/old cookie stayed valid forever
export const valid=(t?:string)=>{if(!t||!S())return false;const [v,s]=t.split('.');if(!v||!s)return false;try{if(!timingSafeEqual(Buffer.from(s),Buffer.from(sign(v))))return false;const ts=Number(v.split('|')[1]);return Boolean(ts)&&Date.now()-ts<MAX_AGE_MS}catch{return false}};
export const isAdmin=async()=>valid((await cookies()).get(C)?.value);export const cookieName=C;
