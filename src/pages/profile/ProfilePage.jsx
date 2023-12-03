import { load } from "../../components/storage/load";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import UpdateAvatarModal from "../../components/modals/UpdateAvatarModal";
import UpdateVenueManagerModal from "../../components/modals/UpdateVenueManagerModal";
import CreateVenueModal from "../../components/modals/CreateVenueModal";
import VenuesByProfile from "../../components/VenuesByProfile";
import MyBookings from "../../components/booking/MyBookings";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const ProfilePage = () => {
  const profile = load("profile");
  //console.log("Profile:", profile);
  const profileName = profile.name;
  //console.log("Profile Name:", profileName);

  const profileAvatar = profile.avatar;
  //console.log("Profile Avatar:", profileAvatar);

  const profileEmail = profile.email;
  //console.log("Profile Email:", profileEmail);

  const venueManager = profile.venueManager;
  //console.log("Venue Manager Role:", venueManager);

  const Heading = () => {
    return <h1 className="profilePageHeader">{profileName}s page</h1>;
  };

  const Avatar = () => {
    return <img src={profileAvatar} alt="Your avatar" className="avatar" />;
  };

  const ProfileInfo = () => {
    return (
      <div className="profile_info">
        <div className="info_block">
          <FontAwesomeIcon icon={faUser} className="profile_icon" />
          <p className="info_block_text">{profileName}</p>
        </div>
        <div className="info_block">
          <FontAwesomeIcon icon={faEnvelope} className="profile_icon" />
          <p className="info_block_text">{profileEmail}</p>
        </div>
        <div className="info_block">
          <FontAwesomeIcon icon={faUserTie} className="profile_icon" />
          <p className="info_block_text">
            {venueManager ? "is a venue manager" : "is not a venue manager"}
          </p>
        </div>
      </div>
    );
  };

  return (
    <main className="main_profilePage">
      <Heading />
      <div className="profile_info_container">
        <Avatar />
        <ProfileInfo />
      </div>
      <div className="update_profile_buttons_container">
        <UpdateAvatarModal />
        <UpdateVenueManagerModal />
        {venueManager ? <CreateVenueModal /> : null}
      </div>
      {venueManager ? <VenuesByProfile /> : null}
      <MyBookings />
    </main>
  );
};

export default ProfilePage;
