import { useEffect, useState } from "react";
import { ProfilesUrl } from "../../constants/Url";
import VenueBookingCard from "../cards/VenueBookingCard";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const profile = load("profile");
  const accessToken = profile.accessToken;
  const ProfileName = profile.name;
  const bookingsByProfileUrl =
    ProfilesUrl + ProfileName + "/bookings" + "?_venue=true";

  async function fetchBookings() {
    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
    };

    try {
      const response = await fetch(bookingsByProfileUrl, fetchOptions);
      const result = await response.json();

      if (response.ok) {
        setBookings(result);
      } else {
        console.log(
          "Catch Error Bookings: The bookings were not fetched.",
          response
        );
      }
    } catch (error) {
      console.log("Catch Error Register: ", error);
    }
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="myBookings_compontent">
      <h2 className="myBookings_header">my bookings</h2>
      <ul className="myBookings_container">
        {bookings.map((booking) => (
          <VenueBookingCard
            key={booking.id}
            item={booking}
            bookingId={booking.id}
            guests={booking.guests}
            dateFrom={booking.dateFrom.slice(0, 10)}
            dateTo={booking.dateTo.slice(0, 10)}
            venueName={booking.venue.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default MyBookings;
