import { useEffect, useState } from "react";
import { ProfilesUrl } from "../../../components/auth/constants/Url";
import { load } from "../../../components/storage/load";
import MyVenueCard from "./MyVenueCard";

const VenuesByProfile = () => {
  const [profileVenues, setProfileVenues] = useState("");
  console.log("Profile Venues: ", profileVenues);

  const url = ProfilesUrl;

  const profile = load("profile");

  const profileName = profile.name;

  const AuthToken = profile.accessToken;

  const fetchVenuesByProfileUrl = url + profileName + "/venues";

  async function fetchVenues() {
    const postData = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AuthToken}`,
        "content-type": "application/json",
      },
    };

    try {
      const response = await fetch(fetchVenuesByProfileUrl, postData);
      console.log("Response :", response);

      const result = await response.json();
      console.log("Result:", result.errors);

      if (response.ok) {
        setProfileVenues(result);
        console.log("Result Success:", result);
      } else {
        console.log("Result Error:");
      }
    } catch (error) {
      console.log("Catch Error Register: ", error);
    }
  }

  useEffect(() => {
    fetchVenues();
  }, []);

  return (
    <div>
      <h2 className="bookings_header">my venues</h2>
      {profileVenues.length > 0 ? (
        <ul className="search_results">
          {profileVenues.map((item) => (
            <MyVenueCard key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        "You don't have any create venues!"
      )}
    </div>
  );
};

export default VenuesByProfile;
