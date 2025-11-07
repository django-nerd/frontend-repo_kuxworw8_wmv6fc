import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to improve text contrast; doesn't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_12px_4px_rgba(168,85,247,0.6)]" />
          Founded by a 14-year-old creator
        </span>
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Webnity — sleek websites for bold ideas
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          We craft fast, beautiful, and conversion-focused web experiences. Modern design, clean code, and a touch of futuristic flair.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-purple-700 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_0_rgba(126,34,206,0.6)] transition hover:bg-purple-600"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}
