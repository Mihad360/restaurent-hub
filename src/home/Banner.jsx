import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="h-[80%] pt-24">
      <Carousel
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        swipeable={true}
        emulateTouch={true}>
        <div className="h-[80vh]">
          <img
            src="https://i.ibb.co/SXKsp1f/banner.jpg"
            alt="Banner 1"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-[80vh]">
          <img
            src="https://i.ibb.co/k4jHycH/02.jpg"
            alt="Banner 2"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-[80vh]">
          <img
            src="https://i.ibb.co/nsD3Hxs/06.png"
            alt="Banner 3"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-[80vh]">
          <img
            src="https://i.ibb.co/3WvQ7M9/03.png"
            alt="Banner 4"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-[80vh]">
          <img
            src="https://i.ibb.co/yQqVt0K/04.jpg"
            alt="Banner 5"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-[80vh]">
          <img
            src="https://i.ibb.co/KzDL17N/05.png"
            alt="Banner 6"
            className="object-cover w-full h-full"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
