import { BrainCircuit, LockKeyhole, SearchCheck } from 'lucide-react';
import profilePic from '../components/assets/pic.jpeg';
import { PageIntro } from '../components/sections/PageIntro';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { pageDescriptions, siteConfig } from '../data/portfolio';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const strengths = [
  {
    title: 'Cybersecurity Focus',
    icon: LockKeyhole,
    text: 'Hands-on interest in penetration testing, vulnerability analysis, and secure system design.',
  },
  {
    title: 'Research Collaboration',
    icon: SearchCheck,
    text: 'Active contribution to publication-oriented remote research collaboration with UK-based academic links.',
  },
  {
    title: 'Secure Development',
    icon: BrainCircuit,
    text: 'Awareness of modern web technologies and the practical security principles required to protect them.',
  },
];

export function AboutPage() {
  useDocumentMeta('About | Muhammad Shahzad', pageDescriptions.about);

  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A polished profile shaped by cybersecurity discipline, academic rigor, and long-term information security goals."
        description="Muhammad Shahzad is a Computer Science graduate from Kohat University of Science and Technology with a professional direction centered on cybersecurity, ethical hacking, secure web development, and research-aligned technical growth."
      />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <Card className="rounded-[28px] bg-white/90 p-5 sm:rounded-[32px] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
              Professional Biography
            </p>
            <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600">
              <p>
                {siteConfig.name} is a cybersecurity-focused professional from {siteConfig.location}{' '}
                with academic grounding in computer science and a growing portfolio of practical
                security work. His background combines penetration testing, OWASP-aligned vulnerability
                assessment, secure web development awareness, and technical reporting for real-world
                security improvement.
              </p>
              <p>
                My work emphasizes identifying weaknesses responsibly, documenting security risks with
                clarity, and supporting hardening efforts across web applications, network environments,
                and foundational enterprise systems such as firewalls and Active Directory.
              </p>
              <p>
                Alongside technical practice, i am engaged in remote research collaboration connected
                to UK-based researchers and continues to advance my training through an online
                cybersecurity certification program from St. Louis Community College in the United
                States. My long-term career focus spans information security, AI-informed secure
                systems, and trustworthy digital infrastructure.
              </p>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={120}>
          <Card className="flex h-full flex-col justify-between rounded-[28px] bg-slate-50 p-5 sm:rounded-[32px] sm:p-8">
            <div className="rounded-[24px] border border-dashed border-brand-200 bg-white/80 p-5 sm:rounded-[28px] sm:p-8">
              <div className="mx-auto flex h-44 w-full max-w-[18rem] items-center justify-center rounded-[24px] bg-gradient-to-br from-brand-50 via-white to-slate-100 sm:h-52 sm:rounded-[28px]">
                <img
                  src={profilePic}
                  alt="Muhammad Shahzad"
                  className="h-32 w-32 rounded-full object-cover object-center shadow-soft ring-4 ring-white/90 sm:h-40 sm:w-40 lg:h-44 lg:w-44"
                />
              </div>
            </div>
            <div className="mt-6 rounded-[24px] bg-slate-950 p-5 text-white sm:rounded-[28px] sm:p-6">
              <p className="text-sm leading-7 text-slate-300">
                Nationality: <span className="font-semibold text-white">{siteConfig.nationality}</span>
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Location: <span className="font-semibold text-white">{siteConfig.location}</span>
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Career Path:{' '}
                <span className="font-semibold text-white">
                  Information Security, AI, and Secure Systems
                </span>
              </p>
            </div>
          </Card>
        </Reveal>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {strengths.map((strength, index) => {
          const Icon = strength.icon;
          return (
            <Reveal key={strength.title} delay={index * 90}>
              <Card className="h-full bg-white/90">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-lg font-bold text-slate-950">{strength.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{strength.text}</p>
              </Card>
            </Reveal>
          );
        })}
      </section>
    </>
  );
}
