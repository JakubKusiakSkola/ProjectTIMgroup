import React from "react";
import { Box, Typography } from "@mui/material";
import Trainers from "../components/Trainers";
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
                 sx={{ fontWeight: "bold", color: mode ? "#C20E4D" : "#610726", fontSize: {md:"5rem", xs:"3rem"} }}
               >
          
          O nás
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
         Sme tanečná škola a voláme sa <strong>T.I.M. GROUP SLOVAKIA.</strong> Sme občianské združenie, ktoré od roku <strong>1991</strong> pôsobí na tanečnej scéne až dodnes, 
         čo je <strong>vyše 30 rokov pôsobenia</strong> nášho tanečného klubu na svetoznámych pódiách.
        </Typography>
        <Box
                  component="img"
                  src="/images/onasfoto.jpg" // Predpokladáme, že obrázok je v priečinku public/images
                  alt="Us Image"
                  sx={{
                    width: "100%",
                    objectFit: "cover", // Aby obrázok bol zachovaný v pomere strán
                    borderRadius: "16px",
                    marginTop: "16px"
                  }}
                />
        <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "normal",
                    fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
                    width: { md:"70%", sx:"100%"},
                    margin: "0 auto",
                  }}
                >
       <p>
                Naša tanečná škola sa pýši množstvom titulov, ocenení a vyznamenaní. Za tak dlhé obdobie sme vytvorili komunitu ľudí, ktorí tvoria našu tanečnú rodinu. Jedným z našich najväčších úspechov je muzikál <strong>Báthoryčka</strong>, ktorý obletel celý svet a zožal obrovský úspech. Na tomto projekte sa podieľalo 34 skvelých tanečníkov, ktorí pomohli vytvoriť svetovú show.
            </p> <br/>
            <p>
                Venujeme sa prevažne <strong>hip-hopu</strong>, ale tiež aj <strong>contemporary</strong>, <strong>modernej klasike</strong>, prvkom <strong>baletu, breakin-u, street-dance</strong> a rôznym iným tanečným štýlom. Tieto štýly pretavujeme do vlastného umenia, ktoré nás robí jedinečnými. Naše umenie očarilo porotcov v Srbsku na európskej súťaži, a od tej doby sme pravidelne pozývaní na rôzne svetové súťaže, kde zakaždým zožneme veľký úspech.
            </p>
            <p>
                Naším cieľom je odovzdať naše skúsenosti ďalším generáciám tanečníkov. Chceme, aby to, čo sme sa celý život učili, pokračovalo ďalej a rástlo. Dbáme na profesionalitu a do našej školy vkladáme maximum svojho úsilia.
            </p> <br/>
            <p>
                Za tie roky si naša škola vyslúžila množstvo úžasných ocenení, za ktoré sme nesmierne vďační. Máme radosť z každého jedného úspechu a budeme aj naďalej robiť všetko pre to, aby sme ich počet ešte zvýšili.
            </p>
        </Typography>
      </Box>
      <Trainers mode={mode}/>
      <Contact mode={mode}/>
    </Box>
  );
};

export default Events;
