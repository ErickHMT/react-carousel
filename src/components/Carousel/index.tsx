import { useEffect, useState } from "react";
import CarouselModel from "../../models/CarouselBlockModel";
import CarouselBlock from "../CarouselBlock";
import "./styles.scss";

interface ICarouselProps {
  data: CarouselModel[];
}

export default function Carousel(props: ICarouselProps) {
  const { data } = props;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [chunks, setChunks] = useState<Array<Array<CarouselModel>>>([]);

  useEffect(() => {
    let carouselChunks: Array<Array<CarouselModel>> = [];

    // Split the blocks into chunks of 4 elements
    for (let i = 0; i < data.length; i += 4) {
      const blocks = data.slice(i, i + 4);
      carouselChunks.push(blocks);
    }

    setChunks(carouselChunks);
  }, [data]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const previousSlide = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return chunks.length === 0 ? null : (
    <div className="carousel-container">
      {chunks.map((chunk, index) => (
        <>
          {index === currentIndex && (
            <>
              <button
                className="btn-carousel left-arrow"
                onClick={previousSlide}
                disabled={currentIndex === 0}
              ></button>
              <div className="carousel-images">
                {chunk?.map((block, index) => (
                  <CarouselBlock key={`carousel-${index}`} block={block} />
                ))}
              </div>
              <button
                className="btn-carousel right-arrow"
                onClick={nextSlide}
                disabled={currentIndex === chunks.length - 1}
              ></button>
            </>
          )}
        </>
      ))}
    </div>
  );
}
