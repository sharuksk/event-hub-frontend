import React, { useState } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import image1 from "../assets/user/download.jpg";
import image2 from "../assets/user/corporate-events-3.jpg";

const categories = ["Design", "Art", "Sports", "Music", "Business"];

const eventsData = {
  Design: [
    {
      eventImage: image1,
      eventTitle: "Design Event 1",
      date: "2024-07-05",
      place: "Doha, Qatar",
      description: "A great design event.",
    },
    {
      eventImage: image2,
      eventTitle: "Design Event 2",
      date: "2024-07-12",
      place: "Doha, Qatar",
      description: "Another great design event.",
    },
  ],
  Art: [
    {
      eventImage: image1,
      eventTitle: "Art Event 1",
      date: "2024-07-05",
      place: "Doha, Qatar",
      description: "A fantastic art event.",
    },
    {
      eventImage: image2,
      eventTitle: "Art Event 2",
      date: "2024-07-12",
      place: "Doha, Qatar",
      description: "Another fantastic art event.",
    },
  ],
  // Add more events for other categories
};

const EventsContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        mb: 3,
        mt: -1,
        whiteSpace: "nowrap",
        "&::-webkit-scrollbar": {
          display: "none", // Hide scrollbar for cleaner look (optional)
        },
        scrollbarWidth: "none", // Firefox scrollbar hide (optional)
        "-ms-overflow-style": "none", // IE scrollbar hide (optional)
        "&:hover": {
          overflowX: "scroll",
          transition: "transform 0.3s ease", // Smooth scroll effect on hover
        },
      }}
    >
      <EventCard
        eventImage={image1}
        eventTitle="Event 1"
        date="2024-07-05"
        place="Doha, Qatar"
      />
      <EventCard
        eventImage={image2}
        eventTitle="Event 2"
        date="2024-07-12"
        place="Doha, Qatar"
      />
      <EventCard
        eventImage={image2}
        eventTitle="Event 3"
        date="2024-07-12"
        place="Doha, Qatar"
      />
      <EventCard
        eventImage={image2}
        eventTitle="Event 3"
        date="2024-07-12"
        place="Doha, Qatar"
      />
      {/* Add more EventCard components as needed */}
    </Box>
  );
};
const OpenDashboard = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((cat) => cat !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const isSelected = (category) => selectedCategories.includes(category);

  const getRandomEvents = () => {
    const allEvents = Object.values(eventsData).flat();
    return allEvents.sort(() => 0.5 - Math.random()).slice(0, 3); // Get 3 random events
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
        Popular Events by Qatar Hub
      </Typography>
      <EventsContainer />
      <Typography variant="h6" gutterBottom>
        Choose by Category
      </Typography>
      <Box sx={{ display: "flex", overflowX: "auto", mb: 3 }}>
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{ p: 2, cursor: "pointer" }}
            onClick={() => handleCategoryClick(category)}
          >
            <Paper
              variant="outlined"
              sx={{
                p: 1,
                borderRadius: 5,
                borderColor: "lightskyblue",
                backgroundColor: isSelected(category) ? "lightblue" : "inherit",
              }}
            >
              <Typography>{category}</Typography>
            </Paper>
          </Box>
        ))}
      </Box>
      {selectedCategories.length > 0 ? (
        <Box>
          <Typography variant="h6" gutterBottom>
            Selected Events
          </Typography>
          {selectedCategories.map((category) => (
            <Box key={category} sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                {category} Events
              </Typography>
              <Box>
                {eventsData[category]?.map((event, index) => (
                  <CategoryEventCard
                    key={index}
                    eventImage={event.eventImage}
                    eventTitle={event.eventTitle}
                    date={event.date}
                    place={event.place}
                    description={event.description}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Box>
          <Typography variant="h6" gutterBottom>
            Random Events
          </Typography>
          <Box>
            {getRandomEvents().map((event, index) => (
              <CategoryEventCard
                key={index}
                eventImage={event.eventImage}
                eventTitle={event.eventTitle}
                date={event.date}
                place={event.place}
                description={event.description}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

const EventCard = ({ eventImage, eventTitle, date, place }) => (
  <Paper
    sx={{
      p: 2,
      mr: 2,
      minWidth: 240,
      borderRadius: 3,
      ml: 3,
      mb: 3,
      mt: 3,
      display: "inline-block",
      whiteSpace: "normal",
    }}
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

const CategoryEventCard = ({
  eventImage,
  eventTitle,
  date,
  place,
  description,
}) => (
  <Paper
    sx={{
      p: 2,
      mb: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: 3,
    }}
  >
    <img
      src={eventImage}
      alt={eventTitle}
      style={{ width: 100, height: 100, borderRadius: "8px" }}
    />
    <Box sx={{ flex: 1, ml: 2 }}>
      <Typography variant="subtitle1">{eventTitle}</Typography>
      <Typography variant="body2">{date}</Typography>
      <Typography variant="body2">{place}</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {description}
      </Typography>
    </Box>
    <Button variant="text" sx={{ ml: 2, color: '#24c690' , backgroundColor: 'white', fontWeight:'bold'}}>
      Book Now
    </Button>
  </Paper>
);

export default OpenDashboard;
