import { NextHead } from '@/components/next-head';
import { ClientsSection } from '@/layouts/home/clients';
import { HeroSection } from '@/layouts/home/hero-section';
import { RecentWorks } from '@/layouts/home/recent-works';
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
        <ClientsSection />
        <RecentWorks />
      </main>
    </>
  );
}
