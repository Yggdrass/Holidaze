import {
  faMoneyBill1,
  faStar,
  faUserTie,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VenueInfo = ({
  venueRating,
  venuePrice,
  venueMaxGuests,
  venueOwnerName,
}) => {
  return (
    <div className="info_group_1">
      <p className="venue_stars">
        <FontAwesomeIcon icon={faStar} className="venue_infoGroup1_icon" />
        rating: {venueRating}
      </p>
      <p className="venue_price">
        <FontAwesomeIcon
          icon={faMoneyBill1}
          className="venue_infoGroup1_icon"
        />
        price: {venuePrice}
      </p>
      <p className="venue_maxGuests">
        <FontAwesomeIcon icon={faUsers} className="venue_infoGroup1_icon" />
        max guests: {venueMaxGuests}
      </p>
      <p className="venue_owner">
        <FontAwesomeIcon icon={faUserTie} className="venue_infoGroup1_icon" />
        created by: {venueOwnerName}
      </p>
    </div>
  );
};

export default VenueInfo;
