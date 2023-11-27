import { faCalendar, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Booking.css";
import { load } from "../../components/storage/load";

const BookingDetails = () => {
  const booking = load("booking_details");
  console.log("booking: ", booking);

  const bookingCustomer = booking.customer;
  console.log("Booking Customer: ", bookingCustomer);

  const bookingVenue = booking.venue;
  console.log("Booking Venue: ", bookingVenue);

  return (
    <div className="booking_details_container">
      <div className="booking_details_section">
        <h2 className="booking_details_title">{bookingVenue.name}</h2>
      </div>

      <div>
        <div>
          <div className="booking_details_section">
            <FontAwesomeIcon
              icon={faCalendar}
              className="booking_details_icon"
            />
            <div className="booking_subsection">
              <p className="booking_category_name">From: </p>
              <p className="booking_category_value">{booking.dateFrom}</p>
            </div>
          </div>
          <div className="booking_details_section">
            <FontAwesomeIcon
              icon={faCalendar}
              className="booking_details_icon"
            />
            <div className="booking_subsection">
              <p className="booking_category_name">To: </p>
              <p className="booking_category_value">{booking.dateTo}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="booking_details_section">
        <FontAwesomeIcon icon={faUsers} className="booking_details_icon" />
        <div className="booking_subsection">
          <p className="booking_category_name">Booked Guests: </p>
          <p className="booking_category_value">{booking.guests}</p>
        </div>
      </div>

      <div>
        <div className="booking_details_section">
          <FontAwesomeIcon icon={faCalendar} className="booking_details_icon" />
          <div className="booking_subsection">
            <p className="booking_category_name">Created on: </p>
            <p className="booking_category_value">{booking.created}</p>
          </div>
        </div>

        {booking.edited ? (
          <div className="booking_details_section">
            <FontAwesomeIcon
              icon={faCalendar}
              className="booking_details_icon"
            />
            <div className="booking_subsection">
              <p className="booking_category_name">Edited on: </p>
              <p className="booking_category_value">{booking.edited}</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="booking_details_section">
        <FontAwesomeIcon icon={faUser} className="booking_details_icon" />
        <div className="booking_subsection">
          <p className="booking_category_name">User: </p>
          <p className="booking_category_value">{bookingCustomer.name}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
