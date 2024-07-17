// src/userPages/DecorationSelection.js

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

const DecorationDetailsModal = ({
    open,
    handleClose,
    decoration,
    handleDecorationSelect,
}) => {
    if (!decoration) return null;

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
                        src={`data:image/jpeg;base64,${decoration.images[0].data}`}
                        alt="Decoration image 1"
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
                        src={`data:image/jpeg;base64,${decoration.images[0].data}`}
                        alt="Decoration image 2"
                        style={{
                            width: "100%",
                            height: "50%",
                            borderRadius: "15px", // Rounded corners for the top-right side
                            objectFit: "cover",
                            marginBottom: "16px",
                        }}
                    />
                    <img
                        src={`data:image/jpeg;base64,${decoration.images[0].data}`}
                        alt="Decoration image 3"
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

                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        height={"8%"}
                    >
                        <Typography
                            variant="h5"
                            component="h2"
                            mb={2}
                            fontWeight={"bold"}
                        >
                            {decoration.name}
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
                                    Rent: {decoration.price}
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
                        <Typography
                            variant="body2"
                            mb={2}
                            p={1}
                            color={"#686D76"}
                        >
                            {decoration.description}
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ borderRadius: 25 }}
                            onClick={() => {
                                handleDecorationSelect(decoration);
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

const DecorationCard = ({
    decoration,
    selectedDecorations,
    handleDecorationSelect,
    handleCardClick,
}) => {
    const isSelected = selectedDecorations.some(
        (d) => d._id === decoration._id,
    );

    return (
        <Paper sx={{ borderRadius: 3 }}>
            <div className="bg-background/85 text-foreground p-[20px] rounded-[11px] w-[300px] border">
                <div
                    onClick={() => handleCardClick(decoration)}
                    style={{ cursor: "pointer" }}
                >
                    <img
                        // src={decoration.displayImage}
                        src={`data:image/jpeg;base64,${decoration.images[0].data}`}
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
                            {decoration.name}
                        </Typography>
                        <Typography variant="body2">
                            {decoration.location}
                        </Typography>
                        <Typography variant="body2">
                            Price: {decoration.price}
                        </Typography>
                        <Typography variant="body2">
                            Available on:{" "}
                            {decoration.dates
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
                                    handleDecorationSelect(decoration);
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

const DecorationSelection = ({
    selectedDates,
    selectedSession,
    selectedLocation,
    selectedDecorations,
    handleDecorationSelect,
}) => {
    const [selectedDecoration, setSelectedDecoration] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [items, setItems] = useState([]);
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const handleCardClick = (decoration) => {
        setSelectedDecoration(decoration);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const decorations = items.filter(
        (service) => service?.typeId?.type?.toLowerCase() === "decoration",
    );

    const availableDecorations = decorations.filter(
        (decoration) =>
            !selectedDates.some((date) => decoration.dates.includes(date)),
    );
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await axios.get(BASE_URL + "/items");
                setItems(data.data.items);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    return (
        <Box p={5}>
            <Typography variant="h5" align="center">
                Decoration Selection Page
            </Typography>
            <Box p={4}>
                <Grid container spacing={2}>
                    {availableDecorations.map((decoration) => (
                        <Grid item xs={0} sm={0} md={0} key={decoration.id}>
                            <DecorationCard
                                decoration={decoration}
                                selectedDecorations={selectedDecorations}
                                handleDecorationSelect={handleDecorationSelect}
                                handleCardClick={handleCardClick}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <DecorationDetailsModal
                open={isModalOpen}
                handleClose={handleCloseModal}
                decoration={selectedDecoration}
                handleDecorationSelect={handleDecorationSelect}
            />
        </Box>
    );
};

export default DecorationSelection;
