import { BlurryColor } from '@/components/blurry-color';
import { Heading2 } from '@/components/heading-two';
import { ArrowRightCircle } from 'lucide-react';
import Link from 'next/link';
import { calendlyLink } from '../schedule-meeting-section';
import { Tiles1 } from './tiles/tiles1';
import { Tiles2 } from './tiles/tiles2';
import { Tiles3 } from './tiles/tiles3';
import { Tiles4 } from './tiles/tiles4';

const description =
  'Help you to build websites for company that is modern, user friendly and optimized for search engines.';

export function WorkTogether() {
  return (
    <section className="py-36">
      <div className="container relative">
        <BlurryColor className="absolute top-0 left-0 -translate-x-1/2 -translate-y-12 bg-[#504CFF]/50" />

        <Heading2>Let&apos;s work together</Heading2>
        <div className="flex justify-between items-center mt-3">
          <p className="text-slate-100 tracking-wider max-w-2xl font-light">
            {description}
          </p>
          <Link
            href={calendlyLink}
            className="px-5 py-2.5 flex items-center rounded-full gap-2.5 bg-white font-medium group"
          >
            Get Started
            <ArrowRightCircle
              className="-rotate-45 group-hover:rotate-0 transition-transform"
              strokeWidth={1.5}
            />
          </Link>
        </div>

        <div className="relative my-10">
          <div className="grid gap-9 grid-cols-7 [&>*:first-child]:col-span-4 [&>*:nth-child(2)]:col-span-3 [&>*:nth-child(3)]:col-span-3 [&>*:nth-child(4)]:col-span-4">
            <Tiles1 />
            <Tiles2 />
            <Tiles3 />
            <Tiles4 />
          </div>
          <BlurryColor className="absolute right-0 top-1/2 translate-x-52 -translate-y-1/2" />
          <BlurryColor className="absolute left-0 bottom-0 -translate-x-52 translate-y-12 bg-[#504CFF]/50" />
        </div>
      </div>
    </section>
  );
}
