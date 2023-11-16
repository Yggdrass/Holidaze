import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Venues from "./pages/venues/Venues";
import VenueDetails from "./pages/venueDetails/VenueDetails";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/venues/:id" element={<VenueDetails />} />
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
