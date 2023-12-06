import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VenuesUrl } from "../../constants/Url";
import { save } from "../../storage/save";
import VenueInfo from "../../components/venue_details/VenueInfo";
import VenueMeta from "../../components/venue_details/VenueMeta";
import VenueMedia from "../../components/venue_details/VenueMedia";
import CreateBookingModal from "../../components/modals/venue_&_booking/CreateBookingModal";
import VenueCalendar from "../../components/venue_details/VenueCalendar";
import { accessToken } from "../../storage/profile/accessToken";
import { ProfileEmail, VenueManager } from "../../storage/profile/profile";
import UpdateVenueModal from "../../components/modals/venue_&_booking/UpdateVenueModal";
import DeleteVenue from "../../components/venue_details/DeleteVenue";
import VenueBookings from "../../components/venue_details/VenueBookings";
import "./VenueDetails.modules.css";

const VenueDetails = () => {
  const [venue, setVenue] = useState([]);
  console.log("venue: ", venue);
  const params = useParams();
  const paramsId = params.id;

  const [venueOwner, setVenueOwner] = useState([]);
  const [venueBookings, setVenueBookings] = useState([]);
  const venueOwnerEmail = venueOwner.email;
  const DateFrom = venueBookings.map((booking) =>
    booking.dateFrom.slice(0, 10)
  );
  console.log("render Bookings Date From: ", DateFrom);

  const DateTo = venueBookings.map((booking) => booking.dateTo.slice(0, 10));
  console.log("render Bookings Date To: ", DateTo);

  async function fetchVenue() {
    const FetchVenueDetails =
      VenuesUrl + paramsId + "?_owner=true&_bookings=true";
    console.log("FetchVenueDetails: ", FetchVenueDetails);

    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
    };

    try {
      const response = await fetch(FetchVenueDetails, fetchOptions);
      const result = await response.json();

      if (response.ok) {
        setVenue(result);
        setVenueOwner(result.owner);
        setVenueBookings(result.bookings);
        save("venue_details", result);
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

  const ShowButtons = () => {
    if (VenueManager && ProfileEmail === venueOwnerEmail) {
      return (
        <div className="update_delete_venue_buttons">
          <DeleteVenue />
          <UpdateVenueModal Venue={venue} />
        </div>
      );
    } else if (VenueManager && ProfileEmail !== venueOwnerEmail) {
      return (
        <div>
          This is not your venue, you are not authorized to edit this venue!
        </div>
      );
    } else if (!VenueManager) {
      return null;
    }
  };

  return (
    <main className="venue_details_main">
      <div className="venue_details_card">
        <div>
          <h1 className="venue_name">{venue.name}</h1>
          <div className="venue_details_button_container">
            <ShowButtons />
            <CreateBookingModal />
          </div>
        </div>
        <VenueInfo
          Venue={venue}
          venueRating={venue.rating}
          venuePrice={venue.price}
          venueMaxGuests={venue.maxGuests}
          venueOwnerName={venueOwner.name}
        />
        <div className="venue_media_description">
          <VenueMedia />
          <p className="venue_description">venue.description</p>
        </div>
        <VenueMeta />
      </div>
      <VenueCalendar DateFrom={DateFrom} DateTo={DateTo} />
      <VenueBookings />
    </main>
  );
};

export default VenueDetails;
