import { Menu, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../data/portfolio';
import { cn } from '../../utils/cn';
import { ButtonLink } from '../ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && menuContainerRef.current?.contains(target)) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <NavLink to="/" className="flex min-w-0 items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-soft sm:h-11 sm:w-11">
            <Shield className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            {/* <p className="truncate font-display text-base font-extrabold text-slate-950 sm:text-lg">Muhammad Shahzad</p> */}
            <p className="truncate text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-xs sm:tracking-[0.22em]">
              Portfolio
            </p>
          </div>
        </NavLink>

        <div ref={menuContainerRef} className="relative shrink-0">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="rounded-2xl border border-slate-200 p-2 text-slate-700 xl:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <nav
            className={cn(
              'absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(20rem,calc(100vw-2rem))] max-h-[calc(100vh-6rem)] overflow-y-auto rounded-[28px] border border-slate-200 bg-white/95 px-4 py-4 shadow-soft backdrop-blur-xl xl:static xl:w-auto xl:max-h-none xl:overflow-visible xl:rounded-none xl:border-none xl:bg-transparent xl:p-0 xl:shadow-none',
              isOpen ? 'block' : 'hidden xl:block',
            )}
          >
            <ul className="flex flex-col gap-2 xl:flex-row xl:items-center xl:gap-0.5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'inline-flex w-full rounded-full px-4 py-3 text-sm font-semibold text-slate-600 transition-all duration-300 hover:bg-brand-50 hover:text-brand-700 xl:w-auto xl:px-3 xl:py-2 2xl:px-4',
                        isActive && 'bg-brand-50 text-brand-700',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2 xl:pl-2 xl:pt-0 2xl:pl-3">
                <ButtonLink to="/contact" variant="primary" className="w-full xl:w-auto">
                  Contact
                </ButtonLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
