import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Venues_Details_Url } from "../../components/auth/constants/Url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill1,
  faStar,
  faUserTie,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { load } from "../../components/storage/load";
import { save } from "../../components/storage/save";
import VenueMeta from "./components/VenueMeta";
import VenueBookingCard from "./components/VenueBookingCard";
const VenueDetails = () => {
  const VenueUrl = Venues_Details_Url;
  //console.log("VenueUrl: ", VenueUrl);
  const [venue, setVenue] = useState("");
  //console.log("Venue top: ", venue);
  const params = useParams();
  //console.log("Params: ", params);
  //console.log("Params ID: ", params.id);
  const FetchNewVenueDetails =
    VenueUrl + params.id + "?_owner=true&_bookings=true";
  //console.log("FetchNewVenueDetails: ", FetchNewVenueDetails);

  const [emailMatch, setEmailMatch] = useState(false);
  //console.log("Does Email Match: ", emailMatch);

  //console.log("Wifi: ", venue.meta.wifi);

  useEffect(() => {
    fetch(FetchNewVenueDetails)
      .then((res) => res.json())
      .then((json) => {
        setVenue(json);
        save("venue_info", json);
        //console.log("Json", json);
      });
  }, [FetchNewVenueDetails]);

  const profile = load("profile");
  //console.log("Profile: ", profile);

  const profileEmail = profile.email;
  //console.log("Profile Email: ", profileEmail);

  const venueInfo = load("venue_info");
  //console.log("Venue Info: ", venueInfo);

  const venueBookings = venueInfo.bookings;
  //console.log("Venue Bookings: ", venueBookings);

  const venueOwner = venueInfo.owner;
  //console.log("Venue Owner: ", venueOwner);

  const venueOwnerEmail = venueOwner.email;
  //console.log("Venue Owner Email: ", venueOwnerEmail);

  const CheckEmailMatch = () => {
    useEffect(() => {
      if (venueOwnerEmail === profileEmail) {
        setEmailMatch(true);
      } else {
        setEmailMatch(false);
      }
    });
  };

  CheckEmailMatch();

  const VenueInfo = () => {
    return (
      <div className="info_group_1">
        <p className="venue_stars">
          <FontAwesomeIcon icon={faStar} className="venue_infoGroup1_icon" />
          rating: {venue.rating}
        </p>
        <p className="venue_price">
          <FontAwesomeIcon
            icon={faMoneyBill1}
            className="venue_infoGroup1_icon"
          />
          price: {venue.price}
        </p>
        <p className="venue_maxGuests">
          <FontAwesomeIcon icon={faUsers} className="venue_infoGroup1_icon" />
          max guests: {venue.maxGuests}
        </p>
        <p className="venue_maxGuests">
          <FontAwesomeIcon icon={faUserTie} className="venue_infoGroup1_icon" />
          created by:
        </p>
      </div>
    );
  };

  return (
    <main className="venue_details_main">
      <div className="venue_details_card">
        <h1 className="venue_name">{venue.name}</h1>
        <VenueInfo />

        <div className="venue_media_description">
          <img src={venue.media} className="venue_media_image" />
          <p className="venue_description">{venue.description}</p>
        </div>

        <VenueMeta />
      </div>
      <div className="venue_bookings">
        <h2 className="bookings_header">bookings</h2>
        {emailMatch ? (
          <ul className="search_results">
            {venueBookings.map((item) => (
              <VenueBookingCard key={item.id} item={item} />
            ))}
          </ul>
        ) : (
          "This is not your venue"
        )}
      </div>
    </main>
  );
};

export default VenueDetails;
