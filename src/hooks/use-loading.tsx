import { useEffect, useState } from "react";

const IMAGES = [
  "/bg/cover.jpg",
  "/bg/cover.png",
  "/bg/intro.png",
  "/bg/intro-blur.png",
  "flower-2.png",
  "flower.png",
  "gapura.png",
  "Gunungan.png",
  "kawung.svg",
  "r-r.webp",
  "rama.png",
  "shinta.png",
  "texture.png",
  "river.png",
];
export default function useLoading() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const promises = IMAGES.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(promises)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return loading;
}
