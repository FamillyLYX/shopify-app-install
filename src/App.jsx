// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import Install from "./pages/Install";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Install />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
