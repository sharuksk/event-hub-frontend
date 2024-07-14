// src/userPages/UserProfile.jsx
import React, { useState, useCallback } from 'react';
import {
  Container, Typography, Box, TextField, Button, Paper, IconButton, Avatar, Modal,
} from '@mui/material';
import { styled } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkIcon from '@mui/icons-material/Work';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { mockUser } from './MockUserData';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from './cropImageUtils'; // You need to implement this utility function

const ContainerStyled = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  width: '100%',
  maxWidth: '600px',
}));

const FormFieldStyled = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
}));

const IconStyled = styled('span')(({ theme }) => ({
  marginRight: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

const EditIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  backgroundColor: theme.palette.background.paper,
}));

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(mockUser);
  const [profilePic, setProfilePic] = useState(mockUser.profilePic || '');

  const [isCropModalOpen, setIsCropModalOpen] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        setSelectedImage(upload.target.result);
        setIsCropModalOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSaveCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(selectedImage, croppedAreaPixels);
      setProfilePic(croppedImage);
      setIsCropModalOpen(false);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, selectedImage]);

  const handleSaveClick = () => {
    setIsEditing(false);
    Object.assign(mockUser, userData, { profilePic });
    // Here you can send userData and profilePic to the server to save the changes
  };

  return (
    <ContainerStyled>
      <Typography variant="h4" gutterBottom color={'whitesmoke'}>
        User Profile
      </Typography>
      <PaperStyled elevation={3}>
        <AvatarContainer>
          <Avatar
            src={profilePic}
            alt="Profile Picture"
            sx={{ width: 100, height: 100 }}
          />
          {isEditing && (
            <EditIconButton color="primary" component="label">
              <PhotoCamera />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleProfilePicChange}
              />
            </EditIconButton>
          )}
        </AvatarContainer>
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center" mb={2}>
            <IconStyled>
              <PersonIcon />
            </IconStyled>
            <FormFieldStyled
              label="Full Name"
              name="fullName"
              value={userData.fullName}
              variant="outlined"
              fullWidth
              onChange={handleInputChange}
              InputProps={{
                readOnly: !isEditing,
              }}
            />
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <IconStyled>
              <EmailIcon />
            </IconStyled>
            <FormFieldStyled
              label="Email"
              name="email"
              value={userData.email}
              variant="outlined"
              fullWidth
              onChange={handleInputChange}
              InputProps={{
                readOnly: !isEditing,
              }}
            />
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <IconStyled>
              <WorkIcon />
            </IconStyled>
            <FormFieldStyled
              label="Role"
              name="role"
              value={userData.role}
              variant="outlined"
              fullWidth
              onChange={handleInputChange}
              InputProps={{
                readOnly: !isEditing,
              }}
            />
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <IconStyled>
              <PhoneIcon />
            </IconStyled>
            <FormFieldStyled
              label="Phone Number"
              name="phoneNumber"
              value={userData.phoneNumber || ''}
              variant="outlined"
              fullWidth
              onChange={handleInputChange}
              InputProps={{
                readOnly: !isEditing,
              }}
            />
          </Box>
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
          {isEditing ? (
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              onClick={handleSaveClick}
            >
              Save
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
              onClick={handleEditClick}
            >
              Edit Profile
            </Button>
          )}
        </Box>
      </PaperStyled>

      <Modal open={isCropModalOpen} onClose={() => setIsCropModalOpen(false)}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          bgcolor="background.paper"
        >
          <Box position="relative" width="100%" height="400px">
            <Cropper
              image={selectedImage}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </Box>
          <Box mt={2}>
            <Button variant="contained" color="primary" onClick={handleSaveCroppedImage}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </ContainerStyled>
  );
};

export default UserProfile;
