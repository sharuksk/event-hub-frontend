import React from "react";
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
        <Box
            sx={{ p: 3 }}
            className="bg-accent   dark:border-gray-600 shadow-2xl"
        >
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
            <List>
                <ListItem>
                    <ListItemText
                        primary="Edit Profile"
                        className="text-foreground"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Edit Password"
                        className="text-foreground"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Privacy"
                        className="text-foreground"
                    />
                </ListItem>
            </List>
            <Divider sx={{ my: 2 }} />
            <List>
                <ListItem>
                    <ListItemText
                        primary="Language"
                        className="text-foreground"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Region"
                        className="text-foreground"
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                        primary="Dark Mode"
                        className="text-foreground"
                    />
                    <Switch onChange={toggleTheme} />
                </ListItem>
            </List>
        </Box>
    );
};

export default Settings;
