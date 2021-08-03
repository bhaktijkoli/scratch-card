import { createTheme } from "@material-ui/core/styles";

export default createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7b68ee",
      dark: "#5f48ea",
    },
    background: {
      paper: "#ffffff",
      default: "#fefefe",
    },
  },
  typography: {
    fontFamily: "'Raleway', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
});
