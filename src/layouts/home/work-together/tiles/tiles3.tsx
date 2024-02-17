import { icons, vectors } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { calendlyLink } from '../../schedule-meeting-section';

export function Tiles3() {
  return (
    <article className="pt-10 pl-8 w-full bg-[#151515] rounded-3xl backdrop-blur-[15px] grid grid-cols-2 relative">
      <div className="flex flex-col text-base leading-7 text-white pb-10">
        <Image
          src={icons.tag}
          className="aspect-square backdrop-blur-[10px] w-[60px]"
          alt=""
          role="presentation"
          width={60}
          height={60}
        />
        <h3 className="mt-12 text-3xl font-medium whitespace-nowrap">
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
        className="aspect-auto max-w-[16rem] mt-auto ml-auto rounded-br-3xl"
        alt=""
        role="presentation"
        width={1080}
        height={1920}
      />
    </article>
  );
}
