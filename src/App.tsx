import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Example from "./components/pages/Example";
import Map from "./components/map/Map";
import Home from "./components/pages/Home";
import NoPage from "./components/pages/NoPage";
import Nav from "./components/navigation/Nav";

function App() {
  console.log("App.render()");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/example" element={<Example />} />
            <Route path="/map" element={<Map />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
