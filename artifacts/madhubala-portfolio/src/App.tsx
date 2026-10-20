import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Database,
  Download,
  Github,
  Linkedin,
  Menu,
  PanelsTopLeft,
  Terminal,
  X,
} from 'lucide-react';
import { portfolio } from './data/portfolio';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
];

function SkillIcon({ icon }: { icon: string }) {
  if (icon === 'database') return <Database size={17} strokeWidth={1.7} />;
  if (icon === 'panels') return <PanelsTopLeft size={17} strokeWidth={1.7} />;
  if (icon === 'terminal') return <Terminal size={17} strokeWidth={1.7} />;
  return <Braces size={17} strokeWidth={1.7} />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="topbar">
        <div className="site-shell nav-wrap">
          <a className="brand" href="#home" aria-label={`${portfolio.name} home`} data-testid="link-home-brand">
            <span className="brand-mark">{portfolio.monogram}</span>
            <span>{portfolio.name}</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} data-testid={`link-nav-${item.label.toLowerCase()}`}>
                {item.label}
              </a>
            ))}
            <a className="nav-contact" href="#contact" data-testid="link-nav-contact">Let&apos;s talk</a>
          </nav>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
          <div className="mobile-menu">
            {[{ label: 'Home', href: '#home' }, ...navigation, { label: 'Contact', href: '#contact' }].map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu} data-testid={`link-mobile-${item.label.toLowerCase()}`}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className="site-shell hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow" data-testid="text-hero-eyebrow">A developer who builds with purpose</p>
            <h1 id="hero-title" data-testid="text-hero-name">
              <span className="hero-name">{portfolio.name}</span>
            </h1>
            <p className="hero-role" data-testid="text-hero-role">{portfolio.role} · Python / APIs / SQL</p>
            <p className="hero-description" data-testid="text-hero-introduction">{portfolio.introduction}</p>
            <div className="hero-actions">
              <a className="button-primary" href="#projects" data-testid="link-explore-projects">
                Explore my work <ArrowDown size={15} />
              </a>
              <a className="button-quiet" href="#contact" data-testid="link-hero-contact">
                Get in touch <ArrowRight size={15} />
              </a>
            </div>
            <p className="hero-note"><span>Currently</span> building, learning, and getting better at the details.</p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit">
              <div className="orbit-path" />
              <span className="orbit-dot" />
              <div className="code-card">
                <div className="code-top"><i /><i /><i /></div>
                <div className="code-body">
                  <span className="code-line"><span className="code-muted">01</span> <span className="code-key">from</span> fastapi <span className="code-key">import</span> FastAPI</span>
                  <span className="code-line"><span className="code-muted">02</span></span>
                  <span className="code-line"><span className="code-muted">03</span> app = <span className="code-fn">FastAPI</span>()</span>
                  <span className="code-line"><span className="code-muted">04</span></span>
                  <span className="code-line"><span className="code-muted">05</span> <span className="code-string">@app.get</span>(<span className="code-string">&quot;/ideas&quot;</span>)</span>
                  <span className="code-line"><span className="code-muted">06</span> <span className="code-key">def</span> <span className="code-fn">build</span>():</span>
                  <span className="code-line"><span className="code-muted">07</span> &nbsp;&nbsp;<span className="code-key">return</span> <span className="code-string">&quot;something useful&quot;</span></span>
                </div>
              </div>
            </div>
            <div className="floating-tag">small steps · solid systems</div>
          </div>
          <div className="scroll-cue" aria-hidden="true">Scroll to explore</div>
        </section>

        <section className="section section-divider" id="about" aria-labelledby="about-title">
          <div className="site-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">01 / A little about me</p>
                <h2 id="about-title" data-testid="heading-about">Built from curiosity.</h2>
              </div>
              <p className="heading-aside">A practical mindset, a growing toolkit, and a soft spot for clean solutions.</p>
            </div>
            <div className="about-layout">
              <div className="about-index">WHO I AM&nbsp; — &nbsp;01</div>
              <div>
                <p className="about-statement" dangerouslySetInnerHTML={{ __html: portfolio.aboutHeadline }} data-testid="text-about-headline" />
                <p className="about-copy" data-testid="text-about-description">{portfolio.about}</p>
                <div className="degree-strip" data-testid="content-degree">
                  <div className="degree-icon"><BookOpen size={18} strokeWidth={1.7} /></div>
                  <div>
                    <div className="degree-title">{portfolio.degree}</div>
                    <div className="degree-caption">{portfolio.degreeNote}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-divider" id="skills" aria-labelledby="skills-title">
          <div className="site-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">02 / What I work with</p>
                <h2 id="skills-title" data-testid="heading-skills">Tools for the job.</h2>
              </div>
              <p className="heading-aside">A grounded foundation across APIs, data, and the interfaces that bring them together.</p>
            </div>
            <div className="skills-grid" data-testid="list-skills">
              {portfolio.skills.map((group, index) => (
                <article className={`skill-group${group.featured ? ' featured' : ''}`} key={group.title} data-testid={`card-skill-${index}`}>
                  <div className="skill-group-head">
                    <span className="skill-icon"><SkillIcon icon={group.icon} /></span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="skill-list">
                    {group.skills.map((skill) => <span className="skill-chip" key={skill} data-testid={`skill-${skill.toLowerCase().replaceAll(' ', '-')}`}>{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-divider" id="projects" aria-labelledby="projects-title">
          <div className="site-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">03 / Selected projects</p>
                <h2 id="projects-title" data-testid="heading-projects">Ideas made tangible.</h2>
              </div>
              <p className="heading-aside">A few problem spaces I have explored through focused, human-centered tools.</p>
            </div>
            <div className="projects-list" data-testid="list-projects">
              {portfolio.projects.map((project) => (
                <article className="project-card" key={project.id} data-testid={`card-project-${project.id}`}>
                  <span className="project-number">{project.number}</span>
                  <div>
                    <h3 className="project-title" data-testid={`text-project-title-${project.id}`}>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                  </div>
                  {project.url ? (
                    <a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} data-testid={`link-project-${project.id}`}>
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="project-link disabled" aria-label="Project link not provided" title="Project link not provided">
                      <ArrowUpRight size={16} />
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-divider" id="resume" aria-labelledby="resume-title">
          <div className="site-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">04 / The details</p>
                <h2 id="resume-title" data-testid="heading-resume">A little more on paper.</h2>
              </div>
            </div>
            <div className="resume-panel" data-testid="content-resume">
              <div className="resume-copy">
                <h3>Resume</h3>
                <p>Want a closer look at my experience and education? My resume will be available here once I add the file.</p>
                <div className="resume-status" data-testid="status-resume">
                  {portfolio.resumeUrl ? 'Resume available' : 'Resume file not added yet'}
                </div>
              </div>
              {portfolio.resumeUrl ? (
                <a className="button-primary" href={portfolio.resumeUrl} target="_blank" rel="noreferrer" data-testid="link-resume-download">
                  View resume <Download size={15} />
                </a>
              ) : (
                <span className="button-quiet" aria-disabled="true" data-testid="status-resume-unavailable">Not available yet</span>
              )}
            </div>
          </div>
        </section>

        <section className="section section-divider" id="contact" aria-labelledby="contact-title">
          <div className="site-shell contact-layout">
            <div className="contact-title">
              <p className="section-kicker">05 / Open to good conversations</p>
              <h2 id="contact-title" data-testid="heading-contact">Have a problem worth solving?</h2>
              <p>I would love to hear about it. Add a contact link in the portfolio settings and this is where we can connect.</p>
            </div>
            <div className="contact-card" data-testid="content-contact">
              <div className="contact-card-label">Find me here</div>
              {portfolio.contact.email ? (
                <a className="contact-option is-link" href={`mailto:${portfolio.contact.email}`} data-testid="link-contact-email">
                  <span>Email</span><span>{portfolio.contact.email} <ArrowUpRight size={13} /></span>
                </a>
              ) : (
                <div className="contact-option is-disabled" data-testid="status-contact-email"><span>Email</span><span>Not provided</span></div>
              )}
              {portfolio.contact.linkedin ? (
                <a className="contact-option is-link" href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" data-testid="link-contact-linkedin">
                  <span><Linkedin size={14} /> LinkedIn</span><span>Visit profile <ArrowUpRight size={13} /></span>
                </a>
              ) : (
                <div className="contact-option is-disabled" data-testid="status-contact-linkedin"><span><Linkedin size={14} /> LinkedIn</span><span>Not provided</span></div>
              )}
              {portfolio.contact.github ? (
                <a className="contact-option is-link" href={portfolio.contact.github} target="_blank" rel="noreferrer" data-testid="link-contact-github">
                  <span><Github size={14} /> GitHub</span><span>Visit profile <ArrowUpRight size={13} /></span>
                </a>
              ) : (
                <div className="contact-option is-disabled" data-testid="status-contact-github"><span><Github size={14} /> GitHub</span><span>Not provided</span></div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="site-shell footer-inner">
          <span>© {new Date().getFullYear()} {portfolio.name}</span>
          <a href="#home" data-testid="link-back-to-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
