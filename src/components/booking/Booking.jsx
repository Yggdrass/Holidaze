import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookingsUrl } from "../../constants/Url";
import { save } from "../../storage/save";
import BookingDetails from "./BookingDetails";
import UpdateBookingModal from "../modals/venue_&_booking/UpdateBookingModal";
import DeleteBooking from "./DeleteBooking";

const Booking = () => {
  const [booking, setBooking] = useState("");
  const params = useParams();
  const paramsId = params.id;

  const profile = load("profile");
  const accessToken = profile.accessToken;

  async function fetchBooking() {
    const FetchBookingsUrl =
      BookingsUrl + paramsId + "?_customer=true&_venue=true";
    console.log(FetchBookingsUrl);

    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
    };

    try {
      const response = await fetch(FetchBookingsUrl, fetchOptions);
      console.log(response);
      const result = await response.json();

      if (response.ok) {
        setBooking(result);
        save("booking_details", result);
      } else {
        console.log("Result Error:", result);
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
      <div className="booking_details_buttons_container">
        <UpdateBookingModal />
        <DeleteBooking />
      </div>
    </main>
  );
};

export default Booking;
