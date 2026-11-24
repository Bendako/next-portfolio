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
// Project details checked against the project READMEs and public Shiftbook testing releases.
// No usage, revenue or performance metrics are claimed.
type WorkItem = {
  workId: "starter-cli" | "mcp-landing" | "letter-blast" | "shiftbook" | "expense-tracker";
  title: string;
  tag: string;
  description: string;
  liveUrl?: string;
  codeUrl?: string;
  downloadUrl?: string;
  downloadLabel?: string;
};
export type PortfolioContent = {
  skipLink: string;
  brandLabel: string;
  nav: { what: string; engines: string; work: string; process: string; contact: string };
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
  work: {
    eyebrow: string;
    title: string;
    body: string;
    liveLabel: string;
    codeLabel: string;
    items: WorkItem[];
  };
  process: { eyebrow: string; title: string; body: string; items: ProcessStep[] };
  founder: {
    eyebrow: string;
    title: string;
    body: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    emailCta: string;
    copyCta: string;
    copiedNote: string;
    copyError: string;
  };
  footer: { identity: string; note: string };
  notFound: { eyebrow: string; title: string; body: string; homeCta: string };
};

export const founderLinks = {
  email: "bendk1994@gmail.com",
  github: "https://github.com/Bendako",
  linkedin: "https://www.linkedin.com/in/bendako/",
} as const;

export const portfolioContent = {
  he: {
    skipLink: "דילוג לתוכן הראשי",
    brandLabel: "BTD — דף הבית",
    nav: {
      what: "מה BTD עושה?",
      engines: "שני מסלולים",
      work: "עבודות",
      process: "איך עובדים",
      contact: "קשר",
    },
    controls: {
      switchLanguage: "English",
      switchToDark: "מעבר לערכת נושא כהה",
      switchToLight: "מעבר לערכת נושא בהירה",
    },
    hero: {
      eyebrow: "OWNED PRODUCTS / SELECTED SYSTEMS",
      title: "בונים מוצרים דיגיטליים שעובדים בעולם האמיתי.",
      description:
        "BTD היא סטודיו למוצר וטכנולוגיה בהובלת מייסד: שיקול דעת מוצרי, ביצוע Full Stack, אוטומציה ו־AI בגבולות ברורים — ותפעול שממשיך גם אחרי ההשקה.",
      primaryCta: "לראות מה בנינו",
      secondaryCta: "בואו נדבר",
    },
    what: {
      eyebrow: "01 / WHAT BTD DOES",
      title: "מה BTD עושה?",
      body: "BTD בונה ומפעילה מוצרים דיגיטליים בבעלותה, ובמקביל בונה מערכות end-to-end נבחרות עבור צרכים ברורים. בשני המסלולים אנחנו מחברים החלטות מוצר, ביצוע Full Stack, אוטומציה ו־AI בגבולות ברורים, ותפעול שאפשר להמשיך לשפר.",
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
    work: {
      eyebrow: "03 / SELECTED WORK",
      title: "מבחר מהעבודות",
      body: "מוצרים וכלים שבנינו — זמינים לשימוש, להורדת גרסת בדיקה או לעיון בקוד.",
      liveLabel: "גרסה חיה",
      codeLabel: "קוד",
      items: [
        {
          workId: "shiftbook",
          title: "Shiftbook",
          tag: "Android · גרסת בדיקה",
          description: "אפליקציית Android ללא פרסומות למעקב שעות עבודה ולהערכת שכר ברוטו. כוללת כניסה ויציאה ממשמרת, דוחות שבועיים וחודשיים, שמירה מקומית ללא חיבור לרשת ותמיכה בעברית ובאנגלית. זמינה להורדה כגרסת בדיקה.",
          downloadUrl: "https://github.com/Bendako/shiftbook-android-updates/releases",
          downloadLabel: "הורדת גרסת בדיקה",
        },
        {
          workId: "starter-cli",
          title: "Next.js Starter CLI",
          tag: "כלי פיתוח",
          description:
            "כדי לצמצם הקמה חוזרת של פרויקטים, בנינו מחולל Bash ושרת MCP מקומי שמשתמש באותו מחולל. הערכה כוללת תבניות ושילובי Clerk ו־Convex לבחירה; קוד המקור זמין לבדיקה ולהתאמה.",
          codeUrl: "https://github.com/Bendako/next-starter-script",
        },
        {
          workId: "mcp-landing",
          title: "Next Starter MCP",
          tag: "דף מוצר",
          description: "בנינו דף מוצר ב־Next.js ו־TypeScript שמסביר את ערכת ה־Starter המקומית. הוראות ההתקנה והתבניות תואמות לתיעוד המוצר; האתר זמין לצפייה, והרכישה עדיין אינה פעילה.",
          liveUrl: "https://next-starter-mcp-landing-page.vercel.app/",
          codeUrl: "https://github.com/Bendako/next-starter-mcp-landing-page",
        },
        {
          workId: "letter-blast",
          title: "LetterBlast",
          tag: "משחק",
          description: "כדי להפוך תרגול איות למשחק, בנינו משחק דפדפן ב־Three.js וב־TypeScript: פגיעה באותיות תלת־ממדיות ליצירת מילים, עם רמות קושי ושליטה בעכבר או במגע.",
          liveUrl: "https://letter-blast.vercel.app/",
          codeUrl: "https://github.com/Bendako/LetterBlast",
        },
        {
          workId: "expense-tracker",
          title: "Expense Tracker",
          tag: "אפליקציה",
          description: "מעקב הוצאות פשוט ומהיר לניהול תקציב יומיומי.",
          liveUrl: "https://expense-tracker-app-react.vercel.app/",
          codeUrl: "https://github.com/Bendako/Expense-Tracker-App",
        },
      ],
    },
    process: {
      eyebrow: "04 / PROCESS",
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
    founder: {
      eyebrow: "05 / WHO IS BEHIND BTD",
      title: "מי מאחורי BTD",
      body: "BTD מובלת על ידי בן דאקו — בונה מוצרים Full Stack שמחבר בין הבנת הבעיה, החלטות מוצר, קוד ותפעול. כל פרויקט, בבעלות מלאה או עבור שותף, מקבל את אותה רמת אחריות: להבין, לבנות, להפעיל ולשפר.",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
    },
    contact: {
      eyebrow: "06 / CONTACT",
      title: "בואו נדבר",
      body: "יש בעיה ששווה לפתור, מוצר שצריך להיבנות, או מערכת שדורשת חיבור מקצה לקצה? נשמח לשמוע.",
      emailCta: "שליחת אימייל",
      copyCta: "העתקת הכתובת",
      copiedNote: "הכתובת הועתקה",
      copyError: "לא ניתן להעתיק. אפשר לסמן את הכתובת ולהעתיק ידנית, או לפתוח הודעת דוא״ל.",
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
    nav: {
      what: "What BTD does",
      engines: "Two engines",
      work: "Work",
      process: "How we work",
      contact: "Contact",
    },
    controls: {
      switchLanguage: "עברית",
      switchToDark: "Switch to dark theme",
      switchToLight: "Switch to light theme",
    },
    hero: {
      eyebrow: "OWNED PRODUCTS / SELECTED SYSTEMS",
      title: "We build digital products that work in the real world.",
      description:
        "BTD is a founder-led product and technology studio: product judgment, full-stack delivery, automation and AI within clear boundaries — and operations that continue after launch.",
      primaryCta: "See what we built",
      secondaryCta: "Let's talk",
    },
    what: {
      eyebrow: "01 / WHAT BTD DOES",
      title: "What does BTD do?",
      body: "BTD builds and operates owned digital products, while also building selected end-to-end systems for clear needs. In both tracks, we connect product decisions, full-stack delivery, automation and AI within clear boundaries, and operations that can keep improving.",
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
    work: {
      eyebrow: "03 / SELECTED WORK",
      title: "Selected work",
      body: "Products and tools we built — available to use, download for testing, or explore through source code.",
      liveLabel: "Live",
      codeLabel: "Code",
      items: [
        {
          workId: "shiftbook",
          title: "Shiftbook",
          tag: "Android · Testing",
          description: "An ad-free native Android app for tracking work hours and estimating gross pay, with clock-in/out, weekly and monthly reports, offline storage, and Hebrew and English support. Available as a testing download.",
          downloadUrl: "https://github.com/Bendako/shiftbook-android-updates/releases",
          downloadLabel: "Testing download",
        },
        {
          workId: "starter-cli",
          title: "Next.js Starter CLI",
          tag: "Dev tool",
          description:
            "To reduce repeated project setup, we built a Bash generator and a local MCP server that calls the same generator. The kit includes templates and optional Clerk and Convex scaffolding, with source code to inspect and adapt.",
          codeUrl: "https://github.com/Bendako/next-starter-script",
        },
        {
          workId: "mcp-landing",
          title: "Next Starter MCP",
          tag: "Product page",
          description: "A Next.js and TypeScript product page explaining the local Starter kit. Installation steps and templates mirror the product documentation; the site is available to explore, with checkout still pending.",
          liveUrl: "https://next-starter-mcp-landing-page.vercel.app/",
          codeUrl: "https://github.com/Bendako/next-starter-mcp-landing-page",
        },
        {
          workId: "letter-blast",
          title: "LetterBlast",
          tag: "Game",
          description: "To turn spelling practice into play, we built a browser game with Three.js and TypeScript: shoot 3D letters to form words, with difficulty levels and mouse or touch controls.",
          liveUrl: "https://letter-blast.vercel.app/",
          codeUrl: "https://github.com/Bendako/LetterBlast",
        },
        {
          workId: "expense-tracker",
          title: "Expense Tracker",
          tag: "App",
          description: "A simple, fast expense tracker for everyday budgeting.",
          liveUrl: "https://expense-tracker-app-react.vercel.app/",
          codeUrl: "https://github.com/Bendako/Expense-Tracker-App",
        },
      ],
    },
    process: {
      eyebrow: "04 / PROCESS",
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
    founder: {
      eyebrow: "05 / WHO IS BEHIND BTD",
      title: "Who is behind BTD",
      body: "BTD is led by Ben Dako — a full-stack product builder connecting problem understanding, product decisions, code, and operations. Every project, fully owned or built for a partner, gets the same level of ownership: understand, build, operate, improve.",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
    },
    contact: {
      eyebrow: "06 / CONTACT",
      title: "Let's talk",
      body: "A problem worth solving, a product that needs building, or a system that requires an end-to-end connection? We would love to hear.",
      emailCta: "Send an email",
      copyCta: "Copy address",
      copiedNote: "Address copied",
      copyError: "Could not copy. Select the address to copy it manually, or open an email.",
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
