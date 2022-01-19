import { useEffect, useRef, useState } from "react";
import CarouselBlockModel from "../../models/CarouselBlockModel";
import "./styles.scss";

interface IBlockProps {
  block: CarouselBlockModel;
}

export default function CarouselBlock(props: IBlockProps) {
  const { block } = props;
  const refPlaceholder = useRef<HTMLDivElement>(null);

  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [randomImage, setRandomImage] = useState<string>();

  useEffect(() => {
    const images = block.images;

    // Get a random image from the set of images.
    const randomImage = images[Math.floor(Math.random() * images.length)];

    setRandomImage(randomImage);
  }, [block]);

  const removePlaceholder = () => {
    refPlaceholder?.current?.remove();
    setIsImageLoaded(true);
  };

  return (
    <div className="carousel-image-container">
      <div ref={refPlaceholder} className="carousel-image-placeholder"></div>
      <img
        className={`carousel-image ${isImageLoaded ? "image-visible" : ""}`}
        onLoad={removePlaceholder}
        onError={removePlaceholder}
        src={randomImage}
        alt={`Carousel ${block.title}`}
      />
    </div>
  );
}
