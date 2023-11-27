import { useState } from "react";
import { BookingsUrl } from "../../components/auth/constants/Url";
import { load } from "../../components/storage/load";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBookingForm = () => {
  const [dateFrom, setDateFrom] = useState("");
  console.log("Date From", dateFrom);
  const [dateTo, setDateTo] = useState("");
  console.log("Date To", dateTo);
  const [guests, setGuests] = useState(1);
  console.log("Guests", guests);
  const venue = load("venue_details");
  console.log("venue", venue);
  const venueId = venue.id;
  console.log("venueId: ", venueId);
  const venueMaxGuests = venue.maxGuests;
  console.log("Venue Max Guests:", venueMaxGuests);
  const params = useParams();
  console.log("Params: ", params);
  const updateBookingUrl = BookingsUrl + params.id;
  console.log("updateBookingUrl", updateBookingUrl);
  const profile = load("profile");
  console.log("Profile:", profile);
  const AuthToken = profile.accessToken;
  console.log("Authenticate Token: ", AuthToken);
  const navigate = useNavigate();

  const handleUpdateBookingForm = (e) => {
    e.preventDefault();

    let regobj = { dateFrom, dateTo, guests, venueId };
    console.log("Register Object Booking:", regobj);

    async function updateBooking() {
      const fetchOptions = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${AuthToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(regobj),
      };

      try {
        const response = await fetch(updateBookingUrl, fetchOptions);
        console.log("Response :", response);

        const result = await response.json();
        console.log("Result :", JSON.stringify(result));

        if (response.ok) {
          alert(`${profile.name} You have successfully updated this booking!`);
          navigate(`/profile`);
          window.location.reload(true);
        } else if (guests > venueMaxGuests) {
          alert("Error! booking failed! Exceeded max guests allowed");
        }
      } catch (error) {
        console.log("Catch Error Update Booking: ", error);
      }
    }
    updateBooking();
  };

  return (
    <div>
      <form action="" className="form" onSubmit={handleUpdateBookingForm}>
        {/*---- Date Input ----*/}
        <div className="input-div">
          <div className="label-div">
            <FontAwesomeIcon icon={faCalendar} className="label-icon" />
            <label htmlFor="date">date from / to</label>
          </div>
          <input
            type="date"
            id="date"
            placeholder="Date from"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
          <input
            type="date"
            id="date"
            placeholder="Date to"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
          />
        </div>

        {/*---- Guests Input ----*/}
        <div className="input-div">
          <div className="label-div">
            <FontAwesomeIcon icon={faUsers} className="label-icon" />
            <label htmlFor="guests">guests</label>
          </div>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
          />
        </div>

        <button type="submit" className="button_green register_form_submit">
          update booking
        </button>
      </form>
    </div>
  );
};

export default UpdateBookingForm;
