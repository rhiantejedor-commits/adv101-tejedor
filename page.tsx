import Link from "next/link";

export default function Home() {
  const games = [
    { name: "Valorant", url: "https://playvalorant.com/" },
    { name: "Tekken 8", url: "https://tekken.com/" },
    { name: "Minecraft", url: "https://www.minecraft.net/" },
    { name: "Bayonetta Series", url: "https://www.nintendo.com/us/store/products/bayonetta-3-switch/" },
  ];

  const works = [
    {
      title: "A Student Tracker App",
      desc: "A responsive app that can manage or monitor some students.",
      link: "/projects",
    },
    {
      title: "Android Mobile App Idea",
      desc: "A custom mobile application concept designed to solve daily user tasks with a clean mobile UI and smart backend integration.",
      link: "/projects",
    },
  ];

  const stats = [
    { number: "20", label: "Years Old" },
    { number: "7+", label: "Key Projects" },
    { number: "100%", label: "Caffeine" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-20 font-sans">
      
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900/40 via-zinc-950 to-zinc-950 border border-zinc-800/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium tracking-wide">
              <span>Junior Developer</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Rhian Nisnisan Tejedor</span>
            </h1>
            
            <p className="text-zinc-400 text-xs sm:text-sm font-light tracking-wide">
              Davao City, Philippines • Born February 8
            </p>
            
            <p className="text-zinc-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              Passionate about building clean digital experiences, mastering modern frameworks like Next.js, and crafting software with purpose.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/projects"
                className="px-5 py-2.5 rounded-xl bg-white text-zinc-950 text-xs font-medium hover:bg-zinc-200 transition shadow-sm"
              >
                Explore Projects
              </Link>
              <Link
                href="/about"
                className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium hover:text-white hover:border-zinc-700 transition"
              >
                About Me
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center pt-12 lg:pt-0">
            <div className="relative flex flex-col items-center group">
              
              <div className="absolute -top-24 w-32 h-28 pointer-events-none z-10 overflow-visible">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 120 100" fill="none">
                  <path
                    d="M60 0 C60 40, 20 60, 60 100"
                    stroke="url(#lanyardGradient)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    className="drop-shadow-md"
                  />
                  <defs>
                    <linearGradient id="lanyardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#27272a" />
                      <stop offset="50%" stopColor="#71717a" />
                      <stop offset="100%" stopColor="#18181b" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] font-mono tracking-widest text-zinc-400 rotate-[-15deg] uppercase whitespace-nowrap opacity-80 pointer-events-none">
                </div>
              </div>

              <div className="relative z-20 flex flex-col items-center -mb-2">
                <div className="w-4 h-6 bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-500 rounded-sm shadow-md border border-zinc-600"></div>
                <div className="w-6 h-3 bg-zinc-300 rounded-full shadow-inner border border-zinc-500 -mt-0.5"></div>
              </div>

              <div className="relative z-30 w-44 sm:w-48 bg-zinc-950 border border-zinc-800/90 rounded-2xl p-4 shadow-2xl group-hover:border-zinc-600 transition-all duration-300 group-hover:scale-[1.02]">
              
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-zinc-900 rounded-full border border-zinc-800"></div>

                <div className="pt-4 pb-2 text-center border-b border-zinc-900">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">OFFICIAL ID PASS</span>
                </div>

                <div className="my-3 w-full h-36 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-inner relative">
                  <img
                    src="https://uploads.onecompiler.io/43zvj4fst/1790176799896/813841527_1414976944067778_6850115335521002480_n.jpg"
                    alt="Rhian Nisnisan Tejedor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 w-3 h-3 bg-emerald-500 border-2 border-zinc-950 rounded-full"></div>
                </div>

                <div className="text-center space-y-1 pb-1">
                  <h3 className="text-xs font-semibold text-white tracking-tight truncate">Rhian Nisnisan Tejedor</h3>
                  <p className="text-[10px] text-zinc-400 font-mono">Junior Programmer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-12 pt-6 border-t border-zinc-800 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                {stat.number}
              </div>
              <div className="text-zinc-400 text-[11px] font-medium tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-1">
          <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-widest">Background</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">My Journey & Inspiration</h2>
        </div>
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm space-y-3">
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
            I fell in love with programming because of my uncle. Watching his dedication as a full-stack developer and software engineer deeply inspired me. Ever since I was a kid, I've been endlessly curious about how games, websites, and servers come together to build things people use every day.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-1">
          <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-widest">Interests</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">When I'm Not Coding</h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-normal">You can usually find me exploring virtual worlds and gaming:</p>
        </div>
        <div className="flex flex-wrap gap-2.5 pt-1">
          {games.map((game, i) => (
            <a
              key={i}
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-xs font-medium hover:border-zinc-600 hover:bg-zinc-800 hover:text-white transition-all duration-200 flex items-center gap-1.5"
            >
              <span>{game.name}</span>
              <span className="text-zinc-500 text-[10px]">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-widest">Work</span>
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">Featured Projects</h2>
          </div>
          <Link href="/projects" className="text-xs font-medium text-zinc-300 hover:text-white transition flex items-center gap-1">
            View All <span>→</span>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {works.map((work, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-2">
                <h3 className="font-semibold text-base sm:text-lg text-white group-hover:text-zinc-200 transition-colors tracking-tight">
                  {work.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {work.desc}
                </p>
              </div>
              <div>
                <Link
                  href={work.link}
                  className="inline-flex items-center gap-1 text-xs font-medium text-zinc-300 hover:text-white transition"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
