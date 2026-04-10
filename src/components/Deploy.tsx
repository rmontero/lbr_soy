const platforms = [
  {
    name: "Vercel",
    description: "Deploy to the edge with zero config",
    color: "bg-white",
    textColor: "text-black",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 76 65" fill="currentColor">
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
      </svg>
    ),
  },
  {
    name: "Netlify",
    description: "Continuous deployment from Git",
    color: "bg-[#00AD9F]",
    textColor: "text-white",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 128 128" fill="currentColor">
        <path d="M64 0L128 64L64 128L0 64L64 0Z" />
      </svg>
    ),
  },
  {
    name: "Cloudflare",
    description: "Global edge network in 300+ cities",
    color: "bg-orange-500",
    textColor: "text-white",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 9.5C16.5 7.01 14.49 5 12 5s-4.5 2.01-4.5 4.5c0 .17.01.34.03.5H6c-1.66 0-3 1.34-3 3s1.34 3 3 3h10.5c1.38 0 2.5-1.12 2.5-2.5S18.38 11 17 11c.97-.71 1.5-1.9 1.5-1.5z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    description: "S3 + CloudFront static hosting",
    color: "bg-[#FF9900]",
    textColor: "text-white",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.439.43.663 1.085.663 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.128a1.788 1.788 0 01.324.167c.103.064.175.128.215.2a.386.386 0 01.048.16v.375c0 .167-.064.255-.184.255a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.133.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" />
      </svg>
    ),
  },
  {
    name: "GitHub Pages",
    description: "Free hosting straight from your repo",
    color: "bg-[#333]",
    textColor: "text-white",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "Custom Domain",
    description: "Your brand, your domain, always",
    color: "bg-gradient-to-r from-violet-600 to-indigo-600",
    textColor: "text-white",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "< 50ms", label: "Global TTFB" },
  { value: "300+", label: "Edge locations" },
  { value: "0", label: "DevOps needed" },
];

export default function Deploy() {
  return (
    <section id="deploy" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#040418] to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm">
            Deploy Everywhere
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Publish once,</span>
            <br />
            <span className="gradient-text">run everywhere</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-white/50">
            Export your site to any platform, CDN, or custom infrastructure. Libre is
            platform-agnostic—you own your content, always.
          </p>
        </div>

        {/* Platforms grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {platforms.map((platform, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 card-hover cursor-default transition-all"
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-xl ${platform.color} ${platform.textColor} flex items-center justify-center shadow-lg`}
              >
                {platform.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1">
                  {platform.name}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  {platform.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/5">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
