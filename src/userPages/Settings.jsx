import React from "react";
// import { useSelector } from "react-redux";

import {
    Box,
    Typography,
    Avatar,
    List,
    ListItem,
    ListItemText,
    Divider,
    Switch,
    Grid,
} from "@mui/material";

const Settings = () => {
    const user = useSelector((state) => {
        return state.user.user;
    });
    console.log(user);
    function toggleTheme() {
        const theme = document.body.classList[0];
        if (theme == "light") {
            document.body.classList = "dark";
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList = "light";
            localStorage.setItem("theme", "light");
        }
    }

    return (
        <Box sx={{ p: 3 }}>
            <Typography
                variant="h4"
                sx={{ mb: 5, fontWeight: "bold", py: 8, color: "whitesmoke" }}
            >
                Settings
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Avatar
                    alt="User Name"
                    src="/path-to-image.jpg"
                    sx={{ width: 56, height: 56, mr: 2 }}
                />
                <Box>
                    <Typography variant="h6" className="text-foreground">
                        User Name
                    </Typography>
                    <Typography
                        variant="body2"
                        className="text-muted-foreground"
                    >
                        user@example.com
                    </Typography>
                </Box>
            </Box>
            <Divider sx={{ my: 2, backgroundColor: "black" }} />
            <Typography
                variant="body2"
                sx={{ fontWeight: "bold", mb: 1 }}
                className="text-foreground"
            >
                Account Settings
            </Typography>
            <List>
                <ListItem>
                    <ListItemText
                        secondaryTypographyProps={{
                            fontWeight: "bold",
                            color: "#8b8c89",
                            mb: 1,
                        }}
                        secondary="Edit Profile"
                        className="text-foreground"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        secondaryTypographyProps={{
                            fontWeight: "bold",
                            color: "#8b8c89",
                            mb: 1,
                        }}
                        secondary="Edit Password"
                        className="text-foreground"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        secondaryTypographyProps={{
                            fontWeight: "bold",
                            color: "#8b8c89",
                        }}
                        secondary="Privacy"
                        className="text-foreground"
                    />
                </ListItem>
            </List>
            <Divider sx={{ my: 2, backgroundColor: "black" }} />
            <Typography
                variant="body2"
                sx={{ fontWeight: "bold", mb: 1 }}
                className="text-foreground"
            >
                More
            </Typography>
            <List>
                <ListItem>
                    <ListItemText
                        secondaryTypographyProps={{
                            fontWeight: "bold",
                            color: "#8b8c89",
                            mb: 1,
                        }}
                        secondary="Language"
                        className="text-foreground"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        secondaryTypographyProps={{
                            fontWeight: "bold",
                            color: "#8b8c89",
                            mb: 1,
                        }}
                        secondary="Region"
                        className="text-foreground"
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                        secondaryTypographyProps={{
                            fontWeight: "bold",
                            color: "#8b8c89",
                            mb: 1,
                        }}
                        secondary="Dark Mode"
                        className="text-foreground"
                    />
                    <Switch onChange={toggleTheme} />
                </ListItem>
            </List>
        </Box>
    );
};

export default Settings;
