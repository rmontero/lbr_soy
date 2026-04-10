const testimonials = [
  {
    quote:
      "Libre completely changed how our team ships content. What used to take days now takes hours. The AI suggestions are eerily good.",
    name: "Sarah Kim",
    title: "Head of Content, Horizon Labs",
    initials: "SK",
    color: "from-violet-500 to-purple-700",
  },
  {
    quote:
      "I've tried every website builder out there. Libre is the first one that actually feels made for creative professionals. Stunning output.",
    name: "Marcus Rodriguez",
    title: "Creative Director, Studio Nine",
    initials: "MR",
    color: "from-cyan-500 to-blue-700",
  },
  {
    quote:
      "We migrated our entire editorial platform to Libre in a weekend. The deployment pipeline is absolutely seamless.",
    name: "Priya Sharma",
    title: "CTO, Bloom Media",
    initials: "PS",
    color: "from-pink-500 to-rose-700",
  },
  {
    quote:
      "Our site scores 100 on Lighthouse. The output is clean, fast, accessible. Libre is technically excellent.",
    name: "James Whitfield",
    title: "Lead Engineer, Apex Digital",
    initials: "JW",
    color: "from-amber-500 to-orange-700",
  },
  {
    quote:
      "The editorial experience is just beautiful. It gets out of your way and lets you focus on what matters—the content.",
    name: "Elena Vasquez",
    title: "Editor in Chief, Verve Magazine",
    initials: "EV",
    color: "from-green-500 to-emerald-700",
  },
  {
    quote:
      "Our design team loves the visual editor, our engineers love the static export. Everyone wins.",
    name: "David Chen",
    title: "Product Lead, Float Design",
    initials: "DC",
    color: "from-indigo-500 to-violet-700",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#060612] to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-sm">
            ★ Loved by creators
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight">
            <span className="text-white">Real teams.</span>
            <br />
            <span className="gradient-text">Real results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-white/5 bg-white/2 hover:border-white/10 hover:bg-white/4 card-hover cursor-default transition-all"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-white/40">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
