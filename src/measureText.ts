import { splitEntitiesFromText } from "./utils/splitEntitiesFromText";
import { getFontSizeByCssFont } from "./utils/getFontSizeByCssFont";
import { CanvasRenderingContext2D } from "canvas";

export function measureText(
  context: CanvasRenderingContext2D,
  text: string,
  { emojiSideMarginPercent = 0.1 } = {}
): { width: number } {
  const textEntities = splitEntitiesFromText(text);
  const fontSize = getFontSizeByCssFont(context.font);

  const emojiSideMargin = fontSize * emojiSideMarginPercent;

  let currentWidth = 0;

  for (let i = 0; i < textEntities.length; i++) {
    const entity = textEntities[i];
    if (typeof entity === "string") {
      // Common text case
      currentWidth += context.measureText(entity).width;
    } else {
      // Emoji case
      currentWidth += fontSize + emojiSideMargin * 2;
    }
  }

  return {
    width: currentWidth,
  };
}
