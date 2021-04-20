import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Cars from "./components/Cars/Cars";
import CarAddForm from "./components/CarAddForm/CarAddForm";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/">Car list</Link>
            <span> | </span>
            <Link to="/car/add">add car</Link>
          </nav>
          <Switch>
            <Route path="/car/add">
              <CarAddForm />
            </Route>
            <Route path="/">
              <Cars />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
