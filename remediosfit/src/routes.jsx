import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// import Footer from "components/Footer";
import Home from "pages/Home";
import Menu from "components/Menu";
import Dexfit from "pages/Remedys/Dexfit";
import Maeslim from "pages/Remedys/Maeslim";
import DetoxBlack from "pages/Remedys/DetoxBlack";
import MaeSlimTemp from "pages/Remedys/temp";

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
          </Route>
          <Route
            path='dexfit'
            element={<Dexfit />}
          />
          <Route
            path='maeslim'
            element={<Maeslim />}
          />
          <Route
            path='maeslimTemp'
            element={<MaeSlimTemp />}
          />
          <Route
            path='detoxblack'
            element={<DetoxBlack />}
          />
          <Route
            path='*'
            element={<Home />}
          />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}
