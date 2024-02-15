import logo from '@/assets/ionic-byte.svg';
import { ArrowRightCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navs = [
  { label: 'About', url: '/about' },
  { label: 'Services', url: '/services' },
  { label: 'Portfolio', url: '/portfolio' },
  { label: 'Contact Us', url: '/contact-us' },
];

export function Header() {
  return (
    <header className="container relative font-medium text-white mt-3 grid grid-cols-3">
      <Link href={'/'} className="block self-center">
        <Image
          src={logo}
          alt=""
          className="aspect-[4.76] w-36"
          width={476}
          quality={100}
          height={100}
        />
      </Link>

      <nav className="flex justify-center gap-x-8 px-3 py-2.5">
        {navs.map(({ label, url }) => (
          <Link href={url} key={url}>
            {label}
          </Link>
        ))}
      </nav>

      <Link
        href="/get-started"
        className="border-indigo-600 border-solid border-2 px-5 py-2.5 flex items-center rounded-full gap-2.5 max-w-fit ml-auto"
      >
        Get Started
        <ArrowRightCircle className="-rotate-45" strokeWidth={1.5} />
      </Link>
    </header>
  );
}
