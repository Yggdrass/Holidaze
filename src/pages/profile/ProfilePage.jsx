import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import UpdateAvatarModal from "../../components/modals/auth_&_profile/UpdateAvatarModal";
import UpdateVenueManagerModal from "../../components/modals/auth_&_profile/UpdateVenueManagerModal";
import CreateVenueModal from "../../components/modals/venue_&_booking/CreateVenueModal";
import VenuesByProfile from "../../components/VenuesByProfile";
import MyBookings from "../../components/booking/MyBookings";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import {
  ProfileAvatar,
  ProfileEmail,
  ProfileName,
  VenueManager,
} from "../../components/storage/profile/profile";
import { accessToken } from "../../components/storage/profile/accessToken";

const ProfilePage = () => {
  console.log("auth token: ", accessToken);
  console.log("profile name: ", ProfileName);

  const Heading = () => {
    return <h1 className="profilePageHeader">{ProfileName}s page</h1>;
  };

  const Avatar = () => {
    return <img src={ProfileAvatar} alt="Your avatar" className="avatar" />;
  };

  const ProfileInfo = () => {
    return (
      <div className="profile_info">
        <div className="info_block">
          <FontAwesomeIcon icon={faUser} />
          <p className="info_block_text">{ProfileName}</p>
        </div>
        <div className="info_block">
          <FontAwesomeIcon icon={faEnvelope} />
          <p className="info_block_text">{ProfileEmail}</p>
        </div>
        <div className="info_block">
          <FontAwesomeIcon icon={faUserTie} />
          <p className="info_block_text">
            {VenueManager ? "is a venue manager" : "is not a venue manager"}
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
        {VenueManager ? <CreateVenueModal /> : null}
      </div>
      {VenueManager ? <VenuesByProfile /> : null}
      <MyBookings />
    </main>
  );
};

export default ProfilePage;
