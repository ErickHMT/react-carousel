import CarouselModel from "./models/CarouselModel";
import Carousel from "./components/Carousel";
import "./App.scss";

const data: CarouselModel[] = [
  {
    title: "First Block",
    images: [
      "https://source.unsplash.com/250x250/?computer&sig=1",
      "https://source.unsplash.com/250x250/?coding&sig=2",
      "https://source.unsplash.com/250x250/?tech&sig=3",
    ],
  },
  {
    title: "Second Block",
    images: [
      "https://source.unsplash.com/250x250/?computer&sig=4",
      "https://source.unsplash.com/250x250/?coding&sig=5",
      "https://source.unsplash.com/250x250/?tech&sig=6",
    ],
  },
  {
    title: "Third Block",
    images: [
      "https://source.unsplash.com/450x450/?computer&sig=7",
      "https://source.unsplash.com/450x450/?coding&sig=8",
    ],
  },
  {
    title: "Fourth Block",
    images: [
      "https://source.unsplash.com/450x450/?computer&sig=9",
      "https://source.unsplash.com/450x450/?coding&sig=10",
    ],
  },
];

function App() {
  return (
    <div className="container">
      <Carousel data={data} />
    </div>
  );
}

export default App;
