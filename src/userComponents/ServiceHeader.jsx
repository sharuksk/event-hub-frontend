import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";

const ServiceHeader = () => (
  <Box sx={{ p: 2, mb: 0, py: 2, position: "relative" }} className="bg-primary">
    <Typography variant="h5" sx={{ fontWeight: "Normal", color: "whitesmoke" }}>
      Qatar Event Hub
    </Typography>
  </Box>
);

export default ServiceHeader;
