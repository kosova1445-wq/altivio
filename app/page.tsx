"use client";
import { useState } from "react";

type Lang = "sq" | "fr" | "en" | "de";

const copy: Record<Lang, any> = {
  sq: {
    nav:["Shërbimet","Projektet","Rreth nesh","Çmimet","Kontakti"], cta:"Diskutojmë projektin →",
    eyebrow:"AGJENCI DIGJITALE NË ZVICRËN ROMANDE",
    hero:["Faqe që punojnë","për biznesin tuaj."],
    heroP:"Krijim faqesh web, e-commerce, SEO, automatizim dhe zgjidhje digjitale të personalizuara për biznese ambicioze në Zvicrën romande.",
    start:"Fillo projektin tim →", work:"Shiko projektet tona",
    trust:["✓ Shpejtësi","✓ Responsive","✓ Gati për SEO","✓ Mbështetje në Zvicër"],
    benefits:[["⚡","Performancë e matshme","Rezultate konkrete"],["▥","SEO i fuqishëm","Bëhu i dukshëm në Google"],["▯","100% responsive","Perfekt në çdo ekran"],["◈","Mbështetje në Zvicër","Një ekip pranë jush"]],
    expertise:"EKSPERTIZA JONË", sol:["Zgjidhje digjitale","për të ecur më larg."], solP:"Bashkojmë strategjinë, dizajnin dhe teknologjinë për të krijuar eksperienca digjitale të shpejta, të qëndrueshme dhe të shkallëzueshme.",
    services:[
      ["01","Faqe Web","Faqe prezantuese dhe institucionale moderne, të shpejta dhe të orientuara drejt konvertimit.","▣"],
      ["02","E-commerce","Dyqane online të fuqishme, të shkallëzueshme dhe gati për shitje.","◫"],
      ["03","SEO & Google Ads","Rrisim dukshmërinë dhe sjellim klientë të kualifikuar.","↗"],
      ["04","Aplikacione & SaaS","Zgjidhje të personalizuara për digjitalizimin e proceseve.","◇"],
      ["05","Inteligjencë Artificiale","Integrojmë AI në mjetet tuaja për më shumë efikasitet.","✦"],
      ["06","Branding & Design","Identitet i fortë dhe koherent që ju dallon.","✎"]
    ],
    more:"Mëso më shumë →",
    caseEyebrow:"PROJEKTI I MUAJIT", caseTitle:"Një faqe. Rezultate reale.", caseP:"Ridizajnim i menduar për të përmirësuar imazhin, performancën dhe kërkesat për ofertë. Dizajn premium, shpejtësi dhe dukshmëri në një eksperiencë të vetme.", caseBtn:"Shiko rastin studimor →",
    stats:["Trafik organik","Kërkesa për ofertë","Performanca Google"],
    processEyebrow:"PROCESI YNË", processTitle:"I thjeshtë, i qartë dhe efikas.", processP:"Një proces i strukturuar në 5 hapa për ta kthyer vizionin tuaj në një projekt digjital me performancë.",
    steps:[["01","Zbulimi","Flasim për objektivat dhe nevojat tuaja."],["02","Strategjia","Përcaktojmë qasjen më të mirë."],["03","Dizajni","Krijojmë një eksperiencë unike."],["04","Zhvillimi","I japim jetë projektit tuaj."],["05","Publikimi","Projekti publikohet dhe vazhdon të mbështetet."]],
    pricingEyebrow:"OFERTA TË PËRSHTATURA", pricingTitle:["Çmime transparente","për projekte të veçanta."], pricingP:"Të gjitha paketat përfshijnë mbështetje të personalizuar nga koncepti deri te publikimi.",
    popular:"MË E ZGJEDHURA", choose:"Zgjidh këtë paketë",
    plans:[
      ["Starter","CHF 1’900",["Faqe prezantuese deri në 5 faqe","Dizajn i personalizuar","Formular kontakti","Trajnim i përfshirë"]],
      ["Business","CHF 2’900",["Deri në 10 faqe","SEO bazë","Integrim me rrjetet sociale","Mbështetje 3 muaj"]],
      ["Premium","CHF 4’900",["Deri në 20 faqe","SEO i avancuar","Analytics & konvertime","Mbështetje 6 muaj","Këshillim strategjik"]],
      ["E-commerce","CHF 6’900",["Dyqan online i plotë","Deri në 50 produkte","Pagesa online","SEO për e-commerce"]]
    ],
    testimonialsEyebrow:"ÇFARË THONË KLIENTËT", testimonialsTitle:["Suksesi i klientëve tanë","është shpërblimi ynë më i madh."],
    quotes:[["Një ekip profesional, reagues dhe kreativ.","Sophie Martin"],["Faqja jonë e re është elegante, e shpejtë dhe shumë mirë e optimizuar.","Thomas Girard"],["Mbështetje e shkëlqyer nga fillimi deri te publikimi.","Laura Bianchi"]],
    client:"Klient Altivio",
    faqEyebrow:"PYETJE TË SHPESHTA", faqTitle:"Gjithçka që duhet të dini para se të fillojmë.", faq:[["Sa zgjat një projekt web?","Në varësi të kompleksitetit, zakonisht nga 2 deri në 8 javë. Afati përcaktohet qartë para fillimit."],["A punoni me biznese jashtë Zvicrës?","Po. Altivio mund të punojë edhe me klientë ndërkombëtarë, ndërsa fokusi kryesor mbetet tregu zviceran."],["A ofroni mirëmbajtje pas publikimit?","Po. Mund të përfshihet mirëmbajtje, përditësime, monitorim dhe zhvillim i vazhdueshëm."],["A mund ta menaxhoj vetë përmbajtjen?","Po. Projektet mund të pajisen me panel administrimi që ju lejon të ndryshoni përmbajtjen pa prekur kodin."]],\n    contactEyebrow:"KENI PYETJE?", contactTitle:"Flasim për projektin tuaj.", contactP:"Na tregoni çfarë dëshironi të ndërtoni. Ne do t’ju propozojmë një qasje të qartë dhe të përshtatur.",
    form:["Emri dhe mbiemri","E-mail","Lloji i projektit","Buxheti i përafërt","Na tregoni për projektin tuaj"], submit:"Kërko ofertë →",
    footerP:"Zgjidhje digjitale zvicerane për biznese ambicioze.", company:"Kompania", rights:"Të gjitha të drejtat e rezervuara."
  },
  fr: {
    nav:["Services","Réalisations","À propos","Tarifs","Contact"], cta:"Discuter de mon projet →",
    eyebrow:"AGENCE DIGITALE EN SUISSE ROMANDE", hero:["Des sites qui travaillent","pour votre entreprise."],
    heroP:"Création de sites web, e-commerce, SEO, automatisation et solutions digitales sur mesure pour les entreprises ambitieuses en Suisse romande.",
    start:"Démarrer mon projet →", work:"Voir nos réalisations", trust:["✓ Rapide","✓ Responsive","✓ SEO-ready","✓ Support en Suisse"],
    benefits:[["⚡","Performances mesurables","Des résultats concrets"],["▥","Référencement puissant","Soyez visible sur Google"],["▯","100% responsive","Parfait sur tous les écrans"],["◈","Support en Suisse","Une équipe à vos côtés"]],
    expertise:"NOS EXPERTISES", sol:["Des solutions digitales","pour aller plus loin."], solP:"Nous combinons stratégie, design et technologie pour créer des expériences digitales performantes, durables et évolutives.",
    services:[["01","Sites Web","Sites vitrines et institutionnels modernes, rapides et orientés conversion.","▣"],["02","E-commerce","Boutiques en ligne performantes et évolutives, prêtes à vendre.","◫"],["03","SEO & Google Ads","Gagnez en visibilité et attirez des clients qualifiés.","↗"],["04","Applications & SaaS","Des solutions sur mesure pour digitaliser vos processus.","◇"],["05","Intelligence artificielle","Intégrez l’IA dans vos outils pour gagner en efficacité.","✦"],["06","Branding & Design","Une identité forte et cohérente qui vous démarque.","✎"]],
    more:"En savoir plus →", caseEyebrow:"RÉALISATION DU MOIS", caseTitle:"Un site. De vrais résultats.", caseP:"Une refonte pensée pour améliorer l’image, la performance et les demandes de devis. Design premium, rapidité et visibilité réunis dans une seule expérience.", caseBtn:"Voir l’étude de cas →", stats:["Trafic organique","Demandes de devis","Performance Google"],
    processEyebrow:"NOTRE PROCESSUS", processTitle:"Simple, clair et efficace.", processP:"Un accompagnement structuré en 5 étapes pour transformer votre vision en un projet digital performant.",
    steps:[["01","Découverte","On échange sur vos objectifs et vos besoins."],["02","Stratégie","Nous définissons la meilleure approche."],["03","Design","Nous créons une expérience unique."],["04","Développement","Nous donnons vie à votre projet."],["05","Mise en ligne","Votre projet est lancé et suivi."]],
    pricingEyebrow:"DES OFFRES ADAPTÉES", pricingTitle:["Des tarifs transparents","pour des projets d’exception."], pricingP:"Tous nos forfaits incluent un accompagnement personnalisé depuis la conception jusqu’à la mise en ligne.", popular:"LE PLUS POPULAIRE", choose:"Choisir ce plan",
    plans:[["Starter","CHF 1’900",["Site vitrine jusqu’à 5 pages","Design sur mesure","Formulaire de contact","Formation incluse"]],["Business","CHF 2’900",["Jusqu’à 10 pages","Optimisation SEO de base","Intégration réseaux sociaux","Support 3 mois"]],["Premium","CHF 4’900",["Jusqu’à 20 pages","SEO avancé","Analytics & conversions","Support 6 mois","Conseil stratégique"]],["E-commerce","CHF 6’900",["Boutique en ligne complète","Jusqu’à 50 produits","Paiements en ligne","SEO e-commerce"]]],
    testimonialsEyebrow:"ILS PARLENT DE NOUS", testimonialsTitle:["Le succès de nos clients","est notre plus belle récompense."], quotes:[["Une équipe professionnelle, réactive et créative.","Sophie Martin"],["Notre nouveau site est élégant, rapide et très bien référencé.","Thomas Girard"],["Un accompagnement fluide du début à la mise en ligne.","Laura Bianchi"]], client:"Client Altivio",
    faqEyebrow:"QUESTIONS FRÉQUENTES", faqTitle:"Tout ce qu’il faut savoir avant de commencer.", faq:[["Combien de temps dure un projet web ?","Selon la complexité, généralement entre 2 et 8 semaines. Le calendrier est défini clairement avant le démarrage."],["Travaillez-vous avec des entreprises hors de Suisse ?","Oui. Altivio peut accompagner des clients internationaux, avec un focus principal sur le marché suisse."],["Proposez-vous une maintenance après la mise en ligne ?","Oui. Maintenance, mises à jour, suivi et développement continu peuvent être inclus."],["Puis-je gérer moi-même le contenu ?","Oui. Les projets peuvent intégrer un espace d’administration pour modifier le contenu sans toucher au code."]],\n    contactEyebrow:"UNE QUESTION ?", contactTitle:"Parlons de votre projet.", contactP:"Expliquez-nous ce que vous souhaitez construire. Nous vous proposerons une approche claire et adaptée.", form:["Nom et prénom","E-mail","Type de projet","Budget estimé","Parlez-nous de votre projet"], submit:"Demander un devis →", footerP:"Des solutions digitales suisses pour des entreprises ambitieuses.", company:"Entreprise", rights:"Tous droits réservés."
  },
  en: {
    nav:["Services","Work","About","Pricing","Contact"], cta:"Discuss my project →", eyebrow:"DIGITAL AGENCY IN FRENCH-SPEAKING SWITZERLAND", hero:["Websites that work","for your business."], heroP:"Web design, e-commerce, SEO, automation and tailored digital solutions for ambitious businesses in Switzerland.", start:"Start my project →", work:"See our work", trust:["✓ Fast","✓ Responsive","✓ SEO-ready","✓ Swiss support"],
    benefits:[["⚡","Measurable performance","Concrete results"],["▥","Powerful SEO","Get found on Google"],["▯","100% responsive","Perfect on every screen"],["◈","Swiss support","A team by your side"]],
    expertise:"OUR EXPERTISE", sol:["Digital solutions","built to go further."], solP:"We combine strategy, design and technology to create fast, durable and scalable digital experiences.",
    services:[["01","Websites","Modern, fast and conversion-focused corporate and showcase websites.","▣"],["02","E-commerce","High-performing, scalable online stores ready to sell.","◫"],["03","SEO & Google Ads","Increase visibility and attract qualified customers.","↗"],["04","Applications & SaaS","Custom solutions to digitize your processes.","◇"],["05","Artificial Intelligence","Integrate AI into your tools to gain efficiency.","✦"],["06","Branding & Design","A strong and coherent identity that sets you apart.","✎"]],
    more:"Learn more →", caseEyebrow:"PROJECT OF THE MONTH", caseTitle:"One site. Real results.", caseP:"A redesign built to improve image, performance and quote requests. Premium design, speed and visibility in one experience.", caseBtn:"View case study →", stats:["Organic traffic","Quote requests","Google performance"],
    processEyebrow:"OUR PROCESS", processTitle:"Simple, clear and effective.", processP:"A structured 5-step process to turn your vision into a high-performing digital project.", steps:[["01","Discovery","We discuss your goals and needs."],["02","Strategy","We define the best approach."],["03","Design","We create a unique experience."],["04","Development","We bring your project to life."],["05","Launch","Your project goes live and stays supported."]],
    pricingEyebrow:"TAILORED OFFERS", pricingTitle:["Transparent pricing","for exceptional projects."], pricingP:"All plans include personalized support from concept to launch.", popular:"MOST POPULAR", choose:"Choose this plan",
    plans:[["Starter","CHF 1’900",["Showcase site up to 5 pages","Custom design","Contact form","Training included"]],["Business","CHF 2’900",["Up to 10 pages","Basic SEO optimization","Social media integration","3 months support"]],["Premium","CHF 4’900",["Up to 20 pages","Advanced SEO","Analytics & conversions","6 months support","Strategic advice"]],["E-commerce","CHF 6’900",["Complete online store","Up to 50 products","Online payments","E-commerce SEO"]]],
    testimonialsEyebrow:"CLIENT FEEDBACK", testimonialsTitle:["Our clients’ success","is our greatest reward."], quotes:[["A professional, responsive and creative team.","Sophie Martin"],["Our new website is elegant, fast and very well optimized.","Thomas Girard"],["A smooth experience from the first step to launch.","Laura Bianchi"]], client:"Altivio client",
    faqEyebrow:"FREQUENTLY ASKED QUESTIONS", faqTitle:"Everything you need to know before we start.", faq:[["How long does a web project take?","Depending on complexity, typically 2 to 8 weeks. The timeline is defined clearly before work begins."],["Do you work with companies outside Switzerland?","Yes. Altivio can work with international clients while keeping a primary focus on the Swiss market."],["Do you offer maintenance after launch?","Yes. Maintenance, updates, monitoring and ongoing development can be included."],["Can I manage the content myself?","Yes. Projects can include an admin area so you can update content without touching the code."]],\n    contactEyebrow:"HAVE A QUESTION?", contactTitle:"Let’s talk about your project.", contactP:"Tell us what you want to build. We’ll suggest a clear, tailored approach.", form:["Full name","E-mail","Project type","Estimated budget","Tell us about your project"], submit:"Request a quote →", footerP:"Swiss digital solutions for ambitious businesses.", company:"Company", rights:"All rights reserved."
  },
  de: {
    nav:["Leistungen","Projekte","Über uns","Preise","Kontakt"], cta:"Projekt besprechen →", eyebrow:"DIGITALAGENTUR IN DER WESTSCHWEIZ", hero:["Websites, die arbeiten","für Ihr Unternehmen."], heroP:"Webdesign, E-Commerce, SEO, Automatisierung und maßgeschneiderte digitale Lösungen für ambitionierte Unternehmen in der Schweiz.", start:"Projekt starten →", work:"Unsere Projekte", trust:["✓ Schnell","✓ Responsive","✓ SEO-ready","✓ Support in der Schweiz"],
    benefits:[["⚡","Messbare Leistung","Konkrete Resultate"],["▥","Starkes SEO","Sichtbar bei Google"],["▯","100% responsive","Perfekt auf allen Geräten"],["◈","Support in der Schweiz","Ein Team an Ihrer Seite"]],
    expertise:"UNSERE EXPERTISE", sol:["Digitale Lösungen","für den nächsten Schritt."], solP:"Wir verbinden Strategie, Design und Technologie für leistungsstarke, nachhaltige und skalierbare digitale Erlebnisse.",
    services:[["01","Websites","Moderne, schnelle und conversion-orientierte Unternehmenswebsites.","▣"],["02","E-Commerce","Leistungsstarke, skalierbare Onlineshops, bereit für den Verkauf.","◫"],["03","SEO & Google Ads","Mehr Sichtbarkeit und qualifizierte Kunden.","↗"],["04","Applikationen & SaaS","Individuelle Lösungen zur Digitalisierung Ihrer Prozesse.","◇"],["05","Künstliche Intelligenz","KI-Integration für effizientere digitale Prozesse.","✦"],["06","Branding & Design","Eine starke, konsistente Identität, die Sie differenziert.","✎"]],
    more:"Mehr erfahren →", caseEyebrow:"PROJEKT DES MONATS", caseTitle:"Eine Website. Echte Resultate.", caseP:"Ein Redesign für ein stärkeres Image, bessere Performance und mehr Anfragen. Premium Design, Geschwindigkeit und Sichtbarkeit in einem Erlebnis.", caseBtn:"Case Study ansehen →", stats:["Organischer Traffic","Anfragen","Google Performance"],
    processEyebrow:"UNSER PROZESS", processTitle:"Einfach, klar und effizient.", processP:"Ein strukturierter Prozess in 5 Schritten, um Ihre Vision in ein leistungsstarkes digitales Projekt zu verwandeln.", steps:[["01","Analyse","Wir besprechen Ziele und Bedürfnisse."],["02","Strategie","Wir definieren den besten Ansatz."],["03","Design","Wir schaffen ein einzigartiges Erlebnis."],["04","Entwicklung","Wir bringen Ihr Projekt zum Leben."],["05","Launch","Ihr Projekt geht live und wird weiter betreut."]],
    pricingEyebrow:"PASSENDE ANGEBOTE", pricingTitle:["Transparente Preise","für besondere Projekte."], pricingP:"Alle Pakete beinhalten persönliche Begleitung von der Idee bis zum Launch.", popular:"AM BELIEBTESTEN", choose:"Paket wählen",
    plans:[["Starter","CHF 1’900",["Website bis 5 Seiten","Individuelles Design","Kontaktformular","Einführung inklusive"]],["Business","CHF 2’900",["Bis 10 Seiten","Basis-SEO","Social-Media-Integration","3 Monate Support"]],["Premium","CHF 4’900",["Bis 20 Seiten","Erweitertes SEO","Analytics & Conversions","6 Monate Support","Strategische Beratung"]],["E-Commerce","CHF 6’900",["Kompletter Onlineshop","Bis 50 Produkte","Online-Zahlungen","E-Commerce SEO"]]],
    testimonialsEyebrow:"KUNDENSTIMMEN", testimonialsTitle:["Der Erfolg unserer Kunden","ist unsere größte Belohnung."], quotes:[["Ein professionelles, reaktionsschnelles und kreatives Team.","Sophie Martin"],["Unsere neue Website ist elegant, schnell und sehr gut optimiert.","Thomas Girard"],["Eine reibungslose Begleitung vom Start bis zum Launch.","Laura Bianchi"]], client:"Altivio Kunde",
    faqEyebrow:"HÄUFIGE FRAGEN", faqTitle:"Alles, was Sie vor dem Start wissen sollten.", faq:[["Wie lange dauert ein Webprojekt?","Je nach Komplexität in der Regel 2 bis 8 Wochen. Der Zeitplan wird vor Projektstart klar definiert."],["Arbeiten Sie auch mit Unternehmen ausserhalb der Schweiz?","Ja. Altivio kann internationale Kunden betreuen, mit Schwerpunkt auf dem Schweizer Markt."],["Bieten Sie Wartung nach dem Launch an?","Ja. Wartung, Updates, Monitoring und laufende Weiterentwicklung können integriert werden."],["Kann ich Inhalte selbst verwalten?","Ja. Projekte können einen Admin-Bereich enthalten, mit dem Sie Inhalte ohne Codekenntnisse ändern können."]],\n    contactEyebrow:"EINE FRAGE?", contactTitle:"Sprechen wir über Ihr Projekt.", contactP:"Sagen Sie uns, was Sie bauen möchten. Wir schlagen Ihnen einen klaren und passenden Ansatz vor.", form:["Vor- und Nachname","E-Mail","Projekttyp","Geschätztes Budget","Erzählen Sie uns von Ihrem Projekt"], submit:"Offerte anfragen →", footerP:"Schweizer digitale Lösungen für ambitionierte Unternehmen.", company:"Unternehmen", rights:"Alle Rechte vorbehalten."
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("sq");
  const t = copy[lang];
  return (
    <main>
      <header className="nav">
        <a href="#top" className="brand"><span className="brandMark" aria-hidden="true"><span className="brandPeak"></span><span className="brandCut"></span></span><span className="brandText">ALTIVIO<small>Digital Studio</small></span></a>
        <nav className={menuOpen ? "open" : ""}>
          <a onClick={()=>setMenuOpen(false)} href="#services">{t.nav[0]}</a><a onClick={()=>setMenuOpen(false)} href="#work">{t.nav[1]}</a><a onClick={()=>setMenuOpen(false)} href="#process">{t.nav[2]}</a><a onClick={()=>setMenuOpen(false)} href="#pricing">{t.nav[3]}</a><a onClick={()=>setMenuOpen(false)} href="#contact">{t.nav[4]}</a>
        </nav>
        <div className="langSwitch">
          {(["sq","fr","en","de"] as Lang[]).map(x => <button className={lang===x?"active":""} key={x} onClick={()=>setLang(x)}>{x.toUpperCase()}</button>)}
        </div>
        <a className="navCta" href="#contact">{t.cta}</a>
        <button className="mobileMenu" aria-label="Menu" aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}><span></span><span></span><span></span></button>
      </header>

      <section id="top" className="hero"><div className="mountains"></div><div className="container heroGrid">
        <div className="heroCopy"><div className="eyebrow">{t.eyebrow}</div><h1>{t.hero[0]}<br/> <span>{t.hero[1]}</span></h1><p>{t.heroP}</p>
          <div className="actions"><a className="btn" href="#contact">{t.start}</a><a className="btn ghost" href="#work">{t.work}</a></div>
          <div className="trust">{t.trust.map((x:string)=><span key={x}>{x}</span>)}</div>
        </div>
        <div className="heroVisual"><div className="glow"></div><div className="laptop"><div className="screen"><div className="screenNav"><b>ALTIVIO</b><span>Digital Studio</span></div><div className="screenHero"><small>ALTIVIO</small><strong>{t.hero[0]}<br/>{t.hero[1]}</strong><button>{t.more.replace(" →","")}</button></div></div></div><div className="phone"><div className="phoneInner"><small>ALTIVIO</small><strong>{t.hero[1]}</strong></div></div><div className="metric"><b>+180%</b><span>{t.stats[0]}</span></div></div>
      </div></section>

      <section className="benefits"><div className="container benefitGrid">{t.benefits.map((b:string[])=><div key={b[1]}><i>{b[0]}</i><span><b>{b[1]}</b><small>{b[2]}</small></span></div>)}</div></section>

      <section id="services" className="section light"><div className="container"><div className="sectionHead"><div><div className="eyebrow coral">{t.expertise}</div><h2>{t.sol[0]}<br/>{t.sol[1]}</h2></div><p>{t.solP}</p></div>
        <div className="serviceGrid">{t.services.map((s:string[])=><article className="serviceCard" key={s[1]}><div className="serviceTop"><span>{s[0]}</span><i>{s[3]}</i></div><h3>{s[1]}</h3><p>{s[2]}</p><a href="#contact">{t.more}</a></article>)}</div>
      </div></section>

      <section id="work" className="section case"><div className="container caseGrid"><div className="caseCopy"><div className="eyebrow mint">{t.caseEyebrow}</div><h2>{t.caseTitle}</h2><p>{t.caseP}</p><a className="btn" href="#contact">{t.caseBtn}</a></div>
        <div className="caseMock"><div className="browserBar"><span></span><span></span><span></span></div><div className="caseScreen"><small>ALTIVIO CASE STUDY</small><strong>Premium Design.<br/>Real Performance.</strong></div></div>
        <div className="stats"><div><b>+180%</b><span>{t.stats[0]}</span></div><div><b>+74%</b><span>{t.stats[1]}</span></div><div><b>98/100</b><span>{t.stats[2]}</span></div></div>
      </div></section>

      <section id="process" className="section light"><div className="container"><div className="sectionHead"><div><div className="eyebrow coral">{t.processEyebrow}</div><h2>{t.processTitle}</h2></div><p>{t.processP}</p></div><div className="steps">{t.steps.map((s:string[])=><div className="step" key={s[1]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div></div></section>

      <section id="pricing" className="section pricing"><div className="container"><div className="sectionHead darkHead"><div><div className="eyebrow mint">{t.pricingEyebrow}</div><h2>{t.pricingTitle[0]}<br/>{t.pricingTitle[1]}</h2></div><p>{t.pricingP}</p></div>
        <div className="priceGrid">{t.plans.map((p:any,i:number)=><article className={`priceCard ${i===2?"featured":""}`} key={p[0]}>{i===2&&<div className="popular">{t.popular}</div>}<h3>{p[0]}</h3><div className="price">{p[1]}</div><ul>{p[2].map((x:string)=><li key={x}>✓ {x}</li>)}</ul><a className={i===2?"choose coralBtn":"choose"} href="#contact">{t.choose}</a></article>)}</div>
      </div></section>

      <section className="section testimonials"><div className="container"><div className="eyebrow coral">{t.testimonialsEyebrow}</div><h2>{t.testimonialsTitle[0]}<br/>{t.testimonialsTitle[1]}</h2><div className="testimonialGrid">{t.quotes.map((q:string[])=><article key={q[1]}><div className="stars">★★★★★</div><p>“{q[0]}”</p><b>{q[1]}</b><small>{t.client}</small></article>)}</div></div></section>

      <section className="section faqSection"><div className="container"><div className="sectionHead"><div><div className="eyebrow coral">{t.faqEyebrow}</div><h2>{t.faqTitle}</h2></div><p>ALTIVIO · Digital Studio · Switzerland</p></div><div className="faqGrid">{t.faq.map((f:string[],i:number)=><details key={f[0]} open={i===0}><summary>{f[0]}<span>+</span></summary><p>{f[1]}</p></details>)}</div></div></section>

      <section id="contact" className="section contact"><div className="container contactGrid"><div><div className="eyebrow mint">{t.contactEyebrow}</div><h2>{t.contactTitle}</h2><p>{t.contactP}</p></div><form><input placeholder={t.form[0]}/><input type="email" placeholder={t.form[1]}/><select defaultValue=""><option value="" disabled>{t.form[2]}</option><option>Website</option><option>E-commerce</option><option>SEO / Google Ads</option><option>Application / SaaS</option><option>Branding</option></select><input placeholder={t.form[3]}/><textarea placeholder={t.form[4]}></textarea><button type="button">{t.submit}</button></form></div></section>

      <footer><div className="container footerGrid"><div className="footBrand"><a href="#top" className="brand"><span className="brandMark" aria-hidden="true"><span className="brandPeak"></span><span className="brandCut"></span></span><span className="brandText">ALTIVIO<small>Digital Studio</small></span></a><p>{t.footerP}</p></div><div><b>{t.nav[0]}</b><a href="#services">Web</a><a href="#services">E-commerce</a><a href="#services">SEO & Google Ads</a></div><div><b>{t.company}</b><a href="#work">{t.nav[1]}</a><a href="#process">{t.nav[2]}</a><a href="#contact">{t.nav[4]}</a></div><div><b>Altivio</b><span>Digital Studio · Switzerland</span><span>altivio.ch</span><a href="/admin">Admin</a></div></div><div className="container copyright">© 2026 Altivio. {t.rights}</div></footer>
    </main>
  );
}
