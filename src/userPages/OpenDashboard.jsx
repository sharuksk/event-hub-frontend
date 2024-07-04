import {
  Box,
  Grid,
  Paper,
  Typography,
  Avatar,
  IconButton,
  TextField,
  Button,
  InputAdornment,
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

const OpenDashboard = () => (
  <Box>
    <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
      Popular Events by Qatar Hub
    </Typography>
    <Box sx={{ display: "flex", overflowX: "scroll", mb: 3, mt: -1 }}>
      <EventCard
        eventImage="/images/download.jpg"
        eventTitle="Event 1"
        date="2024-07-05"
        place="Doha, Qatar"
      />
      <EventCard
        eventImage="/images/corporate-events-3.jpg"
        eventTitle="Event 2"
        date="2024-07-12"
        place="Doha, Qatar"
      />
      {/* Add more EventCards as needed */}
    </Box>
    <Typography variant="h6" gutterBottom>
      Choose by Category
    </Typography>
    <Grid container spacing={3}>
      {/* Add category cards or buttons here */}
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography>Category 1</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography>Category 2</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography>Category 3</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography>Category 4</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

const EventCard = ({ eventImage, eventTitle, date, place }) => (
  <Paper
    sx={{ p: 2, mr: 2, minWidth: 240, borderRadius: 3, ml: 3, mb: 3, mt: 3 }}
  >
    <img
      src={eventImage}
      alt={eventTitle}
      style={{
        width: 240,
        height: 150,
        borderRadius: "8px",
        marginBottom: "8px",
      }}
    />
    <Typography variant="subtitle1" textAlign={"center"}>
      {eventTitle}
    </Typography>
    <Typography variant="body2" textAlign={"center"}>
      {date}
    </Typography>
    <Typography variant="body2" textAlign={"center"}>
      {place}
    </Typography>
    <center>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 1, color: "white" }}
      >
        Join
      </Button>
    </center>
  </Paper>
);

export default OpenDashboard;
