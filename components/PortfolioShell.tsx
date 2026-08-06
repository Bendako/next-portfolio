"use client"

import { ArrowDown, ArrowUpLeft, Github, Languages, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import { contactLinks, portfolioContent } from '@/data/portfolio'
import { useLocale } from '@/components/Locale-Provider'
import { useTheme } from '@/components/Theme-Provider'

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span dir="auto">{eyebrow}</span></p>
        <h2 dir="auto">{title}</h2>
      </div>
      {description ? <p className="section-description" dir="auto">{description}</p> : null}
    </div>
  )
}

function SystemDiagram({ nodes, label }: { nodes: string[]; label: string }) {
  return (
    <div className="system-diagram" role="img" aria-label={label}>
      {nodes.map((node, index) => (
        <div className={index === 1 || index === nodes.length - 1 ? 'diagram-node active' : 'diagram-node'} key={node}>
          {node}
        </div>
      ))}
    </div>
  )
}

export default function PortfolioShell({ currentYear }: { currentYear: number }) {
  const { locale, setLocale } = useLocale()
  const { theme, setTheme } = useTheme()
  const content = portfolioContent[locale]

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content"><span dir="auto">{content.skipLink}</span></a>

      <header className="site-header">
        <div className="shell-container header-inner">
          <a className="brand" href="#top" aria-label={content.brandLabel}>
            <span className="signal-dot" aria-hidden="true" />
            <span className="brand-name" dir="ltr">SYSTEMS <span className="brand-suffix">/ BTD</span></span>
          </a>
          <nav className="site-nav" aria-label={locale === 'he' ? 'ניווט ראשי' : 'Primary navigation'}>
            <a href="#work"><span dir="auto">{content.nav.work}</span></a>
            <a href="#about"><span dir="auto">{content.nav.about}</span></a>
            <a href="#contact"><span dir="auto">{content.nav.contact}</span></a>
          </nav>
          <div className="header-controls">
            <button className="control-button language-button" type="button" onClick={() => setLocale(locale === 'he' ? 'en' : 'he')}>
              <Languages aria-hidden="true" />
              <span dir="auto">{content.controls.switchLanguage}</span>
            </button>
            <button
              className="control-button icon-button"
              type="button"
              aria-label={theme === 'dark' ? content.controls.switchToLight : content.controls.switchToDark}
              title={theme === 'dark' ? content.controls.switchToLight : content.controls.switchToDark}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" id="top">
          <div className="shell-container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span className="signal-dot" aria-hidden="true" /><span dir="auto">{content.hero.eyebrow}</span></p>
              <h1 dir="auto">{content.hero.title}<br /><span>{content.hero.accent}</span></h1>
              <p className="hero-description" dir="auto">{content.hero.description}</p>
              <div className="hero-actions">
                <a className="button primary-button" href="#work"><span dir="auto">{content.hero.primaryCta}</span><ArrowDown aria-hidden="true" /></a>
                <a className="button secondary-button" href="#contact"><span dir="auto">{content.hero.secondaryCta}</span></a>
              </div>
            </div>

            <div className="console-panel" aria-label={content.hero.consoleLabel}>
              <div className="console-bar">
                <span>portfolio.systems / illustrative</span>
                <span className="console-lights" aria-hidden="true"><i /><i /><i /></span>
              </div>
              <div className="console-content">
                <p className="console-caption" dir="auto">{content.hero.consoleCaption}</p>
                {content.hero.consoleRows.map((row, index) => (
                  <div className="console-row" key={row.signal}>
                    <span className="console-index">0{index + 1}</span>
                    <span className="console-signal" dir="auto">{row.signal}</span>
                    <span className="console-detail" dir="auto">{row.detail}</span>
                    <span className="console-state" dir="auto">{row.state}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" aria-labelledby="capabilities-title">
          <div className="shell-container">
            <div id="capabilities-title">
              <SectionHeading {...content.capabilitiesIntro} />
            </div>
            <div className="capabilities-grid">
              {content.capabilities.map((capability) => (
                <article className="capability-panel" data-capability-panel key={capability.capabilityId}>
                  <span className="panel-index">{capability.index}</span>
                  <h3 dir="auto">{capability.title}</h3>
                  <p dir="auto">{capability.description}</p>
                  <div className="evidence-block">
                    <span dir="auto">{capability.evidenceLabel}</span>
                    <p dir="auto">{capability.evidence}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section work-section" id="work" aria-labelledby="work-title">
          <div className="shell-container">
            <div id="work-title"><SectionHeading {...content.workIntro} /></div>
            <div className="work-grid">
              {content.works.map((work) => (
                <article className="work-card" data-work-card key={work.workId}>
                  <div className="work-meta"><span dir="auto">{work.index} / {work.category}</span><strong dir="auto">{work.status}</strong></div>
                  <h3 dir="auto">{work.title}</h3>
                  <div className="work-narrative">
                    <div><span dir="auto">{content.workLabels.context}</span><p dir="auto">{work.context}</p></div>
                    <div><span dir="auto">{content.workLabels.contribution}</span><p dir="auto">{work.contribution}</p></div>
                    <div><span dir="auto">{content.workLabels.boundary}</span><p dir="auto">{work.boundary}</p></div>
                  </div>
                  <SystemDiagram nodes={work.diagram} label={`${work.title} — ${content.workLabels.abstraction}`} />
                  <ul className="tag-list" aria-label={locale === 'he' ? 'יכולות וטכנולוגיות' : 'Capabilities and technologies'}>
                    {work.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section public-work-section" aria-labelledby="public-work-title">
          <div className="shell-container">
            <div id="public-work-title"><SectionHeading {...content.publicWorkIntro} /></div>
            <div className="public-work-list">
              {content.publicWorks.map((project) => (
                <article className="public-work-row" data-public-project key={project.publicWorkId}>
                  <span className="public-work-index">{project.index}</span>
                  <div className="public-work-copy">
                    <div className="public-work-meta">
                      <span dir="auto">{project.category}</span>
                      <strong dir="auto">{project.status}</strong>
                    </div>
                    <h3 dir="auto">{project.title}</h3>
                    <p dir="auto">{project.description}</p>
                  </div>
                  <ul className="tag-list" aria-label={locale === 'he' ? 'יכולות וטכנולוגיות' : 'Capabilities and technologies'}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <div className="public-work-links">
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <Github aria-hidden="true" /><span dir="auto">{content.publicWorkLabels.source}</span><ArrowUpLeft aria-hidden="true" />
                    </a>
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <span dir="auto">{content.publicWorkLabels.live}</span><ArrowUpLeft aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section about-section" id="about" aria-labelledby="about-title">
          <div className="shell-container about-layout">
            <p className="eyebrow"><span dir="auto">{content.about.eyebrow}</span></p>
            <div>
              <h2 id="about-title" dir="auto">{content.about.title}</h2>
              <p dir="auto">{content.about.body}</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell-container contact-inner">
            <p className="eyebrow"><span dir="auto">{content.contact.eyebrow}</span></p>
            <h2 id="contact-title" dir="auto">{content.contact.title}</h2>
            <p dir="auto">{content.contact.body}</p>
            <div className="contact-actions">
              <a className="button primary-button" href={contactLinks.email}><Mail aria-hidden="true" /><span dir="auto">{content.contact.emailCta}</span></a>
              <a className="social-link" href={contactLinks.github} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" /><span dir="auto">{content.contact.githubLabel}</span><ArrowUpLeft aria-hidden="true" /></a>
              <a className="social-link" href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" /><span dir="auto">{content.contact.linkedinLabel}</span><ArrowUpLeft aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell-container footer-inner">
          <div><strong dir="auto">{content.footer.identity}</strong><p dir="auto">{content.footer.note}</p></div>
          <div className="footer-links">
            <a href={contactLinks.email}>EMAIL</a>
            <a href={contactLinks.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
            <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          </div>
          <span>© {currentYear}</span>
        </div>
      </footer>
    </div>
  )
}
