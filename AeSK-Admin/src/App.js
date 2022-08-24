import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Eng from "./pages/meberships/Eng";
import Society from "./pages/meberships/Society";
import Nominations from "./pages/nominations/Nominations";
import Events from "./pages/events/Events";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import { ProtectedRoutes } from "./components/sidebar/ProtectedRoutes";

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users" element={<List />} />
            <Route path="memberships" element={<Eng />} />
            <Route path="society" element={<Society />} />
            <Route path="events" element={<Events />} />
            <Route path="nominations" element={<Nominations />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
