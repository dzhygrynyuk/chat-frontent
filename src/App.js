import React from "react";
import {Routes, Route} from 'react-router-dom';

import { Auth, Home } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact path="/" element={<Auth />} />
        <Route exact path="/login" element={<Auth />} />
        <Route exact path="/register" element={<Auth />} />
        <Route exact path="/im" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
