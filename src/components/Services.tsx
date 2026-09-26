"use client";

const SKILLS = {
  Languages: ["JavaScript (ES6+)", "Python", "TypeScript", "C++"],
  Frontend: ["React.js", "React Native (Expo)", "Next.js", "Tailwind CSS", "HTML5/CSS3"],
  Backend: ["Node.js", "Express.js", "REST API Design", "Socket.io", "WebRTC", "JWT"],
  Database: ["MongoDB", "Mongoose ODM", "Redis", "Firebase"],
  SystemDesign: ["Caching", "Database Indexing", "Load Balancing", "Scalable APIs"]
};

export const Services = () => {
  return (
    <section className="py-24 px-8 md:px-16 max-w-4xl mx-auto border-t border-ink/10">
      <h2 className="text-3xl font-serif font-bold mb-12 text-center">Technical Toolkit</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-bold text-accent uppercase tracking-wider text-sm mb-3">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map(item => (
                <li key={item} className="bg-white border border-ink/10 shadow-sm px-3 py-1 rounded-md text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
