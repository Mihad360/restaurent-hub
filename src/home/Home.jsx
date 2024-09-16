import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Foods from "./Foods";
import MakeReview from "./Makereview";
import Nood from "./Nood";
import Reviews from "./Reviews";

export default function Home() {

  return (
    <div>
      <Helmet>
        <title>RestauraHub || Home</title>
      </Helmet>
      <div className="">
        <Banner></Banner>
      </div>
      <div>
        <Nood></Nood>
      </div>
      <div>
        <Foods></Foods>
      </div>
      <div>
        <MakeReview></MakeReview>
      </div>
      <div>
        <Reviews></Reviews>
      </div>
    </div>
  );
}
