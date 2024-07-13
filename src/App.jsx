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
import Layout from "./userComponents/Layout";
import { useEffect } from "react";
import ServiceLayout from "./userComponents/ServiceLayout";
import VenueSelection from "./userPages/VenueSelection";
import CateringSelection from "./userPages/CateringSelection";
import { PrivateRoute } from "./components/PrivateRoute";

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
                    <Route path="/auth">
                        <Route path="signin" element={<Signin />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>
                    <Route path="/user/" element={<Layout />}>
                        <Route path="" element={<OpenDashboard />} />
                        <Route path="events" element={<BookedEvents />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                    <Route path="/service/" element={<ServiceLayout />}>
                        <Route
                            path="venueSelection"
                            element={<VenueSelection />}
                        />
                        <Route
                            path="cateringSelection"
                            element={<CateringSelection />}
                        />
                    </Route>

                    <Route path="/client" element={<ClientAppLayout />}>
                        <Route path="/client" element={<ClientPage />} />
                        <Route
                            path="register"
                            element={<ClientRegisterPage />}
                        />
                        <Route element={<PrivateRoute />}>
                            <Route path="create" element={<ClientServices />} />
                            <Route path="events" element={<EventPage />} />
                            <Route
                                path="dashboard"
                                element={<ClientDashboardPage />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
