import { icons, vectors } from '@/assets';
import { testimonials } from '@/assets/data/testimonials';
import { BlurryColor } from '@/components/blurry-color';
import { Heading2 } from '@/components/heading-two';
import Image from 'next/image';

export function Testimonials() {
  return (
    <section className="relative text-white my-36">
      <div className="container">
        <Heading2>
          What they say <br /> about us
        </Heading2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 relative">
          {testimonials.map(({ name, message, img }) => (
            <article
              key={message}
              className="rounded-xl p-6 bg-[#151515]/25 backdrop-blur-xl relative z-10"
            >
              <figure className="flex gap-4 justify-between items-center">
                <Image
                  src={img}
                  alt={`Picture of ${name}`}
                  className="rounded-full size-12 object-cover"
                  width={200}
                  height={200}
                />
                <figcaption className="mr-auto">{name}</figcaption>
                <Image
                  src={icons.quoteIcon}
                  aria-hidden={true}
                  role="presentation"
                  className="size-10"
                  alt=""
                />
              </figure>
              <p className="mt-5 font-thin tracking-wider leading-relaxed">
                {message}
              </p>
            </article>
          ))}
          <BlurryColor className="bg-[#504CFF]/70 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2" />

          <BlurryColor className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-40" />
        </div>
      </div>
      <Image
        src={vectors.quoteBg}
        aria-hidden={true}
        role="presentation"
        className="absolute top-0 right-0"
        alt=""
      />
    </section>
  );
}
