import { cn } from '../../utils/cn';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? (
        <span className="mb-4 inline-flex max-w-full rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
          {eyebrow}
        </span>
      ) : null}
      <h1 className="text-balance font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">{description}</p>
    </div>
  );
}
