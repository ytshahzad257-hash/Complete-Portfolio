import { ArrowUpRight } from 'lucide-react';
import { ButtonLink } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionTo?: string;
}

export function PageIntro({
  eyebrow,
  title,
  description,
  actionLabel,
  actionTo,
}: PageIntroProps) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-white/70 bg-hero-glow px-5 py-12 shadow-soft sm:rounded-[36px] sm:px-8 sm:py-14 lg:px-10 lg:py-16">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <Reveal className="relative">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        {actionLabel && actionTo ? (
          <div className="mt-8">
            <ButtonLink to={actionTo} variant="secondary" className="w-full gap-2 sm:w-auto">
              {actionLabel}
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        ) : null}
      </Reveal>
    </section>
  );
}
