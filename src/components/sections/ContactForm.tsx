import { Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function ContactForm() {
  return (
    <Card className="rounded-[32px] bg-white/90 p-8">
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold text-slate-950">Professional Inquiry</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          This interface is styled as a professional contact form. Connect directly by email for
          collaboration, research, consulting, or career opportunities.
        </p>
      </div>
      <form className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">Full Name</span>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-300 focus:bg-white"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">Email Address</span>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-300 focus:bg-white"
            />
          </label>
        </div>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Subject</span>
          <input
            type="text"
            placeholder="How can we collaborate?"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-300 focus:bg-white"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Message</span>
          <textarea
            rows={6}
            placeholder="Share your message, opportunity, or project context."
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-300 focus:bg-white"
          />
        </label>
        <div className="flex flex-wrap items-center gap-4">
          <Button type="button" className="gap-2">
            Send Message
            <Send className="h-4 w-4" />
          </Button>
          <a
            href="mailto:studyofficial257@gmail.com"
            className="text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            Or email directly
          </a>
        </div>
      </form>
    </Card>
  );
}
