import {
  Box,
  Paper,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import {
  Search,
  FilterList,
  ViewList,
  LocationOn,
  Event,
  SettingsOutlined,
  HelpOutlineOutlined,
  Person,
  ExitToAppOutlined,
  CalendarTodayRounded,
  PersonOutlineRounded
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <Box sx={{ width: 300, flexShrink: 0 }} zIndex={1} bgcolor={"white"}>
    <Paper
      sx={{
        width: 300,
        height: "100vh",
        position: "fixed",
        p: 2,
        backgroundColor: "white",
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 2, textAlign: "center", color: "black", fontWeight: "bold" }}
      >
        Qatar Event Hub
      </Typography>
      <Box sx={{mt: 5, ml: 3,display: 'flex', alignItems: 'center' }}>
        <Avatar
          alt="User Name"
          src="/path-to-image.jpg"
          sx={{ width: 70, height: 70, mb: 1 }}
        />
        <Box sx={{ ml: 2 }}>
          <Typography variant="h6" fontSize={'12'} fontWeight={'bold'}>User Name</Typography>
          <Typography variant="body2" color="textSecondary">
            user@example.com
          </Typography>
        </Box>
      </Box>
      <List sx={{ mt: 5 , ml: 3}}>
        <ListItem button component={Link} to="/profile" sx={{mb:2}}>
          <ListItemIcon> 
            <PersonOutlineRounded />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </ListItem>
        <ListItem button component={Link} to="/user/events" sx={{mb:2}}>
          <ListItemIcon>
            <CalendarTodayRounded />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button component={Link} to="/user/settings" sx={{mb:2}}>
          <ListItemIcon>
            <SettingsOutlined />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button component={Link} to="/help" sx={{mb:2}}>
          <ListItemIcon>
            <HelpOutlineOutlined />
          </ListItemIcon>
          <ListItemText primary="Help and FAQs" />
        </ListItem>
      </List>
      <center>
      <Box sx={{ p: 2, mt:40}}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ExitToAppOutlined />}
        sx={{ width: '55%', color: 'white',borderRadius:2, textTransform: 'none'}}
      >
        Sign Out
      </Button>
    </Box>
      </center>
    </Paper>  
  </Box>
);

export default Sidebar;
