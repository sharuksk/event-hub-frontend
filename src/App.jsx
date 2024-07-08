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
import BookedEvents from "./userPages/BookedEvents";
import Settings from "./userPages/Settings";
import OpenDashboard from "./userPages/OpenDashboard";
import Layout from "./userComponents/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
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
  const [clientDetail, setClientDetail] = useState(null);
  const [clientLogin, setClientLogin] = useState(false);
  const [clientUpdate, setClientUpdate] = useState(false);

  const fetchClientDetails = async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/v1/client/");
      setClientDetail(res.data.data.client[res.data.data.client.length - 1]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (clientLogin || clientUpdate) {
      fetchClientDetails();
    }
  }, [clientLogin, clientUpdate]);

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

          <Route
            path="/client/*"
            element={<ClientAppLayout clientDetail={clientDetail} />}
          >
            <Route path="*" element={<ClientPage />} />
            <Route
              path="register"
              element={
                <ClientRegisterPage
                  setClientLogin={setClientLogin}
                  setClientUpdate={setClientUpdate}
                  clientDetail={clientDetail}
                />
              }
            />
            <Route path="events" element={<EventPage />} />
            <Route
              path="dashboard"
              element={<ClientDashboardPage clientDetail={clientDetail} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
