import { NextHead } from '@/components/next-head';
import { HeroSection } from '@/layouts/home/hero-section';
import { ScheduleMeetingSection } from '@/layouts/home/schedule-meeting-section';
import { WorkTogether } from '@/layouts/home/work-together';

export default function Home() {
  return (
    <>
      <NextHead title="Ionic Byte" />
      <main className="overflow-x-clip">
        <HeroSection />
        <ScheduleMeetingSection />
        <WorkTogether />
      </main>
    </>
  );
}
