import { ExternalLink } from 'lucide-react';
import { PageIntro } from '../components/sections/PageIntro';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { pageDescriptions, publications } from '../data/portfolio';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function PublicationsPage() {
  useDocumentMeta('Publications | Muhammad Shahzad', pageDescriptions.publications);

  return (
    <>
      <PageIntro
        eyebrow="Publications"
        title="Research contributions presented with a citation-style layout and direct DOI access."
        description="This page supports academic and scholarship presentation by framing publications with clarity, credibility, and accessible reference links."
      />

      <section className="space-y-6">
        {publications.map((publication, index) => (
          <Reveal key={publication.title} delay={index * 100}>
            <Card className="bg-white/92">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                {publication.source} • {publication.year}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">{publication.title}</h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Citation-ready research entry with DOI access for academic review and verification.
              </p>
              <a
                href={publication.doi}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                Open DOI
                <ExternalLink className="h-4 w-4" />
              </a>
            </Card>
          </Reveal>
        ))}
      </section>
    </>
  );
}
