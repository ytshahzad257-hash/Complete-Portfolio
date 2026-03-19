import { PageIntro } from '../components/sections/PageIntro';
import { BadgeList } from '../components/ui/BadgeList';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { pageDescriptions, projects } from '../data/portfolio';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ProjectsPage() {
  useDocumentMeta('Projects | Muhammad Shahzad', pageDescriptions.projects);

  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Selected work across security testing, software delivery, and academic project development."
        description="Each project card is designed to feel concise and premium while still communicating scope, timeline, and technical focus."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 70}>
            <Card className="h-full bg-white/92">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                {project.period}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">{project.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{project.summary}</p>
              <div className="mt-6">
                <BadgeList items={project.focus} />
              </div>
            </Card>
          </Reveal>
        ))}
      </section>
    </>
  );
}
