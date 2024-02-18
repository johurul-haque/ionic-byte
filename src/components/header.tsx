import { calendlyLink } from '@/layouts/home/schedule-meeting-section';
import { cn } from '@/lib/utils';
import { ArrowRightCircle, MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Logo } from './logo';

const navs = [
  { label: 'About', url: '/team' },
  { label: 'Services', url: '/#services' },
  { label: 'Portfolio', url: '/#portfolio' },
  { label: 'Contact Us', url: calendlyLink },
];

export function Header({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header
      className={cn(
        'container relative font-medium text-white pt-4 flex justify-between items-center gap-x-3',
        className
      )}
    >
      <Logo />

      <nav
        className={cn(
          'md:flex justify-center gap-x-8 mx-auto max-sm:text-sm max-md:bg-indigo-700 max-md:absolute max-md:right-4 max-md:top-4 max-md:z-20 max-md:rounded-lg max-md:pt-4 max-md:pb-2 max-md:w-52 transition-transform origin-top-right max-md:scale-0',
          { 'max-md:scale-100': isVisible }
        )}
      >
        <button
          className="md:hidden block absolute right-2 top-2"
          onClick={() => setIsVisible(false)}
        >
          <span className="sr-only">Close menu</span>
          <X className="size-4" />
        </button>
        {navs.map(({ label, url }) => (
          <Link
            href={url}
            key={url}
            onClick={() => setIsVisible(false)}
            className="max-md:hover:bg-indigo-800/50 max-md:block max-md:py-2 max-md:px-6"
          >
            {label}
          </Link>
        ))}
      </nav>

      <Link
        href={calendlyLink}
        className="border-indigo-600 border-solid border-2 px-5 py-2.5 flex items-center rounded-full gap-2.5 max-w-fit group max-md:ml-auto max-sm:hidden"
      >
        Get Started
        <ArrowRightCircle
          className="-rotate-45 group-hover:rotate-0 transition-transform"
          strokeWidth={1.5}
        />
      </Link>

      <button className="md:hidden" onClick={() => setIsVisible(true)}>
        <span className="sr-only">Open menu</span>
        <MenuIcon className="size-5" />
      </button>
    </header>
  );
}
