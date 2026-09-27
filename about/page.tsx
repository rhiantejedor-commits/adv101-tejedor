export default function AboutPage() {
  const skills = [
    "Python",
    "C++",
    "Javascript",
    "Java",
    "HTML & CSS",
    "Git / GitHub",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-16 font-sans">
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900/40 via-zinc-950 to-zinc-950 border border-zinc-800/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium tracking-wide">
            <span>Profile Overview</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Me</span>
          </h1>
          
          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-normal max-w-2xl">
            Hi everyone! I'm a passionate Junior Programmer focused on building clean, performant, and user-friendly web applications. I love working with modern frontend technologies like Next.js, React, and Tailwind CSS to bring creative ideas to life.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-widest">Expertise</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">Skills & Technologies</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-zinc-200 text-xs sm:text-sm font-medium hover:border-zinc-600 hover:bg-zinc-900 hover:text-white transition-all duration-200 flex items-center gap-2.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-widest">Background</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">Education & Experience</h2>
        </div>
        
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 shadow-lg backdrop-blur-sm space-y-3 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-zinc-300 to-zinc-700"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="font-semibold text-base sm:text-lg text-white tracking-tight">Web Development Student / Developer</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-zinc-900 text-zinc-300 text-xs font-medium w-fit border border-zinc-800">
              Present
            </span>
          </div>
          
          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal">
            Continuously learning, building, and exploring full-stack web projects following modern React and industry standards.
          </p>
        </div>
      </section>
    </div>
  );
}
