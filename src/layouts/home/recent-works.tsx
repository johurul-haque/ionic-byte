import { projects } from '@/assets/data/projects';
import { BlurryColor } from '@/components/blurry-color';
import { Heading2 } from '@/components/heading-two';
import { ArrowRightCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const description =
  'Mancoding is a biggest company in Indonesia, which provides the best services in developing websites using Shopify and Wordpress.';

export function RecentWorks() {
  return (
    <section className="pt-6 text-white container" id="portfolio">
      <Heading2>Recent Works</Heading2>
      <div className="flex justify-between items-center mt-3">
        <p className="max-w-xl font-light">
          Some of our past projects we have completed. We help you build modern,
          user friendly websites with SEO optimization.
        </p>
        <Link
          href="/projects"
          className="px-5 py-2.5 flex items-center rounded-full gap-2.5 bg-white text-gray-950 font-medium group"
        >
          View All
          <ArrowRightCircle
            className="-rotate-45 group-hover:rotate-0 transition-transform"
            strokeWidth={1.5}
          />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-16 relative [&>*:first-child]:border-b [&>*:nth-child(2)]:border-b [&>*]:border-[#635189]">
        {projects.map(({ name, url, img }) => (
          <article key={url} className="relative z-10">
            <Link
              href={url}
              className="grid gap-3 pb-5"
              target="_blank"
              aria-label={`Go to ${name} homepage`}
            >
              <h3 className="text-xl font-semibold mt-4">{name}</h3>
              <p className="font-light">{description} </p>
              <Image
                src={img}
                className="-order-1 aspect-[2.1] object-cover rounded-2xl"
                width={1920}
                height={914.29}
                alt={`Homepage of project ${name}`}
              />
            </Link>
          </article>
        ))}

        <BlurryColor className="absolute top-0 left-0 -translate-x-1/2" />
        <BlurryColor className="absolute bottom-0 right-0 bg-[#504CFF] translate-x-1/2" />
      </div>
    </section>
  );
}
