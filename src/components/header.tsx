import { calendlyLink } from '@/layouts/home/schedule-meeting-section';
import { ArrowRightCircle } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './logo';

const navs = [
  { label: 'About', url: '/about' },
  { label: 'Services', url: '/services' },
  { label: 'Portfolio', url: '/portfolio' },
  { label: 'Contact Us', url: '/contact-us' },
];

export function Header() {
  return (
    <header className="container relative font-medium text-white mt-3 grid grid-cols-3">
      <Logo />

      <nav className="flex justify-center gap-x-8 px-3 py-2.5">
        {navs.map(({ label, url }) => (
          <Link href={url} key={url}>
            {label}
          </Link>
        ))}
      </nav>

      <Link
        href={calendlyLink}
        className="border-indigo-600 border-solid border-2 px-5 py-2.5 flex items-center rounded-full gap-2.5 max-w-fit ml-auto group"
      >
        Get Started
        <ArrowRightCircle
          className="-rotate-45 group-hover:rotate-0 transition-transform"
          strokeWidth={1.5}
        />
      </Link>
    </header>
  );
}
