import { cn } from '@/lib/utils';

export function BlurryColor({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-[#854CFF] opacity-50 w-[641px] h-[287px] blur-[100px] pointer-events-none',
        className
      )}
    />
  );
}
