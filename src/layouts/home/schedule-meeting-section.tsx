import { icons } from '@/assets';
import { Heading2 } from '@/components/heading-two';
import Image from 'next/image';
import Link from 'next/link';

const title = `Companies that can help you in developing your company for the future`;
export const calendlyLink = 'https://calendly.com/ionicbyte/30min';

export function ScheduleMeetingSection() {
  return (
    <section className="bg-black py-32">
      <div className="container flex flex-col">
        <Heading2 className="tracking-[0.015em]">{title}</Heading2>

        <p className="text-slate-200 tracking-wider mt-5 max-w-md text-sm font-light">
          Work in the IT field includes Web design, UI/UX design, Branding and
          Shopify development.
        </p>

        <Link
          href={calendlyLink}
          className="bg-slate-50 px-5 py-2 rounded-full flex gap-2 items-center font-medium -order-1 ml-auto mb-3"
        >
          Schedule a meeting
          <Image
            src={icons.arrowUp}
            role="presentation"
            alt=""
            width={300}
            height={300}
            className="size-6"
          />
        </Link>
      </div>
    </section>
  );
}
