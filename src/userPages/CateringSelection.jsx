// src/userPages/CateringSelection.js

import React, { useState, useEffect } from "react";
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
import axios from "axios";

const CateringDetailsModal = ({
  open,
  handleClose,
  catering,
  handleCateringSelect,
}) => {
  if (!catering) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 20,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1400,
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
            src={`data:image/jpeg;base64,${catering.images[0].data}`}
            alt="Catering image 1"
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
            src={`data:image/jpeg;base64,${catering.images[0].data}`}
            alt="Catering image 2"
            style={{
              width: "100%",
              height: "50%",
              borderRadius: "15px", // Rounded corners for the top-right side
              objectFit: "cover",
              marginBottom: "16px",
            }}
          />
          <img
            src={`data:image/jpeg;base64,${catering.images[0].data}`}
            alt="Catering image 3"
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
              {catering.name}
            </Typography>
            <Box
              sx={{
                backgroundColor: "#EEEDEB",
                width: 125,
                borderRadius: 3,
              }}
            >
              <center>
                <Typography variant="h6" mt={1}>
                  Rent: {catering.price}
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
              {catering.description}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: 25 }}
              onClick={() => {
                handleCateringSelect(catering);
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

const CateringCard = ({
  catering,
  selectedCaterings,
  handleCateringSelect,
  handleCardClick,
}) => {
  const isSelected = selectedCaterings.some((c) => c._id === catering._id);

  return (
    <Paper sx={{ borderRadius: 3 }}>
      <div className="bg-background/85 text-foreground p-[20px] rounded-[11px] w-[300px] border">
        <div
          onClick={() => handleCardClick(catering)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={`data:image/jpeg;base64,${catering.images[0].data}`}
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
              {catering.name}
            </Typography>
            <Typography variant="body2">{catering.location}</Typography>
            <Typography variant="body2">Price: {catering.price}</Typography>
            <Typography variant="body2">
              Available on:{" "}
              {catering.dates
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
                  handleCateringSelect(catering);
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

const CateringSelection = ({
  selectedDates,
  selectedSession,
  selectedLocation,
  selectedCaterings,
  handleCateringSelect,
}) => {
  const [selectedCatering, setSelectedCatering] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  console.log(BASE_URL);

  const handleCardClick = (catering) => {
    setSelectedCatering(catering);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const caterings = items.filter(
    (service) => service.typeId.type.toLowerCase() === "catring"
  );

  const availableCaterings = caterings.filter(
    (catering) => !selectedDates.some((date) => catering.dates.includes(date))
  );

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(BASE_URL + "/items");
      console.log(data.data);
      setItems(data.data.items);
    };
    getData();
  }, []);

  return (
    <Box p={5}>
      <Typography variant="h5" align="center">
        Catering Selection Page
      </Typography>
      <Box p={4}>
        <Grid container spacing={2}>
          {availableCaterings.map((catering) => (
            <Grid item xs={0} sm={0} md={0} key={catering.id}>
              <CateringCard
                catering={catering}
                selectedCaterings={selectedCaterings}
                handleCateringSelect={handleCateringSelect}
                handleCardClick={handleCardClick}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <CateringDetailsModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        catering={selectedCatering}
        handleCateringSelect={handleCateringSelect}
      />
    </Box>
  );
};

export default CateringSelection;
