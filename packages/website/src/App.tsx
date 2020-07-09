import React from "react";
import { Routes } from "./routes";
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";

const darkMuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#202124",
    },
    secondary: {
      main: "#202124",
      light: "#41331C",
    },
    background: {
      default: "#fcfcfc",
    },
    text: {
      primary: "#202123",
      secondary: "#111112",
    },
  },
  typography: {
    overline: {
      fontWeight: 500,
      fontSize: "0.7rem",
    },
  },
  shape: {
    borderRadius: 2,
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {},
    },
    MuiListItemText: {
      primary: {
        fontWeight: 500,
        fontSize: "0.87rem",
      },
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkMuiTheme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
