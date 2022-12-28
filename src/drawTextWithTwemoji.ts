import { DrawOptions } from "./index";
import { splitEntitiesFromText } from "./utils/splitEntitiesFromText";
import { loadTwemojiImageByUrl } from "./utils/loadTwemojiImageByUrl";
import { getFontSizeByCssFont } from "./utils/getFontSizeByCssFont";
import { measureText } from "./measureText";
import { CanvasRenderingContext2D } from "canvas";

export async function drawTextWithEmoji(
  context: CanvasRenderingContext2D,
  fillType: "fill" | "stroke",
  text: string,
  x: number,
  y: number,
  {
    emojiSideMarginPercent = 0.1,
    emojiTopMarginPercent = 0.1,
  }: DrawOptions = {}
) {
  const textEntities = splitEntitiesFromText(text);
  const fontSize = getFontSizeByCssFont(context.font);
  const textAlign = context.textAlign;

  const emojiSideMargin = fontSize * emojiSideMarginPercent;
  const emojiTopMargin = fontSize * emojiTopMarginPercent;

  const textWidth = measureText(context, text, {
    emojiSideMarginPercent,
  }).width;

  // for Text align
  let textLeftMargin = 0;

  if (!["", "left", "start"].includes(textAlign)) {
    context.textAlign = "left";

    switch (textAlign) {
      case "center":
        textLeftMargin = -textWidth / 2;
        break;

      case "right":
      case "end":
        textLeftMargin = -textWidth;
        break;
    }
  }

  // Drawing
  let currentWidth = 0;

  for (let i = 0; i < textEntities.length; i++) {
    const entity = textEntities[i];
    if (typeof entity === "string") {
      // Common text case
      if (fillType === "fill") {
        context.fillText(entity, textLeftMargin + x + currentWidth, y);
      } else {
        context.strokeText(entity, textLeftMargin + x + currentWidth, y);
      }

      currentWidth += context.measureText(entity).width;
    } else {
      // Emoji case
      const emoji = await loadTwemojiImageByUrl(entity.url);

      context.drawImage(
        emoji,
        textLeftMargin + x + currentWidth + emojiSideMargin,
        y + emojiTopMargin - fontSize,
        fontSize,
        fontSize
      );

      currentWidth += fontSize + emojiSideMargin * 2;
    }
  }

  // Restore
  if (textAlign) {
    context.textAlign = textAlign;
  }
}
