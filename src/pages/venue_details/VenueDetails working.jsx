import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Venues_Details_Url } from "../../constants/Url";
import { save } from "../../components/storage/save";
import { load } from "../../components/storage/load";
import VenueInfo from "../../components/venue_details/VenueInfo";
import VenueMeta from "../../components/venue_details/VenueMeta";
import ShowUpdateDelete from "../../components/venue_details/ShowUpdateDelete";
import VenueMedia from "../../components/venue_details/VenueMedia";
import CreateBookingModal from "../../components/modals/CreateBookingModal";
import VenueCalendar from "../../components/venue_details/VenueCalendar";

const VenueDetails = () => {
  const [venue, setVenue] = useState([]);
  console.log("venue: ", venue);
  const params = useParams();
  //console.log("Params: ", params);
  const paramsId = params.id;
  //console.log("Params ID: ", paramsId);
  const profile = load("profile");
  //console.log("Profile: ", profile);
  const AuthToken = profile.accessToken;

  const venueBookings = venue.bookings;
  console.log("venueBookings: ", venueBookings);

  // const bookingDates = venueBookings.dateFrom;
  // console.log("Date From: ", dateFrom);

  // const bookingsList = venueBookings.map((booking, index) => {
  //   <li key={index}>{booking}</li>;
  // });
  // console.log("Bookings List: ", bookingsList);

  // // const renderBookingsDateFrom = venueBookings
  // //   .slice(0, 10)
  // //   .map((booking) => booking.dateFrom);
  // // console.log("render Bookings Date From: ", renderBookingsDateFrom);

  async function fetchVenue() {
    const VenueDetailsUrl = Venues_Details_Url;
    console.log("VenueUrl: ", VenueDetailsUrl);
    const FetchVenueDetails =
      VenueDetailsUrl + paramsId + "?_owner=true&_bookings=true";
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
      //console.log("Response :", response);

      const result = await response.json();
      //console.log("Result:", result);

      if (response.ok) {
        setVenue(result);
        save("venue_details", result);
        //console.log("Result Success:", result);
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
    <main className="venue_details_main">
      <div className="venue_details_card">
        <h1 className="venue_name">{venue.name}</h1>
        <VenueInfo />
        <ShowUpdateDelete />
        <div className="venue_media_description">
          <VenueMedia />
          <p className="venue_description">venue.description</p>
        </div>
        <VenueMeta />
      </div>
      profileVenueManager
      <CreateBookingModal />
      {/* <MyBookings /> */}
      <VenueCalendar bookingDates={{ from: "dateFrom", to: "dateTo" }} />
    </main>
  );
};

export default VenueDetails;
