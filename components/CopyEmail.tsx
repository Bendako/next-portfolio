"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import type { PortfolioContent } from "@/data/portfolio";

export function CopyEmail({ email, copy }: { email: string; copy: PortfolioContent["contact"] }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  async function copyEmail() {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus("success");
      timer.current = setTimeout(() => setStatus("idle"), 2500);
    } catch { setStatus("error"); }
  }
  return <div className="copy-email-control">
    <button className="button secondary-button" type="button" onClick={copyEmail}>
      {status === "success" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      {status === "success" ? copy.copiedNote : copy.copyCta}
    </button>
    <p className="copy-status" role="status" aria-live="polite">
      {status === "success" ? copy.copiedNote : status === "error" ? copy.copyError : ""}
    </p>
  </div>;
}
