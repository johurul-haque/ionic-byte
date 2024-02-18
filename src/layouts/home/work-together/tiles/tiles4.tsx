import { icons, vectors } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { calendlyLink } from '../../schedule-meeting-section';

export function Tiles4() {
  return (
    <article className="@container">
      <div className="grid gap-3 @lg:grid-cols-2 pt-6 @lg:pt-10 pl-6 lg:pl-8 w-full bg-[#854CFF] rounded-3xl backdrop-blur-[15px] overflow-x-clip">
        <div className="flex flex-col text-base leading-7 text-white pb-10">
          <Image
            src={icons.bag}
            role="presentation"
            alt=""
            className="backdrop-blur-[10px] size-12 lg:size-[60px]"
            width={60}
            height={60}
          />
          <h3 className="mt-6 @lg:mt-auto xl:mt-auto text-2xl xl:text-3xl font-medium whitespace-nowrap">
            Shopify
          </h3>
          <p className="mt-4 max-w-md">
            Help you to build website for company that is modern, user friendly
            and optimized for search engines.
          </p>
          <Link
            href={calendlyLink}
            className="flex items-center gap-1.5 mt-3 max-w-fit"
          >
            <span className="underline">Start with us</span>
            <div className="size-6 arrow-up" />
          </Link>
        </div>
        <Image
          src={vectors.shopifyBag}
          className="aspect-auto max-w-[22rem] ml-auto mt-auto -order-1 @lg:order-1"
          alt=""
          role="presentation"
          width={1080}
          height={1920}
        />
      </div>
    </article>
  );
}
