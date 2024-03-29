import { teamMembers } from '@/assets/data/team';
import { BlurryColor } from '@/components/blurry-color';
import { Header } from '@/components/header';
import { NextHead } from '@/components/next-head';
import Image from 'next/image';

export default function Team() {
  return (
    <>
      <NextHead title="Team | Ionic Byte" />

      <Header />

      <main className="my-20 sm:my-28 relative overflow-x-clip">
        <h1 className="text-white text-center mb-14">
          <span className="uppercase tracking-wider sm:text-lg inline-block mb-0.5">
            IONIC BYTE
          </span>
          <br />
          <span className="text-2xl sm:text-3xl font-semibold sm:font-bold tracking-wide">
            Leadership Team
          </span>
        </h1>

        <div className="container flex flex-wrap justify-center gap-16 max-sm:gap-y-12 relative z-10">
          {teamMembers.map(({ name, role, img }) => (
            <figure key={name}>
              <Image
                src={img}
                className="rounded-full max-w-xs w-full object-cover aspect-square"
                alt={`Picture of ${name}`}
                width={500}
                height={500}
              />
              <figcaption className="text-white flex flex-col-reverse text-center mt-5">
                <h2 className="text-xl font-medium tracking-wide">{name}</h2>
                <p className="text-xs tracking-widest uppercase">{role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <BlurryColor className="absolute top-0 left-0 opacity-35 animate-long-pulse" />
        <BlurryColor className="bg-[#504CFF] absolute bottom-0 right-0 opacity-35 animate-long-pulse" />
      </main>
    </>
  );
}
