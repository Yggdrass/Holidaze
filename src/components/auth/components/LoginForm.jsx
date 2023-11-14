import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Form.css";
import { useState } from "react";
import { LoginUrl } from "../constants/Url";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUrl = LoginUrl;

  const handleSubmitLoginForm = (e) => {
    e.preventDefault();
    let loginobj = { email, password };
    console.log("Login Object :", loginobj);

    async function loginUser() {
      const postData = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(loginobj),
      };

      try {
        const response = await fetch(loginUrl, postData);
        console.log("Response :", response);

        const result = await response.json();
        console.log("Result :", result);

        const accessToken = result.accessToken;
        console.log("AccessToken :", accessToken);

        localStorage.setItem("Holidaze_Login_Token", accessToken);
        console.log(
          "Stored Token LocalStorage :",
          localStorage.getItem("Holidaze_Login_Token")
        );

        if (response.ok) {
          alert(`${result.name} You have successfully logged in!`);
          navigate(`/`);
          window.location.reload(true);
        } else {
          alert("Error! Login failed!");
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
          />
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
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
