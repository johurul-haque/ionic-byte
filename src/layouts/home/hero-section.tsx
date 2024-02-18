import { maskBg } from '@/assets/vectors';
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
    <div className="flex overflow-hidden relative flex-col max-md:justify-center min-h-[685px] h-[100svh]">
      <Image
        src={maskBg}
        alt=""
        role="presentation"
        className="object-cover absolute inset-0 size-full"
        width={1920}
        height={1080}
        quality={100}
      />

      <Header className="max-lg:mb-auto" />

      <section className="container flex relative flex-col items-center max-lg:mb-auto lg:mt-20">
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

        <h1 className="text-center font-medium mt-6 md:mt-10 text-3xl min-[300px]:text-5xl min-[380px]:leading-[3.5rem] sm:leading-[4rem] md:text-6xl md:leading-[4.5rem] lg:text-7xl lg:leading-[5rem] 2xl:text-8xl 2xl:leading-[110px] text-gradient">
          Create Amazing <br /> websites with{' '}
          <span className="whitespace-nowrap">Ionic Byte</span>
        </h1>
        <p className="text-white mt-4 tracking-wider max-w-xs sm:max-w-md lg:max-w-lg text-sm sm:text-lg lg:text-xl font-light text-center">
          We will help you to build websites that is modern, user friendly with
          clean design
        </p>

        <Link
          href={calendlyLink}
          className="max-sm:text-sm px-4 md:px-5 py-1.5 md:py-2.5 mt-8 lg:mt-12 flex items-center rounded-full gap-2.5 bg-white font-medium group"
        >
          Get Started
          <ArrowRightCircle
            className="-rotate-45 group-hover:rotate-0 transition-transform max-sm:size-5"
            strokeWidth={1.5}
          />
        </Link>
      </section>
    </div>
  );
}
