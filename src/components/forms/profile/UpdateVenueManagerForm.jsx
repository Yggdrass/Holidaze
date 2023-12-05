import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfilesUrl } from "../../../constants/Url";
import { save } from "../../../storage/save";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { accessToken } from "../../../storage/profile/accessToken";
import { ProfileName, VenueManager } from "../../../storage/profile/profile";

const UpdateVenueManagerForm = () => {
  const [venueManager, setVenueManager] = useState(VenueManager);
  const updateVenueManagerUrl = ProfilesUrl + ProfileName;
  const navigate = useNavigate();

  const HandleUpdateVenueManagerForm = (e) => {
    e.preventDefault();
    let regobj = { venueManager };

    async function updateVenueManager() {
      const postData = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(regobj),
      };

      try {
        const response = await fetch(updateVenueManagerUrl, postData);
        const result = await response.json();

        if (response.ok) {
          setVenueManager(result);
          save("profile", result);
          alert(
            `${result.name} You have successfully updated your venue manager role!`
          );

          window.location.reload(true);
        } else {
          alert("Error! Failed to update venue manager role!");
        }
      } catch (error) {
        console.log("Catch Error Register: ", error);
      }
    }
    updateVenueManager();
    navigate(`/profile`);
  };

  return (
    <div>
      <form action="" className="form" onSubmit={HandleUpdateVenueManagerForm}>
        {/*---- Venue Manager Input ----*/}
        <div className="form-check input-div">
          <div className="label-div">
            <FontAwesomeIcon icon={faUserTie} className="label-icon" />
            <label className="form-check-label" htmlFor="venueManager">
              Venue Manager
            </label>
          </div>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="venueManager"
            checked={venueManager}
            onChange={() => setVenueManager(!venueManager)}
          ></input>
        </div>

        <button type="submit" className="button_green register_form_submit">
          update venue manager
        </button>
      </form>
    </div>
  );
};

export default UpdateVenueManagerForm;
