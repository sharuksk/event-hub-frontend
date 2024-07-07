import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const BackgroundContent = () => (
  <Box
    zIndex={1}
    sx={{
      flexGrow: 1,
      p: 3,
      mt: "0",
      ml: "0",
      py: 12,
      backgroundColor: "#24c690",
    }}
  ></Box>
);

const Layout = ({ children }) => (
  <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" , backgroundColor:'whitesmoke'}}>
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Header />
        <BackgroundContent />
        <MainContent />
      </Box>
    </Box>
    <Footer />
  </Box>
);

export default Layout;
