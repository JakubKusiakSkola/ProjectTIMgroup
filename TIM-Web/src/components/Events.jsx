import React from "react";
import { Box, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";  // Importujeme Link na presmerovanie

const Events = ({ mode }) => {
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
          Udalosti
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
          Čo nás spolu v blízkej dobe čaká ? 
        </Typography>
      </Box>

      {/* Karty s udalosťami */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Karta 1 */}
        <Card
          sx={{
            display: "flex",
            backgroundColor: mode ? "#FFF" : "#610726",
            color: mode ? "#181818" : "#FFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "inherit", marginBottom: "8px" }}>
              MIA FESTIVAL
            </Typography>
            <Typography variant="body2" sx={{ color: "inherit" }}>
              Tanečná súťaž KOŠICE 18.4.2025
            </Typography>
          </CardContent>
        </Card>

        {/* Karta 2 */}
        <Card
          sx={{
            display: "flex",
            backgroundColor: mode ? "#FFF" : "#610726",
            color: mode ? "#181818" : "#FFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardMedia
            sx={{
              backgroundColor: mode ? "#F9E0E6" : "#610726",
              color: mode ? "#181818" : "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            {/* Ikona alebo obrázok */}
          </CardMedia>
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "inherit", marginBottom: "8px" }}>
              MBREAK-IN WORKSHOP
            </Typography>
            <Typography variant="body2" sx={{ color: "inherit" }}>
              KOŠICE 14.5.2025 Lektor: Ľubomír Pelko 17:00 Kultúrne Stredisko Nad Jazerom
            </Typography>
          </CardContent>
        </Card>

        {/* Karta 3 */}
        <Card
          sx={{
            display: "flex",
            backgroundColor: mode ? "#FFF" : "#610726",
            color: mode ? "#181818" : "#FFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardMedia
            component="div"
            sx={{
              backgroundColor: mode ? "#F9E0E6" : "#181818",
              color: mode ? "#181818" : "#610726",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            {/* Ikona alebo obrázok */}
          </CardMedia>
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "inherit", marginBottom: "8px" }}>
              EUROPEAN DANCE CUP
            </Typography>
            <Typography variant="body2" sx={{ color: "inherit" }}>
              Európska súťaž o pohár a postup KANIJŽA SERBIA 20.5.2025
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Tlačidlo "Pozrieť všetky" */}
      <Box sx={{ textAlign: "center", marginTop: "24px" }}>
        <Link to="/events">  {/* Link na presmerovanie */}
          <Button
            variant="outlined"
            sx={{
              color: mode ? "#F9E0E6" : "#610726",
              borderColor: mode ? "#F9E0E6" : "#610726",
              marginTop: "32px",
            }}
          >
            Pozrieť všetky
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Events;
