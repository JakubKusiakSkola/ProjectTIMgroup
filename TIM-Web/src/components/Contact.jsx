import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";


const Contact = ({ mode }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: mode ? "#610726" : "#F9E0E6",
        padding: { xs: "150px 16px", md: "100px 0" },
        textAlign: "center",
      }}
    >
      {/* Nadpis */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          color:  mode ? "#F9E0E6" : "#610726",
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
          Spojme sa
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
          Ak máte nejaké otázky, poznámky alebo pripomienky k našej tanečnej škole neváhajte a spojte sa s nami správou.
        </Typography>
      </Box>

      {/* Formulár */}
      <Box
        component="form"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Vaše meno"
              InputLabelProps={{
                style: {
                  color: mode ? "#F9E0E6" : "#610726",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: mode ? "#F9E0E6" : "#610726",
                  },
                  "&:hover fieldset": {
                    borderColor: mode ? "#E6D1D6" : "#7A0930",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: mode ? "#F9E0E6" : "#610726",
                  },
                },
                input: {
                  color: mode ? "#F9E0E6" : "#610726",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Váš email"
              InputLabelProps={{
                style: {
                  color: mode ? "#F9E0E6" : "#610726",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: mode ? "#F9E0E6" : "#610726",
                  },
                  "&:hover fieldset": {
                    borderColor: mode ? "#E6D1D6" : "#7A0930",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: mode ? "#F9E0E6" : "#610726",
                  },
                },
                input: {
                  color: mode ? "#F9E0E6" : "#610726",
                },
              }}
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          label="Vaša správa"
          InputLabelProps={{
            style: {
              color: mode ? "#F9E0E6" : "#610726",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: mode ? "#F9E0E6" : "#610726",
              },
              "&:hover fieldset": {
                borderColor: mode ? "#E6D1D6" : "#7A0930",
              },
              "&.Mui-focused fieldset": {
                borderColor: mode ? "#F9E0E6" : "#610726",
              },
            },
            textarea: {
              color: mode ? "#F9E0E6" : "#610726",
            },
          }}
        />
        <Button
            variant="outlined"
                sx={{
                    color: mode ? "#F9E0E6" : "#181818",
                    borderColor: mode ? "#F9E0E6" : "#181818",
                    alignSelf: "flex-end",
                    marginBottom: "24px"
                }}>
            Odoslať
        </Button>
      </Box>

      {/* Mapa */}
      <Box
        sx={{
          marginTop: "2.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9421527630757!2d21.283134433385573!3d48.68943912748301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473edf8cec5bb0f9%3A0x803ea9cdc8a57bf1!2zWsOBS0xBRE7DgSBVTUVMRUNLw4EgxaBLT0xBIElSS1VUU0vDgQ!5e1!3m2!1ssk!2ssk!4v1737728101613!5m2!1ssk!2ssk"
            width="100%"
            height="400"
            style={{
                border: "24px", // Odstránenie okrajov
                borderRadius: "24px", // Zaoblené rohy
                boxShadow: "none", // Odstránenie tieňa explicitne
                outline: "none", // Pre istotu odstránenie možného obrysu
                filter: "none", // Reset všetkých vizuálnych efektov
              }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          />

      </Box>

      {/* Footer */}
      <Box
        sx={{
          marginTop: "50px",
          color: mode ? "#F9E0E6" : "#610726",
        }}
      >
        <Typography variant="body2">
          Copyright © 2025 Team | Powered by Team
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
