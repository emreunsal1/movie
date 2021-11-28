import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import BasketPage from "./pages/BasketPage";
import { ContextProvider } from "./context";
import "./style/reset.scss";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      secondary: {
        light: "#ff55a5",
        main: "#ff55a5",
        dark: "#ff55a5",
        contrastText: "#ff55a5",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/basket">
              <BasketPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </Router>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
