import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import cvFile from '../components/assets/Muhammad_Shahzad_CV.pdf';
import { SocialLinks } from '../components/sections/SocialLinks';
import { ButtonLink } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeader } from '../components/ui/SectionHeader';
import {
  pageDescriptions,
  projects,
  quickHighlights,
  siteConfig,
  stats,
} from '../data/portfolio';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function HomePage() {
  useDocumentMeta('Muhammad Shahzad | Cybersecurity Portfolio', pageDescriptions.home);

  return (
    <>
      <section className="relative overflow-hidden rounded-[28px] border border-white/70 bg-hero-glow px-5 py-12 shadow-soft sm:rounded-[36px] sm:px-8 sm:py-14 lg:rounded-[40px] lg:px-14 lg:py-20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <span className="inline-flex max-w-full rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
              Cybersecurity • Research • Secure Systems
            </span>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl xl:text-6xl">
              Building trustworthy digital systems with a research-driven security mindset.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {siteConfig.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink style={{color:"black"}} to="/contact" className="w-full gap-2 sm:w-auto">
                Contact Muhammad Shahzad
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <a
                href={cvFile}
                download="Muhammad_Shahzad_CV.pdf"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-brand-200 bg-white/85 px-4 py-3 text-center text-sm font-semibold text-slate-900 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 sm:w-auto sm:px-5"
              >
                Download CV
                <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-slate-600">
              <span className="inline-flex max-w-full items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-600" />
                {siteConfig.location}
              </span>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex max-w-full items-center gap-2 hover:text-brand-700"
              >
                <Phone className="h-4 w-4 text-brand-600" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex max-w-full items-center gap-2 break-all hover:text-brand-700 sm:break-normal"
              >
                <Mail className="h-4 w-4 text-brand-600" />
                {siteConfig.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Card className="relative overflow-hidden rounded-[28px] bg-white/88 p-5 sm:rounded-[32px] sm:p-7">
              <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-brand-100 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 animate-float items-center justify-center rounded-3xl bg-brand-600 text-white shadow-soft sm:h-14 sm:w-14">
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
                      Professional Profile
                    </p>
                    <h2 className="font-display text-xl font-bold text-slate-950 sm:text-2xl">
                      Muhammad Shahzad
                    </h2>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-3xl border border-slate-200 bg-white/90 p-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-lg font-bold text-slate-950">{stat.value}</p>
                      <p className="mt-1 text-sm leading-7 text-slate-600">{stat.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <SectionHeader
            eyebrow="Core Strengths"
            title="A premium portfolio experience for scholarship, academic, and career presentation."
            description="The profile is positioned for cybersecurity, computer science, and research opportunities with a refined visual tone and clear professional storytelling."
          />
        </Reveal>
        <Reveal delay={120}>
          <SocialLinks />
        </Reveal>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {quickHighlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <Reveal key={highlight.title} delay={index * 80}>
              <Card className="h-full bg-white/90">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{highlight.text}</p>
              </Card>
            </Reveal>
          );
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Card className="h-full rounded-[32px] bg-slate-950 text-slate-100">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
              Professional Summary
            </p>
            <h2 style={{color:"black"}}  className="mt-4 text-balance font-display text-2xl font-bold sm:text-3xl">
              Security-focused, academically grounded, and ready for high-trust environments.
            </h2>
            <p style={{color:"black"}} className="mt-6 text-sm leading-8 text-slate-300">
              Muhammad Shahzad combines cybersecurity practice with research collaboration and
              secure development awareness. The portfolio is intentionally minimal, refined, and
              suitable for employers, scholarship reviewers, academic supervisors, and research
              partners.
            </p>
          </Card>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <Card className="h-full bg-white/92">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                  Featured Project
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-950">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">{project.period}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{project.summary}</p>
                <ButtonLink to="/projects" variant="ghost" className="mt-5 px-0">
                  Explore projects
                </ButtonLink>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
