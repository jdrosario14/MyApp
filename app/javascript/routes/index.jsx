import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Airlines from "../components/Airlines/Airlines";
import Airline from "../components/Airline/Airline";
import Home from "../components/Home";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/airlines" element={<Airlines />} />
      <Route path="/airlines/:slug" element={<Airline />} />
    </Routes>
  </Router>
);
