import { Link } from "react-router-dom";
import "../Home.css";

const MainLoggedIn = () => {
  return (
    <main className="main-loggedIn">
      <h1>HOLIDAZE</h1>

      <div>
        <Link to="/venues" className="button button_green search_venues_button">
          search venues
        </Link>
      </div>
    </main>
  );
};

export default MainLoggedIn;
