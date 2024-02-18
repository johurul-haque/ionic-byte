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
      <div className="flex justify-between items-center gap-3 mt-3">
        <p className="max-w-md md:max-w-xl font-light max-md:text-sm">
          Some of our past projects we have completed. We help you build modern,
          user friendly websites with SEO optimization.
        </p>
        <Link
          href="/projects"
          className="max-sm:text-sm px-4 md:px-5 py-1.5 md:py-2.5 flex items-center rounded-full gap-2.5 bg-white text-gray-950 font-medium group whitespace-nowrap max-sm:hidden"
        >
          View All
          <ArrowRightCircle
            className="-rotate-45 group-hover:rotate-0 transition-transform"
            strokeWidth={1.5}
          />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-10 md:mt-16 relative max-md:[&>*]:border-b md:[&>*:nth-child(n+1):nth-child(-n+2)]:border-b [&>*]:border-[#635189]">
        {projects.map(({ name, url, img }) => (
          <article key={url} className="relative z-10">
            <Link
              href={url}
              className="grid gap-1 md:gap-3 pb-5"
              target="_blank"
              aria-label={`Go to ${name} homepage`}
            >
              <h3 className="text-lg md:text-xl font-semibold md:mt-4 mt-2">
                {name}
              </h3>
              <p className="font-light max-md:text-sm">{description} </p>
              <Image
                src={img}
                className="-order-1 aspect-[2.1] object-cover rounded-lg md:rounded-2xl"
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
