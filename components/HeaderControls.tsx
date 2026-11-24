"use client";

import { Languages, Moon, Sun } from "lucide-react";
import { useLocale } from "@/components/Locale-Provider";
import { useTheme } from "@/components/Theme-Provider";
import type { Locale, PortfolioContent } from "@/data/portfolio";

export function HeaderControls({ locale, controls }: { locale: Locale; controls: PortfolioContent["controls"] }) {
  const { setLocale } = useLocale();
  const { theme, setTheme } = useTheme();
  return <div className="header-controls">
    <button className="control-button" type="button" onClick={() => setLocale(locale === "he" ? "en" : "he")}>
      <Languages aria-hidden="true" /><span>{controls.switchLanguage}</span>
    </button>
    <button className="control-button icon-button" type="button"
      aria-label={theme === "dark" ? controls.switchToLight : controls.switchToDark}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </button>
  </div>;
}
