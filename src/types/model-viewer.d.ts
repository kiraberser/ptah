import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          'auto-rotate'?: boolean | string;
          'camera-controls'?: boolean | string;
          'shadow-intensity'?: string | number;
          exposure?: string | number;
          [key: string]: any;
        },
        HTMLElement
      >;
    }
  }
}

export {};
