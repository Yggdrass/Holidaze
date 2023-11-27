import { useEffect, useState } from "react";
import {
  BookingsUrl,
  ProfilesUrl,
} from "../../../components/auth/constants/Url";
import { load } from "../../../components/storage/load";
import BookingCard from "../../booking/BookingDetails";
import { save } from "../../../components/storage/save";
import VenueBookingCard from "../../venueDetails/components/VenueBookingCard";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  console.log("Bookings: ", bookings);

  const profile = load("profile");
  console.log("Profile:", profile);
  const profileName = profile.name;
  console.log("Profile Name:", profileName);

  const AuthToken = profile.accessToken;
  console.log("Authenticate Token: ", AuthToken);

  const bookingsByProfileUrl =
    ProfilesUrl + profileName + "/bookings" + "?_venue=true";
  console.log("bookingsByProfileUrl", bookingsByProfileUrl);

  async function fetchBookings() {
    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AuthToken}`,
        "content-type": "application/json",
      },
    };

    try {
      const response = await fetch(bookingsByProfileUrl, fetchOptions);
      console.log("Response :", response);

      const result = await response.json();
      console.log("Result :", result);

      if (response.ok) {
        setBookings(result);
        console.log(bookings);
      } else {
        console.log("Catch Error Bookings: The bookings were not fetched ");
      }
    } catch (error) {
      console.log("Catch Error Register: ", error);
    }
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <ul>
        {bookings.map((item) => (
          <VenueBookingCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default MyBookings;
