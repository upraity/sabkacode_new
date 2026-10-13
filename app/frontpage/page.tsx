import Link from 'next/link';
import type {Metadata} from 'next';
import '@/app/frontpage/frontpage.css';
import {getCovers} from '@/lib/frontpage/data';
export const dynamic='force-dynamic';
export const metadata:Metadata={title:'Assignment Front Page Generator — Free College Cover Pages | SabkaCode',description:'Create a clean college assignment, practical file or mini project cover page in seconds and save it as a PDF. Free, no signup.'};
const TAG={standard:'Assignment / Practical file',project:'Project report',agra:'Decorative cover'} as const;
export default async function FrontpageHome(){
  const covers=await getCovers();
  return <main className="fpw">
    <h1>Assignment Front Page Generator</h1>
    <p className="fp-muted">Pick your college, fill the details, check the live preview and save the cover page as a PDF. It is free and needs no signup.</p>
    <div className="fp-grid">
      {covers.map(c=><Link key={c.slug} href={`/frontpage/${c.slug}`} className="fp-card"><b>{c.title}</b><span>{c.subtitle}</span><div className="fp-tag">{TAG[c.template]}</div></Link>)}
    </div>
    <h2>How it works</h2>
    <ol><li>Choose your college or cover type above.</li><li>Fill in your name, subject, session, department and teacher name.</li><li>Check the live preview. Optionally add a page border.</li><li>Press <b>Print / Save as PDF</b>, then choose <b>Save as PDF</b> in the print window.</li></ol>
    <h2>Tips for a clean print</h2>
    <ul><li>Set paper size to <b>A4</b> and margins to <b>None</b>.</li><li>Turn off <b>Headers and footers</b> in the print dialog.</li><li>Enable <b>Background graphics</b> if your cover uses a decorative background.</li><li>Use Chrome or Edge on a laptop for the most accurate PDF.</li></ul>
    <h2>Need your college added?</h2>
    <p>Cover layouts are stored in a database, so a new college or department list can be added without changing the tool. Contact the site admin with your college name and cover format.</p>
  </main>;
}
