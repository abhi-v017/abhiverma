"use client";

export const Footer = () => {
  return (
    <footer className="pt-8 pb-12 px-8 border-t border-ink/5 mt-16">
      <div className="max-w-4xl mx-auto">

        <div className="text-center text-ink-soft">
          <div className="font-hand text-2xl mb-4 text-ink flex items-center justify-center gap-2">
            Abhishek Verma <span className="text-accent">&middot;</span> <a href="https://github.com/vermabhi" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@vermabhi</a> <span className="text-accent">&middot;</span> Code with Purpose
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Abhishek Verma. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
