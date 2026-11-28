import { ArrowUpRight, Mail } from "lucide-react";
import { founderLinks, portfolioContent, type Locale, type PortfolioContent } from "@/data/portfolio";
import { HeaderControls } from "@/components/HeaderControls";
import { CopyEmail } from "@/components/CopyEmail";

export default function PortfolioShell({ locale }: { locale: Locale }) {
  const content: PortfolioContent = portfolioContent[locale];
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {content.skipLink}
      </a>
      <header className="site-header">
        <div className="shell-container header-inner">
          <a className="brand" href="#top" aria-label={content.brandLabel}>
            <span className="signal-dot" aria-hidden="true" />
            <span>BTD</span>
            <span className="brand-suffix">/ PRODUCT &amp; TECHNOLOGY</span>
          </a>
          <nav
            className="site-nav"
            aria-label={locale === "he" ? "ניווט ראשי" : "Primary navigation"}
          >
            <a href="#what">{content.nav.what}</a>
            <a href="#engines">{content.nav.engines}</a>
            <a href="#work">{content.nav.work}</a>
            <a href="#process">{content.nav.process}</a>
            <a href="#contact">{content.nav.contact}</a>
          </nav>
          <HeaderControls locale={locale} controls={content.controls} />
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        <section className="hero-section" id="top">
          <div className="shell-container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="signal-dot" aria-hidden="true" />
                {content.hero.eyebrow}
              </p>
              <h1>{content.hero.title}</h1>
              <p className="hero-description">{content.hero.description}</p>
              <div className="hero-actions">
                <a className="button primary-button" href="#work">
                  {content.hero.primaryCta}
                </a>
                <a className="button secondary-button" href="#contact">
                  {content.hero.secondaryCta}
                </a>
              </div>
            </div>
            <div className="hero-mark" aria-hidden="true">
              <span>BTD</span>
              <i />
              <i />
              <i />
            </div>
          </div>
        </section>
        <section className="content-section" id="what" aria-labelledby="what-title">
          <div className="shell-container prose-section">
            <p className="eyebrow">{content.what.eyebrow}</p>
            <h2 id="what-title">{content.what.title}</h2>
            <p>{content.what.body}</p>
          </div>
        </section>
        <section className="content-section" id="engines" aria-labelledby="engines-title">
          <div className="shell-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{content.engines.eyebrow}</p>
                <h2 id="engines-title">{content.engines.title}</h2>
              </div>
              <p className="section-description">{content.engines.body}</p>
            </div>
            <div className="engine-grid">
              {content.engines.items.map((engine, index) => (
                <article className="engine-card" data-engine-card key={engine.engineId}>
                  <span className="panel-index">0{index + 1}</span>
                  <h3>{engine.title}</h3>
                  <p>{engine.description}</p>
                  <ul>
                    {engine.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="content-section" id="work" aria-labelledby="work-title">
          <div className="shell-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{content.work.eyebrow}</p>
                <h2 id="work-title">{content.work.title}</h2>
              </div>
              <p className="section-description">{content.work.body}</p>
            </div>
            <div className="work-grid">
              {content.work.items.map((item) => (
                <article className="work-card" data-work-card key={item.workId}>
                  <span className="work-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.caseStudy ? <dl className="work-case-study">
                    {(["problem", "approach", "delivery"] as const).map((key) => (
                      <div key={key}><dt>{content.work.caseLabels[key]}</dt><dd>{item.caseStudy?.[key]}</dd></div>
                    ))}
                  </dl> : null}
                  <div className="work-links">
                    {item.liveUrl ? (
                      <a aria-label={`${item.title} — ${content.work.liveLabel}`} href={item.liveUrl} target="_blank" rel="noreferrer">
                        {content.work.liveLabel}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    ) : null}
                    {item.downloadUrl ? (
                      <a href={item.downloadUrl} target="_blank" rel="noreferrer">
                        {item.downloadLabel}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    ) : null}
                    {item.codeUrl ? (
                      <a aria-label={`${item.title} — ${content.work.codeLabel}`} href={item.codeUrl} target="_blank" rel="noreferrer">
                        {content.work.codeLabel}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className="content-section process-section"
          id="process"
          aria-labelledby="process-title"
        >
          <div className="shell-container">
            <p className="eyebrow">{content.process.eyebrow}</p>
            <h2 id="process-title">{content.process.title}</h2>
            <p className="section-description">{content.process.body}</p>
            <ol className="process-list">
              {content.process.items.map((step, index) => (
                <li data-process-step key={step.stepId}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="content-section" id="founder" aria-labelledby="founder-title">
          <div className="shell-container founder-panel">
            <p className="eyebrow">{content.founder.eyebrow}</p>
            <h2 id="founder-title">{content.founder.title}</h2>
            <p>{content.founder.body}</p>
            <div className="founder-links">
              <a
                className="control-button"
                href={founderLinks.github}
                target="_blank"
                rel="noreferrer"
              >
                {content.founder.githubLabel}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <section className="content-section" id="contact" aria-labelledby="contact-title">
          <div className="shell-container contact-panel">
            <p className="eyebrow">{content.contact.eyebrow}</p>
            <h2 id="contact-title">{content.contact.title}</h2>
            <p>{content.contact.body}</p>
            <p className="contact-email" dir="ltr">
              {founderLinks.email}
            </p>
            <div className="contact-actions">
              <a className="button primary-button" href={`mailto:${founderLinks.email}`}>
                <Mail aria-hidden="true" />
                {content.contact.emailCta}
              </a>
              <CopyEmail email={founderLinks.email} copy={content.contact} />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell-container footer-inner">
          <strong>{content.footer.identity}</strong>
          <span>{content.footer.note}</span>
        </div>
      </footer>
    </div>
  );
}
