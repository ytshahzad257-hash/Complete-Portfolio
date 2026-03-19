import { PageIntro } from '../components/sections/PageIntro';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { Timeline } from '../components/ui/Timeline';
import { education, memberships, pageDescriptions } from '../data/portfolio';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function EducationPage() {
  useDocumentMeta('Education | Muhammad Shahzad', pageDescriptions.education);

  return (
    <>
      <PageIntro
        eyebrow="Education"
        title="Academic development supported by formal study, technical curiosity, and active research engagement."
        description="This section presents Muhammad Shahzad’s educational history alongside his professional memberships and collaborative academic engagement."
      />

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <Timeline
            items={education.map((item) => ({
              title: item.title,
              subtitle: `${item.institution} • ${item.detail}`,
              period: item.period,
              detail: item.detail,
            }))}
          />
        </Reveal>
        <div className="space-y-6">
          {memberships.map((membership, index) => (
            <Reveal key={membership.title} delay={index * 90}>
              <Card className="bg-white/90">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                  Network & Membership
                </p>
                <h2 className="mt-3 text-xl font-bold text-slate-950">{membership.title}</h2>
                <p className="mt-2 text-sm font-medium text-slate-500">{membership.organization}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{membership.detail}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
