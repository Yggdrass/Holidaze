import { useEffect, useState } from "react";
import { ProfilesUrl } from "../constants/Url";
import MyVenueCard from "./cards/MyVenueCard";
import { accessToken } from "./storage/profile/accessToken";
import { ProfileName } from "./storage/profile/profile";

const VenuesByProfile = () => {
  const [profileVenues, setProfileVenues] = useState("");
  const fetchVenuesByProfileUrl = ProfilesUrl + ProfileName + "/venues";

  async function fetchProfileVenues() {
    const postData = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
    };

    try {
      const response = await fetch(fetchVenuesByProfileUrl, postData);
      const result = await response.json();

      if (response.ok) {
        setProfileVenues(result);
      } else {
        console.log("Result Error:", result);
      }
    } catch (error) {
      console.log("Catch Error Register: ", error);
    }
  }

  useEffect(() => {
    fetchProfileVenues();
  }, []);

  return (
    <div className="myVenues_compontent">
      <h2 className="myVenues_header">my venues</h2>
      {profileVenues.length > 0 ? (
        <ul className="myVenues_container">
          {profileVenues.map((venue) => (
            <MyVenueCard
              key={venue.id}
              item={venue}
              venueId={venue.id}
              venuePrice={venue.price}
              venueName={venue.name}
              venueDescription={venue.description}
              venueMedia={venue.media}
            />
          ))}
        </ul>
      ) : (
        "You don't have any created venues!"
      )}
    </div>
  );
};

export default VenuesByProfile;
