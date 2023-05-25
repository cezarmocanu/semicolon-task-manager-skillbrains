import React, { useState, useRef } from "react";
import { Box, Button } from "@mui/material";
import { CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import placeholder from "../assets/images/placeholder.jpg";

const AvatarComponent = (props) => {
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const fileInput = useRef(null);

  const handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const newFile = e.target.files[0];
    reader.onloadend = () => {
      setFile(newFile);
      setImagePreviewUrl(reader.result);
      if (props.onChange) {
        props.onChange(newFile);
      }
    };
    if (newFile) {
      reader.readAsDataURL(newFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleRemove = () => {
    setFile(null);
    setImagePreviewUrl(null);
    fileInput.current.value = null;
  };

  const { addButtonProps, changeButtonProps, removeButtonProps } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        backgroundColor: "whitesmoke",
        padding: "16px",
        borderRadius: "4px",
      }}
    >
      <input type="file" onChange={handleImageChange} ref={fileInput} style={{ display: 'none' }} />
      {imagePreviewUrl ? (
        <Box
          component="div"
          sx={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
          }}
        >
          <img src={imagePreviewUrl} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
        </Box>
      ) : (
        <Box
          component="div"
          sx={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: "whitesmoke",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={placeholder} alt="Placeholder" style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </Box>
      )}
      <Box mt={2}>
        {file === null ? (
          <Box display="flex" alignItems="center">
            <Button {...addButtonProps} onClick={handleClick} sx={{ marginRight: "8px" }}>
              Select Avatar
              <CloudUploadIcon sx={{ marginLeft: "4px" }} />
            </Button>
          </Box>
        ) : (
          <Box display="flex" alignItems="center">
            <Button {...changeButtonProps} onClick={handleClick} sx={{ marginRight: "8px" }}>
              Change
            </Button>
            <Button {...removeButtonProps} onClick={handleRemove}>
              Remove
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AvatarComponent;