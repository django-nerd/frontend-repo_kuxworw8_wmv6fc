import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black py-20 text-white">
      <div className="absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-purple-700/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 to-black p-8 sm:p-12 shadow-[0_0_60px_0_rgba(126,34,206,0.25)]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let’s build something remarkable</h2>
          <p className="mt-3 text-white/80">Tell us about your idea. We’ll reply within 24 hours with next steps and a clear estimate.</p>
        </div>
        <form className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-purple-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-purple-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Company / Project"
            className="sm:col-span-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-purple-500 focus:outline-none"
          />
          <textarea
            rows={4}
            placeholder="What are you looking to build?"
            className="sm:col-span-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-purple-500 focus:outline-none"
          />
          <div className="sm:col-span-2 flex justify-center">
            <button
              type="button"
              onClick={() => alert('Thanks! We will reach out within 24 hours.')}
              className="rounded-full bg-purple-700 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_0_rgba(126,34,206,0.6)] transition hover:bg-purple-600"
            >
              Send request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
