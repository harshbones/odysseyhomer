import React, { useState } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({
    email: "homer.simpson@wildcodeschool.fr",
    name: "Homer",
    lastname: "Simpson"
  });
  return (
    <List>
      <ListItem>
        <ListItemText primary="email" secondary={profile.email} />
        <ListItemText primary="name" secondary={profile.name} />
        <ListItemText primary="lastname" secondary={profile.lastname} />
      </ListItem>
      <Link to="/">Sign Out</Link>
    </List>
  );
};

export default Profile;
