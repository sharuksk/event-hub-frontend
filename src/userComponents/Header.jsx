import {
    Box,
    Grid,
    Paper,
    Typography,
    Avatar,
    IconButton,
    TextField,
    Button,
    InputAdornment,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {
    Search,
    FilterList,
    ViewList,
    LocationOn,
    Event,
    Settings,
    Help,
    Person,
} from "@mui/icons-material";

const Header = () => (
    <Box sx={{ mb: 0, py: 5, position: "relative" }} className="bg-primary">
        <Box
            sx={{
                position: "absolute",
                top: 0,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
            }}
        >
            <TextField
                placeholder="Search to find amazing events"
                variant="outlined"
                size="small"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    width: "40%",
                    backgroundColor: "white",
                    borderRadius: 3,
                    ml: 1,
                }}
            />
            <Box>
                <Button
                    variant="outlined"
                    startIcon={<FilterList />}
                    sx={{ mr: 1, backgroundColor: "white" }}
                >
                    Filter
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<ViewList />}
                    sx={{ mr: 1, backgroundColor: "white" }}
                >
                    View All
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<LocationOn />}
                    sx={{ mr: 1, backgroundColor: "white" }}
                >
                    Location
                </Button>
            </Box>
        </Box>
    </Box>
);

export default Header;
