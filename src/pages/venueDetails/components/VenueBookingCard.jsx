import "../../venues/Venues.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const VenueBookingCard = ({ item }) => {
  //console.log("item.id: ", item.id);

  return (
    <div className="venue_card">
      <h2 className="venue_card_title">{item.id}</h2>

      <div className="venue_card_price_section">
        <FontAwesomeIcon icon={faUsers} className="venue_card_icon" />
        <p className="venue_card_guests">{item.guests}</p>
      </div>

      <div className="venue_card_price_section">
        <FontAwesomeIcon icon={faCalendar} className="venue_card_icon" />
        <p className="venue_card_date">
          from: {item.dateFrom} / to: {item.dateTo}
        </p>
      </div>

      <Link to={`/bookings/${item.id}`} className="venue_card_link">
        Click to view
      </Link>
    </div>
  );
};

export default VenueBookingCard;
