type ConversionType = 'chat' | 'form' | 'phone' | 'page_view';

interface ConversionData {
  type: ConversionType;
  source?: string;
  value?: number;
  metadata?: Record<string, unknown>;
}

export const trackLeadConversion = ({
  type,
  source = 'website',
  value = 0,
  metadata = {}
}: ConversionData) => {
  // Check if GA is available and properly typed
  if (typeof window !== 'undefined' && window.gtag) {
    // Send event to Google Analytics
    window.gtag('event', `lead_${type}`, {
      source,
      value,
      ...metadata,
      timestamp: new Date().toISOString(),
    });

    // Log conversion for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Lead conversion tracked:', {
        type,
        source,
        value,
        metadata,
      });
    }
  }
};