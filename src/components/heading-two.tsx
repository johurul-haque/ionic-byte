import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export function Heading2({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        'text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-50 max-w-7xl leading-tight tracking-[0.015em]',
        className
      )}
    >
      {children}
    </h2>
  );
}
