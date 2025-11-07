import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-purple-600 shadow-[0_0_20px_6px_rgba(147,51,234,0.6)]"></span>
              <span className="text-lg font-semibold tracking-tight text-white">Webnity</span>
            </a>
            <div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#work" className="hover:text-white">Work</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
            <div className="hidden md:block">
              <a
                href="#contact"
                className="rounded-full bg-purple-700 px-4 py-2 text-sm font-medium text-white shadow-[-4px_0_30px_rgba(109,40,217,0.7)] transition hover:bg-purple-600"
              >
                Get a quote
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
