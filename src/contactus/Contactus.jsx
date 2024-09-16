import { Helmet } from "react-helmet-async";
import Location from "../home/Location";
import Contact from "./Contact";
import Followus from "./Followus";

export default function Contactus() {
  return (
    <div className="pt-20">
      <Helmet>
          <title>RestauraHub || Contact Us</title>
        </Helmet>
      <div>
        <Location></Location>
      </div>
      <div>
        <Followus></Followus>
      </div>
      <div>
        <Contact></Contact>
      </div>
    </div>
  );
}
