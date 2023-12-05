import { useEffect, useState } from "react";
import { save } from "../../storage/save";
import { useParams } from "react-router-dom";
import { VenuesUrl } from "../../constants/Url";
import { load } from "../../storage/load";
import VenueBookingCard from "../cards/VenueBookingCard";
import "../../pages/venue_details/VenueDetails.modules.css";

const VenueBookings = () => {
  const [venue, setVenue] = useState("");
  console.log("venue: "), venue;
  const params = useParams();
  const profile = load("profile");
  const AuthToken = profile.accessToken;
  const VenueDetails = load("venue_details");
  const VenueBookings = VenueDetails.bookings;

  async function fetchVenue() {
    const FetchVenueDetails = VenuesUrl + params.id + "?_bookings=true";
    console.log("FetchVenueDetails: ", FetchVenueDetails);

    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AuthToken}`,
        "content-type": "application/json",
      },
    };

    try {
      const response = await fetch(FetchVenueDetails, fetchOptions);
      console.log("Response :", response);

      const result = await response.json();
      console.log("Result:", result);

      if (response.ok) {
        setVenue(result);
        save("venue_details", result);
      } else {
        console.log("Result Error:", result);
      }
    } catch (error) {
      console.log("Catch Error FetchVenue: ", error);
    }
  }

  useEffect(() => {
    fetchVenue();
  }, []);

  return (
    <div>
      <ul className="venue_details_bookings_container">
        {VenueBookings.map((booking) => (
          <VenueBookingCard
            key={booking.id}
            item={booking}
            bookingId={booking.id}
            guests={booking.guests}
            dateFrom={booking.dateFrom.slice(0, 10)}
            dateTo={booking.dateTo.slice(0, 10)}
          />
        ))}
      </ul>
    </div>
  );
};

export default VenueBookings;
