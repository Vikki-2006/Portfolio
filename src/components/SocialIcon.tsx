import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiHackerrank } from 'react-icons/si';

interface SocialIconProps {
  href: string;
  network: 'github' | 'linkedin' | 'leetcode' | 'codechef' | 'hackerrank' | 'x';
  title: string;
}

export default function SocialIcon({ href, network, title }: SocialIconProps) {
  const getIcon = () => {
    const iconClass = "w-[20px] h-[20px]";
    switch (network) {
      case 'github': return <FaGithub className={iconClass} />;
      case 'linkedin': return <FaLinkedin className={iconClass} />;
      case 'leetcode': return <SiLeetcode className={iconClass} />;
      case 'codechef': return <SiCodechef className={iconClass} />;
      case 'hackerrank': return <SiHackerrank className={iconClass} />;
      case 'x': return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    }
  };

  return (
    <div className="relative group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
        className="social-icon-btn flex items-center justify-center cursor-pointer relative"
      >
        {getIcon()}
      </a>
      {/* Tooltip */}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[11px] font-semibold text-zinc-100 bg-zinc-950/90 border border-zinc-800 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl scale-95 group-hover:scale-100 origin-bottom z-50">
        {title}
      </span>
    </div>
  );
}
