import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Logincomponents from "./components/Logincomponents";
import Usersettingcomponents from "./components/Usersettingcomponents";
import Userdetailcomponents from "./components/Userdetailcomponents";
import Coursedetailcomponents from "./components/Coursedetailcomponents";
import Logintest from "./components/Logintest";
import Ktmcomponents from "./components/Ktmcomponents";
import Languagecomponents from "./components/Languagecomponents";
import Apitest from "./components/Apitest";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Logincomponents />} />
          <Route path="/usersetting" element={<Usersettingcomponents />} />
          <Route path="/userdetail" element={<Userdetailcomponents />} />
          <Route path="/coursedetail" element={<Coursedetailcomponents />} />
          <Route path="/ktm" element={<Ktmcomponents />} />
          <Route path="/language" element={<Languagecomponents />} />
          <Route path="/logintest" element={<Logintest />} />
          <Route path="/apitest" element={<Apitest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
