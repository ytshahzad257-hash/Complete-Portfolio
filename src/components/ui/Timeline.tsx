import { Card } from './Card';

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  detail: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative ml-3 border-l border-brand-100 pl-6">
      {items.map((item, index) => (
        <div key={`${item.title}-${item.period}`} className="relative pb-8 last:pb-0">
          <span className="absolute -left-[34px] top-8 h-3.5 w-3.5 rounded-full border-4 border-white bg-brand-500 shadow-card" />
          <Card className="bg-white/90">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                  {item.period}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-slate-500">{item.subtitle}</p>
              </div>
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.detail}</p>
          </Card>
        </div>
      ))}
    </div>
  );
}
