import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { LoginUrl } from "../../../constants/Url";
import { useNavigate } from "react-router-dom";
import { save } from "../../storage/save";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitLoginForm = (e) => {
    e.preventDefault();
    let loginobj = { email, password };

    async function loginUser() {
      const postData = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(loginobj),
      };

      try {
        const response = await fetch(LoginUrl, postData);
        const result = await response.json();
        const accessToken = result.accessToken;
        save("Holidaze_Login_Token", accessToken);

        if (response.ok) {
          alert(`${result.name} You have successfully logged in!`);
          save("profile", result);
          navigate(`/`);
          window.location.reload(true);
        } else {
          alert("Error! You failed to login!");
        }
      } catch (error) {
        console.log("Catch Error Login: ", error);
      }
    }
    loginUser();
  };

  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmitLoginForm}>
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
            required
          />
          <span className="input_error"></span>
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
            required
          />
          <span className="input_error"></span>
        </div>

        <button type="submit" className="button_green login_form_submit">
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
