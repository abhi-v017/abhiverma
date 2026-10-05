"use client";

const PROJECTS = [
  {
    id: 1,
    icon: "💬",
    title: "HowUDoin",
    desc: "A real-time chat application with seamless messaging and an intuitive UI.",
    tech: "MERN Stack, Socket.io",
    link: "https://github.com/abhi-v017/howudoin",
    tape: "tape-blue",
    inProgress: false,
  },
  {
    id: 2,
    icon: "🎨",
    title: "Blynk",
    desc: "A beautiful link-in-bio canvas giving creators a real, customizable space.",
    tech: "Next.js, Tailwind",
    link: "https://github.com/abhi-v017/blynk",
    tape: "tape-pink",
    inProgress: false,
  },
  {
    id: 3,
    icon: "⚙️",
    title: "Distributed MapReduce",
    desc: "A distributed computing framework implementing the MapReduce paradigm for parallel processing.",
    tech: "Go / Systems",
    link: "https://github.com/abhi-v017/-distributed-mapreduce",
    tape: "tape-yellow",
    inProgress: false,
  },
  {
    id: 4,
    icon: "🤖",
    title: "Fitness Bot",
    desc: "An AI-powered fitness assistant that generates personalized workouts and diet plans.",
    tech: "AI / LLM",
    link: "",
    tape: "tape-blue",
    inProgress: true,
  },
  {
    id: 5,
    icon: "🔥",
    title: "Streax",
    desc: "A habit tracking application designed to keep users motivated and build daily streaks.",
    tech: "Full-Stack",
    link: "",
    tape: "tape-pink",
    inProgress: true,
  },
  {
    id: 6,
    icon: "🗄️",
    title: "Redis from Scratch",
    desc: "A lightweight, in-memory data store built from the ground up to understand caching architectures.",
    tech: "Systems",
    link: "",
    tape: "tape-yellow",
    inProgress: true,
  },
];

export const Works = () => {
  return (
    <section id="works" className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-accent uppercase tracking-widest text-sm font-bold mb-2 block">selected works</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold">Projects I'm building</h2>
        <p className="text-ink-soft mt-4 max-w-xl mx-auto text-lg">
          A mix of production applications, distributed systems, and experimental tools I'm currently working on.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {PROJECTS.map((project) => (
          <div key={project.id} className={`fcard ${project.tape} flex flex-col group mt-2 relative`}>
            <div className="text-4xl mb-4 flex justify-between items-start">
              <span>{project.icon}</span>
              {project.inProgress && (
                <span className="text-sm font-hand bg-paper px-3 py-1 rounded-full border border-ink/10 shadow-sm text-terra rotate-2">🚧 In Making</span>
              )}
            </div>
            
            <h3 className="font-serif font-bold text-2xl mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
            <p className="text-ink-soft mb-6 flex-grow">{project.desc}</p>
            
            <div className="mb-6">
              <span className="text-sm font-medium text-ink/60 bg-ink/5 py-1.5 px-3 rounded-md">
                {project.tech}
              </span>
            </div>
            
            <div className="font-hand text-xl transition-colors">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-terra hover:text-coral inline-block">
                  View Code &rarr;
                </a>
              ) : (
                <span className="text-ink-soft opacity-50 cursor-not-allowed inline-block">
                  Code coming soon &rarr;
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <a href="https://github.com/abhi-v017" target="_blank" rel="noopener noreferrer" className="btn">See all on GitHub</a>
      </div>
    </section>
  );
};
