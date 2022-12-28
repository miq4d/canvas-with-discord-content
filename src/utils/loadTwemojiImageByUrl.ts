import { Image, loadImage } from "canvas";

const cachedTwemojiImages = new Map();

export async function loadTwemojiImageByUrl(url: string): Promise<Image> {
  return new Promise(async (res) => {
    if (cachedTwemojiImages.has(url)) {
      return res(cachedTwemojiImages.get(url));
    }

    const image = await loadImage(url);
    if (!url.includes("discord")) cachedTwemojiImages.set(url, image);

    return res(image);
  });
}
