import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      p: 1,
      textAlign: "center",
      mt: "auto",
      bgcolor: "ActiveBorder",
      position: "relative",
    }}
    zIndex={2}
  >
    <Typography variant="body2" color={"white"}>
      &copy; 2024 Qatar Event Hub. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
