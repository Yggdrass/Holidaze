import { useState } from "react";
import { BookingsUrl } from "../../../constants/Url";
import { load } from "../../../storage/load";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileName } from "../../../storage/profile/profile";

const UpdateBookingForm = () => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [guests, setGuests] = useState(1);
  const venue = load("venue_details");
  const venueId = venue.id;
  const venueMaxGuests = venue.maxGuests;
  const params = useParams();
  const updateBookingUrl = BookingsUrl + params.id;
  const profile = load("profile");
  const AuthToken = profile.accessToken;
  const navigate = useNavigate();

  const handleUpdateBookingForm = (e) => {
    e.preventDefault();
    let regobj = { dateFrom, dateTo, guests, venueId };

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
        const result = await response.json();
        console.log("Result :", JSON.stringify(result));

        if (response.ok) {
          alert(`${ProfileName} You have successfully updated this booking!`);
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
