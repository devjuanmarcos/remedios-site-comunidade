import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Footer from "components/Footer";
import Home from "pages/Home";
import Menu from "components/Menu";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rola a página para o topo quando a rota muda
  }, [pathname]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <ScrollToTop />

        <Routes>
          <Route
            path='/'
            element={<Home />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path='about'
              element={<Home />}
            />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
