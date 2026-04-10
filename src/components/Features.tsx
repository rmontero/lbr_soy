const features = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
    label: "AI Co-author",
    title: "Write with your AI co-author",
    description:
      "Libre's AI understands your brand voice and helps you write, edit, and refine content in seconds—never stare at a blank page again.",
    gradient: "from-violet-600/20 to-purple-900/10",
    accent: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
    label: "Visual Editor",
    title: "Design without code",
    description:
      "A pixel-perfect visual editor that feels as natural as sketching. Drag, drop, tweak—your site looks exactly how you imagine it.",
    gradient: "from-cyan-600/20 to-blue-900/10",
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        />
      </svg>
    ),
    label: "Responsive",
    title: "Every screen, perfectly",
    description:
      "Responsive by default. Libre automatically adapts your site for mobile, tablet, and desktop—no media queries needed.",
    gradient: "from-indigo-600/20 to-blue-900/10",
    accent: "text-indigo-400",
    border: "border-indigo-500/20",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    label: "Instant Deploy",
    title: "Ship in seconds",
    description:
      "One click to publish to a global CDN. Zero configuration, zero downtime, zero headaches. Your site is live before you can blink.",
    gradient: "from-amber-600/20 to-orange-900/10",
    accent: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    ),
    label: "Integrations",
    title: "Connect everything",
    description:
      "Seamlessly integrates with your favourite tools—CMS, analytics, e-commerce, email marketing, and hundreds more via webhooks.",
    gradient: "from-pink-600/20 to-rose-900/10",
    accent: "text-pink-400",
    border: "border-pink-500/20",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    label: "Security",
    title: "Enterprise-grade security",
    description:
      "SOC 2 compliant, end-to-end encrypted, with automatic backups. Your content is always safe, always private, always yours.",
    gradient: "from-green-600/20 to-emerald-900/10",
    accent: "text-green-400",
    border: "border-green-500/20",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050510] to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm">
            Everything you need
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Built for the way</span>
            <br />
            <span className="gradient-text">creators think</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-white/50">
            From first draft to published site—Libre handles every step of the
            journey with elegance.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border ${feature.border} bg-gradient-to-br ${feature.gradient} card-hover cursor-default overflow-hidden`}
            >
              {/* Shimmer overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/3 to-transparent rounded-2xl" />

              <div
                className={`inline-flex items-center gap-2 ${feature.accent} mb-5`}
              >
                {feature.icon}
                <span className="text-xs font-medium tracking-widest uppercase opacity-70">
                  {feature.label}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
