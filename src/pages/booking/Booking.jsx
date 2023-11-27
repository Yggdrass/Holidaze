import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookingsUrl } from "../../components/auth/constants/Url";
import { save } from "../../components/storage/save";
import { load } from "../../components/storage/load";
import BookingDetails from "./BookingDetails";
import UpdateBookingModal from "./UpdateBookingModal";

const Booking = () => {
  const [booking, setBooking] = useState("");
  console.log("booking: ", booking);
  const params = useParams();
  console.log("Params: ", params);
  const paramsId = params.id;
  console.log("Params ID: ", paramsId);
  const profile = load("profile");
  console.log("Profile: ", profile);
  const profileEmail = profile.email;
  console.log("Profile Email: ", profileEmail);
  // const profileVenueManager = profile.venueManager;
  // console.log("profileVenueManager: ", profileVenueManager);
  // const venueOwner = venue.owner;
  // console.log("Venue Owner: ", venueOwner);
  const AuthToken = profile.accessToken;
  console.log("Auth Token: ", AuthToken);

  const bookingVenue = booking.venue;
  console.log("Booking Venue: ", bookingVenue);

  async function fetchBooking() {
    const bookingDetailsUrl = BookingsUrl;
    console.log("VenueUrl: ", bookingDetailsUrl);
    const FetchBookingDetails =
      bookingDetailsUrl + paramsId + "?_customer=true&_venue=true";
    console.log("FetchBookingDetails: ", FetchBookingDetails);

    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AuthToken}`,
        "content-type": "application/json",
      },
    };

    try {
      const response = await fetch(FetchBookingDetails, fetchOptions);
      console.log("Response :", response);

      const result = await response.json();
      console.log("Result:", result);

      if (response.ok) {
        setBooking(result);
        save("booking_details", result);
        console.log("Result Success:", result);
      } else {
        console.log("Result Error:");
      }
    } catch (error) {
      console.log("Catch Error FetchBooking: ", error);
    }
  }

  useEffect(() => {
    fetchBooking();
  }, []);

  return (
    <main className="main_booking_details">
      <BookingDetails />
      fixed beyond This
      <UpdateBookingModal />
    </main>
  );
};

export default Booking;
