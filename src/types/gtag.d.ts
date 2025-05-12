declare global {
    interface Window {
      gtag: (
        command: 'event',
        eventName: string,
        eventParameters: {
          source?: string;
          value?: number;
          timestamp?: string;
          event_callback?: () => void;
          [key: string]: any;
        }
      ) => void;
    }
  }
  
  // This empty export is needed to mark this as a module
  export {};