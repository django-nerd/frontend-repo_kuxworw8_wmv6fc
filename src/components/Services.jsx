import React from 'react';
import { Rocket, Palette, Zap } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Launch-ready Websites',
    desc: 'From idea to deployment. Lightning-fast, SEO-friendly, and responsive across devices.',
  },
  {
    icon: Palette,
    title: 'Brand & UI Design',
    desc: 'Clean, modern visuals with a dark purple accent that feels premium and memorable.',
  },
  {
    icon: Zap,
    title: 'Performance & Optimization',
    desc: 'Speed matters. We fine-tune your site for Core Web Vitals and smooth interactions.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(126,34,206,0.25),transparent_40%),_radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.18),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What we do</h2>
          <p className="mt-3 text-white/70">Small team. Big results. Focused on clarity, speed, and craft.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-700/20 text-purple-300 ring-1 ring-purple-700/40">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
