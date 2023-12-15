import { useState } from "react";
import { BookingsUrl } from "../../../constants/Url";
import { load } from "../../../storage/load";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CreateBookingForm = () => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [guests, setGuests] = useState(1);
  const venue = load("venue_details");
  const venueId = venue.id;
  const venueMaxGuests = venue.maxGuests;
  const navigate = useNavigate();

  const profile = load("profile");
  const accessToken = profile.accessToken;
  const ProfileName = profile.name;

  const handleSubmitBookingForm = (e) => {
    e.preventDefault();

    let regobj = { dateFrom, dateTo, guests, venueId };

    async function registerBooking() {
      const postData = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(regobj),
      };

      try {
        const response = await fetch(BookingsUrl, postData);
        const result = await response.json();
        console.log("Result :", JSON.stringify(result));

        if (response.ok) {
          alert(
            `${ProfileName} You have successfully created a booking on this venue!`
          );
          navigate(`/profile`);
          window.location.reload(true);
        } else if (guests > venueMaxGuests) {
          alert("Error! booking failed! Exceeded max guests allowed");
        }
      } catch (error) {
        console.log("Catch Error Register Booking: ", error);
      }
    }
    registerBooking();
  };

  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmitBookingForm}>
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
          <span className="input_error"></span>
          <input
            type="date"
            id="date"
            placeholder="Date to"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
          />
          <span className="input_error"></span>
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
          <span className="input_error"></span>
        </div>

        <button type="submit" className="button_green register_form_submit">
          register booking
        </button>
      </form>
    </div>
  );
};

export default CreateBookingForm;
