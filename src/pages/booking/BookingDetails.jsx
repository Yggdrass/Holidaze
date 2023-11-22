import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Venues_Details_Url } from "../../components/auth/constants/Url";

const VenueDetails = () => {
  const VenueUrl = Venues_Details_Url;
  console.log("VenueUrl: ", VenueUrl);
  const [venue, setVenue] = useState("");
  console.log("Venue: ", venue);
  const params = useParams();
  console.log("Params: ", params);
  console.log("Params ID: ", params.id);
  const FetchNewVenueDetails =
    VenueUrl + params.id + "?_owner=true&_bookings=true";
  console.log("FetchNewVenueDetails: ", FetchNewVenueDetails);

  //console.log("Wifi: ", venue.meta.wifi);

  const venueOwnerName = venue.owner.name;
  console.log("Venue Owner:", venueOwnerName);

  const venueBookings = venue.bookings;
  console.log("Venue Bookings:", venueBookings);

  useEffect(() => {
    fetch(FetchNewVenueDetails)
      .then((res) => res.json())
      .then((json) => {
        setVenue(json);
        console.log("Json", json);
      });
  }, [FetchNewVenueDetails]);

  return <div>text</div>;
};

export default VenueDetails;
