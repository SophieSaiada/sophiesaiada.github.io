import { Link } from "gatsby";
import { FileBadge, Mail, Github, Linkedin, Menu } from "lucide-react";
import React, { useState } from "react";

const iconClass =
  "size-8 mx-2 text-tinted-text drop-shadow-[0_0_8px_rgba(236,72,255,0.8)] hover:text-white-text transition";

const MenuBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex-wrap flex items-center justify-between px-8 py-3 bg-background/50 backdrop-blur-md z-50 fixed top-0 left-0 shadow-lg shadow-background/30">
      <Link
        className="font-elder-magic text-[2rem] leading-[2.2rem] text-tinted-text drop-shadow-[0_0_12px_rgba(236,72,255,0.9)] no-underline"
        to="/"
      >
        <span>
          SopHie
          <br />
          Saiada
        </span>
      </Link>
      <button
        className="text-[0] text-tinted-text flex flex-row items-center gap-2 no-underline bg-transparent border-0 h-full lg:hidden"
        title="Menu"
        onClick={() => setOpen((open) => !open)}
      >
        <Menu className={iconClass} strokeWidth={1.75} />
      </button>

      <Links className="max-lg:hidden items-center" />

      {open && (
        <>
          <div className="lg:hidden basis-full h-0" />
          <Links className="lg:hidden flex-col w-full gap-1 items-start mt-6" />
        </>
      )}
    </nav>
  );
};

export default MenuBar;

const Links = ({ className }: { className: string }) => (
  <div className={`flex gap-4 ${className}`}>
    <a
      className="text-[0] text-tinted-text flex flex-row w-full items-center gap-2 no-underline"
      href="/SophieSaiadaSeniorFullStackDeveloper.pdf"
      target="_blank"
      rel="noopener noreferrer"
      title="Resume"
    >
      <FileBadge className={iconClass} strokeWidth={1.75} />
      <span className="lg:hidden py-3 text-lg font-recursive">Resume</span>
    </a>
    <a
      className="text-[0] text-tinted-text flex flex-row w-full items-center gap-2 no-underline"
      href="mailto:contact@sophies.dev"
      title="Email"
    >
      <Mail className={iconClass} strokeWidth={1.75} />
      <span className="lg:hidden py-3 text-lg font-recursive">Email</span>
    </a>
    <a
      className="text-[0] text-tinted-text flex flex-row w-full items-center gap-2 no-underline"
      href="https://github.com/SophiaSaiada"
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub"
    >
      <Github className={iconClass} strokeWidth={1.75} />
      <span className="lg:hidden py-3 text-lg font-recursive">GitHub</span>
    </a>
    <a
      className="text-[0] text-tinted-text flex flex-row w-full items-center gap-2 no-underline"
      href="https://www.linkedin.com/in/sophie-saiada/"
      target="_blank"
      rel="noopener noreferrer"
      title="LinkedIn"
    >
      <Linkedin className={iconClass} strokeWidth={1.65} />
      <span className="lg:hidden py-3 text-lg font-recursive">LinkedIn</span>
    </a>
  </div>
);
