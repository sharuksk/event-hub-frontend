// src/userPages/PhotographySelection.js

import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Paper,
  Checkbox,
  FormControlLabel,
  Modal,
  Button,
  IconButton,
} from "@mui/material";
import dayjs from "dayjs";
import { mockData } from "./MockData"; // Import mock data
import CloseIcon from "@mui/icons-material/Close";

const PhotographyDetailsModal = ({
  open,
  handleClose,
  photography,
  handlePhotographySelect,
}) => {
  if (!photography) return null;

  return (
    <Modal open={open} onClose={handleClose} sx={{ ml: 38 }}>
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1550,
          height: 700,
          bgcolor: "whitesmoke",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          display: "flex", // Use flexbox for layout
          justifyContent: "center",
        }}
      >
        <Box p={2} sx={{ width: "30%", height: "100%" }}>
          <img
            src={photography.Detailedimages[0]}
            alt="Photography image 1"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "15px", // Rounded corners for the left side
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          p={2}
          sx={{
            width: "25%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={photography.Detailedimages[1]}
            alt="Photography image 2"
            style={{
              width: "100%",
              height: "50%",
              borderRadius: "15px", // Rounded corners for the top-right side
              objectFit: "cover",
              marginBottom: "16px",
            }}
          />
          <img
            src={photography.Detailedimages[2]}
            alt="Photography image 3"
            style={{
              width: "100%",
              height: "50%",
              borderRadius: "15px", // Rounded corners for the bottom-right side
              objectFit: "cover",
            }}
          />
        </Box>
        <Paper
          variant="elevation"
          sx={{
            width: "35%",
            height: "100%",
            padding: 2,
            borderRadius: "25px",
            boxShadow: 5,
          }}
        >
          <Box display={"flex"} justifyContent={"flex-end"}>
            <IconButton onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} height={"8%"}>
            <Typography variant="h5" component="h2" mb={2} fontWeight={"bold"}>
              {photography.name}
            </Typography>
            <Box
              sx={{ backgroundColor: "#EEEDEB", width: 125, borderRadius: 3 }}
            >
              <center>
                <Typography variant="h6" mt={1}>
                  Rent: {photography.rent}
                </Typography>
              </center>
            </Box>
          </Box>

          <Box height={"73%"}>
            <Typography
              variant="body1"
              mt={2}
              fontWeight={"bold"}
              color={"primary.main"}
            >
              Overview
            </Typography>
            <Typography variant="body2" mb={2} p={1} color={"#686D76"}>
              {photography.description}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: 25 }}
              onClick={() => {
                handlePhotographySelect(photography);
                handleClose();
              }}
            >
              Book Now
            </Button>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

const PhotographyCard = ({
  photography,
  selectedPhotographies,
  handlePhotographySelect,
  handleCardClick,
}) => {
  const isSelected = selectedPhotographies.some((p) => p.id === photography.id);

  return (
    <Paper sx={{ borderRadius: 3 }}>
      <div className="bg-background/85 text-foreground p-[20px] rounded-[11px] w-[300px] border">
        <div
          onClick={() => handleCardClick(photography)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={photography.displayImage}
            alt=""
            style={{
              width: "100%",
              height: 120,
              borderRadius: "8px",
              marginBottom: "8px",
              objectFit: "cover",
            }}
          />
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h6" gutterBottom>
              {photography.name}
            </Typography>
            <Typography variant="body2">{photography.location}</Typography>
            <Typography variant="body2">Price: {photography.rent}</Typography>
            <Typography variant="body2">
              Available on:{" "}
              {photography.availableDates
                .map((date) => dayjs(date).format("YYYY-MM-DD"))
                .join(", ")}
            </Typography>
          </Box>
        </div>

        <Box display="flex" justifyContent="flex-end" mt={1}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isSelected}
                onChange={(e) => {
                  e.stopPropagation();
                  handlePhotographySelect(photography);
                }}
                color="primary"
                sx={{ borderRadius: 100 }}
                style={{
                  borderRadius: "50%",
                  backgroundColor: "yellowgreen",
                  width: "24px",
                  height: "24px",
                }}
              />
            }
            labelPlacement="start"
          />
        </Box>
      </div>
    </Paper>
  );
};

const PhotographySelection = ({
  selectedDates,
  selectedSession,
  selectedLocation,
  selectedPhotographies,
  handlePhotographySelect,
}) => {
  const [selectedPhotography, setSelectedPhotography] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCardClick = (photography) => {
    setSelectedPhotography(photography);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const photographies = mockData.serviceData.filter(
    (service) => service.type === "photography"
  );

  const availablePhotographies = photographies.filter((photography) =>
    selectedDates.some((date) => photography.availableDates.includes(date))
  );

  return (
    <Box p={5}>
      <Typography variant="h5" align="center">
        Photography Selection Page
      </Typography>
      <Box p={4}>
        <Grid container spacing={2}>
          {availablePhotographies.map((photography) => (
            <Grid item xs={0} sm={0} md={0} key={photography.id}>
              <PhotographyCard
                photography={photography}
                selectedPhotographies={selectedPhotographies}
                handlePhotographySelect={handlePhotographySelect}
                handleCardClick={handleCardClick}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <PhotographyDetailsModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        photography={selectedPhotography}
        handlePhotographySelect={handlePhotographySelect}
      />
    </Box>
  );
};

export default PhotographySelection;
