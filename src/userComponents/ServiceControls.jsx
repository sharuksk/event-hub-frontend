import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    InputAdornment,
    IconButton,
    Menu,
    MenuItem,
    Paper,
    Popper,
} from "@mui/material";
import { StaticDatePicker, PickersDay } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {
    Search as SearchIcon,
    ArrowDropDown as ArrowDropDownIcon,
    CalendarToday as CalendarTodayIcon,
} from "@mui/icons-material";

const ServiceControls = ({
    onDatesChange,
    onSessionChange,
    onLocationChange,
}) => {
    const [selectedDates, setSelectedDates] = useState([]);
    const [selectedSession, setSelectedSession] = useState("Day");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [calendarAnchorEl, setCalendarAnchorEl] = useState(null);
    const [openCalendar, setOpenCalendar] = useState(false);

    const handleDateChange = (date) => {
        const formattedDate = dayjs(date).format("YYYY-MM-DD");
        if (selectedDates.includes(formattedDate)) {
            setSelectedDates(selectedDates.filter((d) => d !== formattedDate));
        } else {
            setSelectedDates([...selectedDates, formattedDate]);
        }
    };

    const handleSave = () => {
        onDatesChange(selectedDates);
        setOpenCalendar(false);
    };

    const handleSessionChange = (session) => {
        setSelectedSession(session);
        onSessionChange(session);
    };

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
        onLocationChange(event.target.value);
    };

    const sessions = ["Day", "Noon", "Evening", "Night"];
    const [anchorEl, setAnchorEl] = useState(null);

    // Handle menu open
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Handle menu close
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const isDateDisabled = (date) => {
        return dayjs(date).isBefore(dayjs().startOf("day"));
    };

    return (
        <Box
            p={2}
            mb={2}
            borderRadius={16}
            display={"flex"}
            justifyContent={"space-around"}
        >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Button
                    onClick={(e) => {
                        setOpenCalendar(true);
                        setCalendarAnchorEl(e.currentTarget);
                    }}
                    endIcon={<CalendarTodayIcon />}
                    style={{
                        borderRadius: 50,
                        height: 35,
                        width: 250,
                        backgroundColor: "white",
                        marginTop: "9px",
                        textTransform: "none",
                    }}
                >
                    {"Date"}
                </Button>
                <Popper
                    open={openCalendar}
                    anchorEl={calendarAnchorEl}
                    placement="bottom-start"
                >
                    <Paper>
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            value={
                                selectedDates.length > 0
                                    ? selectedDates.map(
                                          (date) => new Date(date)
                                      )
                                    : null
                            }
                            onChange={handleDateChange}
                            renderDay={(day, _value, DayComponentProps) => {
                                const formattedDate =
                                    dayjs(day).format("YYYY-MM-DD");
                                const isSelected =
                                    selectedDates.includes(formattedDate);
                                const isDisabled = isDateDisabled(day);
                                return (
                                    <PickersDay
                                        {...DayComponentProps}
                                        day={day}
                                        selected={isSelected}
                                        disabled={isDisabled}
                                        onDaySelect={handleDateChange}
                                        className={
                                            isSelected
                                                ? "bg-primary text-white"
                                                : ""
                                        }
                                    />
                                );
                            }}
                            shouldDisableDate={isDateDisabled}
                        />
                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                            sx={{ py: 2 }}
                        >
                            <button
                                onClick={handleSave}
                                className="bg-primary text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#5c0322]"
                            >
                                Save
                            </button>
                        </Box>
                    </Paper>
                </Popper>
            </LocalizationProvider>

            <Button
                variant="text"
                onClick={handleMenuOpen}
                style={{
                    width: 250,
                    marginRight: 16,
                    borderRadius: 50,
                    height: 35,
                    marginTop: "9px",
                    backgroundColor: "white",
                }}
                endIcon={<ArrowDropDownIcon />}
            >
                {selectedSession}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {sessions.map((session) => (
                    <MenuItem
                        key={session}
                        onClick={() => handleSessionChange(session)}
                    >
                        {session}
                    </MenuItem>
                ))}
            </Menu>

            <TextField
                label="Location"
                value={selectedLocation}
                onChange={handleLocationChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                    style: {
                        borderRadius: 50,
                        height: 35,
                        marginTop: "9px",
                        backgroundColor: "white",
                    },
                }}
            />
        </Box>
    );
};

export default ServiceControls;
