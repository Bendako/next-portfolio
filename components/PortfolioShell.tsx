"use client";

import { useEffect, useRef, useState } from "react";
import { Languages, Moon, Sun, X } from "lucide-react";
import { portfolioContent } from "@/data/portfolio";
import { useLocale } from "@/components/Locale-Provider";
import { useTheme } from "@/components/Theme-Provider";

export default function PortfolioShell() {
  const { locale, setLocale } = useLocale();
  const { theme, setTheme } = useTheme();
  const content = portfolioContent[locale];
  const [reviewOpen, setReviewOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (!reviewOpen) {
      if (wasOpenRef.current) openerRef.current?.focus();
      wasOpenRef.current = false;
      return;
    }

    wasOpenRef.current = true;
    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'button, [href], [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setReviewOpen(false);
      if (event.key !== "Tab" || !focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [reviewOpen]);
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
            <a href="#process">{content.nav.process}</a>
          </nav>
          <div className="header-controls">
            <button
              className="control-button"
              type="button"
              onClick={() => setLocale(locale === "he" ? "en" : "he")}
            >
              <Languages aria-hidden="true" />
              <span>{content.controls.switchLanguage}</span>
            </button>
            <button
              className="control-button icon-button"
              type="button"
              aria-label={
                theme === "dark" ? content.controls.switchToLight : content.controls.switchToDark
              }
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
      <main id="main-content">
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
                <a className="button primary-button" href="#what">
                  {content.hero.primaryCta}
                </a>
                <button
                  ref={openerRef}
                  className="button secondary-button"
                  type="button"
                  onClick={() => setReviewOpen(true)}
                >
                  {content.hero.secondaryCta}
                </button>
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
      </main>
      <footer className="site-footer">
        <div className="shell-container footer-inner">
          <strong>{content.footer.identity}</strong>
          <span>{content.footer.note}</span>
        </div>
      </footer>
      {reviewOpen ? (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setReviewOpen(false);
          }}
        >
          <div
            ref={dialogRef}
            className="review-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-title"
            aria-describedby="review-description"
          >
            <button
              className="modal-close"
              type="button"
              aria-label={content.review.close}
              onClick={() => setReviewOpen(false)}
            >
              <X aria-hidden="true" />
            </button>
            <p className="eyebrow">{content.review.eyebrow}</p>
            <h2 id="review-title">{content.review.title}</h2>
            <p id="review-description">{content.review.body}</p>
            <button
              className="button primary-button"
              type="button"
              onClick={() => setReviewOpen(false)}
            >
              {content.review.cta}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
