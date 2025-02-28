// src/globals.d.ts

// Images
declare module '*.webp' {
    const content: string;
    export default content;
  }
  
  declare module '*.svg' {
    const content: StaticImageData;  // Change to this
    export default content;
  }
  
  declare module '*.webm' {
    const content: string;
    export default content;
  }
  
  // Add other image formats for completeness
  declare module '*.png' {
    const content: string;
    export default content;
  }
  
  declare module '*.jpg' {
    const content: string;
    export default content;
  }
  
  declare module '*.jpeg' {
    const content: string;
    export default content;
  }
  
  declare module '*.gif' {
    const content: string;
    export default content;
  }
  
  // Add video formats
  declare module '*.mp4' {
    const content: string;
    export default content;
  }
  
  declare module '*.mov' {
    const content: string;
    export default content;
  }

// interface Window {
//   gtagSendEvent?: (url: string) => void;
// }