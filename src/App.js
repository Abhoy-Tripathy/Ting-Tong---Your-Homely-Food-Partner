import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import components
//import NavBar2 from "./components/Navbar2.js";
import NavBar from "./components/Navbar.jsx";
import SearchBar from "./components/SearchBar";
import Home from "./components/Home";
import OrderFood from "./components/OrderFood";
import ChefSignUp from "./components/ChefSignUp";
import AboutUs from "./components/AboutUs";
import OurPromise from "./components/OurPromise";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main">
        <SearchBar />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/OrderFood" component={OrderFood} />
        <Route path="/ChefSignUp" component={ChefSignUp} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/OurPromise" component={OurPromise} />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
