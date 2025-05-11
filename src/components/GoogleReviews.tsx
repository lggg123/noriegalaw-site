'use client'

import { useEffect } from 'react';

export default function GoogleReviews() {
  useEffect(() => {
    // Load the Elfsight script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">What Our Clients Say</h2>
        <div
          className="elfsight-app-634dd6fe-0b3f-4056-8bb2-60903211a12e"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}