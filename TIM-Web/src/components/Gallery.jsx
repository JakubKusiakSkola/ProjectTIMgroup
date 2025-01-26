import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Pagination,
  Button,
} from "@mui/material";
import { useMediaQuery } from "@mui/material"; // Importujeme useMediaQuery
import { useNavigate } from "react-router-dom"; // Importujeme useNavigate pre navigáciu

const Gallery = ({ mode }) => {
  const [page, setPage] = useState(1);
  const isMobile = useMediaQuery("(max-width: 600px)"); // Zisti, či je zariadenie mobilné
  const itemsPerPage = isMobile ? 1 : 4; // Na mobilnom zariadení zobraziť len 1 obrázok, inak 4
  const navigate = useNavigate(); // Hook pre navigáciu

  const images = [
    { id: 1, img: "../images/carousel/fotka1.jpg" },
    { id: 2, img: "../images/carousel/fotka2.jpg" },
    { id: 3, img: "../images/carousel/fotka3.jpg" },
    { id: 4, img: "../images/carousel/fotka4.jpg" },
    { id: 5, img: "../images/carousel/fotka5.jpg" },
    { id: 6, img: "../images/carousel/fotka6.jpg" },
    { id: 7, img: "../images/carousel/fotka7.jpg" },
    { id: 8, img: "../images/carousel/fotka8.jpg" },
  ];

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleGalleryRedirect = () => {
    navigate("/gallery"); // Presmerovanie na stránku galérie
  };

  const displayedImages = images.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: mode ? "#610726" : "#F9E0E6",
        padding: { xs: "56px 16px", md: "100px 0" },
        textAlign: "center",
      }}
    >
      {/* Nadpis */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          color: mode ? "#F9E0E6" : "#610726",
          paddingBottom: "50px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "3rem", md: "5rem" },
            marginBottom: "1rem",
          }}
        >
          Galéria
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "normal",
            fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
            width: { md: "70%", sx: "100%" },
            margin: "0 auto",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Aliquam egestas sed quam aliquam fermentum metus arcu quam et.
          Consectetur iaculis diam non amet in. Nunc lacus nisi adipiscing enim sed. Ultrices amet nibh fringilla
          accumsan.
        </Typography>
      </Box>

      {/* Obrázky */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {displayedImages.map((image) => (
          <Card
            key={image.id}
            sx={{
              width: "250px",
              borderRadius: "10px",
              backgroundColor: mode ? "#F9E0E6" : "#FFF",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={image.img}
              alt={image.title}
            />
          </Card>
        ))}
      </Box>

      {/* Stránkovanie */}
      <Box
        sx={{
          marginTop: "50px",
          justifyItems: "center",
        }}
      >
        <Pagination
          count={Math.ceil(images.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          sx={{
            "& .Mui-selected": {
              backgroundColor: mode ? "#F9E0E6" : "#610726",
              color: mode ? "#610726" : "#F9E0E6",
              alignSelf: "center",
            },
          }}
        />
      </Box>

      <Button
        variant="outlined"
        onClick={handleGalleryRedirect} // Spustí presmerovanie po kliknutí
        sx={{
          color: mode ? "#F9E0E6" : "#610726",
          borderColor: mode ? "#F9E0E6" : "#610726",
          alignSelf: "flex-left",
          marginTop: "32px",
        }}
      >
        Prezrieť Galériu
      </Button>
    </Box>
  );
};

export default Gallery;
