import React from "react";
import "./App.css";
import { HomePage } from "./pages/Home";
import { CatalogPage } from "./pages/Catalog";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pages } from "./common/constants/enums/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Pages.Home} element={<HomePage />} />
        <Route path={Pages.Catalogs} element={<CatalogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
