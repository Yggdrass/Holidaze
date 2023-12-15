import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfilesUrl } from "../../../constants/Url";
import { save } from "../../../storage/save";

const UpdateAvatarForm = () => {
  const [avatar, setAvatar] = useState("");
  const profile = load("profile");
  const accessToken = profile.accessToken;
  const ProfileName = profile.name;
  const updateAvatarUrl = ProfilesUrl + ProfileName + "/media";
  const navigate = useNavigate();

  const HandleUpdateAvatarForm = (e) => {
    e.preventDefault();
    let regobj = { avatar };

    async function updateAvatar() {
      const postData = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(regobj),
      };

      try {
        const response = await fetch(updateAvatarUrl, postData);
        const result = await response.json();

        if (response.ok) {
          save("profile", result);
          alert(`${ProfileName} You have successfully updated your avatar!`);
          window.location.reload(true);
        } else {
          alert("Error! Failed to update avatar!");
        }
      } catch (error) {
        console.log("Catch Error Register: ", error);
      }
    }
    updateAvatar();
    navigate(`/profile`);
  };

  return (
    <div>
      <form action="" className="form" onSubmit={HandleUpdateAvatarForm}>
        {/*---- Avatar Input ----*/}
        <div className="input-div">
          <div className="label-div">
            <FontAwesomeIcon icon={faImage} className="label-icon" />
            <label htmlFor="avatar">avatar</label>
          </div>
          <input
            type="text"
            id="avatar"
            placeholder="Url"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>

        <button type="submit" className="button_green register_form_submit">
          update avatar
        </button>
      </form>
    </div>
  );
};

export default UpdateAvatarForm;
