import "../../pages/venues/Venues.modules.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const VenueBookingCard = ({
  venueName,
  bookingId,
  guests,
  dateFrom,
  dateTo,
}) => {
  return (
    <div className="venue_card">
      <h2 className="venue_card_title">{venueName}</h2>

      <div className="venue_card_price_section">
        <FontAwesomeIcon icon={faUsers} className="venue_card_icon" />
        <p className="venue_card_guests">Guests: {guests}</p>
      </div>

      <div className="venue_card_price_section">
        <FontAwesomeIcon icon={faCalendar} className="venue_card_icon" />
        <p className="venue_card_date">
          booked from: {dateFrom} / to: {dateTo}
        </p>
      </div>

      <Link to={`/bookings/${bookingId}`} className="venue_card_link">
        Click to view
      </Link>
    </div>
  );
};

export default VenueBookingCard;
