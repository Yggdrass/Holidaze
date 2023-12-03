import { useEffect, useState } from "react";
import { save } from "../storage/save";
import { useParams } from "react-router-dom";
import { Venues_Details_Url } from "../../constants/Url";
import { load } from "../storage/load";
import VenueBookingCard from "../cards/VenueBookingCard";

const VenueBookings = () => {
  const [venue, setVenue] = useState("");
  console.log("venue: "), venue;

  const params = useParams();

  const profile = load("profile");
  console.log("Profile:", profile);
  const AuthToken = profile.accessToken;
  console.log("Authenticate Token: ", AuthToken);

  const VenueDetails = load("venue_details");
  console.log("Venue Details: ", VenueDetails);

  const VenueBookings = VenueDetails.bookings;
  console.log("Venue Bookings: ", VenueBookings);

  //   const bookings = VenueBookings.map(({ booking, index }) => (
  //     <li key={index}>{booking.dateFrom}</li>
  //   ));
  //   console.log("booking: ", bookings);

  async function fetchVenue() {
    const VenueDetailsUrl = Venues_Details_Url;
    console.log("VenueUrl: ", VenueDetailsUrl);
    const FetchVenueDetails = VenueDetailsUrl + params.id + "?_bookings=true";
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
        console.log("Result Success:", result);
      } else {
        console.log("Result Error:");
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
      <ul>
        {VenueBookings.map((item) => (
          <VenueBookingCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default VenueBookings;
