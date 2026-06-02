import 'react';

declare module 'react' {
  interface CSSProperties {
    /**
     * Tint color for image components in Ray miniapp runtime.
     */
    tintColor?: string;
  }
}
