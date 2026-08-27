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

test("home shell exposes the founder-led BTD structure", () => {
  const page = read("app/page.tsx");
  const shell = read("components/PortfolioShell.tsx");
  const content = read("data/portfolio.ts");

  assert.match(page, /PortfolioShell/);
  assert.equal((shell.match(/<header\b/g) ?? []).length, 1);
  assert.equal((shell.match(/<footer\b/g) ?? []).length, 1);
  assert.match(shell, /id="what"/);
  assert.match(shell, /id="engines"/);
  assert.match(shell, /id="work"/);
  assert.match(shell, /id="process"/);
  assert.match(shell, /id="founder"/);
  assert.match(shell, /id="contact"/);
  assert.match(shell, /data-engine-card/);
  assert.match(shell, /data-work-card/);
  assert.match(shell, /data-process-step/);
  assert.doesNotMatch(shell, /<form\b|<input\b|<textarea\b/);
  assert.match(content, /BTD \/ PRODUCT & TECHNOLOGY/);
  assert.match(content, /מוצרים בבעלות BTD/);
  assert.match(content, /מערכות end-to-end נבחרות/);
  assert.match(content, /בונים מוצרים דיגיטליים שעובדים בעולם האמיתי\./);
});

test("typed bilingual content has two engines, five work items, and four process steps per locale", () => {
  const content = read("data/portfolio.ts");
  assert.match(content, /satisfies Record<Locale, PortfolioContent>/);

  for (const locale of ["he", "en"]) {
    const localeBlock = content
      .split(`${locale}: {`)[1]
      ?.split(locale === "he" ? "\n  en: {" : "\n} satisfies")[0];
    assert.ok(localeBlock, `missing ${locale} locale`);
    assert.equal((localeBlock.match(/engineId:/g) ?? []).length, 2);
    assert.equal((localeBlock.match(/workId:/g) ?? []).length, 5);
    assert.equal((localeBlock.match(/stepId:/g) ?? []).length, 4);
  }
});

test("document keeps a stable RTL layout and safely persists locale and theme", () => {
  const layout = read("app/layout.tsx");
  const globals = read("app/globals.css");
  const localeProvider = read("components/Locale-Provider.tsx");
  const themeProvider = read("components/Theme-Provider.tsx");

  assert.match(layout, /<html lang="he" dir="rtl"/);
  assert.match(layout, /portfolio-locale/);
  assert.match(layout, /prefers-color-scheme: dark/);
  assert.match(
    localeProvider,
    /savedLocale === 'en' \|\| savedLocale === 'he'/,
  );
  assert.doesNotMatch(localeProvider, /document\.documentElement\.dir/);
  assert.match(globals, /html\[lang='en'\] \.hero-copy/);
  assert.match(
    themeProvider,
    /savedTheme === 'dark' \|\| savedTheme === 'light'/,
  );
});

test("founder identity and contact path are present without legacy positioning", () => {
  const content = read("data/portfolio.ts");
  const shell = read("components/PortfolioShell.tsx");

  assert.match(content, /בן דאקו/);
  assert.match(content, /Ben Dako/);
  assert.match(content, /bendk1994@gmail\.com/);
  assert.match(content, /github\.com\/Bendako/);
  assert.match(content, /linkedin\.com\/in\/bendako/);
  assert.match(shell, /mailto:\$\{founderLinks\.email\}/);
  assert.doesNotMatch(
    appSource(),
    /Hybrid Product Builder|SYSTEMS \/ BTD|נווה בשדרה|AI-agent\/SBEA/i,
  );
});
