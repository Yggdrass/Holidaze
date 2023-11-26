import {
  faMoneyBill1,
  faStar,
  faUserTie,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { load } from "../../../components/storage/load";

const VenueInfo = () => {
  const venue = load("venue_details");
  //console.log("Venue: ", venue);
  const venueOwner = venue.owner;
  //console.log("Venue Owner: ", venueOwner);

  return (
    <div className="info_group_1">
      <p className="venue_stars">
        <FontAwesomeIcon icon={faStar} className="venue_infoGroup1_icon" />
        rating: {venue.rating}
      </p>
      <p className="venue_price">
        <FontAwesomeIcon
          icon={faMoneyBill1}
          className="venue_infoGroup1_icon"
        />
        price: {venue.price}
      </p>
      <p className="venue_maxGuests">
        <FontAwesomeIcon icon={faUsers} className="venue_infoGroup1_icon" />
        max guests: {venue.maxGuests}
      </p>
      <p className="venue_maxGuests">
        <FontAwesomeIcon icon={faUserTie} className="venue_infoGroup1_icon" />
        created by: {venueOwner.name}
      </p>
    </div>
  );
};

export default VenueInfo;
