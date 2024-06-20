import Banner from "./Banner";
import Foods from "./Foods";
import Nood from "./Nood";

export default function Home() {
  return (
    <div>
      <div className="">
        <Banner></Banner>
      </div>
      <div>
        {/* <Location></Location> */}
      </div>
      <div>
        <Nood></Nood>
      </div>
      <div>
        <Foods></Foods>
      </div>
    </div>
  );
}
