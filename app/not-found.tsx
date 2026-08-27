"use client";

import Link from "next/link";
import { Languages, Moon, Sun } from "lucide-react";
import { useLocale } from "@/components/Locale-Provider";
import { useTheme } from "@/components/Theme-Provider";
import { portfolioContent } from "@/data/portfolio";

export default function NotFound() {
  const { locale, setLocale } = useLocale();
  const { theme, setTheme } = useTheme();
  const content = portfolioContent[locale];
  return (
    <main className="not-found-shell">
      <div className="not-found-controls">
        <button
          className="control-button"
          type="button"
          onClick={() => setLocale(locale === "he" ? "en" : "he")}
        >
          <Languages aria-hidden="true" />
          {content.controls.switchLanguage}
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
      <section className="not-found-panel">
        <p className="eyebrow">{content.notFound.eyebrow}</p>
        <h1>{content.notFound.title}</h1>
        <p>{content.notFound.body}</p>
        <Link href="/" className="button primary-button">
          {content.notFound.homeCta}
        </Link>
      </section>
    </main>
  );
}
