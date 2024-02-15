import { Heading2 } from '@/components/heading-two';
import { ArrowRightCircle } from 'lucide-react';
import Link from 'next/link';
import { Tiles1 } from './tiles/tiles1';

const description =
  'Help you to build websites for company that is modern, user friendly and optimized for search engines.';

export function WorkTogether() {
  return (
    <section className="py-36">
      <div className="container">
        <Heading2>Let&apos;s work together</Heading2>
        <div className="flex justify-between items-center mt-3">
          <p className="text-slate-100 tracking-wider max-w-2xl font-light">
            {description}
          </p>
          <Link
            href="/get-started"
            className="px-5 py-2.5 flex items-center rounded-full gap-2.5 bg-white font-medium group"
          >
            Get Started
            <ArrowRightCircle
              className="-rotate-45 group-hover:rotate-0 transition-transform"
              strokeWidth={1.5}
            />
          </Link>
        </div>

        <div className="my-10 grid grid-cols-3 [&>*:first-child]:col-span-2">
          <Tiles1 />
        </div>
      </div>
    </section>
  );
}
