import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Venues_Details_Url } from "../../components/auth/constants/Url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCar,
  faCity,
  faCutlery,
  faGlobe,
  faHouse,
  faMoneyBill1,
  faPaw,
  faStar,
  faUserTie,
  faUsers,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

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

  useEffect(() => {
    fetch(FetchNewVenueDetails)
      .then((res) => res.json())
      .then((json) => {
        setVenue(json);
        console.log("Json", json);
      });
  }, [FetchNewVenueDetails]);

  return (
    <main className="venue_details_main">
      <div className="venue_details_card">
        <h1 className="venue_name">{venue.name}</h1>
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
            <FontAwesomeIcon
              icon={faUserTie}
              className="venue_infoGroup1_icon"
            />
            created by: {venueOwnerName}
          </p>
        </div>

        <div className="venue_media_description">
          <img src={venue.media} className="venue_media_image" />
          <p className="venue_description">{venue.description}</p>
        </div>

        <div className="venue_meta">
          <div className="venue_facilities">
            <h3>facilities</h3>
            <p className="venue_facility">
              <FontAwesomeIcon icon={faWifi} className="venue_meta_icon" />
            </p>
            <p className="venue_facility">
              <FontAwesomeIcon icon={faCar} className="venue_meta_icon" />
            </p>
            <p className="venue_facility">
              <FontAwesomeIcon icon={faCutlery} className="venue_meta_icon" />
            </p>
            <p className="venue_facility">
              <FontAwesomeIcon icon={faPaw} className="venue_meta_icon" />
            </p>
          </div>

          <div className="venue_location">
            <h3>location</h3>
            <p className="venue_facility">
              <FontAwesomeIcon icon={faHouse} className="venue_meta_icon" />
            </p>
            <p className="venue_facility">
              <FontAwesomeIcon icon={faCity} className="venue_meta_icon" />
            </p>
            <p className="venue_facility">
              <FontAwesomeIcon icon={faGlobe} className="venue_meta_icon" />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VenueDetails;
