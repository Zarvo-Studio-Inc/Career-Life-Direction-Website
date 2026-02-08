import React from 'react';
import clsx from 'clsx';

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  imageSrc = '/blue_minimal_sea_logıstıcs_logo__1_-removebg-preview.png',
  imageAlt = 'Decorative background logo',
  className = '',
  children,
}) => {
  return (
    <section className={clsx('px-2 md-px-0 py-16 md:pt-24 bg-brand relative overflow-hidden max-w-7xl mx-auto rounded-md', className)}>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="mb-6 text-white">{title}</h1>
        <p className="text-lg text-brand-50 leading-relaxed">{description}</p>
        {children}
      </div>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="pointer-events-none select-none absolute right-0 bottom-0 w-48 md:w-72 opacity-30 z-0 filter brightness-0 invert"
          aria-hidden="true"
        />
      )}
    </section>
  );
};

export default HeroSection;
