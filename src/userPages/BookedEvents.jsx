import React, { useState } from "react";
import { Box, Typography, Button, Grid, Tabs, Tab, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const BookedEvents = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const bookedEvents = [
    // Add your booked events data here
    {
      eventImage: "/images/download.jpg",
      eventTitle: "Event 1",
      date: "2024-07-05",
      place: "Doha, Qatar",
    },
    {
      eventImage: "/images/corporate-events-3.jpg",
      eventTitle: "Event 2",
      date: "2024-07-12",
      place: "Doha, Qatar",
    },
  ];

  const upcomingEvents = bookedEvents.filter(
    (event) => new Date(event.date) >= new Date()
  );
  const pastEvents = bookedEvents.filter(
    (event) => new Date(event.date) < new Date()
  );

  const eventsToDisplay = selectedTab === 0 ? upcomingEvents : pastEvents;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Booked Events
      </Typography>
      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        <Tab label="Upcoming Events" />
        <Tab label="Past Events" />
      </Tabs>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {eventsToDisplay.length > 0 ? (
          eventsToDisplay.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <EventCard {...event} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Paper sx={{ p: 2, textAlign: "center" }}>
              <Typography>No booked events</Typography>
            </Paper>
          </Grid>
        )}
      </Grid>
      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Button
          component={Link}
          to="/user"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Add Event
        </Button>
      </Box>
    </Box>
  );
};

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
export default BookedEvents;
