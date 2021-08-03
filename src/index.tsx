import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, StyledEngineProvider } from "@material-ui/core/styles";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import theme from "theme";
import "util/firebase";

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
