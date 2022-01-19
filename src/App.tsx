import CarouselBlockModel from "./models/CarouselBlockModel";
import Carousel from "./components/Carousel";

const data: CarouselBlockModel[] = [
  {
    title: "First Block",
    images: [
      "https://source.unsplash.com/600x600/?computer&sig=1",
      "https://source.unsplash.com/600x600/?coding&sig=2",
      "https://source.unsplash.com/600x600/?tech&sig=3",
    ],
  },
  {
    title: "Second Block",
    images: [
      "https://source.unsplash.com/600x600/?laptop&sig=4",
      "https://source.unsplash.com/600x600/?google&sig=5",
      "https://source.unsplash.com/600x600/?tech&sig=6",
    ],
  },
  {
    title: "Third Block",
    images: [
      "https://source.unsplash.com/600x600/?dashboard&sig=7",
      "https://source.unsplash.com/600x600/?motherboard&sig=8",
    ],
  },
  {
    title: "Fourth Block",
    images: [
      "https://source.unsplash.com/600x600/?usb&sig=9",
      "https://source.unsplash.com/600x600/?display&sig=10",
    ],
  },
  {
    title: "Fifth Block",
    images: [
      "https://source.unsplash.com/600x600/?computer&sig=11",
      "https://source.unsplash.com/600x600/?google&sig=12",
    ],
  },
  {
    title: "Sixth Block",
    images: [
      "https://source.unsplash.com/600x600/?microsoft&sig=13",
      "https://source.unsplash.com/600x600/?tech&sig=14",
    ],
  },
  {
    title: "Seventh Block",
    images: [
      "https://source.unsplash.com/600x600/?computer&sig=15",
      "https://source.unsplash.com/600x600/?mac&sig=16",
    ],
  },
  {
    title: "Eighth Block",
    images: [
      "https://source.unsplash.com/600x600/?computer&sig=17",
      "https://source.unsplash.com/600x600/?keyboard&sig=18",
      "https://source.unsplash.com/600x600/?microsoft&sig=19",
    ],
  },
  {
    title: "Nineth Block",
    images: [
      "https://source.unsplash.com/600x600/?coding&sig=20",
      "https://source.unsplash.com/600x600/?tech&sig=21",
      "https://source.unsplash.com/600x600/?matrix&sig=22",
    ],
  },
  {
    title: "Tenth Block",
    images: [
      "https://source.unsplash.com/600x600/?dashboard&sig=23",
      "https://source.unsplash.com/600x600/?motherboard&sig=24",
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
