import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '../components/sections/ContactForm';
import { PageIntro } from '../components/sections/PageIntro';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { pageDescriptions, references, siteConfig, socialLinks } from '../data/portfolio';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ContactPage() {
  useDocumentMeta('Contact | Muhammad Shahzad', pageDescriptions.contact);

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="A premium contact experience for recruiters, academic supervisors, and collaboration partners."
        description="Reach out for cybersecurity opportunities, research collaboration, secure web projects, mentorship, or academic discussion."
      />

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <Reveal>
            <Card className="bg-white/92">
              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 break-all text-slate-700 hover:text-brand-700 sm:break-normal"
                >
                  <span className="shrink-0 rounded-2xl bg-brand-50 p-3 text-brand-700">
                    <Mail className="h-4 w-4" />
                  </span>
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-slate-700 hover:text-brand-700"
                >
                  <span className="shrink-0 rounded-2xl bg-brand-50 p-3 text-brand-700">
                    <Phone className="h-4 w-4" />
                  </span>
                  {siteConfig.phone}
                </a>
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="shrink-0 rounded-2xl bg-brand-50 p-3 text-brand-700">
                    <MapPin className="h-4 w-4" />
                  </span>
                  {siteConfig.location}
                </div>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={90}>
            <Card className="bg-slate-950 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
                Professional Links
              </p>
              <div className="mt-5 space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-w-0 items-center justify-between gap-3 rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm font-medium text-slate-200 hover:border-brand-400"
                  >
                    <span className="truncate">{link.label}</span>
                    <ExternalLink className="h-4 w-4 shrink-0 text-brand-300" />
                  </a>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={130}>
          <ContactForm />
        </Reveal>
      </section>

      <section className="space-y-6">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-slate-950 sm:text-3xl">
            Recommendations & References
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {references.map((reference, index) => (
            <Reveal key={reference.email} delay={index * 70}>
              <Card className="h-full bg-white/92">
                <h3 className="text-lg font-bold text-slate-950">{reference.name}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">{reference.role}</p>
                <a
                  href={`mailto:${reference.email}`}
                  className="mt-4 inline-flex break-all text-sm font-semibold text-brand-700 hover:text-brand-800 sm:break-normal"
                >
                  {reference.email}
                </a>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
