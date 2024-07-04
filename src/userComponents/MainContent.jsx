import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import BookedEvents from "../userPages/BookedEvents";
import Settings from "../userPages/Settings";
import OpenDashboard from "../userPages/OpenDashboard";

const MainContent = () => (
  <Box
    zIndex={2}
    component="main"
    sx={{ top: 80, position: "absolute", flexGrow: 1, p: 3, mt: "0", ml: "0" }}
  >
    <Routes>
      <Route path="/events" element={<BookedEvents />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/" element={<OpenDashboard />} />
      {/* Add more routes as needed */}
    </Routes>
  </Box>
);

export default MainContent;
