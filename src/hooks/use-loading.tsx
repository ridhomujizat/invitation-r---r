import { useEffect, useState } from "react";

const IMAGES = [
  "flower-2.png",
  "flower.png",
  "gapura.png",
  "Gunungan.png",
  "kawung.svg",
  "r-r.webp",
  "rama.png",
  "shinta.png",
  "texture.png",
  "/bg/cover.jpg",
  "/bg/cover.png",
  "/bg/intro.png",
  "river.png",
];
export default function useLoading() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url);
          }, 2000);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(IMAGES.map((image) => loadImage(image)))
      .then(() => {
        setLoading(true);
        console.log("All images loaded successfully");
      })
      .catch((err) => console.log("Failed to load images", err));
  }, []);
  return <div>useLoading</div>;
}
