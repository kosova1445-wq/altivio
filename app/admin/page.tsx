"use client";
import { useState } from "react";

const sections = [
  ["Ballina","Titulli, përshkrimi, CTA dhe elementet kryesore"],
  ["Shërbimet","Emrat, përshkrimet dhe renditja e shërbimeve"],
  ["Projektet","Portfolio, case studies dhe rezultatet"],
  ["Çmimet","Paketat, çmimet dhe përfitimet"],
  ["FAQ","Pyetjet dhe përgjigjet"],
  ["Kontakt","E-mail, telefon, formular dhe CTA"],
  ["Gjuhët","SQ, FR, EN dhe DE"],
  ["SEO","Meta title, description dhe Open Graph"],
];

export default function AdminPage(){
  const [active,setActive] = useState("Ballina");
  return <main className="adminShell">
    <aside className="adminSide">
      <a className="adminLogo" href="/"><span className="brandMark"><span className="brandPeak"></span><span className="brandCut"></span></span><span>ALTIVIO<small>Admin Center</small></span></a>
      <nav>{sections.map(([name])=><button key={name} className={active===name?"active":""} onClick={()=>setActive(name)}>{name}</button>)}</nav>
      <a className="adminBack" href="/">← Kthehu në faqe</a>
    </aside>
    <section className="adminMain">
      <div className="adminTop"><div><small>ALTIVIO / ADMIN</small><h1>{active}</h1></div><span className="statusDot">● Draft Mode</span></div>
      <div className="adminGrid">
        {sections.filter(([name])=>name===active).map(([name,desc])=><article className="adminPanel" key={name}>
          <h2>{name}</h2><p>{desc}</p>
          <div className="adminNotice">Paneli është gati vizualisht. Ruajtja publike do të lidhet me databazën Supabase sapo ta aktivizojmë backend-in e Altivio.</div>
          <label>Titulli<input defaultValue={name}/></label>
          <label>Përshkrimi<textarea defaultValue={desc}/></label>
          <div className="adminActions"><button disabled>Ruaj ndryshimet</button><span>Backend ende jo i lidhur</span></div>
        </article>)}
        <article className="adminPanel mini"><h3>Statusi i sistemit</h3><div className="health"><span>Frontend</span><b>Gati</b></div><div className="health"><span>4 gjuhë</span><b>Aktive</b></div><div className="health"><span>Admin UI</span><b>Gati</b></div><div className="health"><span>Database</span><b>Në pritje</b></div></article>
      </div>
    </section>
  </main>
}
