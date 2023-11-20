import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/main-page";
import MapPage from "./pages/map/map-page";
import LoginPage from "./pages/loginPage/login-page";
import { YMaps } from "@pbe/react-yandex-maps";
import AllThematicPage from "./pages/allThematicPage/allThematicPage";
import OneThematicPage from "./pages/oneThematicPage/oneThematicPage";
import OnePersonalityRoutePage from "./pages/onePersonalityRoutPage/onePersonalityRoutPage";
import { OneRoutPage } from "./pages/oneRoutPage/oneRoutPage";
import ProfilePage from "./pages/profilePage/profilePage";

function App() {
  const API_KEY = "f4d6eefc-40f3-4387-bd4a-9e1bb6bd81da";
  return (
    <>
      <YMaps query={{ apikey: API_KEY }}>
        <div className="main">
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="map" element={<MapPage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>
            <Route path="allthematic" element={<AllThematicPage />}></Route>
            <Route path="thematic/:id" element={<OneThematicPage />}></Route>
            <Route path="route/:id" element={<OneRoutPage />}></Route>
            <Route path="profile" element={<ProfilePage />}></Route>
            <Route
              path="personality/:id"
              element={<OnePersonalityRoutePage />}
            ></Route>
          </Routes>
        </div>
        {/* <div className="sideBar">
          <div>
            <a href={`/map`}>map</a>
          </div>
          <div>
            <a href={`/login`}>login</a>
          </div>
        </div> */}
      </YMaps>
    </>
  );
}

export default App;
