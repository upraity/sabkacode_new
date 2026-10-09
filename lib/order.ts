import {randomBytes} from 'crypto';
export const orderNumber=()=>`SC-${new Date().getFullYear()}-${randomBytes(4).toString('hex').toUpperCase()}`;
export const safeFileExt=(n:string)=>{const e=n.toLowerCase().split('.').pop()||'';return ['jpg','jpeg','png','webp','pdf'].includes(e)?e:''}
