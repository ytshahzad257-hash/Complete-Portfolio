import type { PropsWithChildren } from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'glass-panel rounded-[24px] border border-white/70 p-5 shadow-card ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:rounded-[28px] sm:p-6',
        className,
      )}
    >
      {children}
    </div>
  );
}
