import {
  Box,
  Paper,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Search,
  FilterList,
  ViewList,
  LocationOn,
  Event,
  Settings,
  Help,
  Person,
} from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { CiCalendar, CiSettings } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { TfiHelpAlt } from "react-icons/tfi";
import { PiSignInBold } from "react-icons/pi";
import Image from "../assets/profile_image.avif";

const Sidebar = () => (
  <Box sx={{ width: 260, flexShrink: 0 }} zIndex={1} bgcolor={"white"}>
    <Paper
      sx={{
        width: 235,
        height: "100vh",
        position: "fixed",
        p: 2,
        backgroundColor: "white",
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 2, textAlign: "center", color: "black", fontWeight: "bold" }}
      >
        Qatar Event Hub
      </Typography>
      <center>
        <Avatar
          alt="User Name"
          src="/path-to-image.jpg"
          sx={{ width: 56, height: 56, mb: 1 }}
        />
        <Typography variant="subtitle1">User Name</Typography>
        <Typography variant="body2" color="textSecondary">
          user@example.com
        </Typography>
      </center>
      <List sx={{ mt: 5 }}>
        <ListItem button component={Link} to="/profile">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </ListItem>
        <ListItem button component={Link} to="/user/events">
          <ListItemIcon>
            <Event />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button component={Link} to="/user/settings">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button component={Link} to="/help">
          <ListItemIcon>
            <Help />
          </ListItemIcon>
          <ListItemText primary="Help and FAQs" />
        </ListItem>
      </List>
    </Paper>
  </Box>
);

export default Sidebar;
