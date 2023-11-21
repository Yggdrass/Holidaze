import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../components/auth/components/Form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfilesUrl } from "../../../components/auth/constants/Url";
import { load } from "../../../components/storage/load";
import { save } from "../../../components/storage/save";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const UpdateVenueManagerForm = () => {
  const profile = load("profile");
  console.log("Profile:", profile);
  const profileName = profile.name;
  //console.log("Profile Name:", profileName);
  const profileVenueManager = profile.venueManager;
  console.log("Profile Venue Manager:", profileVenueManager);

  const [venueManager, setVenueManager] = useState(profileVenueManager);
  console.log("venueManager:", venueManager);

  const AuthToken = load("Holidaze_Login_Token");
  console.log("Authenticate Token: ", AuthToken);

  const updateVenueManagerUrl = ProfilesUrl + profileName;
  console.log("Update Venue Manager Url: ", updateVenueManagerUrl);

  const navigate = useNavigate();

  const HandleUpdateVenueManagerForm = (e) => {
    e.preventDefault();
    let regobj = { venueManager };
    console.log("Register Object :", regobj);

    async function updateVenueManager() {
      const postData = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${AuthToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(regobj),
      };

      try {
        const response = await fetch(updateVenueManagerUrl, postData);
        console.log("Response :", response);

        const result = await response.json();
        console.log("Result :", result);

        if (response.ok) {
          setVenueManager(result);
          console.log("venue manager:", venueManager);
          save("profile", result);
          console.log(profile);
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
