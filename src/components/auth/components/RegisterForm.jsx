import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Form.css";
import {
  faEnvelope,
  faImage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faLock, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { RegisterUrl } from "../constants/Url";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [venueManager, setVenueManager] = useState(false);

  const registerUrl = RegisterUrl;

  const navigate = useNavigate();

  const handleSubmitRegisterForm = (e) => {
    e.preventDefault();
    let regobj = { name, email, password, avatar, venueManager };
    //console.log("Register Object :", regobj);

    async function registerUser() {
      const postData = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      };

      try {
        const response = await fetch(registerUrl, postData);
        console.log("Response :", response);

        const result = await response.json();
        console.log("Result :", result);

        if (response.ok) {
          alert(
            `${result.name} You have successfully registered with Holidaze!`
          );
          window.location.reload(true);
        } else {
          alert("Error! Login failed!");
        }
      } catch (error) {
        console.log("Catch Error Register: ", error);
      }
    }
    registerUser();

    navigate(`/`);
  };

  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmitRegisterForm}>
        {/*---- Username Input ----*/}
        <div className="input-div">
          <div className="label-div">
            <FontAwesomeIcon icon={faUser} className="label-icon" />
            <label htmlFor="name">username</label>
          </div>
          <input
            type="text"
            id="name"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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

        {/*---- Email Input ----*/}
        <div className="form-floating mb-3 input-div">
          <div className="label-div">
            <FontAwesomeIcon icon={faEnvelope} className="label-icon" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@stud.noroff.no"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/*---- Check Venue Manager role ----*/}
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

        {/*---- Password Input ----*/}
        <div className="form-floating input-div">
          <div className="label-div">
            <FontAwesomeIcon icon={faLock} className="label-icon" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="button_green">
          submit form
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
