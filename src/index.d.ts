import { CanvasRenderingContext2D } from "canvas";

declare module "@miq4d/canvas-with-discord-content" {
  export interface DrawOptions {
    maxWidth?: number;
    emojiSideMarginPercent?: number;
    emojiTopMarginPercent?: number;
  }

  export function fillTextWithTwemoji(
    context: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    options?: DrawOptions
  ): Promise<void>;

  export function strokeTextWithTwemoji(
    context: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    options?: DrawOptions
  ): Promise<void>;

  export function measureText(
    context: CanvasRenderingContext2D,
    text: string,
    options?: { emojiSideMarginPercent?: number }
  ): { width: number; alphabeticBaseline: number };
}
