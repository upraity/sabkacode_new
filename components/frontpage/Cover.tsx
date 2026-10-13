import type {Cover,CoverValues} from '@/lib/frontpage/types';
// Pure presentational A4 cover (210mm x 297mm). Same markup is used for the live preview and for printing.
export function CoverPage({cover,v}:{cover:Cover;v:CoverValues}){
  const city=v.city||cover.city||'';
  const frame=v.border?' fp-bordered':'';
  if(cover.template==='agra'){
    return <div className={`fp-page fp-agra${frame}`} style={{backgroundImage:`url(${cover.background_url||'/agra-bg.png'})`}}>
      <div className="a-session">SESSION: {v.session}</div>
      <div className="a-subject">{v.subject}</div>
      <div className="a-rows">
        <div><b>SUBMITTED BY</b><span>:</span><em>{v.name}</em></div>
        <div><b>FATHER NAME</b><span>:</span><em>{v.fatherName}</em></div>
        <div><b>SUBMITTED TO</b><span>:</span><em>{v.teacher}</em></div>
        <div><b>CLASS</b><span>:</span><em>{v.className}</em></div>
        {v.rollNo&&<div><b>ROLL NO.</b><span>:</span><em>{v.rollNo}</em></div>}
      </div>
    </div>;
  }
  if(cover.template==='project'){
    return <div className={`fp-page fp-project${frame}`}>
      <div className="p-head">
        <div className="p-label">{v.label}</div>
        <div className="p-title">PROJECT REPORT</div>
        <div className="p-on">ON</div>
        <div className="p-topic">&ldquo;{v.topic}&rdquo;</div>
        <div className="p-univ">Submitted To {cover.university_line}<br/>In The Partial Fulfilment of The Requirement For The Award of Degree of</div>
        <div className="p-degree">{v.department}</div>
      </div>
      <img className="fp-logo" src={cover.logo_url} alt="College logo" width={250}/>
      <div className="p-cols">
        <div><u><b>Submitted By</b></u><b>:-</b>
          <p>{v.name}</p><p>{v.semester}</p><p>Batch: {v.session}</p>{v.rollNo&&<p>Roll No.: {v.rollNo}</p>}</div>
        <div><u><b>Under The Guidance of</b></u><b>:-</b>
          <p>{v.teacher}</p>{v.designation&&<p>({v.designation})</p>}<p>{cover.short_name}</p></div>
      </div>
      <div className="p-foot"><div className="p-college">{cover.college_name}</div><div className="p-addr">{cover.address_line}</div></div>
    </div>;
  }
  const dept=v.department?(v.department.startsWith('Department')?v.department:`${v.department} Department`):'';
  return <div className={`fp-page fp-standard${frame}`}>
    <div className="s-top"><div className="s-college">{v.collegeName||cover.college_name}</div><div className="s-city">{city}</div>{dept&&<div className="s-dept">{dept}</div>}</div>
    {cover.logo_url?<img className="fp-logo" src={cover.logo_url} alt="College logo" width={250}/>:<div/>}
    <div className="s-mid">
      <div className="s-session">Session: {v.session}</div>
      <div className="s-doc">{v.docType}</div>
      <div className="s-subject">{v.subject}</div>
      {v.subjectCode&&<div className="s-subject">({v.subjectCode})</div>}
      <div className="s-sem">{v.semester}</div>
      {v.batch&&<div className="s-batch">{v.batch}</div>}
    </div>
    <div className="s-cols">
      <div><u><b>Submitted By</b></u><b>:-</b><p>{v.name}</p>{v.rollNo&&<p><b>Roll No.:</b> {v.rollNo}</p>}</div>
      <div><u><b>Submitted To</b></u><b>:-</b><p>{v.teacher}</p></div>
    </div>
  </div>;
}
