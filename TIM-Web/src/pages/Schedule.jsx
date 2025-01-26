import React, { useState, useRef } from "react";
import { Box, Typography, Card, Button, TextField, Checkbox, FormControlLabel } from "@mui/material";
import Contact from "../components/Contact";

const Schedule = ({ mode }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isChecked, setIsChecked] = useState(false); // Stav pre checkbox

  const formSectionRef = useRef(null);
  const coursesRef = useRef(null);

  const courses = [
    {
      id: 1,
      title: "DVK kurz",
      description: "Detská veková skupina detí od 3-6 rokov každý štvrtok o 17:00 - 18:00",
      price: "15€ mesačne",
      image: "../images/schedule.png",
    },
    {
      id: 2,
      title: "JVK kurz",
      description: "Detská veková skupina detí od 6-11 rokov každý utorok o 18:00 - 19:00 a štvrtok o 16:30 - 17:30",
      price: "25€ mesačne",
      image: "../images/schedule.png",
    },
    {
      id: 3,
      title: "HVK kurz",
      description: "Detská veková skupina detí od 12+ rokov každý pondelok o 16:30 - 18:30 a stredu o 16:30 - 18:30",
      price: "35€ mesačne",
      image: "../images/schedule.png",
    },
  ];

  const handleSelect = (id) => {
    setSelectedCourse((prev) => {
      const newSelected = prev === id ? null : id;

      // Scroll to the form section
      if (newSelected) {
        setTimeout(() => {
          if (formSectionRef.current) {
            formSectionRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start", // Scroll to the start of the form section
            });
          }
        }, 100);
      }

      return newSelected;
    });
  };

  const handleCancel = () => {
    setSelectedCourse(null);
    // Scroll back to the courses section (to start of the courses section)
    if (coursesRef.current) {
      setTimeout(() => {
        coursesRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", // Scroll back to the start of the courses section
        });
      }, 100);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Zmena stavu checkboxu
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: mode ? "#181818" : "#F9E0E6",
        color: mode ? "#F9E0E6" : "#181818",
        paddingTop: "150px",
      }}
    >
      {/* Title Section */}
      <Box sx={{ textAlign: "center", marginBottom: "40px", padding: { xs: "0 16px", md: "100px 0" }, }}>
        <Typography
          variant="h1"
          sx={{ fontWeight: "bold", color: mode ? "#C20E4D" : "#610726", fontSize: {md:"5rem", xs:"3rem"} }}
        >
          Rozvrh hodín
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
          Vitajte na stránke rozvrhu hodín pre vaše deti. My im pomôžeme blá blá blá. Pozrite si jednotlivé kurzy blá blá blá a zaregistrujte Vaše dieťa.
        </Typography>
      </Box>

      {/* Courses Section */}
      <Box
        ref={coursesRef}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "0 20px",
          marginBottom: "56px",
        }}
      >
        {courses.map((course) => (
          <Card
            key={course.id}
            sx={{
              width: {md:"300px", xs:"100%"},
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Upper Section */}
            <Box
              sx={{
                height: "300px",
                backgroundImage: `url(${course.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                color: "#F9E0E6",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                {course.title}
              </Typography>
              <Typography variant="body2">{course.description}</Typography>
            </Box>

            {/* Lower Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px",
                backgroundColor: mode ? "#F9E0E6" : "#181818",
                color: mode ? "#181818" : "#F9E0E6",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {course.price}
              </Typography>
              <Button
                onClick={() => handleSelect(course.id)}
                sx={{
                  backgroundColor: "#C20E4D",
                  color: "#FFF",
                  borderRadius: "20px",
                  textTransform: "none",
                  ":hover": { backgroundColor: "#A10B3C" },
                }}
              >
                {selectedCourse === course.id ? "Zrušiť" : "Zvoliť"}
              </Button>
            </Box>
          </Card>
        ))}
      </Box>

      {/* Form Section */}
      {selectedCourse && (
        <Box
          ref={formSectionRef}
          id="form-section"
          sx={{
            marginTop: "40px",
            padding: "20px",
            maxWidth: "600px",
            margin: "40px auto",
            color: mode ? "#181818" : "#F9E0E6",
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "16px", color: "#C20E4D" }}>
            Vaše kontaktné údaje
          </Typography>
          <TextField
            fullWidth
            label="Meno dieťaťa"
            variant="outlined"
            sx={{
              marginBottom: "16px",
              borderRadius: "5px",
            }}
          />
          <TextField
            fullWidth
            label="Váš email"
            variant="outlined"
            sx={{
              marginBottom: "16px",
              borderRadius: "5px",
            }}
          />
          <TextField
            fullWidth
            label="Vaše telefónne číslo"
            sx={{
              marginBottom: "16px",
              borderRadius: "5px",
              borderColor: mode ? "#FFF" : "#F9E0E6",
            }}
          />
          
          {/* Checkbox - Zarovnaný s textom */}
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked} // stav checkboxu
                onChange={handleCheckboxChange} // zmena stavu
                sx={{
                  color: "#17C964",
                  marginBottom: "20px",
                }}
              />
            }
            label="Záväzne sa registrujem, a zároveň súhlasím s vytvorením účtu"
            sx={{
              color: "#C20E4D",
              marginBottom: "16px",
            }}
          />
          
          {/* Tlačidlo prechod na platbu */}
          <Button
            fullWidth
            sx={{
              marginTop: "16px",
              backgroundColor: "#C20E4D",
              color: "#FFF",
              borderRadius: "20px",
              padding: "10px 0",
              textTransform: "none",
              ":hover": { backgroundColor: "#A10B3C" },
            }}
            disabled={!isChecked} // Ak nie je checkbox zaškrtnutý, tlačidlo je disabled
          >
            Prejsť na platbu
          </Button>
        </Box>
      )}

      {/* Contact Section */}
      <Contact mode={mode} />
    </Box>
  );
};

export default Schedule;