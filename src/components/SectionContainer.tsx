import type { ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({ id, children, className = '' }: SectionContainerProps) {
  return (
    <section id={id} className={`relative py-[100px] bg-transparent ${className}`}>
      <div className="mx-auto w-full max-w-[1400px] px-8">
        {children}
      </div>
    </section>
  );
}
