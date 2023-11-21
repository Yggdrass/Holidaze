import { useState } from "react";
import { ProfilesUrl } from "../../../components/auth/constants/Url";
import { load } from "../../../components/storage/load";
import Booking from "./Booking";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  const profile = load("profile");
  console.log("Profile:", profile);
  const profileName = profile.name;
  //console.log("Profile Name:", profileName);

  const AuthToken = profile.accessToken;
  //console.log("Authenticate Token: ", AuthToken);

  const profileBookingsUrl = ProfilesUrl + profileName + "/bookings";
  console.log("Update Avatar Url: ", profileBookingsUrl);

  async function fetchBookings() {
    const postData = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AuthToken}`,
        "content-type": "application/json",
      },
    };

    try {
      const response = await fetch(profileBookingsUrl, postData);
      console.log("Response :", response);

      const result = await response.json();
      console.log("Result :", result);

      if (response.ok) {
        setBookings(result);
        console.log(bookings);
      } else {
        console.log("Catch Error Bookings: The bookings were not fetched ");
      }
    } catch (error) {
      console.log("Catch Error Register: ", error);
    }
  }
  fetchBookings();

  return (
    <div>
      <ul>
        {bookings.map((item) => (
          <Booking key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default MyBookings;
