import { useEffect, useState } from "react";
import CarouselModel from "../../models/CarouselModel";
import CarouselImage from "../CarouselImage";
import "./styles.scss";

interface CarouselProps {
  data: CarouselModel[];
}

export default function Carousel(props: CarouselProps) {
  const { data } = props;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sections, setSections] = useState<Array<Array<string>>>([]);

  useEffect(() => {
    let selectedImages: string[] = [];
    let carouselChunks: Array<Array<string>> = [];

    // Get a random image from each block
    data.forEach((block: CarouselModel) => {
      const images = block.images;
      const randomImage = images[Math.floor(Math.random() * images.length)];

      selectedImages.push(randomImage);
    });

    // Split the selected images into chunks of 4 elements
    for (let i = 0; i < selectedImages.length; i += 4) {
      const chunk = selectedImages.slice(i, i + 4);
      carouselChunks.push(chunk);
    }

    setSections(carouselChunks);
  }, [data]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const previousSlide = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return sections.length === 0 ? null : (
    <div className="carousel-container">
      {sections.map((el, index) => (
        <>
          {index === currentIndex && (
            <>
              <button
                className="btn-carousel left-arrow"
                onClick={previousSlide}
                disabled={currentIndex === 0}
              ></button>
              <div className="carousel-content">
                <div className="carousel-images">
                  {el?.map((image, index) => (
                    <CarouselImage
                      key={`carousel-${index}`}
                      alt={`carousel-${index}`}
                      src={image}
                    />
                  ))}
                </div>
              </div>
              <button
                className="btn-carousel right-arrow"
                onClick={nextSlide}
                disabled={currentIndex === sections.length - 1}
              ></button>
            </>
          )}
        </>
      ))}
    </div>
  );
}
