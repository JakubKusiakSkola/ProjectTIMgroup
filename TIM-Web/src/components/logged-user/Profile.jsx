// src/components/logged-user/Profile.jsx
import React from "react";
import { Box, Typography, Tab, Tabs } from "@mui/material";

export default function Profile() {
  const [value, setValue] = React.useState(0); // Stav pre kontrolu aktuálne vybraného tabu

  const handleChange = (event, newValue) => {
    setValue(newValue); // Nastaví aktuálny tab
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Vitajte, Viki
        </Typography>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Moje kurzy" />
          <Tab label="Profil" />
        </Tabs>
        {value === 0 && <Typography variant="h6">Tu sú vaše kurzy.</Typography>}
        {value === 1 && <Typography variant="h6">Tu sú vaše údaje o profile.</Typography>}
      </Box>
    </Box>
  );
}