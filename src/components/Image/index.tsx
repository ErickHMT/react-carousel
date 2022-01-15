import { useRef, useState } from "react";
import "./styles.scss";

interface ImageProps {
  src: string;
  alt: string;
}

export default function Image(props: ImageProps) {
  const { src, alt } = props;
  const refPlaceholder = useRef<HTMLDivElement>(null);

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const removePlaceholder = () => {
    refPlaceholder?.current?.remove();
    setImageLoaded(true);
  };

  return (
    <div className="image-container">
      <div ref={refPlaceholder} className="placeholder"></div>
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
