// src/components/Us.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importujte useNavigate pre navigáciu

const About = ({ mode }) => {
  const navigate = useNavigate(); // Hook pre navigáciu

  const handleRedirect = () => {
    navigate("/about"); // Presmerovanie na stránku AboutUs
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: mode ? "#610726" : "#F9E0E6", // Farba pozadia podľa režimu
        padding: { xs: "56px 16px", md: "100px 0" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          display: "flex", // Používame Flexbox pre rozloženie
          flexDirection: { xs: "column", sm: "row" }, // Na mobiloch bude vertikálne, na desktopoch horizontálne
          justifyContent: "space-between", // Rozmiestnime text a obrázok na krajné časti
          alignItems: "center", // Vertikálne vycentrovanie
          margin: "0 auto", // Centering obsah horizontálne
          textAlign: "left", // Text naľavo
        }}
      >
        {/* Textová časť */}
        <Box
          sx={{
            maxWidth: "600px", // Nastavíme maximálnu šírku pre textovú časť
            color: mode ? "#F9E0E6" : "#610726", // Farba textu podľa režimu
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "3rem", md: "5rem" }, // Dynamická veľkosť písma
              marginBottom: "1rem", // Medzera pod hlavným textom
            }}
          >
            O nás
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: "normal",
              fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
              width: { md: "70%", sx: "100%" },
            }}
          >
            Sme tanečná škola a voláme sa <strong>T.I.M. GROUP SLOVAKIA.</strong> Sme občianské
            združenie, ktoré od roku <strong>1991</strong> pôsobí na tanečnej scéne až dodnes, čo
            je <strong>vyše 30 rokov pôsobenia</strong> nášho tanečného klubu na svetoznámych
            pódiách.
          </Typography>

          <Button
            variant="outlined"
            onClick={handleRedirect} // Spustí presmerovanie po kliknutí
            sx={{
              color: mode ? "#F9E0E6" : "#610726",
              borderColor: mode ? "#F9E0E6" : "#610726",
              alignSelf: "flex-left",
              marginTop: "32px",
              marginBottom: "24px",
            }}
          >
            Prečítať viac
          </Button>
        </Box>

        {/* Obrázok */}
        <Box
          component="img"
          src="/images/onasfoto.jpg" // Predpokladáme, že obrázok je v priečinku public/images
          alt="Us Image"
          sx={{
            width: { xs: "100%", sm: "100%" }, // Obrázok bude mať 80% šírky na mobiloch a 50% na desktopoch
            maxWidth: "600px", // Maximálna šírka obrázka
            objectFit: "contain", // Aby obrázok bol zachovaný v pomere strán
            borderRadius: "16px",
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
