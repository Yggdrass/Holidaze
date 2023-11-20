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
  faUsers,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import "./VenueDetails.css";

const VenueDetails = () => {
  const VenueUrl = Venues_Details_Url;
  const [venue, setVenue] = useState("");
  const params = useParams();

  useEffect(() => {
    fetch(`${VenueUrl}/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setVenue(json);
        console.log("Json", json);
      });
  }, [VenueUrl, params.id]);

  console.log("Venue", venue);

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
              icon={faCalendar}
              className="venue_infoGroup1_icon"
            />
            from: {venue.dateFrom} / to: {venue.dateTo}
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
              wifi {venue.meta.wifi ? "included" : "not included"}
            </p>
            <p className="venue_facility">
              <FontAwesomeIcon icon={faCar} className="venue_meta_icon" />
              parking {venue.meta.parking ? "included" : "not included"}
            </p>
            <p className="venue_facility">
              <FontAwesomeIcon icon={faCutlery} className="venue_meta_icon" />
              breakfast {venue.meta.breakfast ? "included" : "not included"}
            </p>
            <p className="venue_facility">
              <FontAwesomeIcon icon={faPaw} className="venue_meta_icon" />
              pets {venue.meta.pets ? "included" : "not included"}
            </p>
          </div>

          <div className="venue_location">
            <h3>location</h3>
            <p className="venue_facility">
              <FontAwesomeIcon icon={faHouse} className="venue_meta_icon" />
              {venue.location.address}
            </p>
            <p className="venue_facility">
              <FontAwesomeIcon icon={faCity} className="venue_meta_icon" />
              {venue.location.city}
            </p>
            <p className="venue_facility">
              <FontAwesomeIcon icon={faGlobe} className="venue_meta_icon" />
              {venue.location.country}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VenueDetails;
