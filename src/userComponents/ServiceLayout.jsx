import { Box } from "@mui/material";
import ServiceHeader from "./ServiceHeader";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ServiceMainContent from "./ServiceMainContent";
import ServiceSelector from "./ServiceSelector";

const ServiceLayout = ({ children }) => (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
        }}
        className="bg-secondary"
    >
        <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
                    <ServiceHeader />
                    <ServiceSelector/>
                    <ServiceMainContent />
                </Box>
        </Box>
        <Footer />
    </Box>
);

export default ServiceLayout;
