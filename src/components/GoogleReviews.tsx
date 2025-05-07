'use client'

import { useEffect } from 'react';

export default function GoogleReviews() {
  useEffect(() => {
    // Load the SociableKit script
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    script.defer = true;
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
        <div className='sk-ww-google-reviews' data-embed-id='25554278'></div>
      </div>
    </section>
  );
}