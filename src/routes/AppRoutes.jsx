import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing/Landing";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Landing/>} />
        </Routes>
    </BrowserRouter>
  )
}
