import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#eeb06e",
    },
    secondary: {
      main: "#BB5443",
      dark: "#261937",
    },
    background: {
      default: "#F3F4E8",
    },
    error: {
      main: "#f44336",
    },
    info: {
      main: "#261937",
    },
    success: {
      main: "#7daf59",
    },
    warning: {
      main: "#fa9f21",
    },
  },
});

export default theme;
