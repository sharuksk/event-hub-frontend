import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const ServiceMainContent = () => (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            position: "relative",
            top: 0,
        }}
    >
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Outlet />
        </Box>
    </Box>
);

export default ServiceMainContent;
