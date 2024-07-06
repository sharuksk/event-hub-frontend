import React from "react";
import { Box, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
// import BookedEvents from "../pages/BookedEvents";
// import Settings from "../pages/Settings";
// import OpenDashboard from "../pages/OpenDashboard";

const MainContent = () => (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            position: "relative",
            top: -200,
        }}
    >
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
                {/* <Route path="/events" element={<BookedEvents />} /> */}
                {/* <Route path="/settings" element={<Settings />} /> */}
                {/* <Route path="/" element={<OpenDashboard />} /> */}
                {/* Add more routes as needed */}
            </Routes>
        </Box>
    </Box>
);

export default MainContent;
