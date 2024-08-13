import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import React, { useCallback, useRef, useMemo } from "react";

const Scroll = () => {
  const ref = useRef(document.createElement("canvas"));

  const { scrollYProgress } = useScroll(ref, ["start start", "end start"]);
  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 118]);
  const images = useMemo(() => {
    const loadedImages = [];

    for (let i = 1; i <= 118; i++) {
      const img = new Image();
      img.src = `/images/video/${i}.webp`;
      loadedImages.push(img);
    }

    return loadedImages;
  }, []);

  const render = useCallback(
    (index) => {
      if (ref.current && ref.current.getContext) {
        const canvas = ref.current;
        const context = canvas.getContext("2d");
        const image = images[index - 1];

        // Calculate the scale factor to fit the image inside the canvas
        const scale = Math.max(
          canvas.width / image.width,
          canvas.height / image.height
        );

        const width = image.width * scale;
        const height = image.height * scale;

        const x = (canvas.width - width) / 2;
        const y = (canvas.height - height) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, x, y, width, height);
      }
    },
    [images]
  );

  useMotionValueEvent(currentIndex, "change", (latest) => {
    console.log(latest.toFixed(0));
    render(latest.toFixed(0));
  });

  return (
    <div style={{ height: "90vh" }}>
      <canvas
        style={{
          width: "100vw",
          height: "100vh",
        }}
        ref={ref}
      ></canvas>
    </div>
  );
};

export default Scroll;
