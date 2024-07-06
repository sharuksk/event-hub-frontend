import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { Outlet } from "react-router-dom";
const BackgroundContent = () => (
  <Box
    zIndex={1}
    sx={{
      flexGrow: 1,
      p: 3,
      mt: "0",
      ml: "0",
      py: 12,
      backgroundColor: "#41B06E",
    }}
  ></Box>
);

const Layout = ({ children }) => (
  <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Header />
        <BackgroundContent />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh',position: 'relative', top: -200 }}>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
    <Footer />
  </Box>
);

export default Layout;
