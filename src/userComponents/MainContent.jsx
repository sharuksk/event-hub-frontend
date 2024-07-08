import React from "react";
import { Box, Typography } from "@mui/material";
import { Routes, Route, Outlet } from "react-router-dom";
import BookedEvents from "../userPages/BookedEvents";
import Settings from "../userPages/Settings";
import OpenDashboard from "../userPages/OpenDashboard";

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
            <Outlet />
        </Box>
    </Box>
);

export default MainContent;
