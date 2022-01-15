import { useRef } from "react";
import LazyLoad from "react-lazyload";
import "./styles.scss";

interface ImageProps {
  src: string;
  alt: string;
}

export default function Image(props: ImageProps) {
  const { src, alt } = props;
  const refPlaceholder = useRef<HTMLDivElement>(null);

  const removePlaceholder = () => {
    refPlaceholder?.current?.remove();
  };

  return (
    <div className="image-container">
      <div ref={refPlaceholder} className="placeholder"></div>
      <LazyLoad>
        <img
          className="lazy-image"
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </div>
  );
}
