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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
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
          <Typography component="span">Je možné prihlásiť sa na dva kurzy naraz?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
            textAlign: "left"
            
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
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
          <Typography component="span">Je možné prihlásiť sa na dva kurzy naraz?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
            textAlign: "left"           
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
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
          <Typography component="span">Je možné prihlásiť sa na dva kurzy naraz?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
            textAlign: "left"
            
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
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
          <Typography component="span">Je možné prihlásiť sa na dva kurzy naraz?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
            textAlign: "left"
            
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
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
          <Typography component="span">Je možné prihlásiť sa na dva kurzy naraz?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
            textAlign: "left"
            
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      
        </Box>
    </Box>
  );
};

export default FAQ;
