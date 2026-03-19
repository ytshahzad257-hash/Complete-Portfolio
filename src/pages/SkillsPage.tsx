import { PageIntro } from '../components/sections/PageIntro';
import { BadgeList } from '../components/ui/BadgeList';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { pageDescriptions, skillCategories, toolGroups } from '../data/portfolio';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function SkillsPage() {
  useDocumentMeta('Skills | Muhammad Shahzad', pageDescriptions.skills);

  return (
    <>
      <PageIntro
        eyebrow="Skills"
        title="Specialized capabilities spanning cybersecurity, network defense, web development, and professional execution."
        description="The skills architecture is organized to communicate both technical depth and professional readiness in a clean, recruiter-friendly format."
      />

      <section className="grid gap-6 xl:grid-cols-2">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Reveal key={category.title} delay={index * 70}>
              <Card className="h-full bg-white/90">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-50 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-slate-950">{category.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{category.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <BadgeList items={category.items} />
                </div>
              </Card>
            </Reveal>
          );
        })}
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {toolGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 90}>
            <Card className="h-full bg-slate-950 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
                Tool Focus
              </p>
              <h3 className="mt-4 text-xl font-bold">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </section>
    </>
  );
}
