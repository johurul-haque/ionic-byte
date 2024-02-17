import bg from '@/assets/mask-bg.svg';
import { Header } from '@/components/header';
import { ArrowRightCircle, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { calendlyLink } from './schedule-meeting-section';

export const socials = [
  {
    label: 'Go to Instagram',
    Icon: Instagram,
    url: 'https://www.instagram.com/ionicbyte',
  },
];

export function HeroSection() {
  return (
    <div className="flex overflow-hidden relative flex-col px-16 pt-2 w-full min-h-[770px] max-md:px-5 max-md:max-w-full">
      <Image
        loading="lazy"
        src={bg}
        alt=""
        className="object-cover absolute inset-0 size-full"
        width={1920}
        height={1080}
        quality={100}
      />

      <Header />

      <section className="flex relative flex-col items-center mt-20">
        <div className="flex gap-4">
          {socials.map(({ Icon, url, label }) => (
            <Link key={url} href={url}>
              <span className="sr-only">{label}</span>
              <Icon
                className="size-5 text-white opacity-80"
                strokeWidth={1.5}
              />
            </Link>
          ))}
        </div>

        <h1 className="text-white font-medium mt-10 text-8xl text-center leading-[110px] max-md:text-4xl max-md:leading-10">
          Create Amazing <br /> websites with IonicByte
        </h1>
        <p className="text-white mt-4 tracking-wider text-lg font-light text-center">
          We will help you to build websites that is modern, user friendly with
          clean design
        </p>

        <Link
          href={calendlyLink}
          className="px-5 py-2.5 mt-12 flex items-center rounded-full gap-2.5 bg-white font-medium group"
        >
          Get Started
          <ArrowRightCircle
            className="-rotate-45 group-hover:rotate-0 transition-transform"
            strokeWidth={1.5}
          />
        </Link>
      </section>
    </div>
  );
}
