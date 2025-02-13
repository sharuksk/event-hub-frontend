import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientAppLayout from "./components/ClientAppLayout";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Dashboard from "./userPages/Dashboard";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import ClientPage from "./pages/ClientPage";
import ClientRegisterPage from "./pages/ClientRegisterPage";
import EventPage from "./pages/EventPage";
import ClientDashboardPage from "./pages/ClientDashboardPage";
import ClientServices from "./pages/ClientServices";
import BookedEvents from "./userPages/BookedEvents";
import Settings from "./userPages/Settings";
import CateringSelection from "./userPages/CateringSelection";
import OpenDashboard from "./userPages/OpenDashboard";
import ServiceLayout from "./userComponents/ServiceLayout";
import VenueSelection from "./userPages/VenueSelection";
import { useEffect } from "react";
import EventDetails from "./userPages/EventDetails";
import UserProfile from "./userPages/UserProfile";
import { PrivateRoute } from "./components/PrivateRoute";
import { UserPrivateRoute } from "./userComponents/UserPrivateRoute";
import Layout from "./commonLayout/Layout";
import UserRegisterPage from "./userPages/UserRegisterPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8A1538",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme == "dark") {
      document.body.classList = "dark";
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />

          <Route path="signup" element={<Signup />} />
          <Route element={<UserPrivateRoute />}>
            <Route path="/user/" element={<Layout />}>
              <Route path="dashboard" element={<OpenDashboard />} />
              <Route path="register" element={<UserRegisterPage />} />
              <Route path="events" element={<BookedEvents />} />
              <Route path="settings" element={<Settings />} />
              <Route
                path="event-details/:bookedId"
                element={<EventDetails />}
              />
              <Route path="profile" element={<UserProfile />} />
            </Route>
          </Route>
          <Route path="/service/" element={<ServiceLayout />}>
            <Route element={<UserPrivateRoute />}>
              <Route path="venueSelection" element={<VenueSelection />} />
              <Route path="cateringSelection" element={<CateringSelection />} />
            </Route>
          </Route>

          <Route path="/client" element={<Layout />}>
            <Route path="" element={<ClientPage />} />
            <Route path="register" element={<ClientRegisterPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="create" element={<ClientServices />} />
              <Route path="events" element={<EventPage />} />
              <Route path="dashboard" element={<ClientDashboardPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
