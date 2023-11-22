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

const VenueMeta = () => {
  return (
    <div className="venue_meta">
      <div className="venue_facilities">
        <h3>facilities</h3>
        <p className="venue_facility">
          <FontAwesomeIcon icon={faWifi} className="venue_meta_icon" />
        </p>
        <p className="venue_facility">
          <FontAwesomeIcon icon={faCar} className="venue_meta_icon" />
        </p>
        <p className="venue_facility">
          <FontAwesomeIcon icon={faCutlery} className="venue_meta_icon" />
        </p>
        <p className="venue_facility">
          <FontAwesomeIcon icon={faPaw} className="venue_meta_icon" />
        </p>
      </div>

      <div className="venue_location">
        <h3>location</h3>
        <p className="venue_facility">
          <FontAwesomeIcon icon={faHouse} className="venue_meta_icon" />
        </p>
        <p className="venue_facility">
          <FontAwesomeIcon icon={faCity} className="venue_meta_icon" />
        </p>
        <p className="venue_facility">
          <FontAwesomeIcon icon={faGlobe} className="venue_meta_icon" />
        </p>
      </div>
    </div>
  );
};

export default VenueMeta;
