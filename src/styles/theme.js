import { createTheme } from "@mui/material/styles";
import { color } from "chart.js/helpers";

const theme = createTheme({
  palette: {
    mode: "light", // Keep this "light", or make it "dark" for a dark theme
    primary: {
      main: "#3f51b5", // Elegant blue (you can also try #2F80ED or #4a90e2)
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#00bfa5", // Modern teal (complements blue nicely)
      contrastText: "#ffffff",
    },
    background: {
      default: "#f7f9fc", // Lighter than your previous background
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a", // Dark gray instead of pure black
      secondary: "#555", // Slightly muted secondary text
    },
    error: {
      main: "#e53935",
    },
    success: {
      main: "#43a047",
    },
    warning: {
      main: "#ffa000",
    },
    info: {
      main: "#2196f3",
    },
    divider: "#e0e0e0", // Subtle divider lines
  },

  typography: {
    fontFamily: "'Inter', 'Poppins', sans-serif", // Inter is super clean and modern
    h1: {
      fontSize: "2.75rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h2: {
      fontSize: "2.3rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 500,
    },
    error: {
      fontSize: "1.125rem",
      fontWeight: 500,
      color: "red",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#666",
    },
    body1: {
      fontSize: "0.95rem",
      lineHeight: 1.6,
      color: "#333",
    },
    body2: {
      fontSize: "0.85rem",
      lineHeight: 1.5,
      color: "#666",
    },
    button: {
      textTransform: "none", // modern buttons (no uppercase)
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 12, // Smooth rounded corners
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "8px 16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        },
      },
    },
  },
});

export default theme;
