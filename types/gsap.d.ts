// types/gsap.d.ts
declare module "gsap/SplitText" {
    interface SplitTextVars {
      type?: string | "chars" | "words" | "lines";
      charsClass?: string;
      wordsClass?: string;
      linesClass?: string;
      position?: string;
      wordDelimiter?: string;
      reduceWhiteSpace?: boolean;
      tag?: string;
    }
  
    class SplitText {
      constructor(element: string | Element | Element[], vars?: SplitTextVars);
      
      chars: HTMLElement[];
      words: HTMLElement[];
      lines: HTMLElement[];
      
      revert(): void;
      split(vars?: SplitTextVars): SplitText;
      
      static create(element: string | Element | Element[], vars?: SplitTextVars): SplitText;
      static revert(element: string | Element | Element[]): void;
    }
  
    export = SplitText;
    export default SplitText;
  }