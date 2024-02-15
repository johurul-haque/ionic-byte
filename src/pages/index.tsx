import { NextHead } from '@/components/next-head';
import { HeroSection } from '@/layouts/home/hero-section';

export default function Home() {
  return (
    <>
      <NextHead title="Ionic Byte" />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
