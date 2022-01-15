import { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import CarouselModel from "../../models/CarouselModel";
import CarouselImage from "../CarouselImage";
import "./styles.scss";

interface CarouselProps {
  data: CarouselModel[];
}

export default function Carousel(props: CarouselProps) {
  const { data } = props;
  const length = data.length;

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const previousSlide = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="carousel-container">
      <button
        className="btn-carousel left-arrow"
        onClick={previousSlide}
        disabled={currentIndex === 0}
      ></button>
      {data.map((el, index) => (
        <div key={`carousel-index-${index}`}>
          {index === currentIndex && (
            <SwitchTransition mode="out-in">
              <CSSTransition
                classNames="fade"
                addEndListener={(node, done) => {
                  node.addEventListener("transitionend", done, false);
                }}
              >
                <>
                  <h2 className="carousel-title">{el.title}</h2>
                  <div className="carousel-images">
                    {el.images?.map((image, index) => (
                      <CarouselImage
                        key={`carousel-${index}`}
                        alt={`carousel-${index}`}
                        src={image}
                      />
                    ))}
                  </div>
                </>
              </CSSTransition>
            </SwitchTransition>
          )}
        </div>
      ))}
      <button
        className="btn-carousel right-arrow"
        onClick={nextSlide}
        disabled={currentIndex === length - 1}
      ></button>
    </div>
  );
}
