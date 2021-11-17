import React, { useState, useEffect, Context } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Basket from "./pages/Basket";
import { AppContext } from "./context";

function App() {
  const [basketMovies, setBasketMovies] = useState([]);
  const contextItem = {
    basketMovies,
    setBasketMovies,
  };

  return (
    <AppContext.Provider value={contextItem}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/basket">
              <Basket />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
