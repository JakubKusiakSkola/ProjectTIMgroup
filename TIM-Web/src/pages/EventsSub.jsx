import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Contact from "../components/Contact";

const Events = ({ mode }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: mode ? "#181818" : "#FFF",
        paddingTop: "150px",
      }}
    >
      {/* Titulok */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          color: mode ? "#F9E0E6" : "#610726",
          padding: { xs: "0 16px",  },
        }}
      >
        <Typography
                  variant="h1"
                  sx={{ fontWeight: "bold", color: mode ? "#C20E4D" : "#610726", fontSize: {md:"5rem", xs:"3rem"}, marginBottom: "24px"}}
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
          Lorem ipsum dolor sit amet consectetur. Aliquam egestas sed quam aliquam fermentum metus arcu quam et.
          Consectetur iaculis diam non amet in. Nunc lacus nisi adipiscing enim sed. Ultrices amet nibh fringilla
          accumsan.
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
          padding: { xs: "0 16px", md: "0" },
          marginTop: "24px"
        }}
      >
        <Card
            sx={{
              display: "flex",
              backgroundColor: mode ? "#FFF" : "#610726", // Tmavá karta pri tmavom režime, biela pri svetlom
              color: mode ? "#181818" : "#FFF",
              borderRadius: "10px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Obsah */}
            <CardContent
              sx={{
                flex: 1,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "inherit", marginBottom: "8px" }}>
                MIA FESTIVAL
              </Typography>
              <Typography variant="body2" sx={{ color: "inherit" }}>
                Lorem ipsum dolor sit amet consectetur. Varius placerat tortor ornare varius eu. Tincidunt risus
                consectetur vitae non amet non faucibus sagittis. Non at suspendisse dignissim nam ac. Pellentesque est
                at penatibus lectus tincidunt urna urna nam.
              </Typography>
            </CardContent>
        </Card>
        <Card
            sx={{
              display: "flex",
              backgroundColor: mode ? "#FFF" : "#610726", // Tmavá karta pri tmavom režime, biela pri svetlom
              color: mode ? "#181818" : "#FFF",
              borderRadius: "10px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Ikona/UI */}
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
            </CardMedia>
            {/* Obsah */}
            <CardContent
              sx={{
                flex: 1,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "inherit", marginBottom: "8px" }}>
                MBREAK-IN WORKSHOP
              </Typography>
              <Typography variant="body2" sx={{  color: "inherit" }}>
              KOŠICE 14.5.2025  Lektor: Ľubomír Pelko   17:00 Kultúrne Stredisko Nad Jazerom
              </Typography>
            </CardContent>
        </Card>
        <Card
            sx={{
              display: "flex",
              backgroundColor: mode ? "#FFF" : "#610726", // Tmavá karta pri tmavom režime, biela pri svetlom
              color: mode ? "#181818" : "#FFF",
              borderRadius: "10px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Ikona/UI */}
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
            </CardMedia>
            {/* Obsah */}
            <CardContent
              sx={{
                flex: 1,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "inherit", marginBottom: "8px" }}>
              EUROPEAN DANCE CUP
              </Typography>
              <Typography variant="body2" sx={{ color: "inherit" }}>
              Európska súťaž o pohár a postup  KANIJŽA SERBIA  20.5.2025
              </Typography>
            </CardContent>
        </Card>
        <Card
            sx={{
              display: "flex",
              backgroundColor: mode ? "#FFF" : "#610726", // Tmavá karta pri tmavom režime, biela pri svetlom
              color: mode ? "#181818" : "#FFF",
              borderRadius: "10px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Ikona/UI */}
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
            </CardMedia>
            {/* Obsah */}
            <CardContent
              sx={{
                flex: 1,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "inherit", marginBottom: "8px" }}>
              EUROPEAN DANCE CUP
              </Typography>
              <Typography variant="body2" sx={{ color: "inherit" }}>
              Európska súťaž o pohár a postup  KANIJŽA SERBIA  20.5.2025
              </Typography>
            </CardContent>
        </Card>
        <Card
            sx={{
              display: "flex",
              backgroundColor: mode ? "#FFF" : "#610726", // Tmavá karta pri tmavom režime, biela pri svetlom
              color: mode ? "#181818" : "#FFF",
              borderRadius: "10px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              marginBottom: "56px"
            }}
          >
            {/* Ikona/UI */}
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
            </CardMedia>
            {/* Obsah */}
            <CardContent
              sx={{
                flex: 1,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "inherit", marginBottom: "8px" }}>
              EUROPEAN DANCE CUP
              </Typography>
              <Typography variant="body2" sx={{ color: "inherit" }}>
              Európska súťaž o pohár a postup  KANIJŽA SERBIA  20.5.2025
              </Typography>
            </CardContent>
        </Card>
      </Box>
      <Contact mode={mode} 
     />
    </Box>
  );
};

export default Events;
