'use client';

import Lenis from 'lenis';
import React, { useEffect } from 'react';

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup Lenis on unmount
    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
