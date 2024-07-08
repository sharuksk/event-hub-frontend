import React, { useState } from "react";
import { Box, Typography, Button, Grid, Paper, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const StyledTabs = styled(Tabs)({
    backgroundColor: "#8A1538",
    borderRadius: 30, // Rounded corners
});

const StyledTab = styled((props) => <Tab {...props} />)(
    ({ theme, selected }) => ({
        textTransform: "none",
        minWidth: 120,
        fontWeight: "normal",
        marginRight: 0,
        backgroundColor: selected ? "white" : "transparent",
        color: selected ? "blue" : "white",
        "&:hover": {
            backgroundColor: selected ? "white" : "rgba(0, 128, 0, 0.1)", // Light green on hover if not selected
        },
        "&.Mui-selected": {
            backgroundColor: "white",
            color: "blue",
        },
        "&.Mui-focusVisible": {
            backgroundColor: "rgba(100, 95, 228, 0.32)",
        },
    })
);

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
            eventImage: "/images/download.jpg",
            eventTitle: "Event 1",
            date: "2024-07-05",
            place: "Doha, Qatar",
        },
        {
            eventImage: "/images/download.jpg",
            eventTitle: "Event 1",
            date: "2024-07-05",
            place: "Doha, Qatar",
        },
        {
            eventImage: "/images/download.jpg",
            eventTitle: "Event 1",
            date: "2024-07-05",
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
        <Box
            sx={{
                p: 0,
                display: "flex",
                flexDirection: "column",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    mt: 9,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 10,
                }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    color="whitesmoke"
                    sx={{ mt: 0 }}
                >
                    Booked Events
                </Typography>
                <StyledTabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    sx={{ ml: 2 }}
                    className="shadow-2xl"
                >
                    <StyledTab
                        label="Upcoming Events"
                        selected={selectedTab === 0}
                    />
                    <StyledTab
                        label="Past Events"
                        selected={selectedTab === 1}
                    />
                </StyledTabs>
            </Box>

            <Grid
                container
                spacing={2}
                sx={{ py: 3, mt: 6, justifyContent: "center" }}
            >
                {eventsToDisplay.length > 0 ? (
                    eventsToDisplay.map((event, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            key={index}
                            sx={{
                                py: 3,
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <EventCard {...event} />
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12}>
                        <center>
                            <img
                                src={"/images/event.png"}
                                style={{
                                    width: 200,
                                    height: 200,
                                    borderRadius: "75px",
                                }}
                            />
                        </center>
                        <Typography
                            variant="h5"
                            fontWeight={"bold"}
                            textAlign={"center"}
                            className="text-foreground"
                        >
                            No booked events
                        </Typography>
                    </Grid>
                )}
            </Grid>

            <Box sx={{ mt: 3, textAlign: "center" }}>
                <Button
                    component={Link}
                    to="/user"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, mb: 10, color: "white" }}
                >
                    Add Events
                </Button>
            </Box>
        </Box>
    );
};

const EventCard = ({ eventImage, eventTitle, date, place }) => (
    <Paper
        sx={{
            // p: 2,
            borderRadius: 3,
            // cursor: "pointer",
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "space-between",
            // width: 300, // Fixed width for the event cards
        }}

        // onClick={handleCardClick}
    >
        <div className="bg-background/85 text-foreground p-[20px] rounded-[11px] w-[300px] border">
            <img
                src={eventImage}
                alt={eventTitle}
                style={{
                    width: "100%",
                    height: 120,
                    borderRadius: "8px",
                    marginBottom: "8px",
                    objectFit: "cover",
                }}
            />
            <Box sx={{ textAlign: "left" }}>
                <Typography variant="subtitle1">{eventTitle}</Typography>
                <Typography variant="body2">{date}</Typography>
                <Typography variant="body2">{place}</Typography>
            </Box>
        </div>
    </Paper>
);

export default BookedEvents;
