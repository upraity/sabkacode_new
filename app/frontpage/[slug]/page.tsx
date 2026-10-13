import Link from 'next/link';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import '@/app/frontpage/frontpage.css';
import {getCover} from '@/lib/frontpage/data';
import {Builder} from '@/components/frontpage/Builder';
export const dynamic='force-dynamic';
type P={params:Promise<{slug:string}>};
export async function generateMetadata({params}:P):Promise<Metadata>{const {slug}=await params;const c=await getCover(slug);return c?{title:`${c.title} Front Page Generator | SabkaCode`,description:`Generate a ${c.title} cover page online and save it as a PDF.`}:{title:'Front Page Generator'}}
export default async function FrontpageMaker({params}:P){
  const {slug}=await params;const cover=await getCover(slug);if(!cover)notFound();
  return <main className="fpw">
    <p><Link href="/frontpage">&larr; All covers</Link></p>
    <h1>{cover.title}</h1>
    <p className="fp-muted">{cover.subtitle}</p>
    <Builder cover={cover}/>
  </main>;
}
