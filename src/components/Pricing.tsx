const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for personal projects and experiments.",
    features: [
      "1 website",
      "10 pages",
      "Libre subdomain",
      "Community support",
      "Basic AI writing",
    ],
    cta: "Start for free",
    ctaHref: "#",
    highlight: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For creators and freelancers who ship professionally.",
    features: [
      "Unlimited websites",
      "Unlimited pages",
      "Custom domains",
      "Priority support",
      "Advanced AI co-author",
      "Analytics dashboard",
      "Team collaboration (3 seats)",
    ],
    cta: "Start 14-day trial",
    ctaHref: "#",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Team",
    price: "$79",
    period: "/month",
    description: "For studios and editorial teams at scale.",
    features: [
      "Everything in Pro",
      "Unlimited team seats",
      "Custom AI fine-tuning",
      "SSO & advanced security",
      "Content workflows",
      "SLA & dedicated support",
      "Custom integrations",
    ],
    cta: "Contact sales",
    ctaHref: "#",
    highlight: false,
    badge: null,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080818] to-[#050510] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-900/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-sm">
            Simple pricing
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Start free.</span>
            <br />
            <span className="gradient-text">Scale as you grow.</span>
          </h2>
          <p className="max-w-lg mx-auto text-lg text-white/50">
            No hidden fees. No surprises. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlight
                  ? "border-violet-500/50 bg-gradient-to-b from-violet-600/10 to-violet-900/5 shadow-2xl shadow-violet-500/20"
                  : "border-white/5 bg-white/2 hover:border-white/10"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-semibold shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-sm font-medium text-white/50 uppercase tracking-widest mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-white/40 text-sm mb-2">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-sm text-white/40">{plan.description}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "text-violet-400" : "text-white/40"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-white/60">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`block text-center py-3.5 px-6 rounded-full font-semibold text-sm transition-all duration-200 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105"
                    : "border border-white/10 text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-white/30 mt-10">
          All plans include SSL, CDN delivery, and GDPR compliance.
        </p>
      </div>
    </section>
  );
}
