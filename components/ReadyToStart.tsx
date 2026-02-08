import Link from 'next/link';
import clsx from 'clsx';

interface ReadyToStartProps {
  className?: string;
  heading?: string;
  message?: string;
  buttonText?: string;
  buttonHref?: string;
}

import SectionContainer from '@/components/SectionContainer';

export default function ReadyToStart({
  className = '',
  heading = 'Ready to Start?',
  message = 'If this process feels right for you, reach out via the contact form. We will respond personally.',
  buttonText = 'Get in Touch',
  buttonHref = '/contact',
}: ReadyToStartProps) {
  return (
    <SectionContainer className={clsx('bg-brand relative overflow-hidden', className)}>
      {/* Subtle background wave */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none" style={{backgroundImage: 'url(/wave-1.svg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} />
      <div className="relative max-w-3xl mx-auto text-center py-12 z-10">
        <h2 className="mb-6 text-white text-3xl md:text-4xl font-bold">{heading}</h2>
        <p className="text-brand-50 leading-relaxed mb-8 text-lg md:text-xl">
          {message}
        </p>
        <Link 
          href={buttonHref} 
          className="inline-block px-8 py-4 bg-white text-brand font-semibold rounded-lg shadow-md hover:bg-brand-50 hover:text-brand-700 transition-colors text-lg"
        >
          {buttonText}
        </Link>
      </div>
    </SectionContainer>
  );
}
