import { Mail, MapPin, Phone } from 'lucide-react';
import { socialLinks, siteConfig } from '../../data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-display text-2xl font-bold text-white">Muhammad Shahzad</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{siteConfig.summary}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <span className="inline-flex max-w-full items-center gap-2 break-all sm:break-normal">
              <MapPin className="h-4 w-4 text-brand-300" />
              {siteConfig.location}
            </span>
            <span className="inline-flex max-w-full items-center gap-2 break-all sm:break-normal">
              <Phone className="h-4 w-4 text-brand-300" />
              {siteConfig.phone}
            </span>
            <span className="inline-flex max-w-full items-center gap-2 break-all sm:break-normal">
              <Mail className="h-4 w-4 text-brand-300" />
              {siteConfig.email}
            </span>
          </div>
        </div>
        <div className="md:justify-self-end">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Profiles
          </p>
          <div className="mt-4 space-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-medium text-slate-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-5 text-center text-sm text-slate-500 sm:px-6">
        © 2026 Muhammad Shahzad. Crafted for professional, academic, and cybersecurity
        presentation.
      </div>
    </footer>
  );
}
