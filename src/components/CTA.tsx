export default function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] to-black pointer-events-none" />
      {/* Large gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-violet-900/20 to-cyan-900/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-6xl sm:text-7xl font-bold tracking-tight leading-tight mb-8">
          <span className="gradient-text-white">Your next site</span>
          <br />
          <span className="text-white">starts here.</span>
        </h2>
        <p className="text-xl text-white/50 mb-12 max-w-xl mx-auto">
          Join thousands of creators who&apos;ve already discovered the fastest
          way to build and publish beautiful websites.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2.5 px-10 py-5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-lg shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
          >
            Start building for free
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="#pricing"
            className="text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            No credit card required
          </a>
        </div>
      </div>
    </section>
  );
}
