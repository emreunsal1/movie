import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import BasketPage from "./pages/BasketPage";
import { ContextProvider } from "./context";
import "./style/reset.scss";

function App() {
  return (
    <ContextProvider>
      <div className="title-jpg">
        <div className="image-container"></div>
      </div>
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
  );
}

export default App;
