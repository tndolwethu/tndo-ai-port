import { useState } from "react";
import { CalendarDays, ExternalLink, Maximize2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { certificates, type Certificate } from "@/lib/certificates";

/** Responsive grid of completed certificates with an enlarged viewer. */
export function CertificateGrid() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <article
            key={cert.slug}
            className="surface-card animate-rise group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <button
              type="button"
              onClick={() => setActive(cert)}
              aria-label={`View the ${cert.title} certificate enlarged`}
              className="relative block w-full overflow-hidden border-b border-border/60 bg-secondary/40"
            >
              <img
                src={cert.image}
                alt={`${cert.title} certificate issued to Thandolwethu Tshabalala by Google through Coursera, dated ${cert.date}`}
                loading="lazy"
                className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute right-3 top-3 rounded-full border border-border/70 bg-background/80 p-2 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="size-4 text-primary" aria-hidden />
              </span>
            </button>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-primary/40 px-3 py-1 font-display text-[0.6rem] tracking-[0.18em] text-primary">
                  COMPLETED
                </span>
                <span className="font-display text-[0.6rem] tracking-[0.18em] text-muted-foreground">
                  {cert.kind.toUpperCase()}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold leading-snug sm:text-xl">{cert.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="size-4 text-primary" aria-hidden />
                {cert.date}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setActive(cert)}
                  className="glow-accent inline-flex items-center justify-center rounded-full px-5 py-2.5 font-display text-[0.65rem] tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                  style={{ backgroundImage: "var(--gradient-accent)" }}
                >
                  VIEW CERTIFICATE
                </button>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  VERIFY
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

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
