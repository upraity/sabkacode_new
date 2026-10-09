'use client';
import {use,useState} from 'react';
// Entry point for the "Buy" button on your main SabkaCode site. Link to
// this page as `{PAYMENT_APP_URL}/buy/{project-slug}` — it collects the
// buyer's name/email, creates the order with a same-origin call to
// /api/orders (no CORS setup needed), then sends them to /pay/[id].
export default function Buy({params}:{params:Promise<{slug:string}>}){const {slug}=use(params);
const [v,setV]=useState({name:'',email:''});const [msg,setMsg]=useState('');const [loading,setLoading]=useState(false);
async function submit(e:React.FormEvent){e.preventDefault();setLoading(true);setMsg('');
try{
  const r=await fetch('/api/orders',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({slug,customerName:v.name,customerEmail:v.email})});
  const d=await r.json();
  if(!r.ok)throw new Error(d.error||'Could not start order');
  window.location.href=`/pay/${d.order.id}`;
}catch(err:any){setMsg(err.message||'Something went wrong');setLoading(false);}
}
return <main className="wrap"><div className="card">
  <h1>Buy This Project</h1>
  <p>Enter your details to generate a UPI payment QR code for this project.</p>
  <form onSubmit={submit}>
    <label>Your Name</label>
    <input required value={v.name} onChange={e=>setV({...v,name:e.target.value})}/>
    <label>Email</label>
    <input type="email" required value={v.email} onChange={e=>setV({...v,email:e.target.value})}/>
    <br/><br/>
    <button disabled={loading}>{loading?'Starting order...':'Continue to Payment'}</button>
  </form>
  {msg&&<p className="error">{msg}</p>}
</div></main>;
}
