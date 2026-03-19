import {
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Microscope,
} from 'lucide-react';
import { socialLinks } from '../../data/portfolio';
import { Card } from '../ui/Card';

const iconMap = {
  GitHub: Github,
  'Google Scholar': GraduationCap,
  LinkedIn: Linkedin,
  ResearchGate: Microscope,
};

export function SocialLinks() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.label as keyof typeof iconMap] ?? Globe;
        return (
          <Card key={link.label} className="rounded-3xl bg-white/85 p-4">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 items-center justify-between gap-3 text-sm font-semibold text-slate-700"
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className="shrink-0 rounded-2xl bg-brand-50 p-2 text-brand-700">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="truncate">{link.label}</span>
              </span>
              <ExternalLink className="h-4 w-4 shrink-0 text-slate-400" />
            </a>
          </Card>
        );
      })}
    </div>
  );
}
