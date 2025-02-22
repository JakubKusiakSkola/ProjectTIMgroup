import { HashLink } from "react-router-hash-link";
import { Paper, Switch, AppBar, Box, CssBaseline, Toolbar, Button, Modal, Drawer, IconButton} from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import EventsSub from "./pages/EventsSub";
import GallerySub from "./pages/GallerySub";
import Schedule from "./pages/Schedule";
import Profile from "./components/logged-user/Profile"; // Import Profile component
import './LoginSignup.css';
import axios from "axios";
import userIcon from './components/Assets/user.png'; // Adjust the path as necessary
import mailIcon from './components/Assets/mail.png'; // Adjust the path as necessary
import passwordIcon from './components/Assets/unlock.png';
import MenuIcon from '@mui/icons-material/Menu';  // Adjust the path as necessary

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ThemeProvider theme={createTheme({ 
      typography: {
        fontSize: 16,
        fontFamily: "'Lora', serif",
        h1: { fontSize: "2.25rem" },
        h2: { fontSize: "2rem" },
        h3: { fontSize: "1.75rem" },
        h4: { fontSize: "1.5rem" },
        h5: { fontSize: "1.25rem" },
        h6: { fontSize: "1rem" },
      },
      palette: { mode: prefersDarkMode ? 'dark' : 'light' } })}>
      <CssBaseline />
      <Router>
        <AppContent prefersDarkMode={prefersDarkMode} />
      </Router>
    </ThemeProvider>
  );
}

function AppContent({ prefersDarkMode }) {
  const isMobile = useMediaQuery("(max-width: 600px)"); // Breakpoint pre mobilné zariadenia
  const [mode, setMode] = useState(prefersDarkMode);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [action, setAction] = useState("Registrácia");
  const [message, setMessage] = useState(""); // State variable for the success message
  const [openDrawer, setOpenDrawer] = useState(false); // Stav pre otvorený/zakrytý Drawer

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navItems = [
    { label: "Domov", path: "/" },
    { label: "Rozvrh", path: "/schedule" },
    { label: "O nás", path: "/about" },
    { label: "Udalosti", path: "/events" },
    { label: "Galéria", path: "/gallery" },
    { label: "FAQ", path: "/#faq-section" },
    { label: "Kontakt", path: "/contact" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate(); // Use the useNavigate hook inside the AppContent component

  const handleSubmit = useCallback(async () => {
    try {
      let response;
      if (action === "Registrácia") {
        // posiela POST request /register endpointu
        response = await axios.post("http://localhost:5000/register", formData);
      } else {
        // posiela POST request /login endpointu
        response = await axios.post("http://localhost:5000/login", {
          email: formData.email,
          password: formData.password,
        });
      }
      setMessage(response.data.message);
      if (action === "Prihlásiť sa") {
        handleCloseLoginModal(); // Close the modal after successful login
        navigate("/profile"); // Navigate to /profile after successful login
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong!");
    }
  }, [action, formData, navigate]);

  const handleOpenLoginModal = () => setOpenLoginModal(true);
  const handleCloseLoginModal = () => setOpenLoginModal(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') handleSubmit();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleSubmit]);

  const handleChange = (event) => {
    setMode(event.target.checked);
  };

  const handleRegisterClick = () => {
    setAction("Registrácia");
    navigate("/register");
  };

  const handleLoginClick = () => {
    setAction("Prihlásiť sa");
    navigate("/login");
  };

  return (
    <Paper elevation={0} sx={{ height: "100vh" }}>
      {/* AppBar pre desktop */}
      <AppBar component="nav" sx={{ backgroundColor: "#000", width: "100%" }}>
        <Toolbar sx={{ padding: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
            <Box component="img" src="../images/Logo.svg" alt="Logo" sx={{ height: "60px" }} />
            {!isMobile && ( // Ak nie je mobil, zobraziť horizontálnu navigáciu
              <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={HashLink}
                    smooth
                    to={item.path}
                    sx={{ color: "#F9E0E6" }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "auto" }}>
              {!isMobile && ( // Ak nie je mobil, zobraziť tlačidlo "Prihlásiť sa"
                <Button
                  variant="outlined"
                  sx={{ color: "#F9E0E6", borderColor: "#F9E0E6", marginLeft: "20px" }}
                  onClick={handleOpenLoginModal}
                >
                  Prihlásiť sa
                </Button>
              )}
              <Switch
                 checked={mode}
                 onChange={handleChange}
                 inputProps={{ "aria-label": "controlled" }}
                 sx={{
                   ml: 2,
                   "& .MuiSwitch-thumb": { backgroundColor: "#C20E4D" },
                   "& .MuiSwitch-track": { backgroundColor: "#FFF" },
                   "& .MuiSwitch-rail": { backgroundColor: "#F9E0E6" },
                 }}
              />
              {isMobile && ( // Ak je mobil, zobrazí sa hamburger ikona
                    <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ color: "#F9E0E6", marginLeft: "10px" }}>
                      <MenuIcon />
                    </IconButton>
                  )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: "#000",
                color: "#610726",
                padding: "16px",
              },
            }}
          >
            <Box sx={{ width: 250 }}>
              <Box component="img" src="../images/Logo.svg" alt="Logo" sx={{ height: "60px", marginBottom: 2 }} />

              <Box sx={{ marginTop: 3, display: "flex", flexDirection: "column", justifyContent: "left"}}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={HashLink}
                    smooth
                    to={item.path}
                    sx={{ color: "#FFF", marginBottom: 2 }}
                    onClick={() => setOpenDrawer(false)} // Zavrieme Drawer po kliknutí
                  >
                    {item.label}
                  </Button>
                ))}
                {/* Tlačidlo Prihlásiť sa v mobile menu */}
                <Button
                  variant="outlined"
                  sx={{ color: "#F9E0E6", borderColor: "#F9E0E6", marginTop: 2 }}
                  onClick={handleOpenLoginModal}
                >
                  Prihlásiť sa
                </Button>
              </Box>
            </Box>
          </Drawer>
      {/* Modal for Login */}
      <Modal
        open={openLoginModal}
        onClose={handleCloseLoginModal}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(3px)",
          "& .MuiBox-root": {
            marginLeft: isMobile ? "16px" : "auto",
            marginRight: isMobile ? "16px" : "auto",
          },
        }}
      >
        <div style={{
          backgroundColor: "#F2D7E0",
          padding: "30px",
          borderRadius: "10px",
          width: "600px",
          textAlign: "left",
          boxShadow: 3,
        }}>
          <div className="header">
            <div className="text"> {action} </div>
            <div className="underline"> </div>
          </div>
          <div className="inputs">
            {action === "Prihlásiť sa" ? null : (
              <div className="input">
                <img src={userIcon} alt="User icon" />
                <input 
                  type="text" 
                  name="username"
                  placeholder="Meno"
                  value={formData.username}
                  onChange={handleInputChange}
                />  
              </div>
            )}
            <div className="input">
              <img src={mailIcon} alt="Email icon" />
              <input 
                type="email" 
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />  
            </div>
            <div className="input">
              <img src={passwordIcon} alt="Password Icon" />
              <input 
                type="password" 
                name="password"
                placeholder="Heslo"
                value={formData.password}
                onChange={handleInputChange}
              />  
            </div>
            {message && (
              <div className="message">
                {message}
              </div>
            )}
          </div>
          <div className="submit-container">
            <div
              className={action === "Prihlásiť sa" ? "submit gray" : "submit"}
              onClick={handleRegisterClick}
            >
              Registrácia
            </div>
            <div
              className={action === "Registrácia" ? "submit gray" : "submit"}
              onClick={handleLoginClick}
            >
              Prihlásiť sa
            </div>
          </div>
        </div>
      </Modal>

      <Routes>
        <Route path="/" element={<Home mode={mode} />} />
        <Route path="/schedule" element={<Schedule mode={mode} />} />
        <Route path="/about" element={<AboutUs mode={mode} />} />
        <Route path="/events" element={<EventsSub mode={mode} />} />
        <Route path="/gallery" element={<GallerySub mode={mode} />} />
        <Route path="/faq" element={<FAQ mode={mode} />} />
        <Route path="/contact" element={<Contact mode={mode} />} />
        <Route path="/register" element={<div />} /> {/* Placeholder for register route */}
        <Route path="/login" element={<div />} /> {/* Placeholder for login route */}
        <Route path="/profile" element={<Profile  mode = {mode} />} /> {/* Add Profile route */}
      </Routes>
    </Paper>
  );
}

export default App;