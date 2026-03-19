import type { PropsWithChildren } from 'react';
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:gap-12 sm:px-6 sm:py-10 lg:gap-14 lg:py-14">
        {children}
      </main>
      <Footer />
    </div>
  );
}
