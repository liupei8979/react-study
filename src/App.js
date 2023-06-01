import React from "react";
import {Routes, Route,Link} from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      </nav>
      <Home />
    </div>
  );
}

export default App;
