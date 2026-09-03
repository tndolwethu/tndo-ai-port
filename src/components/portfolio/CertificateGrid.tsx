import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { certificates, type Certificate } from "@/lib/certificates";

/**
 * Text-only list of completed certificates. Certificate images stay hidden
 * until the visitor opens a specific certificate in the viewer dialog.
 */
export function CertificateGrid() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <li key={cert.slug}>
            <button
              type="button"
              onClick={() => setActive(cert)}
              aria-label={`View the ${cert.title} certificate`}
              className="surface-card animate-rise group flex h-full w-full flex-col items-start gap-3 rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="font-display text-[0.6rem] tracking-[0.18em] text-muted-foreground">
                {cert.kind.toUpperCase()}
              </span>
              <span className="text-base font-semibold leading-snug sm:text-lg">{cert.title}</span>
              <span className="mt-auto inline-flex items-center gap-2 font-display text-[0.65rem] tracking-[0.2em] text-primary">
                VIEW CERTIFICATE
                <ArrowRight
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="text-left">{active.title}</DialogTitle>
                <DialogDescription className="text-left">
                  {active.issuer} · {active.date}
                </DialogDescription>
              </DialogHeader>
              <img
                src={active.image}
                alt={`Full view of the ${active.title} certificate issued to Thandolwethu Tshabalala, dated ${active.date}`}
                className="h-auto w-full rounded-lg border border-border/60 object-contain"
              />
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={active.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-display text-[0.65rem] tracking-[0.2em] text-foreground transition-colors hover:bg-secondary"
                >
                  OPEN ORIGINAL PDF
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
                <a
                  href={active.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  VERIFY ON COURSERA
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
