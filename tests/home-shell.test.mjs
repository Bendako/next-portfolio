import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const appSource = () =>
  [
    "app/page.tsx",
    "app/layout.tsx",
    "app/not-found.tsx",
    "components/PortfolioShell.tsx",
    "data/portfolio.ts",
  ]
    .map(read)
    .join("\n");

test("home shell exposes the approved BTD-only structure", () => {
  const page = read("app/page.tsx");
  const shell = read("components/PortfolioShell.tsx");
  const content = read("data/portfolio.ts");

  assert.match(page, /PortfolioShell/);
  assert.equal((shell.match(/<header\b/g) ?? []).length, 1);
  assert.equal((shell.match(/<footer\b/g) ?? []).length, 1);
  assert.match(shell, /id="what"/);
  assert.match(shell, /id="engines"/);
  assert.match(shell, /id="process"/);
  assert.match(shell, /data-engine-card/);
  assert.match(shell, /data-process-step/);
  assert.match(shell, /aria-modal="true"/);
  assert.doesNotMatch(
    shell,
    /<form\b|<input\b|<textarea\b|mailto:|github\.com|linkedin\.com/,
  );
  assert.match(content, /BTD \/ PRODUCT & TECHNOLOGY/);
  assert.match(content, /מוצרים בבעלות BTD/);
  assert.match(content, /מערכות end-to-end נבחרות/);
  assert.match(content, /בונים מוצרים דיגיטליים שעובדים בעולם האמיתי\./);
});

test("typed bilingual content has two engines and four process steps per locale", () => {
  const content = read("data/portfolio.ts");
  assert.match(content, /satisfies Record<Locale, PortfolioContent>/);

  for (const locale of ["he", "en"]) {
    const localeBlock = content
      .split(`${locale}: {`)[1]
      ?.split(locale === "he" ? "\n  en: {" : "\n} satisfies")[0];
    assert.ok(localeBlock, `missing ${locale} locale`);
    assert.equal((localeBlock.match(/engineId:/g) ?? []).length, 2);
    assert.equal((localeBlock.match(/stepId:/g) ?? []).length, 4);
  }
});

test("document defaults to Hebrew RTL and safely persists locale and theme", () => {
  const layout = read("app/layout.tsx");
  const localeProvider = read("components/Locale-Provider.tsx");
  const themeProvider = read("components/Theme-Provider.tsx");

  assert.match(layout, /<html lang="he" dir="rtl"/);
  assert.match(layout, /portfolio-locale/);
  assert.match(layout, /prefers-color-scheme: dark/);
  assert.match(
    localeProvider,
    /savedLocale === 'en' \|\| savedLocale === 'he'/,
  );
  assert.match(localeProvider, /document\.documentElement\.dir/);
  assert.match(
    themeProvider,
    /savedTheme === 'dark' \|\| savedTheme === 'light'/,
  );
});

test("app-facing source contains no person-led or evidence-led legacy positioning", () => {
  assert.doesNotMatch(
    appSource(),
    /Ben Dako|BEN\.DAKO|בן\s*(?:דקו|דאקו)|\bBD\b|Hybrid Product Builder|נווה בשדרה|AI-agent\/SBEA|LinkedIn|GitHub|mailto:|founder/i,
  );
});
