import {supabaseAdmin} from '@/lib/supabase';
import {DEFAULT_COVERS} from './defaults';
import type {Cover} from './types';
// Reads cover options from Supabase (fp_covers). Falls back to built-in defaults if the
// table is missing/empty or Supabase errors, so the tool keeps working either way.
export async function getCovers():Promise<Cover[]>{
  try{
    const {data,error}=await supabaseAdmin.from('fp_covers').select('*').eq('active',true).order('sort_order',{ascending:true});
    if(error||!data||data.length===0)return DEFAULT_COVERS;
    return data as Cover[];
  }catch{return DEFAULT_COVERS}
}
export async function getCover(slug:string):Promise<Cover|undefined>{
  return (await getCovers()).find(c=>c.slug===slug);
}
