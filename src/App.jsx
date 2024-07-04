import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientAppLayout from "./components/ClientAppLayout";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Dashboard from "./userPages/Dashboard";
import ClientPage from "./pages/ClientPage";
import ClientProfile from "./pages/ClientProfile";

const theme = createTheme({
  palette: {
    primary: {
      main: "#41B06E",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/user">
            <Route path="" element={<Dashboard />} />
          </Route>

          <Route path="/client/*" element={<ClientAppLayout />}>
            <Route path="" element={<ClientPage />} />
            <Route path="profile" element={<ClientProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
