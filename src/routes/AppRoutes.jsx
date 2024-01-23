import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hello } from "../../pages/Hello";
import { Landing } from "../pages/Landing/Landing";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <h1> HOLA </h1>} />
            <Route path="/cakita" element={ <Hello/> } />
            <Route path="/yo" element={<Landing/>} />
        </Routes>
    </BrowserRouter>
  )
}
