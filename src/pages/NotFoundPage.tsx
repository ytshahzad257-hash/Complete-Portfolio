import { ArrowLeft } from 'lucide-react';
import { ButtonLink } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function NotFoundPage() {
  useDocumentMeta(
    '404 | Muhammad Shahzad',
    'Page not found in the Muhammad Shahzad cybersecurity portfolio.',
  );

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="max-w-2xl rounded-[36px] bg-white/92 p-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">404</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold text-slate-950">
          The page you’re looking for is not available.
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-600">
          Use the navigation to continue exploring the portfolio or return to the homepage.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink to="/" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </ButtonLink>
        </div>
      </Card>
    </div>
  );
}
