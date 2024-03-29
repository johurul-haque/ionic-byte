import logo from '@/assets/ionic-byte.svg';
import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href={'/'}>
      <span className="sr-only">Ionic Byte homepage</span>
      <Image
        src={logo}
        alt=""
        className="aspect-[4.76] w-28 sm:w-36"
        width={476}
        quality={100}
        height={100}
      />
    </Link>
  );
}
