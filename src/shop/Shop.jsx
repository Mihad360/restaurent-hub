import Carousel from "./Carousel";


const slides = [
  "https://i.ibb.co/R0crrZ6/close-up-delicious-pizza-3.png",
  "https://i.ibb.co/SPhLP9M/food-content-creator-filming-variety-dishes-upload-internet-1.png",
  "https://i.ibb.co/T0Fm94X/people-creating-food-content-upload-internet-food-lovers-1-1.png",
  "https://i.ibb.co/NCDJ6hP/people-creating-food-content-upload-internet-food-lovers-2.png",
];

export default function Shop() {
  

  return (
    <div>
      <div>
        <div className="">
          <Carousel slides={slides}></Carousel>
        </div>
        
      </div>
    </div>
  );
}
