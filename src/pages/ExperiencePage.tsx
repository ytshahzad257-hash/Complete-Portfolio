import { PageIntro } from '../components/sections/PageIntro';
import { Timeline } from '../components/ui/Timeline';
import { experience, pageDescriptions } from '../data/portfolio';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ExperiencePage() {
  useDocumentMeta('Experience | Muhammad Shahzad', pageDescriptions.experience);

  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="Professional security work centered on vulnerability discovery, remediation clarity, and system hardening."
        description="The experience section highlights applied cybersecurity practice with a corporate visual tone and clear technical positioning."
      />

      <Timeline
        items={experience.map((item) => ({
          title: item.role,
          subtitle: `${item.company} • ${item.location}`,
          period: item.period,
          detail: item.description,
        }))}
      />
    </>
  );
}
