import React from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = ({ mode }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: mode ? "#181818" : "#FFF",
        padding: { xs: "56px 16px", md: "100px 0" },
        textAlign: "center"
      }}
    >
    <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          color: mode ? "#F9E0E6" : "#610726",
          paddingBottom: "50px",
          display: "flex",          
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
    >
      {/* Titulok */}
      <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "3rem", md: "5rem" },
            marginBottom: "4rem",
          }}
        >
          Často sa nás pýtate
        </Typography>
        <Accordion sx={{
            backgroundColor: mode ? "#FFF" : "#610726",
            color: mode ? "#181818" : "#FFF",
            padding: 2,
            BorderColor: "#5BFBA3"
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{
            color: mode ? "#000" : "#FFF",
            
          }}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Je možné prihlásiť sa na dva kurzy naraz?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
            textAlign: "left"
            
        }}>
          Nakoľko sú kurzy prispôsobené vekovej kategórii tanečníka, je možné prihlásiť sa len na jeden kurz.
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{
            backgroundColor: mode ? "#FFF" : "#610726",
            color: mode ? "#181818" : "#FFF",
            padding: 2
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{
            color: mode ? "#000" : "#FFF"
          }}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"> Dá sa T.I.M merch kúpiť ? </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
            textAlign: "left"
            
        }}>
          Merch tanečnej školy je možné zakúpiť si za výhodné ceny len v prípade, že ste tanečníkom školy. 
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{
            backgroundColor: mode ? "#FFF" : "#610726",
            color: mode ? "#181818" : "#FFF",
            padding: 2
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{
            color: mode ? "#000" : "#FFF"
          }}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Je možné prihlásiť aj dieťa, ktoré nedovŕšilo 3 roky ?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
            textAlign: "left"           
        }}>
          Samozrejme. Naša tanečná škola prijíma aj mladšie deti, ak budú schopné spolupráce na kurzoch.
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{
            backgroundColor: mode ? "#FFF" : "#610726",
            color: mode ? "#181818" : "#FFF",
            padding: 2
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{
            color: mode ? "#000" : "#FFF"
          }}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Je potrebná špeciálna obuv ?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
            textAlign: "left"
            
        }}>
          Naši tanečníci tancujú v hocičom čo je im pohodlné. Nie je potrebná žiadna špeciálna obuv.
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{
            backgroundColor: mode ? "#FFF" : "#610726",
            color: mode ? "#181818" : "#FFF",
            padding: 2
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{
            color: mode ? "#000" : "#FFF"
          }}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Ak odídem som povinná odovzdať kostými a merch školy ?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
            textAlign: "left"
            
        }}>
          Merch je možné si ponechať, kostými však spadajú pod majetok školy.
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{
            backgroundColor: mode ? "#FFF" : "#610726",
            color: mode ? "#181818" : "#FFF",
            padding: 2
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{
            color: mode ? "#000" : "#FFF"
          }}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Sú kurzy prispôsobené aj úplným začiatočníkom ?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
            textAlign: "left"
            
        }}>
          Samozrejme, každému tanečníkovi sme schopní sa venovať osobne a úplný začiatočník pre nás nie je problémom.
        </AccordionDetails>
      </Accordion>
      
        </Box>
    </Box>
  );
};

export default FAQ;
