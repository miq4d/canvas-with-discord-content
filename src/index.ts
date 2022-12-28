import { drawTextWithEmoji } from "./drawTextWithTwemoji";
import { measureText as measureTextFunc } from "./measureText";

export interface DrawOptions {
  emojiSideMarginPercent?: number;
  emojiTopMarginPercent?: number;
}

export async function fillTextWithTwemoji(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  options?: DrawOptions
) {
  return await drawTextWithEmoji(context, "fill", text, x, y, options);
}

export async function strokeTextWithTwemoji(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  options?: DrawOptions
) {
  return await drawTextWithEmoji(context, "stroke", text, x, y, options);
}

export function measureText(
  context: CanvasRenderingContext2D,
  text: string,
  options?: { emojiSideMarginPercent?: number }
): { width: number } {
  return measureTextFunc(context, text, options);
}
