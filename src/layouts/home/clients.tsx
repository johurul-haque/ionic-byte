import { clients } from '@/assets/data/clients';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export function ClientsSection() {
  return (
    <section className="relative py-4 h-20 sm:h-28 mb-16 sm:mb-36">
      <div className="bg-[#504CFF] text-white h-full rotate-[2.5deg] absolute -inset-x-5 inset-y-0 z-10 flex">
        <Marquee>
          {clients.map(({ name, logo }) => (
            <Image
              key={name}
              src={logo}
              className="size-20 rounded-full mx-6 mix-blend-color-burn"
              width={400}
              height={400}
              alt={`Logo of ${name}`}
            />
          ))}
          {clients.map(({ name, logo }) => (
            <Image
              key={name}
              src={logo}
              className="size-20 rounded-full mx-6 mix-blend-color-burn"
              width={400}
              height={400}
              alt={`Logo of ${name}`}
            />
          ))}
          {clients.map(({ name, logo }) => (
            <Image
              key={name}
              src={logo}
              className="size-20 rounded-full mx-6 mix-blend-color-burn"
              width={400}
              height={400}
              alt={`Logo of ${name}`}
            />
          ))}
        </Marquee>
      </div>
      <div className="bg-[#1A1A1A] h-full absolute -inset-x-5 inset-y-0 -rotate-[2.5deg]" />
    </section>
  );
}
