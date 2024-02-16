import { arrowUp } from '@/assets';
import { socials } from '@/layouts/home/hero-section';
import { Copyright } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlurryColor } from './blurry-color';
import { Heading2 } from './heading-two';
import { Logo } from './logo';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#635189]/80 pt-16 pb-12 mt-12 overflow-clip">
      <div className="border-b border-[#635189]/30 pb-16">
        <div className="container flex items-center justify-between">
          <div>
            <Heading2>Let&apos;s work together</Heading2>
            <p className="text-slate-100 tracking-wider max-w-2xl font-light mt-3">
              IonicByte is an emerging web design agency in Bangladesh. We
              provide services that includes Web development, SEO optimization,
              and Web design.
            </p>
          </div>

          <Link
            href={'/about'}
            className="bg-slate-50 px-5 py-2 rounded-full flex gap-2 items-center font-medium"
          >
            Know more
            <Image
              src={arrowUp}
              alt=""
              width={300}
              height={300}
              className="size-6"
            />
          </Link>
        </div>
      </div>
      <div className="container py-8 grid grid-cols-3 text-slate-100 relative mt-4">
        <div>
          <Logo />
          <p className="mt-4 font-light">
            Companies that can help you in developing your company for the
            future
          </p>
        </div>
        <div className="mx-auto">
          <h3 className="font-medium mb-3 text-lg">Services</h3>
          <ul className="font-light space-y-2">
            {getServices().map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="mx-auto relative">
          <h3 className="text-lg font-medium mb-3">Business Features</h3>
          <ul className="space-y-2 font-light">
            {getBusinessFeatures().map((service) => (
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

function getServices() {
  return ['Web Development', 'UI/UX Design', 'Branding', 'Shopify development'];
}

function getBusinessFeatures() {
  return [
    'Data based chatbot training',
    'Model fine-tuning',
    'Sales & Customer service smart agents',
  ];
}