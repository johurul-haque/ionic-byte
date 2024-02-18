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
        'text-3xl sm:text-4xl md:text-5xl max-w-7xl leading-tight tracking-[0.015em] text-gradient',
        className
      )}
    >
      {children}
    </h2>
  );
}
