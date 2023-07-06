import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import FavoriPage from "../pages/FavoriPage";
import ContactPage from "../pages/ContactPage";
import MainLayouts from "../layouts/MainLayouts";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about_page" element={<AboutUsPage />} />
        <Route path="/favori" element={<FavoriPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
