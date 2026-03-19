import { ExternalLink } from 'lucide-react';
import { PageIntro } from '../components/sections/PageIntro';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { certifications, pageDescriptions } from '../data/portfolio';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function CertificationsPage() {
  useDocumentMeta('Certifications | Muhammad Shahzad', pageDescriptions.certifications);

  return (
    <>
      <PageIntro
        eyebrow="Certifications"
        title="Industry-recognized credentials that reinforce practical cybersecurity competence."
        description="Each certification includes provider, date, concise context, and an external verification link that opens in a new tab."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        {certifications.map((certificate, index) => (
          <Reveal key={certificate.title} delay={index * 80}>
            <Card className="h-full bg-white/92">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                {certificate.provider}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">{certificate.title}</h2>
              <p className="mt-2 text-sm font-medium text-slate-500">{certificate.date}</p>
              <p className="mt-5 text-sm leading-7 text-slate-600">{certificate.summary}</p>
              <a
                href={certificate.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                Verify certificate
                <ExternalLink className="h-4 w-4" />
              </a>
            </Card>
          </Reveal>
        ))}
      </section>
    </>
  );
}
