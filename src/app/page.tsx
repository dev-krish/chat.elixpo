'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ────────────────────── FAQ Data ────────────────────── */
const faqItems = [
  {
    q: 'What is Elixpo Chat?',
    a: 'Elixpo Chat is a next-generation AI interface that combines cutting-edge language models with a beautifully designed conversational experience. It supports text, images, file uploads, and web search -- all in one seamless interface.',
  },
  {
    q: 'Which AI models does it support?',
    a: 'Elixpo Chat works with GPT-4o, Claude, Gemini, and more. You can switch between models mid-conversation to get the best response for your specific task.',
  },
  {
    q: 'Is my data private and secure?',
    a: 'Absolutely. We use end-to-end encryption for all conversations, your data is never used to train models, and you can delete your history at any time. Privacy is not optional -- it is foundational.',
  },
  {
    q: 'Can I use it for my team or business?',
    a: 'Yes. Elixpo offers workspace plans with shared conversation threads, role-based access, and API integrations so your entire team can leverage AI collaboratively.',
  },
  {
    q: 'How is the design and developer handoff?',
    a: 'Every component is built with proper naming conventions and production-grade code. The interface is fully responsive, accessible, and optimized for performance.',
  },
];

/* ─── Scroll-triggered animation hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── FAQ Item ─── */
function FaqItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left border-b border-gray-100 py-5 group cursor-pointer"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-[15px] font-medium text-gray-800 group-hover:text-gray-950 transition-colors">
          {q}
        </span>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className={`shrink-0 text-gray-400 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-sm text-gray-500 leading-relaxed pr-8">{a}</p>
      </div>
    </button>
  );
}

/* ════════════════════ LANDING PAGE ════════════════════ */
export default function LandingPage() {
  const hero = useInView(0.1);
  const features = useInView(0.1);
  const faq = useInView(0.1);
  const cta = useInView(0.1);

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ═══════════════════ HEADER ═══════════════════ */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-30">
        <nav className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gray-900 flex items-center justify-center">
              <span className="text-white text-sm font-bold">E</span>
            </div>
            <span className="text-[17px] font-semibold tracking-tight text-gray-900">Elixpo</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1 list-none">
            <li><a href="#features" className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md px-3 py-2 transition-colors">Features</a></li>
            <li><a href="#architecture" className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md px-3 py-2 transition-colors">Architecture</a></li>
            <li><a href="#faq" className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md px-3 py-2 transition-colors">FAQ</a></li>
          </ul>

          <div className="flex items-center gap-3">
            <Link href="/chat/new" className="text-sm text-gray-600 hover:text-gray-900 px-3 py-2 hidden sm:block transition-colors">
              Sign in
            </Link>
            <Link
              href="/chat/new"
              className="text-sm font-medium bg-violet-600 text-white rounded-full px-4 py-2 hover:bg-violet-700 transition-colors"
            >
              Start chatting
            </Link>
          </div>
        </nav>
      </header>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="border-b border-gray-100">
        <div
          ref={hero.ref}
          className={`max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center transition-all duration-700 ease-out ${
            hero.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 rounded-full px-3.5 py-1.5 mb-7">
            <div className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
            <span className="text-xs font-medium text-violet-700">Multi-model AI · Live</span>
          </div>

          <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold tracking-tight leading-[1.1] mb-5 text-gray-900">
            Build smarter conversations.<br />
            <span className="text-gray-400">With a powerful AI.</span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-9 leading-relaxed">
            A modern AI interface designed for speed, privacy, and unparalleled
            multimodal capabilities. Your conversations, elevated.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/chat/new"
              className="text-sm font-medium bg-violet-600 text-white rounded-full px-6 py-3 hover:bg-violet-700 transition-colors"
            >
              Start chatting
            </Link>
            <a
              href="#features"
              className="text-sm font-medium text-gray-700 border border-gray-200 rounded-full px-6 py-3 hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              Explore features
            </a>
          </div>
        </div>

        {/* Ticker */}
        <div className="border-t border-gray-100 overflow-hidden bg-gray-50/60">
          <div className="flex animate-[ticker_22s_linear_infinite] whitespace-nowrap py-3">
            {Array(2).fill(null).map((_, i) => (
              <div key={i} className="flex items-center gap-6 px-3 shrink-0">
                {['Multi-model AI', 'GPT-4o & Claude', 'File uploads', 'Voice input', 'Web search', 'Privacy-first', 'Real-time streaming', 'Markdown rendering'].map((t) => (
                  <React.Fragment key={`${i}-${t}`}>
                    <span className="text-xs font-medium text-gray-500">{t}</span>
                    <span className="text-gray-300">&bull;</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ MAIN CONTENT ═══════════════════ */}
      <main>

        {/* ══════ CAPABILITIES SECTION ══════ */}
        <section className="max-w-6xl mx-auto px-6 py-20" id="features">
          <div
            ref={features.ref}
            className={`transition-all duration-700 ease-out ${features.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="text-xs font-medium text-violet-600 mb-3 block">Capabilities</span>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight leading-[1.15] mb-4 text-gray-900">
              Designed by AI experts for<br />
              <span className="text-gray-400">next-generation interfaces.</span>
            </h2>
            <p className="text-gray-500 max-w-xl text-[15px] leading-relaxed mb-14">
              We are a team of AI engineers and product designers passionate about building intelligent tools.
              Built from real-world use cases, tested, flexible, and designed for infinite scalability.
            </p>

            {/* ── Architecture Diagram ── */}
            <div className="mb-16 flex justify-center">
              <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl p-6">
                <svg viewBox="0 0 560 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  <defs>
                    <linearGradient id="trail-h1-light" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
                      <stop offset="70%" stopColor="#7c3aed" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="trail-h2-light" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
                      <stop offset="70%" stopColor="#22c55e" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0.9" />
                    </linearGradient>
                    <path id="path-user-elixpo-l" d="M130,110 L193,110" />
                    <path id="path-elixpo-resp-l" d="M353,110 L423,110" />
                    <path id="path-cloud-down-l" d="M273,30 L273,55" />
                  </defs>

                  <rect x="5" y="55" width="550" height="112" fill="none" stroke="rgba(150,150,150,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                  <rect x="15" y="48" width="96" height="14" fill="white" />
                  <text x="20" y="58" fontFamily="ui-sans-serif" fontSize="7" letterSpacing="1" fill="rgba(120,120,120,0.6)">YOUR DEVICE</text>

                  <rect x="20" y="85" width="110" height="50" fill="white" stroke="rgba(150,150,150,0.25)" strokeWidth="1" rx="8" />
                  <text x="75" y="106" textAnchor="middle" fontFamily="ui-sans-serif" fontSize="8" fontWeight="600" fill="rgba(60,60,60,0.8)">Your prompt</text>
                  <text x="75" y="118" textAnchor="middle" fontFamily="ui-sans-serif" fontSize="6.5" fill="rgba(130,130,130,0.6)">Text · Files · Voice</text>

                  <line x1="130" y1="110" x2="193" y2="110" stroke="rgba(124,58,237,0.15)" strokeWidth="1" />
                  <line x1="130" y1="110" x2="193" y2="110" stroke="url(#trail-h1-light)" strokeWidth="2">
                    <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
                  </line>
                  <rect x="-1.5" y="-1.5" width="3" height="3" fill="#7c3aed">
                    <animateMotion dur="2s" repeatCount="indefinite"><mpath href="#path-user-elixpo-l" /></animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.8;1" dur="2s" repeatCount="indefinite" />
                  </rect>

                  <rect x="193" y="63" width="160" height="94" fill="white" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5" rx="10" />
                  <text x="274.5" y="93" textAnchor="middle" fontFamily="ui-sans-serif" fontSize="13" fontWeight="700" fill="#1f1147">Elixpo</text>
                  <text x="273" y="109" textAnchor="middle" fontFamily="ui-sans-serif" fontSize="6.5" fill="#7c3aed">Multi-model AI</text>
                  <line x1="210" y1="130" x2="336" y2="130" stroke="rgba(150,150,150,0.15)" strokeWidth="0.5" />
                  <text x="230" y="145" textAnchor="middle" fontFamily="ui-sans-serif" fontSize="6" fill="rgba(100,100,100,0.55)">GPT-4o</text>
                  <text x="273" y="145" textAnchor="middle" fontFamily="ui-sans-serif" fontSize="6" fill="rgba(100,100,100,0.55)">Claude</text>
                  <text x="316" y="145" textAnchor="middle" fontFamily="ui-sans-serif" fontSize="6" fill="rgba(100,100,100,0.55)">Gemini</text>

                  <line x1="353" y1="110" x2="423" y2="110" stroke="rgba(34,197,94,0.15)" strokeWidth="1" />
                  <line x1="353" y1="110" x2="423" y2="110" stroke="url(#trail-h2-light)" strokeWidth="2">
                    <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="1s" repeatCount="indefinite" />
                  </line>
                  <rect x="-1.5" y="-1.5" width="3" height="3" fill="#22c55e">
                    <animateMotion dur="2s" begin="1s" repeatCount="indefinite"><mpath href="#path-elixpo-resp-l" /></animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.8;1" dur="2s" begin="1s" repeatCount="indefinite" />
                  </rect>

                  <rect x="423" y="85" width="120" height="50" fill="white" stroke="rgba(150,150,150,0.25)" strokeWidth="1" rx="8" />
                  <text x="483" y="106" textAnchor="middle" fontFamily="ui-sans-serif" fontSize="8" fontWeight="600" fill="rgba(60,60,60,0.8)">Response</text>
                  <text x="483" y="118" textAnchor="middle" fontFamily="ui-sans-serif" fontSize="6.5" fill="#22c55e">Streaming · Fast</text>

                  <rect x="213" y="2" width="120" height="28" fill="white" stroke="rgba(150,150,150,0.2)" strokeWidth="1" rx="6" />
                  <text x="273" y="18" textAnchor="middle" fontFamily="ui-sans-serif" fontSize="7" fill="rgba(120,120,120,0.6)">Telemetry</text>

                  <line x1="273" y1="30" x2="273" y2="63" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.5" />
                  <rect x="-1.5" y="-1.5" width="3" height="3" fill="#ef4444">
                    <animateMotion dur="1.5s" repeatCount="indefinite"><mpath href="#path-cloud-down-l" /></animateMotion>
                    <animate attributeName="opacity" values="0.8;0.8;0" keyTimes="0;0.6;1" dur="1.5s" repeatCount="indefinite" />
                  </rect>

                  <line x1="267" y1="40" x2="279" y2="52" stroke="#ef4444" strokeWidth="1.5" />
                  <line x1="279" y1="40" x2="267" y2="52" stroke="#ef4444" strokeWidth="1.5" />

                  <text x="273" y="195" textAnchor="middle" fontFamily="ui-sans-serif" fontSize="6.5" letterSpacing="0.5" fill="rgba(130,130,130,0.55)">Zero telemetry · Your data stays local</text>
                </svg>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Your data stays yours.',
                  desc: 'End-to-end encryption for every conversation. Never used to train models. Delete your history at any time. Privacy is foundational.',
                  bg: 'bg-violet-50/70',
                  border: 'border-violet-100',
                  dot: 'bg-violet-500',
                },
                {
                  title: 'One interface, every model.',
                  desc: 'GPT-4o, Claude, Gemini, and more. Switch models mid-conversation to get the best response for your specific task.',
                  bg: 'bg-sky-50/70',
                  border: 'border-sky-100',
                  dot: 'bg-sky-500',
                },
                {
                  title: 'Beyond text conversations.',
                  desc: 'Share files, voice notes, code snippets, and images seamlessly. Elixpo understands multiple formats and context simultaneously.',
                  bg: 'bg-emerald-50/70',
                  border: 'border-emerald-100',
                  dot: 'bg-emerald-500',
                },
                {
                  title: 'Streaming at full speed.',
                  desc: 'Server-sent events deliver responses as they are generated. No waiting for completion. Every token arrives the instant it is ready.',
                  bg: 'bg-rose-50/70',
                  border: 'border-rose-100',
                  dot: 'bg-rose-500',
                },
              ].map((card) => (
                <div key={card.title} className={`${card.bg} border ${card.border} rounded-2xl p-7 hover:shadow-sm transition-shadow`}>
                  <div className={`w-2 h-2 rounded-full ${card.dot} mb-4`} />
                  <h3 className="text-lg font-semibold tracking-tight mb-2 text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ 3-TIER CPU ARCHITECTURE SECTION ══════ */}
        <section className="border-t border-gray-100 bg-gray-50/40">
          <div className="max-w-6xl mx-auto px-6 py-20" id="architecture">
            <span className="text-xs font-medium text-violet-600 mb-3 block">Infrastructure</span>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight leading-[1.15] mb-4 text-gray-900">
              Powered by a 3-tier<br />
              <span className="text-gray-400">CPU architecture.</span>
            </h2>
            <p className="text-gray-500 max-w-xl text-[15px] leading-relaxed mb-14">
              Elixpo runs on a purpose-built three-layer compute stack — each tier independently scalable,
              so your conversations stay fast regardless of load.
            </p>

            <div className="space-y-4 max-w-3xl">
              {[
                {
                  tier: 'Tier 01 · Presentation',
                  title: 'Interface & delivery layer',
                  desc: 'The front-facing layer serves the UI from globally distributed edge nodes. Static assets, routing, and session initiation happen here — milliseconds from the user, always.',
                  tags: ['Next.js', 'Edge Runtime', 'CDN Cache', 'TLS 1.3'],
                  dot: 'bg-sky-500',
                  tagBg: 'bg-sky-50 text-sky-700 border-sky-100',
                },
                {
                  tier: 'Tier 02 · Application',
                  title: 'AI orchestration engine',
                  desc: 'The brain of Elixpo. Incoming prompts are parsed, enriched with context, and routed to the optimal model — GPT-4o, Claude, Gemini — in real time. Streaming, tool calls, and file handling all live here.',
                  tags: ['Model Router', 'Stream SSE', 'Context Engine', 'Tool Calls'],
                  dot: 'bg-violet-500',
                  tagBg: 'bg-violet-50 text-violet-700 border-violet-100',
                },
                {
                  tier: 'Tier 03 · Data',
                  title: 'Encrypted data layer',
                  desc: 'All conversation history, user preferences, and uploaded files are encrypted at rest and never shared across accounts. The data tier is isolated from the public internet — fully private, fully yours.',
                  tags: ['E2E Encryption', 'KV Store', 'Cloudflare D1', 'Zero Telemetry'],
                  dot: 'bg-rose-500',
                  tagBg: 'bg-rose-50 text-rose-700 border-rose-100',
                },
              ].map((row) => (
                <div key={row.tier} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${row.dot}`} />
                    <span className="text-xs font-medium text-gray-400">{row.tier}</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5">{row.title}</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-4">{row.desc}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {row.tags.map(tag => (
                      <span key={tag} className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${row.tagBg}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-gray-400 mt-10">
              Each tier scales independently · Zero single points of failure
            </p>
          </div>
        </section>

        {/* ══════ PARTNER SECTION ══════ */}
        <section className="max-w-6xl mx-auto px-6 py-12 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-400 block mb-2">
                Powering next-generation AI workflows
              </span>
              <span className="text-lg font-semibold text-gray-700">
                Pollinations.ai
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-xs font-medium text-gray-500">
                All systems operational
              </span>
            </div>
          </div>
        </section>

        {/* ══════ FAQ SECTION ══════ */}
        <section className="max-w-6xl mx-auto px-6 py-20" id="faq">
          <div
            ref={faq.ref}
            className={`transition-all duration-700 ease-out ${faq.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 items-start">
              <div>
                <span className="text-xs font-medium text-violet-600 mb-3 block">FAQ</span>
                <h2 className="text-3xl font-bold tracking-tight leading-tight mb-4 text-gray-900">
                  Frequently asked<br />
                  <span className="text-gray-400">questions.</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-7">
                  Everything you need to know about Elixpo Chat. Can not find the answer you are looking for?
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <Link
                    href="#"
                    className="text-sm font-medium px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-colors"
                  >
                    Documentation
                  </Link>
                  <Link
                    href="#"
                    className="text-sm font-medium px-5 py-2.5 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors"
                  >
                    Ask question
                  </Link>
                </div>
              </div>
              <div>
                {faqItems.map((item, idx) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} idx={idx} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════ CTA SECTION ══════ */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div
            ref={cta.ref}
            className={`bg-gray-50 border border-gray-100 rounded-3xl p-12 md:p-20 text-center transition-all duration-700 ease-out ${cta.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-gray-900">
              Ready to build your AI<br />
              <span className="text-gray-400">chat experience?</span>
            </h2>
            <p className="text-gray-500 text-base max-w-md mx-auto mb-9 leading-relaxed">
              Start chatting with Elixpo AI today and experience the future of conversational interfaces.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link
                href="/chat"
                className="text-sm font-medium bg-violet-600 text-white rounded-full px-6 py-3 hover:bg-violet-700 transition-colors"
              >
                Open app
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 border border-gray-200 bg-white rounded-full px-6 py-3 hover:bg-gray-50 hover:border-gray-300 transition-colors"
              >
                Join community
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ════════ Footer ════════ */}
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-md bg-gray-900 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">E</span>
                </div>
                <span className="text-base font-semibold text-gray-900">Elixpo</span>
              </div>
              <p className="text-gray-500 text-sm max-w-[280px] leading-relaxed">
                Next-generation AI interface. Multi-model, privacy-first, beautifully designed.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-medium text-gray-400 mb-4">Product</h3>
              <ul className="space-y-2.5">
                <li><Link href="/chat" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">Chat</Link></li>
                <li><a href="#features" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">Features</a></li>
                <li><a href="#faq" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-medium text-gray-400 mb-4">Legal</h3>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">Terms</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-100">
            <span className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Elixpo
            </span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-xs text-gray-500">
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ──── Custom Animations ──── */}
      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
