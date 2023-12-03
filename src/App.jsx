import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/Auth.css";
import "./css/Buttons.css";
import "./css/Form.css";
import "./css/Layout.css";
import "./css/Modal.css";
import "./css/Navigation.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Venues from "./pages/venues/Venues";
import ProfilePage from "./pages/profile/ProfilePage";
import Venue from "./pages/venueDetails/Venue";
import Booking from "./components/booking/Booking";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/venues/:id" element={<Venue />} />
          <Route path="/bookings/:id" element={<Booking />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;

{
  /* <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/venues/:id" element={<VenueDetails />} />
  <Route path="/profile/:id" element={<ProfilePage />} />
  <Route path="/venues" element={<VenuesPage />} />
  <Route path="/calendar" element={<CalendarPage />} />
</Routes>; */
}
