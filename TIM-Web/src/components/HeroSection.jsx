import React from "react";
import { Box, Typography } from "@mui/material";

const HeroSection = ({ mode }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh", // Zabezpečíme, aby mal HeroSection minimálnu výšku celej obrazovky
        display: "flex",
        justifyContent: "center", // Vycentrovanie boxu na stred
        alignItems: "center",
        backgroundImage: `url(${mode ? "../images/dark_bg.svg" : "../images/light_bg.svg"})`,
        backgroundSize: "cover", // Zabezpečíme, aby obrázok pokryl celé pozadie
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "0 20px", // Padding pre menšie obrazovky
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px", // Maximálna šírka
          width: "100%", // Na celú šírku
          textAlign: "left", // Zarovnáme text naľavo
          color: mode ? "#F9E0E6" : "#181818", // Farba textu závisí od režimu
        }}
      >
        {/* Titulok */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "3rem", sm: "4rem", md: "7rem" }, // Dynamická veľkosť písma
            marginBottom: "1rem", // Medzera pod hlavným textom
            width: { md:"60%", sm: "70%", xs: "100%"}
          }}
        >
          <span
            style={{
              color: mode ? "#C20E4D" : "#F871A0", // Farba len pre "T.I.M." (opposite to previous)
            }}
          >
            T.I.M.
          </span>
          {" Group Slovakia"}
        </Typography>

        {/* Podtitul */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: "normal",
          }}
        >
          Aj vaše deti naučíme tancovať
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
