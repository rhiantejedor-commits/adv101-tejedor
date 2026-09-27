export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Faith Community",
      category: "Mobile Android App",
      description: "An Android application interface featuring daily verses, sermon series streams, and community engagement features.",
      tech: ["Android Studio", "XML", "Java/Kotlin"],
      image: "https://uploads.onecompiler.io/43zvj4fst/1790173659671/Screenshot%202026-09-23%20222705.png",
    },
    {
      title: "Glitch Gig login page",
      category: "Web Application / Login UI",
      description: "A dark gothic music platform featuring a custom logo, theme styling, and secure user login flow.",
      tech: ["React", "CSS", "UI/UX Design"],
      image: "https://uploads.onecompiler.io/43zvj4fst/43zvjq68g/Desktop%202.jpg",
    },
    {
      title: "Sole Hustle Kicks",
      category: "E-Commerce Website",
      description: "A modern, clean sneaker boutique interface with featured drops, pricing displays, and cart integration.",
      tech: ["HTML", "CSS", "Javascript"],
      image: "https://uploads.onecompiler.io/43zvj4fst/43zw7gp2p/7ae51c28-d3f9-418c-a781-3b71554b4861.png",
    },
    {
      title: "Air Vault",
      category: "Landing Page / Dark UI",
      description: "A high-contrast neon-red dark mode showcase designed for exclusive hype sneaker drops.",
      tech: ["HTML", "CSS Grid", "Tailwind CSS"],
      image: "https://uploads.onecompiler.io/43zvj4fst/43zw7gp2p/0e14fbb6-0286-4aba-9b2c-43ca79ccb31b.png",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-16 font-sans">
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900/40 via-zinc-950 to-zinc-950 border border-zinc-800/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium tracking-wide">
            <span>Visual Showcase</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Gallery</span>
          </h1>
          
          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-normal max-w-xl">
            A curated visual gallery of UI concepts, web applications, and mobile projects I have built.
          </p>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-zinc-700 transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div className="relative h-48 w-full bg-zinc-950 overflow-hidden border-b border-zinc-800/80">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                  {item.category}
                </span>

                <h2 className="text-base sm:text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors tracking-tight">
                  {item.title}
                </h2>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
                {item.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
