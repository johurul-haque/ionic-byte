import { icons } from '@/assets';
import { BUSINESS_FEATURES, SERVICES } from '@/constants';
import { socials } from '@/layouts/home/hero-section';
import { calendlyLink } from '@/layouts/home/schedule-meeting-section';
import { Copyright } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlurryColor } from './blurry-color';
import { Heading2 } from './heading-two';
import { Logo } from './logo';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#635189]/80 pt-12 sm:pt-16 pb-12 mt-36 overflow-clip">
      <div className="border-b border-[#635189]/30 pb-12 sm:pb-16">
        <div className="container flex max-lg:flex-col-reverse max-sm:gap-y-3 lg:items-center lg:justify-between">
          <div>
            <Heading2>Let&apos;s work together</Heading2>
            <p className="text-slate-100 tracking-wider max-w-2xl font-light mt-1.5 sm:mt-3 max-sm:text-sm">
              IonicByte is an emerging web design agency in Bangladesh. We
              provide services that includes Web development, SEO optimization,
              and Web design.
            </p>
          </div>

          <Link
            href={calendlyLink}
            className="bg-slate-50 px-4 md:px-5 py-1.5 md:py-2 rounded-full flex gap-1 md:gap-2 items-center font-medium sm:max-lg:ml-auto max-sm:mr-auto max-md:text-sm"
          >
            Schedule a meeting
            <Image
              src={icons.arrowUp}
              alt=""
              width={300}
              height={300}
              className="size-5 sm:size-6"
            />
          </Link>
        </div>
      </div>
      <div className="container py-8 grid gap-y-8 sm:grid-cols-3 text-slate-100 relative sm:mt-4">
        <div>
          <Logo />
          <p className="mt-4 font-light max-md:text-sm max-sm:max-w-xs">
            The Company to develop{' '}
            <strong className="font-semibold">your company</strong> for the
            future.
          </p>
        </div>
        <div className="sm:mx-auto">
          <h3 className="font-medium mb-3 md:text-lg">Services</h3>
          <ul className="font-light space-y-2 max-md:text-sm">
            {SERVICES.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="sm:mx-auto relative">
          <h3 className="md:text-lg font-medium mb-3">Business Features</h3>
          <ul className="space-y-2 font-light max-md:text-sm">
            {BUSINESS_FEATURES.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <BlurryColor className="bg-[#504CFF] absolute -left-1/4 -top-1/4 opacity-30" />
        </div>
        <BlurryColor className="absolute left-0 top-0 -translate-y-1/2 -translate-x-1/4 opacity-30" />
      </div>

      <div className="container flex justify-between text-slate-50 font-light mt-10">
        <p className="flex gap-2 items-center text-sm">
          <Copyright className="size-4" />
          {year} IonicByte. All rights reserved.
        </p>
        <div className="flex gap-4">
          {socials.map(({ Icon, url, label }) => (
            <Link key={url} href={url}>
              <span className="sr-only">{label}</span>
              <Icon
                className="size-5 text-slate-50 opacity-80"
                strokeWidth={1.5}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
