import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages";
import { Menu } from "../Components";

function RouterApp() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default RouterApp;
