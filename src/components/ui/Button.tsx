import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { cn } from '../../utils/cn';

const sharedClasses =
  'inline-flex min-h-11 max-w-full items-center justify-center rounded-full border border-brand-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 sm:px-5';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

interface ButtonLinkProps extends LinkProps {
  variant?: 'primary' | 'secondary' | 'ghost';
}

const variants = {
  primary:
    'border-transparent bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:text-white',
  secondary: 'bg-white/80 text-slate-900',
  ghost: 'border-transparent bg-transparent text-slate-700 shadow-none hover:bg-brand-50',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => (
    <button ref={ref} className={cn(sharedClasses, variants[variant], className)} {...props} />
  ),
);

Button.displayName = 'Button';

export function ButtonLink({ className, variant = 'primary', ...props }: ButtonLinkProps) {
  return <Link className={cn(sharedClasses, variants[variant], className)} {...props} />;
}
