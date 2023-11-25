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
import "./VenueDetails.css";
import DeleteVenue from "./components/DeleteVenue";
import UpdateVenueModal from "./components/UpdateVenueModal";

const VenueDetails = () => {
  const VenueDetailsUrl = Venues_Details_Url;
  //console.log("VenueUrl: ", VenueUrl);
  const [venue, setVenue] = useState([]);
  //console.log("Venue top: ", venue);
  const params = useParams();
  //console.log("Params: ", params);
  //console.log("Params ID: ", params.id);
  const FetchNewVenueDetails =
    VenueDetailsUrl + params.id + "?_owner=true&_bookings=true";
  //console.log("FetchNewVenueDetails: ", FetchNewVenueDetails);

  const [emailMatch, setEmailMatch] = useState(false);
  //console.log("Does Email Match: ", emailMatch);

  //console.log("Wifi: ", venue.meta.wifi);

  async function fetchVenueDetails() {
    const postData = {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    try {
      const response = await fetch(FetchNewVenueDetails, postData);
      //console.log("Response :", response);

      const result = await response.json();
      //console.log("Result:", result);

      if (response.ok) {
        setVenue(result);
        save("venue_info", result);
        //console.log("Result Success:", result);
      } else {
        console.log("Result Error:");
      }
    } catch (error) {
      //console.log("Catch Error Register: ", error);
    }
  }
  useEffect(() => {
    fetchVenueDetails();
  }, []);

  const profile = load("profile");
  //console.log("Profile: ", profile);

  const profileEmail = profile.email;
  //console.log("Profile Email: ", profileEmail);

  const profileVenueManager = profile.venueManager;
  //console.log("profileVenueManager: ", profileVenueManager);

  const venueInfo = load("venue_info");
  //console.log("Venue Info: ", venueInfo);

  const venueBookings = venueInfo.bookings;
  //console.log("Venue Bookings: ", venueBookings);

  const venueMedia = venueInfo.media;
  //console.log("Venue Media: ", venueMedia);

  // const venueMediaIndex = venueMedia.index;
  //console.log("Venue Media Index: ", venueMediaIndex);

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

  const ShowVenueBookings = () => {
    if (venueOwnerEmail === profileEmail) {
      return (
        <div className="venue_bookings">
          <h2 className="bookings_header">venue bookings</h2>
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
      );
    } else {
      return <p>Y ou are not the owner of this venue</p>;
    }
  };

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
          created by: {venueOwner.name}
        </p>
      </div>
    );
  };

  return (
    <main className="venue_details_main">
      <div className="venue_details_card">
        <h1 className="venue_name">{venue.name}</h1>
        <VenueInfo />
        {emailMatch ? (
          <DeleteVenue />
        ) : (
          "This is not your venue. You are not authorized to delete this one"
        )}
        {emailMatch ? (
          <UpdateVenueModal />
        ) : (
          "This is not your venue. You are not authorized to update this one"
        )}
        <div className="venue_media_description">
          <div className="carousel_wrapper">
            {venueMedia.map((venueMedia, i) => {
              return <img src={venueMedia} key={i} />;
            })}
          </div>
          <p className="venue_description">{venue.description}</p>
        </div>

        <VenueMeta />
      </div>
      {profileVenueManager ? <ShowVenueBookings /> : "My bookings"}
    </main>
  );
};

export default VenueDetails;
