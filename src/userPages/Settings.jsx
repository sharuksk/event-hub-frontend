import React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Switch,
  Grid,
} from "@mui/material";

const Settings = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: "whitesmoke" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Avatar
          alt="User Name"
          src="/path-to-image.jpg"
          sx={{ width: 56, height: 56, mr: 2 }}
        />
        <Box>
          <Typography variant="h6">User Name</Typography>
          <Typography variant="body2">user@example.com</Typography>
        </Box>
      </Box>
      <List>
        <ListItem>
          <ListItemText primary="Edit Profile" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Edit Password" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Privacy" />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <List>
        <ListItem>
          <ListItemText primary="Language" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Region" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dark Mode" />
          <Switch />
        </ListItem>
      </List>
    </Box>
  );
};

export default Settings;
