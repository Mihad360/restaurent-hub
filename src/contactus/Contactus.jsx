import Location from "../home/Location";
import Contact from "./Contact";
import Followus from "./Followus";

export default function Contactus() {
  return (
    <div className="pt-20">
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
