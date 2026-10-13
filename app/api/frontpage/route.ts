import {NextResponse} from 'next/server';
import {supabaseAdmin} from '@/lib/supabase';
// Optional usage log: stores what was generated (no emails/phones are collected by this tool).
// Never blocks the user — the page works even if this fails.
export async function POST(req:Request){
  try{
    const b=await req.json();
    const slug=typeof b?.slug==='string'?b.slug.slice(0,60):'';
    if(!slug||typeof b.data!=='object'||b.data===null)return NextResponse.json({error:'Bad request'},{status:400});
    const clean:Record<string,string>={};
    for(const [k,v] of Object.entries(b.data as Record<string,unknown>)){
      if(Object.keys(clean).length>=20)break;
      if(typeof v==='string')clean[k.slice(0,30)]=v.slice(0,200);
    }
    const {error}=await supabaseAdmin.from('fp_submissions').insert({cover_slug:slug,data:clean});
    if(error)throw error;
    return NextResponse.json({ok:true});
  }catch(e){console.error(e);return NextResponse.json({error:'Server error'},{status:500})}
}
