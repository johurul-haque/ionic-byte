import { icons, vectors } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { calendlyLink } from '../../schedule-meeting-section';

export function Tiles1() {
  return (
    <article className="@container rounded-2xl sm:rounded-3xl  overflow-hidden">
      <div className="grid gap-3 pt-4 pl-4 @lg:grid-cols-2 sm:pt-6 @lg:pt-10 sm:pl-6 @lg:pl-8 bg-[#504CFF] w-full backdrop-blur-[15px]">
        <div className="flex flex-col text-base leading-7 text-white sm:pb-10 pb-4 max-sm:pr-4 sm:pr-6 @lg:pr-0">
          <Image
            src={icons.globe}
            alt="Website Dev"
            className="backdrop-blur-[10px] size-12 lg:size-[60px]"
            width={60}
            height={60}
          />
          <h3 className="mt-6 @lg:mt-auto xl:mt-auto text-2xl xl:text-3xl font-medium whitespace-nowrap">
            Website Dev
          </h3>
          <p className="mt-4 max-w-md">
            Help you to build website for company that is modern, user friendly
            and optimized for search engines.
          </p>
          <Link
            href={calendlyLink}
            className="flex items-center gap-1.5 mt-3 max-w-fit max-lg:text-sm"
          >
            <span className="underline">Start with us</span>
            <div className="size-6 arrow-up" />
          </Link>
        </div>
        <Image
          src={vectors.webDevBg}
          className="aspect-auto max-w-[22rem] ml-auto mt-auto -order-1 @lg:order-1 w-full max-sm:[mask-image:linear-gradient(#000,#000,transparent)]"
          alt=""
          role="presentation"
          width={1080}
          height={1920}
        />
      </div>
    </article>
  );
}
