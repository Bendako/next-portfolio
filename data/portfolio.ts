export type Locale = "he" | "en";

type Engine = {
  engineId: "owned" | "selected";
  title: string;
  description: string;
  details: string[];
};
type ProcessStep = {
  stepId: "understand" | "sharpen" | "build" | "operate";
  title: string;
  description: string;
};
export type PortfolioContent = {
  skipLink: string;
  brandLabel: string;
  nav: { what: string; engines: string; process: string };
  controls: { switchLanguage: string; switchToDark: string; switchToLight: string };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  what: { eyebrow: string; title: string; body: string };
  engines: { eyebrow: string; title: string; body: string; items: Engine[] };
  process: { eyebrow: string; title: string; body: string; items: ProcessStep[] };
  review: { eyebrow: string; title: string; body: string; cta: string; close: string };
  footer: { identity: string; note: string };
  notFound: { eyebrow: string; title: string; body: string; homeCta: string };
};

export const portfolioContent = {
  he: {
    skipLink: "דילוג לתוכן הראשי",
    brandLabel: "BTD — דף הבית",
    nav: { what: "מה BTD עושה?", engines: "שני מסלולים", process: "איך עובדים" },
    controls: {
      switchLanguage: "English",
      switchToDark: "מעבר לערכת נושא כהה",
      switchToLight: "מעבר לערכת נושא בהירה",
    },
    hero: {
      eyebrow: "PRODUCT & TECHNOLOGY COMPANY",
      title: "בונים מוצרים דיגיטליים שעובדים בעולם האמיתי.",
      description:
        "BTD משלבת שיקול דעת מוצרי, Full Stack, אוטומציה ו־AI תחומים ותפעול — כדי להפוך רעיונות למוצרים ולמערכות פעילות.",
      primaryCta: "להכיר את BTD",
      secondaryCta: "פתיחת סקירה פנימית",
    },
    what: {
      eyebrow: "01 / WHAT BTD DOES",
      title: "מה BTD עושה?",
      body: "BTD בונה ומפעילה מוצרים דיגיטליים בבעלותה, ובמקביל בונה מערכות end-to-end נבחרות עבור צרכים ברורים. בשני המסלולים אנחנו מחברים החלטות מוצר, ביצוע Full Stack, אוטומציה ו־AI תחומים, ותפעול שאפשר להמשיך לשפר.",
    },
    engines: {
      eyebrow: "02 / TWO ENGINES",
      title: "שני מסלולים משלימים",
      body: "אותה דרך עבודה, בשני הקשרים: בעלות ארוכת טווח על מוצר, או בנייה ממוקדת של מערכת נבחרת.",
      items: [
        {
          engineId: "owned",
          title: "מוצרים בבעלות BTD",
          description: "BTD מזהה בעיות, מחדדת הזדמנויות, בונה מוצרים ומפעילה אותם לאורך זמן.",
          details: ["בחירת בעיה והגדרת מוצר", "בנייה, מדידה ותפעול", "שיפור רציף לפי שימוש ולמידה"],
        },
        {
          engineId: "selected",
          title: "מערכות end-to-end נבחרות",
          description:
            "BTD עובדת עם שותפים נבחרים על מערכות שדורשות חיבור בין מוצר, טכנולוגיה ותפעול.",
          details: [
            "הבנת הבעיה והמשתמשים",
            "מערכת מלאה ולא רק שכבת ממשק",
            "גבולות ברורים למסירה ולהמשך",
          ],
        },
      ],
    },
    process: {
      eyebrow: "03 / PROCESS",
      title: "מהבעיה למערכת פעילה",
      body: "תהליך מעשי שמתקדם בשלבים ברורים, עם החלטות, גבולות ובקרה לאורך הדרך.",
      items: [
        {
          stepId: "understand",
          title: "מבינים את הבעיה",
          description: "ממפים צורך, משתמשים, הקשר ואילוצים לפני שמציעים פתרון.",
        },
        {
          stepId: "sharpen",
          title: "מחדדים את המוצר",
          description: "מגדירים מה בונים, למי, מה לא בונים ואיך נדע שהכיוון נכון.",
        },
        {
          stepId: "build",
          title: "בונים ומחברים",
          description:
            "מממשים מוצר ומערכת Full Stack, ומשלבים אוטומציה ו־AI רק היכן שהם משרתים את המטרה.",
        },
        {
          stepId: "operate",
          title: "מפעילים ומשפרים",
          description: "מעלים לתפעול, בודקים את המציאות, ומשפרים את המוצר והמערכת באופן רציף.",
        },
      ],
    },
    review: {
      eyebrow: "INTERNAL REVIEW STATE",
      title: "הסקירה מוכנה להתחלה",
      body: "זהו מצב סקירה פנימי בלבד. אין כאן טופס, איסוף פרטים, שליחה או פעולת קשר.",
      cta: "הבנתי",
      close: "סגירת חלון הסקירה",
    },
    footer: {
      identity: "BTD / PRODUCT & TECHNOLOGY",
      note: "מוצרים בבעלות. מערכות נבחרות. ביצוע ותפעול אחראיים.",
    },
    notFound: {
      eyebrow: "404 / NOT FOUND",
      title: "העמוד הזה לא נמצא",
      body: "הכתובת אינה קיימת. אפשר לחזור לדף הבית ולהמשיך משם.",
      homeCta: "חזרה לדף הבית",
    },
  },
  en: {
    skipLink: "Skip to main content",
    brandLabel: "BTD — homepage",
    nav: { what: "What BTD does", engines: "Two engines", process: "How we work" },
    controls: {
      switchLanguage: "עברית",
      switchToDark: "Switch to dark theme",
      switchToLight: "Switch to light theme",
    },
    hero: {
      eyebrow: "PRODUCT & TECHNOLOGY COMPANY",
      title: "We build digital products that work in the real world.",
      description:
        "BTD combines product judgment, full-stack delivery, bounded automation and AI, and operations to turn ideas into active products and systems.",
      primaryCta: "Meet BTD",
      secondaryCta: "Open internal review",
    },
    what: {
      eyebrow: "01 / WHAT BTD DOES",
      title: "What does BTD do?",
      body: "BTD builds and operates owned digital products, while also building selected end-to-end systems for clear needs. In both tracks, we connect product decisions, full-stack delivery, bounded automation and AI, and operations that can keep improving.",
    },
    engines: {
      eyebrow: "02 / TWO ENGINES",
      title: "Two complementary tracks",
      body: "One way of working in two contexts: long-term ownership of a product, or focused delivery of a selected system.",
      items: [
        {
          engineId: "owned",
          title: "BTD-owned products",
          description:
            "BTD identifies problems, sharpens opportunities, builds products, and operates them over time.",
          details: [
            "Select a problem and define the product",
            "Build, measure, and operate",
            "Continuously improve through use and learning",
          ],
        },
        {
          engineId: "selected",
          title: "Selected end-to-end systems",
          description:
            "BTD works with selected partners on systems that require product, technology, and operations to connect.",
          details: [
            "Understand the problem and users",
            "Build the full system, not just the interface",
            "Set clear boundaries for handoff and continuation",
          ],
        },
      ],
    },
    process: {
      eyebrow: "03 / PROCESS",
      title: "From problem to active system",
      body: "A practical process that moves through clear stages, with decisions, boundaries, and control throughout.",
      items: [
        {
          stepId: "understand",
          title: "Understand the problem",
          description: "Map the need, users, context, and constraints before proposing a solution.",
        },
        {
          stepId: "sharpen",
          title: "Sharpen the product",
          description:
            "Define what to build, for whom, what not to build, and how to know the direction is right.",
        },
        {
          stepId: "build",
          title: "Build and connect",
          description:
            "Deliver the product and full-stack system, adding automation and AI only where they serve the goal.",
        },
        {
          stepId: "operate",
          title: "Operate and improve",
          description:
            "Put it into operation, check reality, and continuously improve the product and system.",
        },
      ],
    },
    review: {
      eyebrow: "INTERNAL REVIEW STATE",
      title: "The review is ready to begin",
      body: "This is an internal review state only. There is no form, data collection, sending, or contact action here.",
      cta: "Understood",
      close: "Close review dialog",
    },
    footer: {
      identity: "BTD / PRODUCT & TECHNOLOGY",
      note: "Owned products. Selected systems. Responsible delivery and operations.",
    },
    notFound: {
      eyebrow: "404 / NOT FOUND",
      title: "This page could not be found",
      body: "The address does not exist. Return home to continue.",
      homeCta: "Back to homepage",
    },
  },
} satisfies Record<Locale, PortfolioContent>;
