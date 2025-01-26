import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, useMediaQuery } from "@mui/material";

const Trainers = ({ mode }) => {
  const isMobile = useMediaQuery("(max-width: 600px)"); // Zisti, či je zariadenie mobilné

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: mode ? "#181818" : "#FFF",
        padding: { xs: "56px 16px", md: "100px 0" },
      }}
    >
      {/* Titulok */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
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
          Naši tréneri
        </Typography>

        <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "normal",
                    fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
                    width: { md:"70%", sx:"100%"},
                    margin: "0 auto",
                  }}
                >
          Lorem ipsum dolor sit amet consectetur. Aliquam egestas sed quam
          aliquam fermentum metus arcu quam et. Consectetur iaculis diam non
          amet in. Nunc lacus nisi adipiscing enim sed. Ultrices amet nibh
          fringilla accumsan.
        </Typography>
      </Box>

      {/* Karty s trénermi */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
          flexDirection: isMobile ? "column" : "row", // Zmeníme usporiadanie na "column" pre mobilné zariadenia
        }}
      >
        {/* Prvý tréner */}
        <Card
          sx={{
            width: "100%",
            backgroundColor: "inherit", // Pevná farba pozadia
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "none",
          }}
        >
          <CardMedia
            component="img"
            height="auto"
            image="/images/jana.jpg"
            alt="Trainer 1"
            sx={{
              borderRadius: "50%",
              objectFit: "cover",
              margin: "20px auto",
              width: "100px",
              height: "100px",
            }}
          />
          <CardContent>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px",
                color: mode ? "#F9E0E6" : "#610726", // Dynamická farba textu
              }}
            >
              Jana Rozhoňová
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: "20px",
                color: mode ? "#F9E0E6" : "#610726", // Dynamická farba textu
              }}
            >
              Som lektorka a majiteľka tanečnej školy T.I.M. Group Slovakia. Reprezentujem Slovensko doma aj v zahraničí. Na tanečnej scéne pôsobím profesionálne od svojich 3 rokov. Počas života som dosiahla množstvo ocenení a chcem svojich tanečníkov posúvať vpred mojimi znalosťami v oblasti tanca.
            </Typography>
          </CardContent>
        </Card>

        {/* Druhý tréner */}
        <Card
          sx={{
            width: "100%",
            backgroundColor: "inherit", // Pevná farba pozadia
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "none",
          }}
        >
          <CardMedia
            component="img"
            height="auto"
            image="/images/lubo.jpg"
            alt="Trainer 2"
            sx={{
              borderRadius: "50%",
              objectFit: "cover",
              margin: "20px auto",
              width: "100px",
              height: "100px",
            }}
          />
          <CardContent>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px",
                color: mode ? "#F9E0E6" : "#610726", // Dynamická farba textu
              }}
            >
              Ľubomír Pelko
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: "20px",
                color: mode ? "#F9E0E6" : "#610726", // Dynamická farba textu
              }}
            >
              Pôsobím ako tanečník a lektor tanečnej školy T.I.M Group Slovakia. Tancu sa venujem od roku 2005, keď ma prijali do breakin-ovej skupiny Version Style. V minulosti som tancoval s Janou Rozhoňovou, ktorá ma oslovila ohľadom lektorstva vo svojej tanečnej škole.
            </Typography>
          </CardContent>
        </Card>

        {/* Tretí tréner */}
        <Card
          sx={{
            width: "100%",
            backgroundColor: "inherit", // Pevná farba pozadia
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "none",
          }}
        >
          <CardMedia
            component="img"
            height="auto"
            image="/images/domka.jpg"
            alt="Trainer 3"
            sx={{
              borderRadius: "50%",
              objectFit: "cover",
              margin: "20px auto",
              width: "100px",
            }}
          />
          <CardContent>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px",
                color: mode ? "#F9E0E6" : "#610726", // Dynamická farba textu
              }}
            >
              Dominika Mrázová
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: "20px",
                color: mode ? "#F9E0E6" : "#610726", // Dynamická farba textu
              }}
            >
              Som tanečník a výpomoc lektorov v tanečnej škole T.I.M. Group Slovakia. Od roku 2010 a teda mojich 5 rokov som sa pretancovala cez rôzne Európske súťaže a dosiahla množstvo ocenení. Začiatkom roka 2023 som súhlasila s výpomocou na tréningoch mladších generácií našej tanečnej školy.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Trainers;
