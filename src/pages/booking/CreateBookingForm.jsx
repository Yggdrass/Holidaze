import { useState } from "react";
import { BookingsUrl } from "../../components/auth/constants/Url";
import { load } from "../../components/storage/load";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CreateBookingForm = () => {
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
  const createBookingUrl = BookingsUrl;
  console.log("createBookingUrl", createBookingUrl);
  const profile = load("profile");
  console.log("Profile:", profile);
  const AuthToken = profile.accessToken;
  console.log("Authenticate Token: ", AuthToken);
  const navigate = useNavigate();

  const handleSubmitBookingForm = (e) => {
    e.preventDefault();

    let regobj = { dateFrom, dateTo, guests, venueId };
    console.log("Register Object Booking:", regobj);

    async function registerBooking() {
      const postData = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AuthToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(regobj),
      };

      try {
        const response = await fetch(createBookingUrl, postData);
        console.log("Response :", response);

        const result = await response.json();
        console.log("Result :", JSON.stringify(result));

        if (response.ok) {
          alert(
            `${profile.name} You have successfully created a booking on this venue!`
          );
          window.location.reload(true);
        } else {
          alert("Error! booking failed!");
        }
      } catch (error) {
        console.log("Catch Error Register Booking: ", error);
      }
    }
    registerBooking();

    navigate(`/profile`);
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
          register booking
        </button>
      </form>
    </div>
  );
};

export default CreateBookingForm;
