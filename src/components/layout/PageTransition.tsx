import type { PropsWithChildren } from 'react';

interface PageTransitionProps extends PropsWithChildren {
  routeKey: string;
}

export function PageTransition({ routeKey, children }: PageTransitionProps) {
  return (
    <div key={routeKey} className="page-enter">
      {children}
    </div>
  );
}
