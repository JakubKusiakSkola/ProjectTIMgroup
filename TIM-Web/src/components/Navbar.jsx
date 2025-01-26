import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importujeme useNavigate pre navigáciu
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ToggleThemeButton from "./ToggleThemeButton";

// Importovanie komponentov Material-UI
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Slide } from "@mui/material"; // Import pre animáciu

const drawerWidth = 240;
const navItems = [
  { text: "Home", path: "/" },
  { text: "O nás", path: "/about" },
  { text: "Contact", path: "/contact" },
  { text: "Events", path: "/events" },
  { text: "Gallery", path: "/gallery" },
];

export default function DrawerAppBar(props) {
  const { window } = props;
  const navigate = useNavigate(); // Používame useNavigate pre navigáciu
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClickOpenDialog = () => {
    if (!openDialog) {
      setOpenDialog(true); // Otvorí dialóg len ak nie je už otvorený
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleLogin = () => {
    // Tu môžeme spracovať prihlasovanie (napr. overenie údajov)
    console.log("Prihlasovanie úspešné!");

    // Presmerovanie na stránku profilu
    navigate("/profile"); // Presmerovanie na stránku Profile (možnosť upraviť podľa tvojich požiadaviek)
    handleCloseDialog(); // Zavretie dialógu
  };

  const handleCheckboxChange = (event) => {
    setRememberMe(event.target.checked); // Ukladá stav zaškrtnutia checkboxu
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Ukladá email
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Ukladá heslo
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
       
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          padding: "8px",
          backgroundColor: "#141414",
          boxShadow: "none",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1, textAlign: "center" }}>
            {navItems.map((item) => (
              <Button key={item.text} component={Link} to={item.path} sx={{ color: "#fff" }}>
                {item.text}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                borderWidth: 2,
                boxShadow: "none",
                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "none",
                },
              }}
              onClick={handleClickOpenDialog}
            >
              Prihlásiť sa
            </Button>
            <ToggleThemeButton />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* Dialog pre prihlásenie s animáciou */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={(props) => <Slide direction="up" {...props} />}
      >
        <DialogTitle>Prihlásiť sa</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={handleEmailChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            id="password"
            label="Heslo"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={handlePasswordChange}
            sx={{ mb: 2 }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={handleCheckboxChange}
                sx={{
                  color: rememberMe ? "#4CAF50" : "",
                }}
              />
            }
            label="Zapamätať prihlásenie"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Zrušiť
          </Button>
          <Button
            onClick={handleLogin}
            color="primary"
            sx={{
              backgroundColor: "#C20E4D",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#A1073A",
              },
            }}
          >
            Prihlásiť sa
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}