export default function ProjectsPage() {
  const myProjects = [
    {
      title: "Android Studio Project Design",
      description: "An Android application interface featuring spiritual tools and mobile access design.",
      tech: ["Kotlin", "XML", "Java"],
      link: "https://github.com/rhiantejedor-commits/Prelim-initial-activity--Android-Studio-layout",
    },
    {
      title: "Study Tracker",
      description: "A productivity application built to track study sessions and manage time effectively with built-in timers.",
      tech: ["Java"],
      link: "https://github.com/rhiantejedor-commits/Java-For-CC103-STUDY-TRACKER-ONLY-",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-16 font-sans">
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900/40 via-zinc-950 to-zinc-950 border border-zinc-800/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium tracking-wide">
            <span>Code Repository</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Projects</span>
          </h1>
          
          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-normal max-w-xl">
            Explore my software development work, academic projects, and mobile application concepts.
          </p>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        {myProjects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-zinc-700 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors tracking-tight">
                {project.title}
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 font-medium"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-zinc-300 hover:text-white transition"
              >
                View Code / Demo <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
