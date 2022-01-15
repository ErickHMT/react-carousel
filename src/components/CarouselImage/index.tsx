import { useRef, useState } from "react";
import "./styles.scss";

interface ImageProps {
  src: string;
  alt: string;
}

export default function CarouselImage(props: ImageProps) {
  const { src, alt } = props;
  const refPlaceholder = useRef<HTMLDivElement>(null);

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const removePlaceholder = () => {
    refPlaceholder?.current?.remove();
    setImageLoaded(true);
  };

  return (
    <div className="carousel-image-container">
      <div ref={refPlaceholder} className="carousel-image-placeholder"></div>
      <img
        className={`carousel-image ${imageLoaded ? "image-visible" : ""}`}
        onLoad={removePlaceholder}
        onError={removePlaceholder}
        src={src}
        alt={alt}
      />
    </div>
  );
}
