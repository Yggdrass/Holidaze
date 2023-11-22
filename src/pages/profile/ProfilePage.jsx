import React, { useState } from "react";
import { ProfilesUrl } from "../../components/auth/constants/Url";
import { load } from "../../components/storage/load";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import UpdateAvatarModal from "./components/UpdateAvatarModal";
import UpdateVenueManagerModal from "./components/UpdateVenueManagerModal";
import CreateVenueModal from "./components/CreateVenueModal";
import VenuesByProfile from "./components/VenuesByProfile";

const ProfilePage = () => {
  const url = ProfilesUrl;
  //console.log("url: ", url);

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
    return <h1>{profileName}'s page</h1>;
  };

  const Avatar = () => {
    return <img src={profileAvatar} alt="Your avatar" />;
  };

  const ProfileInfo = () => {
    return (
      <>
        <div>
          <FontAwesomeIcon icon={faUser} className="profile_icon" />
          <p>{profileName}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} className="profile_icon" />
          <p>{profileEmail}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} className="profile_icon" />
          <p>
            {venueManager ? "is a venue manager" : "is not a venue manager"}
          </p>
        </div>
      </>
    );
  };

  return (
    <main className="main_profilePage">
      <Heading />
      <Avatar />
      <ProfileInfo />
      <div>{venueManager ? <CreateVenueModal /> : null}</div>
      <UpdateAvatarModal />
      <UpdateVenueManagerModal />
      <div>
        <VenuesByProfile />
      </div>
    </main>
  );
};

export default ProfilePage;
