import React, { useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import Contact from "../Contact";

const Profile = ({ mode }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: mode ? "#181818" : "#F9E0E6",
        color: mode ? "#F9E0E6" : "#181818",
        paddingTop: "150px",
        textAlign: "center",
      }}
    >
      {/* Welcome Section */}
      <Box sx={{ marginBottom: "40px", padding: { xs: "0 16px", md: "16px 0" } }}>
        <Typography
          variant="h1"
          sx={{ fontWeight: "bold", color: mode ? "#C20E4D" : "#610726", fontSize: { md: "5rem", xs: "3rem" } }}
        >
          Vitajte
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "normal",
            fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
            width: { md: "70%", xs: "100%" },
            margin: "0 auto",
          }}
        >
          Vitajte v profile
        </Typography>
      </Box>

      {/* Tabs Section */}
      <Box
        sx={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#610726",
          color: "#fff",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          padding: { xs: "0 16px", md: "0" },
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            ".MuiTabs-indicator": {
              backgroundColor: "#F9E0E6 !important",
            },
            ".MuiTab-root": {
              textTransform: "none",
              fontWeight: "bold",
              color: mode ? "#C20E4D" : "#610726",
            },
            ".Mui-selected": {
              color: mode ? "#181818" : "#F9E0E6",
            },
            marginBottom: "56px",
            padding: { xs: "0 16px", md: "0" },
          }}
        >
          <Tab label="Moje kurzy" sx={{color: "#FFF !important"}} />
          <Tab label="Profil" sx={{color: "#FFF !important"}} />
        </Tabs>
      </Box>
      <Contact mode={mode} />
    </Box>
  );
};

export default Profile;