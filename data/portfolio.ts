export type Locale = 'he' | 'en'

export type PortfolioContent = {
  skipLink: string
  brandLabel: string
  nav: { work: string; about: string; contact: string }
  controls: {
    switchLanguage: string
    switchToDark: string
    switchToLight: string
  }
  hero: {
    eyebrow: string
    title: string
    accent: string
    description: string
    primaryCta: string
    secondaryCta: string
    consoleLabel: string
    consoleCaption: string
    consoleRows: Array<{ signal: string; detail: string; state: string }>
  }
  capabilitiesIntro: { eyebrow: string; title: string; description: string }
  capabilities: Array<{
    capabilityId: 'product' | 'systems' | 'agents'
    index: string
    title: string
    description: string
    evidenceLabel: string
    evidence: string
  }>
  workIntro: { eyebrow: string; title: string; description: string }
  workLabels: { context: string; contribution: string; boundary: string; abstraction: string }
  works: Array<{
    workId: 'store' | 'agents'
    index: string
    category: string
    status: string
    title: string
    context: string
    contribution: string
    boundary: string
    tags: string[]
    diagram: string[]
  }>
  publicWorkIntro: { eyebrow: string; title: string; description: string }
  publicWorkLabels: { source: string; live: string }
  publicWorks: Array<{
    publicWorkId: 'starter' | 'jobs' | 'letterblast'
    index: string
    category: string
    status: string
    title: string
    description: string
    tags: string[]
    sourceUrl: string
    liveUrl?: string
  }>
  about: { eyebrow: string; title: string; body: string }
  contact: {
    eyebrow: string
    title: string
    body: string
    emailCta: string
    githubLabel: string
    linkedinLabel: string
  }
  footer: { identity: string; note: string }
  notFound: { eyebrow: string; title: string; body: string; homeCta: string }
}

export const contactLinks = {
  email: 'mailto:bendk1994@gmail.com',
  github: 'https://github.com/Bendako',
  linkedin: 'https://www.linkedin.com/in/bendako/',
} as const

export const portfolioContent = {
  he: {
    skipLink: 'דילוג לתוכן הראשי',
    brandLabel: 'SYSTEMS / BTD — דף הבית',
    nav: { work: 'עבודות', about: 'אודות', contact: 'יצירת קשר' },
    controls: {
      switchLanguage: 'English',
      switchToDark: 'מעבר לערכת נושא כהה',
      switchToLight: 'מעבר לערכת נושא בהירה',
    },
    hero: {
      eyebrow: 'PRODUCT / ENGINEERING / BOUNDED AI',
      title: 'בונה מוצרים שמחברים',
      accent: 'שיקול דעת וקוד.',
      description: 'אני Hybrid Product Builder: מתרגם צרכי משתמשים למוצר, למערכת Full Stack ולתהליכי AI ואוטומציה עם גבולות, בקרה ואימות.',
      primaryCta: 'לצפייה בעבודות',
      secondaryCta: 'בואו נדבר',
      consoleLabel: 'תצוגת מערכת להמחשה בלבד',
      consoleCaption: 'דוגמה סינתטית — ללא נתונים תפעוליים אמיתיים',
      consoleRows: [
        { signal: 'DISCOVER', detail: 'צורך → גבולות מוצר', state: 'READY' },
        { signal: 'BUILD', detail: 'ממשק ↔ מערכת ↔ תפעול', state: 'VERIFIED' },
        { signal: 'AUTOMATE', detail: 'מדיניות → פעולה', state: 'HUMAN GATE' },
      ],
    },
    capabilitiesIntro: {
      eyebrow: '01 / CAPABILITIES',
      title: 'שלוש שכבות, בעלות אחת',
      description: 'לא רשימת טכנולוגיות, אלא דרך עבודה שמחברת החלטות מוצר, ביצוע הנדסי ותפעול אחראי.',
    },
    capabilities: [
      {
        capabilityId: 'product', index: '01', title: 'חשיבה מוצרית ובעלות',
        description: 'מחדד בעיה, קהל, זרימה וגבולות לפני שמרחיב את הפתרון.',
        evidenceLabel: 'EVIDENCE', evidence: 'בנווה בשדרה, חוויית הקנייה ב־RTL ותהליכי ההזמנות והמלאי נבנים כמוצר ותפעול אחד.',
      },
      {
        capabilityId: 'systems', index: '02', title: 'מערכות Full Stack ותפעול',
        description: 'מחבר ממשק, הרשאות, נתונים וכלי ניהול לזרימה שאפשר להפעיל ולבדוק.',
        evidenceLabel: 'EVIDENCE', evidence: 'נווה בשדרה כולל checkout, הרשאות, הזמנות, מלאי ותפעול מנהלים בסביבת staging פעילה.',
      },
      {
        capabilityId: 'agents', index: '03', title: 'סוכני AI ואוטומציה תחומה',
        description: 'מתכנן אוטומציה עם state מתמשך, policies, שערים אנושיים ואימות עצמאי.',
        evidenceLabel: 'EVIDENCE', evidence: 'מערכת ה־AI-agent/SBEA הפנימית מפרידה בין תזמון, החלטה, פעולה ובקרת QA.',
      },
    ],
    workIntro: {
      eyebrow: '02 / FEATURED WORK', title: 'מערכות נבחרות',
      description: 'שתי דוגמאות ציבוריות ובטוחות שמציגות את ההקשר, תחום האחריות והגבולות — בלי נתונים פרטיים או טענות תוצאה לא מאומתות.',
    },
    workLabels: { context: 'ההקשר', contribution: 'תחום האחריות', boundary: 'סטטוס וגבול', abstraction: 'המחשת ארכיטקטורה' },
    works: [
      {
        workId: 'store', index: '01', category: 'COMMERCE + OPERATIONS', status: 'ACTIVE STAGING / PRE-LAUNCH', title: 'נווה בשדרה',
        context: 'מוצר מסחר ותפעול לחנות מקומית, עם קנייה ב־RTL וזרימות checkout, הזמנות ומלאי.',
        contribution: 'תכנון ובנייה של חוויית הלקוח, הרשאות, תהליכי ההזמנות וכלי התפעול למנהלים.',
        boundary: 'סביבת staging פעילה לפני השקה. המוצר אינו מוצג כאן כ־live או production.',
        tags: ['Next.js', 'Commerce', 'Permissions', 'Operations'], diagram: ['SHOP', 'CHECKOUT', 'ORDERS', 'INVENTORY', 'ADMIN'],
      },
      {
        workId: 'agents', index: '02', category: 'AI-AGENT ORCHESTRATION', status: 'INTERNAL / ILLUSTRATIVE', title: 'AI-agent/SBEA',
        context: 'מערכת הפעלה פנימית מרובת סוכנים עם state מתמשך, תזמון ומדיניות פעולה.',
        contribution: 'הגדרת גבולות פעולה, שערים אנושיים, תיאום בין תפקידים ואימות עצמאי לאחר ביצוע.',
        boundary: 'מערכת פנימית. התרשים והתיאורים כאן סינתטיים ואינם חושפים רשומות, מזהים או נתונים פרטיים.',
        tags: ['Agents', 'Durable state', 'Policies', 'Independent QA'], diagram: ['TRIGGER', 'ROUTER', 'POLICY', 'ACTION', 'QA', 'HUMAN GATE'],
      },
    ],
    publicWorkIntro: {
      eyebrow: '03 / PUBLIC PROOF', title: 'קוד ומוצרים שאפשר לפתוח',
      description: 'שלוש הוכחות ציבוריות שמרחיבות את התמונה: כלי פיתוח, מערכת Full Stack וחוויית למידה אינטראקטיבית.',
    },
    publicWorkLabels: { source: 'לקוד', live: 'למוצר החי' },
    publicWorks: [
      {
        publicWorkId: 'starter', index: '01', category: 'DEVELOPER TOOLING + MCP', status: 'OPEN SOURCE + LIVE', title: 'Next.js Starter MCP',
        description: 'כלי שמאחד אוטומציית setup ל־Next.js עם TypeScript, Tailwind, Convex ו־Clerk, לצד אתר מוצר ציבורי.',
        tags: ['Next.js', 'Automation', 'MCP', 'Developer Experience'],
        sourceUrl: 'https://github.com/Bendako/next-starter-script', liveUrl: 'https://next-starter-mcp-landing-page.vercel.app/',
      },
      {
        publicWorkId: 'jobs', index: '02', category: 'FULL-STACK PRODUCT', status: 'PUBLIC REPOSITORY', title: 'Jobs Center',
        description: 'מערכת לניהול חיפוש עבודה, מועמדויות וראיונות. הקוד נשאר ציבורי; קישור הדמו הושמט עד שיחזור לפעילות.',
        tags: ['Next.js', 'TypeScript', 'Prisma', 'Product Workflow'],
        sourceUrl: 'https://github.com/Bendako/jobs-center',
      },
      {
        publicWorkId: 'letterblast', index: '03', category: 'INTERACTIVE LEARNING', status: 'OPEN SOURCE + LIVE', title: 'LetterBlast',
        description: 'משחק לימוד אנגלית שהופך תרגול מילים לחוויה תלת־ממדית אינטראקטיבית בדפדפן.',
        tags: ['Next.js', 'TypeScript', 'Three.js', 'Interaction Design'],
        sourceUrl: 'https://github.com/Bendako/LetterBlast', liveUrl: 'https://letter-blast.vercel.app/',
      },
    ],
    about: {
      eyebrow: '04 / ABOUT', title: 'בין החלטת מוצר לביצוע אחראי',
      body: 'אני אוהב לעבוד במקום שבו צריך להבין את האדם שמאחורי הבקשה, לקבל החלטות מוצר מדויקות, ולבנות את המערכת שמגשימה אותן. מבחינתי AI הוא שכבת יכולת — לא תחליף לאחריות, לבדיקות או לשיקול דעת אנושי.',
    },
    contact: {
      eyebrow: '05 / CONTACT', title: 'יש מוצר, מערכת או תהליך שכדאי לבנות נכון?',
      body: 'אפשר לפנות ישירות במייל לגבי תפקידי פיתוח ומוצר, בניית מערכות או שיתוף פעולה. אין כאן טופס מדומה — רק ערוצי קשר אמיתיים.',
      emailCta: 'שליחת מייל', githubLabel: 'פרופיל GitHub', linkedinLabel: 'פרופיל LinkedIn',
    },
    footer: { identity: 'SYSTEMS / BTD — HYBRID PRODUCT BUILDER', note: 'מוצר, Full Stack ו־AI תחום — עם בקרה ואימות.' },
    notFound: { eyebrow: '404 / NOT FOUND', title: 'העמוד הזה לא נמצא', body: 'הכתובת אינה קיימת או שהעמוד הועבר. אפשר לחזור לדף הבית ולהמשיך משם.', homeCta: 'חזרה לדף הבית' },
  },
  en: {
    skipLink: 'Skip to main content',
    brandLabel: 'SYSTEMS / BTD — homepage',
    nav: { work: 'Work', about: 'About', contact: 'Contact' },
    controls: {
      switchLanguage: 'עברית',
      switchToDark: 'Switch to dark theme',
      switchToLight: 'Switch to light theme',
    },
    hero: {
      eyebrow: 'PRODUCT / ENGINEERING / BOUNDED AI',
      title: 'I build products that connect', accent: 'judgment and code.',
      description: 'I am a Hybrid Product Builder: translating user needs into products, full-stack systems, and bounded AI and automation with control and verification.',
      primaryCta: 'View selected work', secondaryCta: 'Let’s talk',
      consoleLabel: 'Illustrative system view', consoleCaption: 'Synthetic example — no real operational data',
      consoleRows: [
        { signal: 'DISCOVER', detail: 'need → product boundaries', state: 'READY' },
        { signal: 'BUILD', detail: 'interface ↔ system ↔ operations', state: 'VERIFIED' },
        { signal: 'AUTOMATE', detail: 'policy → action', state: 'HUMAN GATE' },
      ],
    },
    capabilitiesIntro: {
      eyebrow: '01 / CAPABILITIES', title: 'Three layers, one owner',
      description: 'Not a technology list, but a way of working that connects product decisions, engineering delivery, and responsible operations.',
    },
    capabilities: [
      {
        capabilityId: 'product', index: '01', title: 'Product thinking and ownership',
        description: 'Clarifying the problem, audience, flow, and boundaries before expanding the solution.',
        evidenceLabel: 'EVIDENCE', evidence: 'For Neve Basdera, the RTL shopping experience and order and inventory flows are shaped as one product and operations system.',
      },
      {
        capabilityId: 'systems', index: '02', title: 'Full-stack systems and operations',
        description: 'Connecting interface, permissions, data, and admin tools into an operable, verifiable flow.',
        evidenceLabel: 'EVIDENCE', evidence: 'Neve Basdera includes checkout, permissions, orders, inventory, and admin operations in active staging.',
      },
      {
        capabilityId: 'agents', index: '03', title: 'AI agents and bounded automation',
        description: 'Designing automation with durable state, policies, human gates, and independent verification.',
        evidenceLabel: 'EVIDENCE', evidence: 'The internal AI-agent/SBEA system separates scheduling, decisions, actions, and independent QA.',
      },
    ],
    workIntro: {
      eyebrow: '02 / FEATURED WORK', title: 'Selected systems',
      description: 'Two public-safe examples showing context, ownership, and boundaries — without private data or unverified outcome claims.',
    },
    workLabels: { context: 'Context', contribution: 'Contribution', boundary: 'Status and boundary', abstraction: 'Architecture abstraction' },
    works: [
      {
        workId: 'store', index: '01', category: 'COMMERCE + OPERATIONS', status: 'ACTIVE STAGING / PRE-LAUNCH', title: 'נווה בשדרה / Neve Basdera',
        context: 'A commerce and operations product for a local store, with RTL shopping and checkout, order, and inventory flows.',
        contribution: 'Planning and building the customer experience, permissions, order flows, and admin operations tools.',
        boundary: 'Active staging before launch. The product is not presented here as live or in production.',
        tags: ['Next.js', 'Commerce', 'Permissions', 'Operations'], diagram: ['SHOP', 'CHECKOUT', 'ORDERS', 'INVENTORY', 'ADMIN'],
      },
      {
        workId: 'agents', index: '02', category: 'AI-AGENT ORCHESTRATION', status: 'INTERNAL / ILLUSTRATIVE', title: 'AI-agent/SBEA',
        context: 'An internal multi-agent operating system with durable state, scheduling, and action policies.',
        contribution: 'Defining action boundaries, human gates, role coordination, and independent post-action verification.',
        boundary: 'Internal system. The diagram and descriptions are synthetic and reveal no records, identifiers, or private data.',
        tags: ['Agents', 'Durable state', 'Policies', 'Independent QA'], diagram: ['TRIGGER', 'ROUTER', 'POLICY', 'ACTION', 'QA', 'HUMAN GATE'],
      },
    ],
    publicWorkIntro: {
      eyebrow: '03 / PUBLIC PROOF', title: 'Code and products you can open',
      description: 'Three public proofs that broaden the picture: developer tooling, a full-stack system, and an interactive learning experience.',
    },
    publicWorkLabels: { source: 'View source', live: 'Open live product' },
    publicWorks: [
      {
        publicWorkId: 'starter', index: '01', category: 'DEVELOPER TOOLING + MCP', status: 'OPEN SOURCE + LIVE', title: 'Next.js Starter MCP',
        description: 'A tool combining automated Next.js setup with TypeScript, Tailwind, Convex, and Clerk, supported by a public product site.',
        tags: ['Next.js', 'Automation', 'MCP', 'Developer Experience'],
        sourceUrl: 'https://github.com/Bendako/next-starter-script', liveUrl: 'https://next-starter-mcp-landing-page.vercel.app/',
      },
      {
        publicWorkId: 'jobs', index: '02', category: 'FULL-STACK PRODUCT', status: 'PUBLIC REPOSITORY', title: 'Jobs Center',
        description: 'A system for managing a job search, applications, and interviews. The code remains public; the demo link is omitted until it is operational again.',
        tags: ['Next.js', 'TypeScript', 'Prisma', 'Product Workflow'],
        sourceUrl: 'https://github.com/Bendako/jobs-center',
      },
      {
        publicWorkId: 'letterblast', index: '03', category: 'INTERACTIVE LEARNING', status: 'OPEN SOURCE + LIVE', title: 'LetterBlast',
        description: 'An English-learning game that turns vocabulary practice into an interactive 3D browser experience.',
        tags: ['Next.js', 'TypeScript', 'Three.js', 'Interaction Design'],
        sourceUrl: 'https://github.com/Bendako/LetterBlast', liveUrl: 'https://letter-blast.vercel.app/',
      },
    ],
    about: {
      eyebrow: '04 / ABOUT', title: 'From product judgment to responsible delivery',
      body: 'I like working where understanding the person behind a request, making precise product decisions, and building the system are all part of the same job. To me, AI is a capability layer — not a substitute for ownership, testing, or human judgment.',
    },
    contact: {
      eyebrow: '05 / CONTACT', title: 'Have a product, system, or process worth building well?',
      body: 'Reach out directly about engineering and product roles, system building, or collaboration. There is no simulated form here — only real contact channels.',
      emailCta: 'Send an email', githubLabel: 'GitHub profile', linkedinLabel: 'LinkedIn profile',
    },
    footer: { identity: 'SYSTEMS / BTD — HYBRID PRODUCT BUILDER', note: 'Product, full stack, and bounded AI — with control and verification.' },
    notFound: { eyebrow: '404 / NOT FOUND', title: 'This page could not be found', body: 'The address does not exist or the page may have moved. Return home to continue.', homeCta: 'Back to homepage' },
  },
} satisfies Record<Locale, PortfolioContent>
