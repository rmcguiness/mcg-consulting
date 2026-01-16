declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        send_to?: string;
        [key: string]: any;
      }
    ) => void;
    dataLayer?: any[];
  }
}

export {};
