'use client';
import {useEffect,useMemo,useRef,useState} from 'react';
import '@/app/frontpage/frontpage.css';
import {CoverPage} from './Cover';
import type {Cover,CoverValues} from '@/lib/frontpage/types';

const DESIGNATIONS=['Director','Asso. Professor','Professor','Asst. Professor'];
const DOC_TYPES=['Assignment','Practical File','Project File','Lab File','Notes'];
const SEMS:string[]=(()=>{const a:string[]=[];const add=(p:string,n:number)=>{const r=['I','II','III','IV','V','VI','VII','VIII','IX','X'];for(let i=0;i<n;i++)a.push(`${p}-${r[i]} Sem`)};
add('MBA',4);add('MCA',4);add('MBA (Int.)',10);add('MCA (Int.)',10);add('BBA',6);add('BCA',6);return a})();

const EMPTY:CoverValues={name:'',teacher:'',subject:'',subjectCode:'',session:'',department:'',semester:'',batch:'',rollNo:'',city:'',docType:'Assignment',fatherName:'',className:'',label:'Mini Project-I (BMB152)',topic:'',designation:'',collegeName:'',border:false};
const SAMPLE:Partial<CoverValues>={collegeName:'Your College Name',name:'Your Name',teacher:'Teacher Name',subject:'Subject Name',session:'2025-26',semester:'Semester',department:'Department',topic:'Project Topic',fatherName:'Father Name',className:'Class'};
const REQUIRED:Record<Cover['template'],(keyof CoverValues)[]>={
  standard:['name','teacher','subject','session','semester','docType'],
  project:['name','teacher','topic','session','department','semester','designation'],
  agra:['name','fatherName','teacher','subject','session','className']};

export function Builder({cover}:{cover:Cover}){
  const [v,setV]=useState<CoverValues>({...EMPTY,city:cover.city||'',docType:cover.template==='standard'?'Assignment':''});
  const set=(k:keyof CoverValues,val:string|boolean)=>setV(p=>({...p,[k]:val}));
  const wrap=useRef<HTMLDivElement>(null);const [scale,setScale]=useState(1);
  useEffect(()=>{const el=wrap.current;if(!el)return;const f=()=>setScale(Math.min(1,el.clientWidth/794));f();const ro=new ResizeObserver(f);ro.observe(el);return()=>ro.disconnect()},[]);
  const needCollege=!cover.college_name;
  const req=[...REQUIRED[cover.template],...(needCollege?['collegeName' as const]:[])];
  const needDept=cover.template==='standard'&&cover.departments.length>0;
  const missing=useMemo(()=>[...req,...(needDept?['department' as const]:[])].filter(k=>!String(v[k]||'').trim()),[v,req,needDept]);
  const shown=useMemo(()=>{const o={...v};(Object.keys(SAMPLE) as (keyof CoverValues)[]).forEach(k=>{if(!String(o[k]||'').trim()&&(req.includes(k)||k==='department'))(o as Record<string,unknown>)[k]=SAMPLE[k]});return o},[v,req]);
  const text=(k:keyof CoverValues,label:string,ph?:string)=><><label>{label}</label><input type="text" value={String(v[k])} placeholder={ph} maxLength={120} onChange={e=>set(k,e.target.value)}/></>;
  const select=(k:keyof CoverValues,label:string,opts:string[],ph='Select')=><><label>{label}</label><select value={String(v[k])} onChange={e=>set(k,e.target.value)}><option value="">{ph}</option>{opts.map(o=><option key={o} value={o}>{o}</option>)}</select></>;
  function print(){
    fetch('/api/frontpage',{method:'POST',headers:{'Content-Type':'application/json'},keepalive:true,body:JSON.stringify({slug:cover.slug,data:{...v,border:v.border?'1':'0'}})}).catch(()=>{});
    window.print();
  }
  return <div className="fp-layout">
    <form className="fp-form" onSubmit={e=>e.preventDefault()}>
      {needCollege&&text('collegeName','College name','Full college name')}
      {cover.template==='project'&&text('label','Project label','Mini Project-I (BMB152)')}
      {cover.template==='project'&&text('topic','Project topic','Title of your project')}
      {text('name',cover.template==='agra'?'Student name (Submitted By)':'Your name','Full name')}
      {cover.template==='agra'&&text('fatherName',"Father's name")}
      {text('teacher',cover.template==='project'?'Guide / teacher name':'Teacher name (Submitted To)','Teacher name')}
      {cover.template==='project'&&select('designation','Designation',DESIGNATIONS)}
      {cover.template!=='project'&&text('subject','Subject','e.g. Data Structures')}
      {cover.template==='standard'&&text('subjectCode','Subject code (optional)','e.g. BCA-201')}
      {text('session',cover.template==='project'?'Batch / session':'Session','e.g. 2025-26')}
      {cover.template==='standard'&&needDept&&select('department','Department',cover.departments)}
      {cover.template==='standard'&&!needDept&&text('department','Department (optional)','e.g. Computer Science')}
      {cover.template==='project'&&select('department','Degree',cover.departments)}
      {cover.template==='standard'&&text('semester','Class / semester','e.g. BCA 2nd Semester')}
      {cover.template==='project'&&select('semester','Semester',SEMS)}
      {cover.template==='agra'&&text('className','Class','e.g. BA 1st Semester')}
      {cover.template==='standard'&&select('docType','Document type',DOC_TYPES,'Select type')}
      {cover.template==='standard'&&text('batch','Batch (optional)')}
      {cover.template==='standard'&&text('city','City',cover.city||'')}
      {text('rollNo','Roll no. (optional)')}
      <label className="fp-check"><input type="checkbox" checked={v.border} onChange={e=>set('border',e.target.checked)}/> Add page border</label>
      <button type="button" className="fp-btn" disabled={missing.length>0} onClick={print}>Print / Save as PDF</button>
      {missing.length>0
        ?<p className="fp-hint">Fill the required fields to enable download.</p>
        :<p className="fp-hint">In the print window choose <b>Save as PDF</b>, set Margins to <b>None</b> and turn off Headers and footers.</p>}
    </form>
    <div ref={wrap} style={{minWidth:0}}>
      <div className="fp-stage" style={{width:794*scale,height:1123*scale}}>
        <div className="fp-scale" style={{transform:`scale(${scale})`}}><CoverPage cover={cover} v={shown}/></div>
      </div>
    </div>
  </div>;
}
