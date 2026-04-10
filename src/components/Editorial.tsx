const tools = [
  { label: "Rich Text", icon: "¶" },
  { label: "Markdown", icon: "##" },
  { label: "Media", icon: "▣" },
  { label: "Tables", icon: "⊞" },
  { label: "Code", icon: "</>" },
  { label: "Embeds", icon: "⊕" },
];

export default function Editorial() {
  return (
    <section id="editorial" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-sm">
              Editorial Experience
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-8">
              <span className="text-white">Write like</span>
              <br />
              <span className="gradient-text">a journalist,</span>
              <br />
              <span className="text-white">publish like</span>
              <br />
              <span className="gradient-text-white">a developer</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-10">
              Libre&apos;s editor combines the clarity of Notion with the power of
              a full CMS. Write in Markdown or rich text, embed media, manage
              structured content—all in one beautiful interface.
            </p>

            <ul className="space-y-4">
              {[
                "AI suggestions as you type",
                "Real-time collaboration with your team",
                "Version history and autosave",
                "SEO optimization built-in",
                "Content scheduling and workflows",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-violet-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: editor mockup */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-8 bg-violet-600/10 blur-3xl rounded-3xl pointer-events-none" />

            <div className="relative rounded-2xl border border-white/10 bg-[#0c0c18] overflow-hidden shadow-2xl">
              {/* Toolbar */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                {tools.map((tool) => (
                  <button
                    key={tool.label}
                    className="px-2.5 py-1 rounded text-xs text-white/40 hover:text-white/70 hover:bg-white/5 transition-colors font-mono"
                    title={tool.label}
                  >
                    {tool.icon}
                  </button>
                ))}
                <div className="flex-1" />
                <div className="flex gap-1.5">
                  <div className="px-3 py-1 rounded-md bg-violet-500/20 text-violet-300 text-xs font-medium">
                    AI
                  </div>
                  <div className="px-3 py-1 rounded-md bg-white/5 text-white/40 text-xs">
                    Preview
                  </div>
                </div>
              </div>

              {/* Editor body */}
              <div className="p-8 font-mono text-sm leading-7">
                <div className="text-white/20 text-xs mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  Autosaved · 2 min ago
                </div>

                <div className="text-3xl font-bold text-white mb-4 font-sans leading-snug">
                  The future of web publishing is{" "}
                  <span className="text-violet-400">here</span>
                </div>

                <div className="space-y-2 text-white/50 font-sans text-sm">
                  <p>
                    Imagine a world where creating beautiful websites is as easy
                    as writing an email. Libre makes that world real.
                  </p>
                  <p className="opacity-60">
                    With AI-powered suggestions, your content becomes sharper,
                    your messaging more persuasive, your...
                  </p>
                </div>

                {/* AI suggestion chip */}
                <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                    />
                  </svg>
                  AI suggestion: &ldquo;...brand stands for.&rdquo;&nbsp;
                  <button className="underline underline-offset-2 hover:text-violet-200">
                    Accept
                  </button>
                </div>

                {/* Cursor blink */}
                <span className="inline-block w-0.5 h-5 bg-violet-400 ml-0.5 animate-pulse" />
              </div>

              {/* Status bar */}
              <div className="flex items-center gap-4 px-4 py-2 border-t border-white/5 text-white/20 text-xs">
                <span>Words: 148</span>
                <span>SEO Score: 92/100</span>
                <div className="flex-1" />
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  3 collaborators
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
