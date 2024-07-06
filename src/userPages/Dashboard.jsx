// Dashboard.js
import React from "react";
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
/*import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} bgcolor={'whitesmoke'}>
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
          <Header />
          <MainContent/>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Dashboard;*/

import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../userComponents/Layout';

const Dashboard = () => (
  <Router>
    <Layout />
  </Router>
);

export default Dashboard;
