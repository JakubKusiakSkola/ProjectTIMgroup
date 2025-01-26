import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ImageList,
  ImageListItem,
} from "@mui/material";
import Contact from "../components/Contact"

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const GallerySub = ({ mode }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const itemData = [
    { img: "../images/carousel/fotka1.jpg", title: "Image 1", rows: 2, cols: 2 },
    { img: "../images/carousel/fotka2.jpg", title: "Image 2" },
    { img: "../images/carousel/fotka3.jpg", title: "Image 3" },
    { img: "../images/carousel/fotka4.jpg", title: "Image 4", cols: 2 },
    { img: "../images/carousel/fotka5.jpg", title: "Image 5", cols: 2 },
    { img: "../images/carousel/fotka6.jpg", title: "Image 6", rows: 2, cols: 2 },
    { img: "../images/carousel/fotka7.jpg", title: "Image 7" },
    { img: "../images/carousel/fotka8.jpg", title: "Image 8" },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: mode ? "#181818" : "#F9E0E6",
        paddingTop: "150px",
        textAlign: "center",
      }}
    >
      {/* Nadpis */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          color: mode ? "#F9E0E6" : "#610726",
          padding: { xs: "0 16px", md: "100px 0" },
        }}
      >
        <Typography
                  variant="h1"
                  sx={{ fontWeight: "bold", color: mode ? "#C20E4D" : "#610726", fontSize: {md:"5rem", xs:"3rem"} }}
                >
          Galéria
        </Typography>
        <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "normal",
                    fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
                    width: { md:"70%", sx:"100%"},
                    margin: "0 auto",
                    marginBottom: "24px"
                  }}
                >
          Lorem ipsum dolor sit amet consectetur. Aliquam egestas sed quam aliquam fermentum metus arcu quam et.
          Consectetur iaculis diam non amet in. Nunc lacus nisi adipiscing enim sed. Ultrices amet nibh fringilla
          accumsan.
        </Typography>
      </Box>

      {/* Obrázky */}
      <ImageList
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 20,
          maxWidth: "1200px",
          margin: "0 auto",
          marginBottom: "56px",
          padding: { xs: "0 16px", md:  "0" },
        }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item, index) => (
          <ImageListItem
            key={item.img}
            onClick={() => handleImageClick(item.img)}
            cols={item.cols || 1}
            rows={item.rows || 1}
            sx={{
              cursor: "pointer",
              borderRadius: "10px",
            }}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Dialog pre zväčšený obrázok */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Zväčšený obrázok</DialogTitle>
        <DialogContent>
          <img
            src={selectedImage}
            alt="Zväčšený obrázok"
            style={{ width: "100%", height: "auto", borderRadius: "12px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Zatvoriť
          </Button>
        </DialogActions>
      </Dialog>
      <Contact mode={mode}/>
    </Box>
  );
};

export default GallerySub;
