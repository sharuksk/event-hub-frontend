import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientAppLayout from "./components/ClientAppLayout";
import ClientDashboard from "./components/ClientDashboard";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Dashboard from "./userPages/Dashboard";

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

          <Route path="/client" element={<ClientAppLayout />}>
            <Route path="dash" element={<ClientDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
