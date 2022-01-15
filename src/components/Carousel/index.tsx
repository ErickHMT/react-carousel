import { useEffect, useState } from "react";
import CarouselModel from "../../models/CarouselModel";
import Image from "../Image";
import "./styles.scss";

interface CarouselProps {
  data: CarouselModel[];
}

export default function Carousel(props: CarouselProps) {
  const { data } = props;
  const length = data.length;

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    // const images = data.map((el) => el.images);
    // setCarouselImages(Array.prototype.concat.apply([], images));
  }, []);

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const previousSlide = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="carousel-container">
      <button
        className="btn-carousel"
        onClick={previousSlide}
        disabled={currentIndex === 0}
      >
        Previous
      </button>
      {data.map((el, index) => (
        <div key={`carousel-index-${index}`}>
          {index === currentIndex && (
            <>
              <h2 className="carousel-title">{el.title}</h2>
              <div style={{ display: "flex", width: "900px", height: "300px" }}>
                {el.images?.map((image, index) => (
                  <Image
                    key={`carousel-${index}`}
                    alt={`carousel-${index}`}
                    src={image}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ))}
      <button
        className="btn-carousel"
        onClick={nextSlide}
        disabled={currentIndex === length - 1}
      >
        Next
      </button>
    </div>
  );
}
