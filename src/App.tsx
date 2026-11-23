import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, BrainCircuit,
  Check, Code2, Copy, ExternalLink, Github, GraduationCap,
  Layers3, Linkedin, Mail, Menu, Moon, MoveUpRight, ScanFace,
  ShieldCheck, ShoppingBag, Sparkles, Sun, X
} from 'lucide-react';

const BASE = '/sanju-portfolio/';
const EMAIL = 'sanjoyrozario27@gmail.com';
const GITHUB = 'https://github.com/Sanjoyte';
const LINKEDIN = 'https://www.linkedin.com/in/sanjoy-rozario-a8437526a/';

type Category = 'Full-stack' | 'Research' | 'Interactive';
type Project = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  description: string;
  tech: string[];
  category: Category;
  href: string;
  live?: string;
  year: string;
};

const projects: Project[] = [
  {
    id: 'stackwise',
    index: '01',
    title: 'Stackwise',
    kicker: 'Featured / Financial technology',
    description: 'A financial workspace for freelancers and teams. Track subscriptions, cash flow, and client profitability, with receipt OCR and AI-assisted tax checks.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    category: 'Full-stack',
    href: 'https://github.com/Sanjoyte/Stackwise',
    live: 'https://stackwise-client-ruddy.vercel.app',
    year: '2026'
  },
  {
    id: 'rumor',
    index: '02',
    title: 'Rumor Zero',
    kicker: 'In development / Civic technology',
    description: 'An evolving social platform built around separating opinion from factual claims, user reporting, appeals, and human-guided moderation.',
    tech: ['Next.js', 'TypeScript', 'Django REST', 'Redis'],
    category: 'Full-stack',
    href: 'https://github.com/Sanjoyte/Rumor-Zero',
    year: 'Ongoing'
  },
  {
    id: 'brats',
    index: '03',
    title: 'Pediatric Brain MRI Segmentation',
    kicker: 'Research / Medical AI',
    description: 'Explored multi-modal pediatric MRI datasets and segmentation baselines, with reproducible preprocessing and quantitative model evaluation.',
    tech: ['PyTorch', 'nnU-Net', 'Swin UNETR', 'Medical imaging'],
    category: 'Research',
    href: 'https://github.com/Sanjoyte/BraTS-PE-2025-Challenge',
    year: '2025'
  },
  {
    id: 'tax',
    index: '04',
    title: 'Interactive Tax Game',
    kicker: 'Team project / Public-sector experience',
    description: 'A scene-based learning experience introducing e-TIN, e-Return, e-TDS, and e-Audit services, showcased at the National Revenue Conference.',
    tech: ['JavaScript', 'Interactive UI', 'Team project'],
    category: 'Interactive',
    href: 'https://github.com/Sanjoyte/GTA-a-interactive-tax-game-for-NBR',
    year: '2026'
  },
  {
    id: 'quadtech',
    index: '05',
    title: 'QuadTech',
    kicker: 'Team project / E-commerce',
    description: 'A full-stack online store with search suggestions, product browsing, responsive themes, and multi-step authentication flows.',
    tech: ['React', 'Express', 'MongoDB', 'Google OAuth'],
    category: 'Full-stack',
    href: 'https://github.com/mdsoyebzamanrafi/Quad-Tech',
    year: '2026'
  }
];

const groups = [
  { name: 'Languages', count: '05', items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL'] },
  { name: 'Frontend', count: '02', items: ['React', 'Next.js'] },
  { name: 'Backend & APIs', count: '04', items: ['Django', 'Django REST Framework', 'Node.js', 'Express.js'] },
  { name: 'Databases', count: '04', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
  { name: 'AI / ML', count: '05', items: ['PyTorch', 'Deep Learning', 'Computer Vision', 'Medical Image Analysis', 'NLP'] }
];

function useReveal(dep?: unknown) {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal:not(.in-view)');
    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('in-view'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
    targets.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [dep]);
}

function ProjectVisual({ id }: { id: string }) {
  if (id === 'stackwise') return (
    <div className="visual visual--stackwise" aria-label="Illustrative financial dashboard concept">
      <div className="visual-caption">CONCEPT / PRODUCT INTERFACE</div>
      <div className="dash-shell">
        <div className="dash-sidebar"><span className="dash-logo">s<span>.</span></span><span className="dash-nav active" /><span className="dash-nav" /><span className="dash-nav short" /><span className="dash-bottom" /></div>
        <div className="dash-main">
          <div className="dash-top"><span>Overview</span><span className="dash-pill">October 2026 ↓</span></div>
          <div className="dash-metrics">
            <div className="metric-card"><small>TOTAL REVENUE</small><strong>$24,850.00</strong><em>↗ 12.8%</em></div>
            <div className="metric-card metric-card--secondary"><small>NET PROFIT</small><strong>$16,420.00</strong><em>↗ 8.2%</em></div>
          </div>
          <div className="dash-chart"><div className="chart-heading"><strong>Cash flow</strong><small>Last 6 months</small></div><div className="chart-bars">{[36,48,42,72,55,86,68,91,75,100,84,108].map((h,i) => <span key={i} style={{ height: h + '%' }} />)}</div></div>
        </div>
      </div>
      <div className="visual-stamp">01 / BUILD</div>
    </div>
  );
  if (id === 'rumor') return (
    <div className="visual visual--rumor" aria-label="Illustrative content credibility workflow">
      <div className="visual-caption">CONCEPT / CREDIBILITY SYSTEM</div>
      <div className="rumor-orbit rumor-orbit--one" /><div className="rumor-orbit rumor-orbit--two" />
      <div className="rumor-card">
        <div className="rumor-top"><span className="rumor-bubble"><ShieldCheck size={17}/></span><span>CLAIM REVIEW</span><span className="rumor-three">•••</span></div>
        <div className="rumor-headline"><div /><div /><div /></div>
        <div className="rumor-verdict"><span className="rumor-dot" />Human review requested <Check size={17}/></div>
      </div>
      <div className="rumor-floating">Signal, not noise<span>↗</span></div>
    </div>
  );
  if (id === 'brats') return (
    <div className="visual visual--brats" aria-label="Abstract medical imaging research illustration">
      <div className="visual-caption">CONCEPT / MEDICAL IMAGING</div>
      <div className="scan-grid" />
      <div className="scan-ring scan-ring--outside" /><div className="scan-ring scan-ring--middle" /><div className="scan-ring scan-ring--inner" />
      <div className="scan-center"><ScanFace size={49} strokeWidth={1}/></div>
      <div className="scan-label scan-label--top">MULTI-MODAL / MRI</div>
      <div className="scan-label scan-label--bottom">SEGMENTATION PIPELINE_</div>
    </div>
  );
  if (id === 'tax') return (
    <div className="visual visual--tax" aria-label="Abstract interactive tax education illustration">
      <div className="visual-caption">CONCEPT / INTERACTIVE EDUCATION</div>
      <div className="tax-sun" />
      <div className="tax-board"><div className="tax-heading">LEVEL 01 <span>● ● ●</span></div><div className="tax-scene"><div className="tax-building"><i /><i /><i /><i /><b>e-TIN</b></div><div className="tax-character">↗</div></div><div className="tax-bottom">LEARN THE SYSTEM <span>→</span></div></div>
    </div>
  );
  return (
    <div className="visual visual--quadtech" aria-label="Illustrative commerce product layout">
      <div className="visual-caption">CONCEPT / E-COMMERCE</div>
      <div className="shop-shell"><div className="shop-top"><strong>quad<span>tech.</span></strong><span>SHOP ALL &nbsp; ↗</span></div><div className="shop-body"><div className="shop-item shop-item--one"><ShoppingBag size={41} strokeWidth={1.4}/><span>New arrivals</span></div><div className="shop-item shop-item--two"><Layers3 size={40} strokeWidth={1.4}/><span>Accessories</span></div></div><div className="shop-footer">DISCOVER MORE <span>→</span></div></div>
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <article className={'project-card reveal ' + (featured ? 'project-card--featured' : '')}>
    <div className="project-image"><ProjectVisual id={project.id}/></div>
    <div className="project-copy">
      <div className="project-meta"><span>{project.index} / {project.kicker}</span><span>{project.year}</span></div>
      <div className="project-title-row"><h3>{project.title}</h3><a className="project-open" href={project.href} target="_blank" rel="noreferrer" aria-label={'View ' + project.title + ' on GitHub'}><ArrowUpRight size={23}/></a></div>
      <p>{project.description}</p>
      <div className="project-bottom"><div className="tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div><div className="project-links"><a href={project.href} target="_blank" rel="noreferrer"><Github size={15}/> Code <ArrowUpRight size={13}/></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={15}/> Live site <ArrowUpRight size={13}/></a>}</div></div>
    </div>
  </article>;
}

export default function App() {
  const [theme, setTheme] = useState<'light'|'dark'>(() => {
    try {
      const saved = localStorage.getItem('sanjoy-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch { /* blocked storage */ }
    return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);
  const shown = useMemo(() => projects.filter(p => filter === 'All' || (filter === 'AI / Research' ? p.category === 'Research' : p.category === filter)), [filter]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111a18' : '#f8faf7');
    try { localStorage.setItem('sanjoy-theme', theme); } catch { /* blocked storage */ }
  }, [theme]);
  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);
  useReveal(filter);

  const nav = [{title:'About',href:'#about'}, {title:'Work',href:'#work'}, {title:'Skills',href:'#skills'}, {title:'Journey',href:'#journey'}];
  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setCopied(true); window.setTimeout(() => setCopied(false), 2200); }
    catch { window.location.href = 'mailto:' + EMAIL; }
  };

  return <div className="site">
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="scroll-progress" style={{ width: progress + '%' }} />
    <header className="site-header">
      <div className="header-inner container">
        <a className="brand" href="#top" aria-label="Sanjoy Rozario home">sanjoy<span>.</span><span className="brand-mark">SR / 26</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map(n => <a key={n.title} href={n.href}>{n.title}</a>)}</nav>
        <div className="header-actions"><button className="theme-button" onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')} aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'} title="Toggle theme">{theme === 'light' ? <Moon size={18}/> : <Sun size={18}/>}</button><a className="header-contact" href="#contact">Let's talk <ArrowUpRight size={15}/></a><button className="mobile-menu-button" aria-label={menuOpen?'Close navigation':'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(v=>!v)}>{menuOpen ? <X size={23}/> : <Menu size={23}/>}</button></div>
      </div>
      <div className={'mobile-nav ' + (menuOpen?'mobile-nav--open':'')}><nav aria-label="Mobile navigation">{nav.map((n,i) => <a href={n.href} key={n.title} onClick={closeMenu}><span>0{i+1}</span>{n.title}<ArrowUpRight size={22}/></a>)}<a href="#contact" onClick={closeMenu}><span>05</span>Contact<ArrowUpRight size={22}/></a></nav><div className="mobile-nav-bottom">SANJOY ROZARIO · DHAKA, BD</div></div>
    </header>

    <main id="main">
      <section id="top" className="hero-section">
        <div className="hero-grid container">
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow"><span className="live-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-divider">/</span> DHAKA, BANGLADESH</div>
            <p className="hero-greeting">Hello, I'm <strong>Sanjoy Rozario.</strong></p>
            <h1>Crafting for<br />the <em>web.</em><br />Curious about<br /><span>what's next<span className="hero-period">.</span></span></h1>
            <p className="hero-description">Full-stack developer and CSE undergraduate creating practical digital products, with a growing focus on AI and computer vision.</p>
            <div className="hero-ctas"><a className="btn btn--primary" href="#work">Explore my work <ArrowDownRight size={18}/></a><a className="btn btn--outline" href="#contact">Get in touch <ArrowUpRight size={18}/></a></div>
            <div className="hero-socials"><span>FIND ME ON</span><a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href={'mailto:' + EMAIL} aria-label="Email"><Mail size={18}/></a></div>
          </div>
          <div className="hero-art" aria-label="Portrait of Sanjoy Rozario">
            <div className="portrait-backdrop"><div className="portrait-ring portrait-ring--one" /><div className="portrait-ring portrait-ring--two" /><div className="portrait-gridlines" /><span className="portrait-side-label">MADE WITH CURIOSITY © 2026</span><span className="portrait-index">01 / 05</span></div>
            <div className="portrait-frame">
              <img src={BASE+'sanjoy-cutout.webp'} className="portrait-img" alt="Sanjoy Rozario" loading="eager" decoding="async" fetchPriority="high" onError={e => { e.currentTarget.onerror=null; e.currentTarget.src='https://avatars.githubusercontent.com/u/174590991?v=4'; e.currentTarget.classList.add('portrait-img--fallback'); }} />
            </div>
            <div className="portrait-float"><span className="portrait-float-icon"><Sparkles size={17}/></span><span>BUILDING WITH INTENT<br/><strong>One idea at a time.</strong></span><ArrowUpRight size={16}/></div>
            <div className="portrait-dot portrait-dot--one" /><div className="portrait-dot portrait-dot--two" />
          </div>
        </div>
        <div className="hero-footer container"><span>SCROLL TO EXPLORE <ArrowDownRight size={15}/></span><span>DESIGN × DEVELOPMENT × RESEARCH</span></div>
      </section>

      <div className="ticker"><div className="container ticker-inner"><span>FULL-STACK DEVELOPMENT</span><span className="ticker-star">✳</span><span>APPLIED AI</span><span className="ticker-star">✳</span><span>THOUGHTFUL PRODUCTS</span><span className="ticker-star">✳</span><span>CONTINUOUS LEARNING</span></div></div>

      <section id="about" className="section section--about">
        <div className="container">
          <div className="section-top reveal"><span className="section-number">01 / THE PERSON</span><span className="section-side-note">AN INTRODUCTION <ArrowDownRight size={15}/></span></div>
          <div className="about-grid">
            <div className="reveal"><h2 className="display-title">A little <em>curiosity.</em><br />A lot of <span>building.</span></h2><div className="about-decoration"><span>SR</span><div className="about-deco-lines"><i/><i/><i/></div></div></div>
            <div className="about-right reveal"><span className="mini-label">NICE TO MEET YOU</span><p className="about-lead">I like turning complex ideas into interfaces and systems people can actually use.</p><p>I'm Sanjoy, a Computer Science and Engineering undergraduate at BRAC University. My work spans React and Next.js frontends, Django and Node.js APIs, and database-backed products—from financial tools to community platforms.</p><p>Alongside full-stack development, I'm exploring applied AI through computer vision and pediatric medical-image segmentation research.</p><a className="text-link" href={BASE+'resume.html'} target="_blank" rel="noreferrer">Read my résumé <ArrowUpRight size={17}/></a></div>
          </div>
          <div className="focus-grid">
            <div className="focus-card reveal"><span className="focus-index">/ 01</span><Code2 size={29} strokeWidth={1.5}/><h3>Build end-to-end.</h3><p>From intuitive React interfaces to reliable backend APIs and databases.</p></div>
            <div className="focus-card reveal"><span className="focus-index">/ 02</span><Layers3 size={29} strokeWidth={1.5}/><h3>Think in systems.</h3><p>Make product choices that consider people, functionality, and the details.</p></div>
            <div className="focus-card reveal"><span className="focus-index">/ 03</span><BrainCircuit size={29} strokeWidth={1.5}/><h3>Keep exploring.</h3><p>Experiment with machine learning, computer vision, and medical AI workflows.</p></div>
          </div>
        </div>
      </section>

      <section id="work" className="section section--work">
        <div className="container">
          <div className="section-top reveal"><span className="section-number">02 / SELECTED WORK</span><span className="section-side-note">2025 — 2026 <ArrowDownRight size={15}/></span></div>
          <div className="work-heading reveal"><div><h2 className="display-title">Proof is in<br /><em>the projects.</em></h2><p>A few things I've built, co-built, and researched. Each one taught me something different.</p></div><div className="work-count"><strong>05</strong><span>FEATURED<br/>ENTRIES</span></div></div>
          <div className="filter-bar" role="group" aria-label="Filter projects">{['All','Full-stack','AI / Research','Interactive'].map(f=><button key={f} type="button" className={'filter-tab '+(filter===f?'active':'')} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}{f==='All'&&<span>05</span>}</button>)}</div>
          <div className="project-grid">{shown.map((project,i)=><ProjectCard key={project.id} project={project} featured={filter==='All'&&i===0}/>)}</div>
          <div className="work-bottom reveal"><span>MORE EXPERIMENTS LIVE ON GITHUB</span><a className="text-link" href={GITHUB} target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={18}/></a></div>
        </div>
      </section>

      <section id="skills" className="section section--skills">
        <div className="container">
          <div className="section-top reveal"><span className="section-number">03 / MY TOOLKIT</span><span className="section-side-note">WHAT I WORK WITH <ArrowDownRight size={15}/></span></div>
          <div className="skills-header reveal"><h2 className="display-title">Tools of <em>the trade.</em></h2><p>Languages, frameworks, and concepts I use to turn ideas into something tangible.</p></div>
          <div className="skills-list">{groups.map((g,i)=><div className="skills-row reveal" key={g.name}><div className="skills-category"><span>0{i+1}</span><h3>{g.name}</h3></div><div className="skills-tags">{g.items.map(t=><span key={t}>{t}</span>)}</div><span className="skills-count">{g.count}</span></div>)}</div>
          <div className="skills-footnote"><Sparkles size={16}/> Always learning. Always evolving.</div>
        </div>
      </section>

      <section id="journey" className="section section--journey">
        <div className="container">
          <div className="section-top reveal"><span className="section-number">04 / THE JOURNEY</span><span className="section-side-note">LEARNING IN MOTION <ArrowDownRight size={15}/></span></div>
          <div className="journey-grid"><div className="reveal"><h2 className="display-title">Still writing<br /><em>the story.</em></h2><p className="journey-intro">Growing through coursework, research, and projects that tackle real problems.</p><div className="journey-symbol"><GraduationCap size={87} strokeWidth={0.8}/></div></div>
          <div className="timeline">
            <div className="timeline-entry reveal"><span className="timeline-date">2023 — PRESENT</span><div className="timeline-body"><span className="timeline-icon"><GraduationCap size={19}/></span><h3>B.Sc. in Computer Science & Engineering</h3><p>BRAC University · Dhaka, Bangladesh</p><span className="timeline-extra">CGPA 3.42 / 4.00</span></div></div>
            <div className="timeline-entry reveal"><span className="timeline-date">2025 / RESEARCH</span><div className="timeline-body"><span className="timeline-icon"><BrainCircuit size={18}/></span><h3>Pediatric Brain Tumor MRI Segmentation</h3><p>BraTS-PED 2025 challenge work: multi-modal MRI data preparation, segmentation baseline analysis, and quantitative evaluation.</p><a href="https://github.com/Sanjoyte/BraTS-PE-2025-Challenge" target="_blank" rel="noreferrer" className="timeline-link">Research repository <ArrowUpRight size={15}/></a></div></div>
            <div className="timeline-entry reveal"><span className="timeline-date">PROJECT SHOWCASE</span><div className="timeline-body"><span className="timeline-icon"><BookOpen size={18}/></span><h3>National Revenue Conference</h3><p>Co-developed a scene-based educational tax game showcased at the conference as a team project.</p></div></div>
          </div></div>
        </div>
      </section>

      <section id="contact" className="contact-section"><div className="container">
        <div className="section-top contact-top reveal"><span className="section-number">05 / LET'S CONNECT</span><span className="section-side-note">ONE GOOD IDEA AWAY <ArrowUpRight size={15}/></span></div>
        <div className="contact-content reveal"><span className="contact-kicker"><span className="live-dot"/> OPEN TO CONVERSATIONS & OPPORTUNITIES</span><h2>Have an idea?<br /><em>Let's make it real.</em></h2><p>Whether it's a project, a role, or an interesting problem worth exploring, I'd love to hear about it.</p><a className="contact-main-link" href={'mailto:'+EMAIL}>Let's talk <MoveUpRight size={42}/></a></div>
        <div className="contact-bottom"><div><span className="contact-bottom-label">EMAIL ME</span><button className="copy-email" onClick={copyEmail}>{EMAIL} {copied?<Check size={16}/>:<Copy size={16}/>}</button>{copied&&<span className="copied-label" role="status">Copied!</span>}</div><div><span className="contact-bottom-label">FIND ME HERE</span><div className="contact-social"><a href={GITHUB} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15}/></a><a href={BASE+'resume.html'} target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={15}/></a></div></div></div>
      </div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><a href="#top" className="footer-logo">sanjoy<span>.</span></a><span>© {new Date().getFullYear()} SANJOY ROZARIO. BUILT WITH CURIOSITY.</span><a href="#top">BACK TO TOP <ArrowRight size={15}/></a></div></footer>
  </div>;
}
