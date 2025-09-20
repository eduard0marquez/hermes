import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./Pages";
import { Login, Menu } from "./Components";
import RutasProtegidas from "./routes/RutasProtegidas";
import RoutApp from "./routes/RoutApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <RutasProtegidas>
              <RoutApp />
            </RutasProtegidas>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
