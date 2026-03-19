import { PageIntro } from '../components/sections/PageIntro';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { pageDescriptions, seminars, volunteering } from '../data/portfolio';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function VolunteeringPage() {
  useDocumentMeta('Volunteering & Activities | Muhammad Shahzad', pageDescriptions.volunteering);

  return (
    <>
      <PageIntro
        eyebrow="Volunteering & Activities"
        title="Community contribution, open source engagement, and seminars that reflect professional initiative."
        description="This page combines volunteer work with academic and professional activities to show initiative beyond formal employment."
      />

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          {volunteering.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <Card className="bg-white/92">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                  Volunteer Role
                </p>
                <h2 className="mt-3 text-xl font-bold text-slate-950">{item.title}</h2>
                <p className="mt-2 text-sm font-medium text-slate-500">{item.period}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <Card className="h-fit rounded-[32px] bg-slate-950 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
              Conferences & Seminars
            </p>
            <div className="mt-6 space-y-4">
              {seminars.map((seminar) => (
                <div
                  key={seminar.title}
                  className="rounded-3xl border border-slate-800 bg-slate-900/90 p-4"
                >
                  <h3 className="font-semibold text-white">{seminar.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{seminar.organization}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </section>
    </>
  );
}
