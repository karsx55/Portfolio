"use client";

import { useEffect } from 'react';
import Lenis, { LenisOptions } from '@studio-freight/lenis';

interface ExtendedLenisOptions extends LenisOptions {
  smooth?: boolean;
  smoothTouch?: boolean;
  touchMultiplier?: number;
  direction?: 'vertical' | 'horizontal';
}

const SmoothScrolling = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const options: ExtendedLenisOptions = {
      duration: 2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
      direction: 'vertical',
      infinite: false,
    };

    const lenis = new Lenis(options);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrolling;