"use client";

import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const socialLinks = [
    { name: "Email", icon: "📧", url: "mailto:vermabhi.017@gmail.com", text: "vermabhi.017@gmail.com", rotation: "rotate-1" },
    { name: "WhatsApp", icon: "💬", url: "https://wa.me/8923675163", text: "Message me", rotation: "-rotate-2" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com/in/vermabhi017", text: "Connect professionally", rotation: "-rotate-1" },
    { name: "GitHub", icon: "💻", url: "https://github.com/abhi-v017", text: "@abhi-v017", rotation: "rotate-2" },
    { name: "Twitter", icon: "🐦", url: "https://x.com/iamabek", text: "Follow for updates", rotation: "rotate-1" },
    { name: "Instagram", icon: "📸", url: "https://www.instagram.com/abekdev.exe/", text: "Behind the scenes", rotation: "-rotate-1" },
  ];

  return (
    <>
      <section className="pt-24 pb-12 px-8 md:px-16 max-w-4xl mx-auto min-h-[70vh]">
        <div className="text-center mb-16">
          <span className="font-hand text-3xl text-accent block mb-2 -rotate-2">reach out</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Let's build something together.</h1>
          <p className="text-ink-soft text-lg max-w-2xl mx-auto">
            I'm currently open for new opportunities, freelance projects, or just a good conversation about tech and AI. Choose your preferred platform below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {socialLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`fcard flex items-center gap-4 hover:-translate-y-2 transition-transform p-6 ${link.rotation}`}
            >
              <div className="text-4xl">{link.icon}</div>
              <div>
                <h3 className="font-serif font-bold text-xl">{link.name}</h3>
                <span className="text-ink-soft text-sm">{link.text}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
      
      <Footer />
    </>
  );
}
