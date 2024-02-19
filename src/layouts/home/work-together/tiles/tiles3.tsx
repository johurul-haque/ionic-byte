import { icons, vectors } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { calendlyLink } from '../../schedule-meeting-section';

export function Tiles3() {
  return (
    <article className="@container rounded-2xl sm:rounded-3xl  overflow-hidden">
      <div className="pt-4 pl-4 sm:pt-6 @lg:pt-10 sm:pl-6 @lg:pl-8 w-full bg-[#151515] backdrop-blur-[15px] grid @lg:grid-cols-[1fr_auto] gap-3 relative h-full">
        <div className="flex flex-col text-base leading-7 text-white sm:pb-10 pb-4 max-sm:pr-4 sm:pr-6 @lg:pr-0">
          <Image
            src={icons.tag}
            className="backdrop-blur-[10px] size-12 lg:size-[60px]"
            alt=""
            role="presentation"
            width={60}
            height={60}
          />
          <h3 className="mt-6 text-2xl xl:text-3xl font-medium whitespace-nowrap">
            Branding
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
          src={vectors.tagBg}
          className="aspect-auto max-w-[16rem] mt-auto ml-auto rounded-br-3xl -order-1 @lg:order-1 max-sm:w-full max-sm:[mask-image:linear-gradient(#000,#000,transparent)]"
          alt=""
          role="presentation"
          width={1080}
          height={1920}
        />
      </div>
    </article>
  );
}
