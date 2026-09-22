const services = [
  ["01","Sites Web","Sites vitrines et institutionnels modernes, rapides et orientés conversion.","▣"],
  ["02","E-commerce","Boutiques en ligne performantes et évolutives, prêtes à vendre.","◫"],
  ["03","SEO & Google Ads","Gagnez en visibilité et attirez des clients qualifiés.","↗"],
  ["04","Applications & SaaS","Des solutions sur mesure pour digitaliser vos processus.","◇"],
  ["05","Intelligence artificielle","Intégrez l’IA dans vos outils pour gagner en efficacité.","✦"],
  ["06","Branding & Design","Une identité forte et cohérente qui vous démarque.","✎"],
];

const plans = [
  {name:"Starter", price:"CHF 1’900", items:["Site vitrine jusqu’à 5 pages","Design sur mesure","Formulaire de contact","Formation incluse"]},
  {name:"Business", price:"CHF 2’900", items:["Jusqu’à 10 pages","Optimisation SEO de base","Intégration réseaux sociaux","Support 3 mois"]},
  {name:"Premium", price:"CHF 4’900", popular:true, items:["Jusqu’à 20 pages","SEO avancé","Analytics & conversions","Support 6 mois","Conseil stratégique"]},
  {name:"E-commerce", price:"CHF 6’900", items:["Boutique en ligne complète","Jusqu’à 50 produits","Paiements en ligne","SEO e-commerce"]},
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a href="#top" className="brand">
          <span className="brandMark">A</span>
          <span>ALTIVIO<small>Digital Studio</small></span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#work">Réalisations</a>
          <a href="#process">À propos</a>
          <a href="#pricing">Tarifs</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="navCta" href="#contact">Discuter de mon projet →</a>
      </header>

      <section id="top" className="hero">
        <div className="mountains"></div>
        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">AGENCE DIGITALE EN SUISSE ROMANDE</div>
            <h1>Des sites qui travaillent<br/>pour <span>votre entreprise.</span></h1>
            <p>Création de sites web, e-commerce, SEO, automatisation et solutions digitales sur mesure pour les entreprises ambitieuses en Suisse romande.</p>
            <div className="actions">
              <a className="btn" href="#contact">Démarrer mon projet →</a>
              <a className="btn ghost" href="#work">Voir nos réalisations</a>
            </div>
            <div className="trust">
              <span>✓ Rapide</span><span>✓ Responsive</span><span>✓ SEO-ready</span><span>✓ Support en Suisse</span>
            </div>
          </div>
          <div className="heroVisual">
            <div className="glow"></div>
            <div className="laptop">
              <div className="screen">
                <div className="screenNav"><b>ALTIVIO</b><span>Accueil &nbsp; Services &nbsp; Contact</span></div>
                <div className="screenHero">
                  <small>EXPÉRIENCES DIGITALES</small>
                  <strong>Des horizons<br/>plus proches.</strong>
                  <button>Découvrir</button>
                </div>
              </div>
            </div>
            <div className="phone"><div className="phoneInner"><small>ALTIVIO</small><strong>Explorez<br/>différemment.</strong></div></div>
            <div className="metric"><b>+180%</b><span>trafic organique</span></div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container benefitGrid">
          <div><i>⚡</i><span><b>Performances mesurables</b><small>Des résultats concrets</small></span></div>
          <div><i>▥</i><span><b>Référencement puissant</b><small>Soyez visible sur Google</small></span></div>
          <div><i>▯</i><span><b>100% responsive</b><small>Parfait sur tous les écrans</small></span></div>
          <div><i>◈</i><span><b>Support en Suisse</b><small>Une équipe à vos côtés</small></span></div>
        </div>
      </section>

      <section id="services" className="section light">
        <div className="container">
          <div className="sectionHead">
            <div><div className="eyebrow coral">NOS EXPERTISES</div><h2>Des solutions digitales<br/>pour aller plus loin.</h2></div>
            <p>Nous combinons stratégie, design et technologie pour créer des expériences digitales performantes, durables et évolutives.</p>
          </div>
          <div className="serviceGrid">
            {services.map(([num,title,text,icon]) => (
              <article className="serviceCard" key={title}>
                <div className="serviceTop"><span>{num}</span><i>{icon}</i></div>
                <h3>{title}</h3><p>{text}</p><a href="#contact">En savoir plus →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section case">
        <div className="container caseGrid">
          <div className="caseCopy">
            <div className="eyebrow mint">RÉALISATION DU MOIS</div>
            <h2>Un site. De vrais résultats.</h2>
            <p>Une refonte pensée pour améliorer l’image, la performance et les demandes de devis. Design premium, rapidité et visibilité réunis dans une seule expérience.</p>
            <a className="btn" href="#contact">Voir l’étude de cas →</a>
          </div>
          <div className="caseMock">
            <div className="browserBar"><span></span><span></span><span></span></div>
            <div className="caseScreen"><small>ALTIVIO CASE STUDY</small><strong>Design premium.<br/>Performance réelle.</strong></div>
          </div>
          <div className="stats">
            <div><b>+180%</b><span>Trafic organique</span></div>
            <div><b>+74%</b><span>Demandes de devis</span></div>
            <div><b>98/100</b><span>Performance Google</span></div>
          </div>
        </div>
      </section>

      <section id="process" className="section light">
        <div className="container">
          <div className="sectionHead">
            <div><div className="eyebrow coral">NOTRE PROCESSUS</div><h2>Simple, clair et efficace.</h2></div>
            <p>Un accompagnement structuré en 5 étapes pour transformer votre vision en un projet digital performant.</p>
          </div>
          <div className="steps">
            {[
              ["01","Découverte","On échange sur vos objectifs et vos besoins."],
              ["02","Stratégie","Nous définissons la meilleure approche."],
              ["03","Design","Nous créons une expérience unique."],
              ["04","Développement","Nous donnons vie à votre projet."],
              ["05","Mise en ligne","Votre projet est lancé et suivi."]
            ].map(([n,t,p]) => <div className="step" key={t}><span>{n}</span><h3>{t}</h3><p>{p}</p></div>)}
          </div>
        </div>
      </section>

      <section id="pricing" className="section pricing">
        <div className="container">
          <div className="sectionHead darkHead">
            <div><div className="eyebrow mint">DES OFFRES ADAPTÉES</div><h2>Des tarifs transparents<br/>pour des projets d’exception.</h2></div>
            <p>Tous nos forfaits incluent un accompagnement personnalisé depuis la conception jusqu’à la mise en ligne.</p>
          </div>
          <div className="priceGrid">
            {plans.map((plan) => (
              <article className={`priceCard ${plan.popular ? "featured" : ""}`} key={plan.name}>
                {plan.popular && <div className="popular">LE PLUS POPULAIRE</div>}
                <h3>{plan.name}</h3><div className="price">{plan.price}</div>
                <ul>{plan.items.map((x)=><li key={x}>✓ {x}</li>)}</ul>
                <a className={plan.popular ? "choose coralBtn" : "choose"} href="#contact">Choisir ce plan</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="eyebrow coral">ILS PARLENT DE NOUS</div>
          <h2>Le succès de nos clients<br/>est notre plus belle récompense.</h2>
          <div className="testimonialGrid">
            {[
              ["Une équipe professionnelle, réactive et créative.","Sophie Martin"],
              ["Notre nouveau site est élégant, rapide et très bien référencé.","Thomas Girard"],
              ["Un accompagnement fluide du début à la mise en ligne.","Laura Bianchi"]
            ].map(([q,n])=><article key={n}><div className="stars">★★★★★</div><p>“{q}”</p><b>{n}</b><small>Client Altivio</small></article>)}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container contactGrid">
          <div>
            <div className="eyebrow mint">UNE QUESTION ?</div>
            <h2>Parlons de votre projet.</h2>
            <p>Expliquez-nous ce que vous souhaitez construire. Nous vous proposerons une approche claire et adaptée.</p>
          </div>
          <form>
            <input placeholder="Nom et prénom" />
            <input type="email" placeholder="E-mail" />
            <select defaultValue=""><option value="" disabled>Type de projet</option><option>Site web</option><option>E-commerce</option><option>SEO / Google Ads</option><option>Application / SaaS</option><option>Branding</option></select>
            <input placeholder="Budget estimé" />
            <textarea placeholder="Parlez-nous de votre projet"></textarea>
            <button type="button">Demander un devis →</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container footerGrid">
          <div className="footBrand"><a href="#top" className="brand"><span className="brandMark">A</span><span>ALTIVIO<small>Digital Studio</small></span></a><p>Des solutions digitales suisses pour des entreprises ambitieuses.</p></div>
          <div><b>Services</b><a href="#services">Sites Web</a><a href="#services">E-commerce</a><a href="#services">SEO & Google Ads</a></div>
          <div><b>Entreprise</b><a href="#work">Réalisations</a><a href="#process">À propos</a><a href="#contact">Contact</a></div>
          <div><b>Altivio</b><span>Agence digitale en Suisse romande</span><span>altivio.ch</span></div>
        </div>
        <div className="container copyright">© 2026 Altivio. Tous droits réservés.</div>
      </footer>
    </main>
  );
}
