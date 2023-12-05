import "../../pages/venues/Venues.modules.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const VenueCard = ({
  venueName,
  venueId,
  venuePrice,
  venueMedia,
  venueDescription,
}) => {
  return (
    <div className="venue_card">
      <h2 className="venue_card_title">{venueName}</h2>

      <img src={venueMedia} className="venue_card_image" />

      <div className="venue_card_price_section">
        <FontAwesomeIcon icon={faMoneyBill1} className="venue_card_icon" />
        <p className="venue_card_price">{venuePrice}</p>
      </div>

      <p className="venue_card_description">{venueDescription}</p>

      <Link to={`${venueId}`} className="venue_card_link">
        Click to view
      </Link>
    </div>
  );
};

export default VenueCard;
