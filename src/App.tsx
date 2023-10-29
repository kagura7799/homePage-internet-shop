import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import Product from "./pages/Product";
import Services from "./pages/Services";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pages } from "./common/constants/enums/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Pages.Home} element={<Home />} />
        <Route path={Pages.Catalogs} element={<Catalog />} />
        <Route path={Pages.Product} element={<Product />} />
        <Route path={Pages.Services} element={<Services />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
