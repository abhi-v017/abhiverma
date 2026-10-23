"use client";

interface SocialHandle {
  name: string;
  handle: string;
  url: string;
  icon: () => JSX.Element;
  color: string;
  tilt: string;
}

const GitHubIcon = () => (
  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const SOCIAL_HANDLES: SocialHandle[] = [
  {
    name: "Instagram",
    handle: "@me.abek",
    url: "https://www.instagram.com/me.abek/",
    icon: InstagramIcon,
    color: "#E4405F",
    tilt: "rotate-[-1.5deg]"
  },
  {
    name: "Email",
    handle: "vermabhi.017@gmail.com",
    url: "mailto:vermabhi.017@gmail.com",
    icon: EmailIcon,
    color: "#C96F4C",
    tilt: "rotate-[1deg]"
  },
  {
    name: "WhatsApp",
    handle: "+91 8923675163",
    url: "https://wa.me/8923675163",
    icon: WhatsAppIcon,
    color: "#25D366",
    tilt: "rotate-[-2deg]"
  },
  {
    name: "LinkedIn",
    handle: "in/vermabhi017",
    url: "https://linkedin.com/in/vermabhi017",
    icon: LinkedInIcon,
    color: "#0A66C2",
    tilt: "rotate-[1.5deg]"
  },
  {
    name: "GitHub",
    handle: "@abhi-v017",
    url: "https://github.com/abhi-v017",
    icon: GitHubIcon,
    color: "#8B5CF6",
    tilt: "rotate-[-1deg]"
  },
  {
    name: "Twitter",
    handle: "@iamabek",
    url: "https://twitter.com/iamabek",
    icon: TwitterIcon,
    color: "#1DA1F2",
    tilt: "rotate-[2deg]"
  },
  {
    name: "X",
    handle: "@iamabek",
    url: "https://x.com/iamabek",
    icon: XIcon,
    color: "#E2E8F0",
    tilt: "rotate-[-1.5deg]"
  }
];

export const Footer = ({ showSocials = true }: { showSocials?: boolean }) => {
  return (
    <footer className="pt-10 pb-14 px-4 sm:px-8 border-t border-ink/10 dark:border-white/10 mt-16 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        {/* Social Rolodex Section (can be hidden on pages like /contact) */}
        {showSocials && (
          <div className="text-center mb-10">
            <span className="font-hand text-2xl sm:text-3xl text-terra dark:text-coral -rotate-2 inline-block mb-1">
              let's connect & hang out 🌿
            </span>
            <p className="text-xs sm:text-sm text-ink-soft dark:text-neutral-300 max-w-md mx-auto mb-6">
              Find me on your favorite platform — open for questions, collaborations, or casual tech chats.
            </p>

            {/* Handles Cluster with tactile scrapbook styling */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto">
              {SOCIAL_HANDLES.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.name} (${item.handle})`}
                  className={`group relative inline-flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-[#FAF7F2] dark:bg-[#201D1A] border border-ink/15 dark:border-white/15 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-terra/60 dark:hover:border-coral/60 transition-all duration-300 cursor-pointer ${item.tilt}`}
                >
                  {/* Platform Icon Badge */}
                  <div 
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${item.color}20`, 
                      color: item.color 
                    }}
                  >
                    <item.icon />
                  </div>

                  {/* Platform Identity */}
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-ink-soft dark:text-neutral-400 group-hover:text-terra dark:group-hover:text-coral transition-colors">
                      {item.name}
                    </span>
                    <span className="text-xs sm:text-[13px] font-mono font-medium text-ink dark:text-white">
                      {item.handle}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Subtle Separator */}
            <div className="w-24 h-px border-t border-dashed border-ink/20 dark:border-white/20 mx-auto mt-10 mb-8" />
          </div>
        )}

        {/* Signature & Copyright */}
        <div className="text-center text-ink-soft dark:text-neutral-400">
          <div className="font-hand text-2xl sm:text-3xl mb-3 text-ink dark:text-white flex items-center justify-center gap-2 flex-wrap">
            Abhishek Verma{" "}
            <span className="text-terra dark:text-coral">&middot;</span>{" "}
            <a 
              href="https://github.com/abhi-v017" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-terra dark:text-coral hover:underline"
            >
              @vermabhi
            </a>{" "}
            <span className="text-terra dark:text-coral">&middot;</span>{" "}
            Code with Purpose
          </div>
          <div className="text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Abhishek Verma. All rights reserved. &middot; Kanpur, Uttar Pradesh, India
          </div>
        </div>
      </div>
    </footer>
  );
};
