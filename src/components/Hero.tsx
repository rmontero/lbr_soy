export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden animated-gradient grid-bg">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-[at_50%_30%] from-violet-900/30 via-transparent to-transparent pointer-events-none" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
          </span>
          Now in public beta — start for free
        </div>

        {/* Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mb-8">
          <span className="block text-white">The website</span>
          <span className="block gradient-text">publishing</span>
          <span className="block text-white">launchpad</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-xl text-white/50 leading-relaxed mb-12">
          Libre turns your ideas into stunning websites instantly. AI-powered
          editing, beautiful templates, and one-click deployment—everywhere.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-base shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
          >
            Start building free
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white/70 font-medium text-base hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            See how it works
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex -space-x-3">
            {["bg-violet-500", "bg-cyan-500", "bg-indigo-500", "bg-pink-500", "bg-amber-500"].map(
              (color, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full ${color} border-2 border-black flex items-center justify-center text-xs font-bold text-white`}
                >
                  {["JK", "AM", "SR", "TL", "WB"][i]}
                </div>
              )
            )}
          </div>
          <p className="text-sm text-white/40">
            Trusted by{" "}
            <span className="text-white/70 font-medium">2,400+</span> creators
            and publishers worldwide
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>

      {/* Preview window mockup */}
      <div className="relative z-10 mt-0 w-full max-w-5xl mx-auto px-6">
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/50 float">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-4 h-6 rounded-md bg-white/5 flex items-center px-3">
              <span className="text-white/30 text-xs">https://mysite.libre.app</span>
            </div>
          </div>
          {/* Fake editor content */}
          <div className="p-6 min-h-48 bg-gradient-to-b from-white/3 to-transparent">
            <div className="flex gap-6">
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col gap-2 w-36 flex-shrink-0">
                {["Pages", "Components", "Styles", "Assets", "Settings"].map(
                  (item, i) => (
                    <div
                      key={i}
                      className={`text-xs px-3 py-2 rounded-lg ${
                        i === 0
                          ? "bg-violet-500/20 text-violet-300"
                          : "text-white/30 hover:text-white/50"
                      } cursor-pointer`}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
              {/* Canvas */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="h-8 w-3/4 rounded-lg bg-white/5 shimmer" />
                <div className="h-4 w-full rounded bg-white/3 shimmer" />
                <div className="h-4 w-5/6 rounded bg-white/3 shimmer" />
                <div className="mt-2 grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-20 rounded-xl bg-white/5 shimmer"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
