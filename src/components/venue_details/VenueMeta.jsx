import {
  faCar,
  faCity,
  faCutlery,
  faGlobe,
  faHouse,
  faPaw,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { load } from "../../storage/load";
import "../../pages/venue_details/VenueDetails.modules.css";

const VenueMeta = () => {
  const venue = load("venue_details");
  const venueMeta = venue.meta;
  const venueLocation = venue.location;

  return (
    <div className="venue_meta">
      <div className="venue_facilities">
        <h3>facilities</h3>
        <p className="venue_facility">
          <FontAwesomeIcon icon={faWifi} className="venue_meta_icon" />
          {venueMeta.wifi ? "Included" : "Not included"}
        </p>
        <p className="venue_facility">
          <FontAwesomeIcon icon={faCar} className="venue_meta_icon" />
          {venueMeta.parking ? "Included" : "Not included"}
        </p>
        <p className="venue_facility">
          <FontAwesomeIcon icon={faCutlery} className="venue_meta_icon" />
          {venueMeta.breakfast ? "Included" : "Not included"}
        </p>
        <p className="venue_facility">
          <FontAwesomeIcon icon={faPaw} className="venue_meta_icon" />
          {venueMeta.pets ? "Included" : "Not included"}
        </p>
      </div>

      <div className="venue_location">
        <h3>location</h3>
        <p className="venue_facility">
          <FontAwesomeIcon icon={faHouse} className="venue_meta_icon" />
          {venueLocation.address}
        </p>
        <p className="venue_facility">
          <FontAwesomeIcon icon={faCity} className="venue_meta_icon" />
          {venueLocation.city}
        </p>
        <p className="venue_facility">
          <FontAwesomeIcon icon={faGlobe} className="venue_meta_icon" />
          {venueLocation.country}
        </p>
      </div>
    </div>
  );
};

export default VenueMeta;
