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
        // Replace 'any' with a more specific union type
        [key: string]: string | number | boolean | object | undefined | (() => void);
      }
    ) => void;
  }
}

// This empty export is needed to mark this as a module
export {};