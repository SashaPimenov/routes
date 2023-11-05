import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/main-page";
import MapPage from "./pages/map/map-page";
import LoginPage from "./pages/loginPage/login-page";

function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="map" element={<MapPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Routes>
      </div>
      <div className="sideBar">
        <div>
          <a href={`/map`}>map</a>
        </div>
        <div>
          <a href={`/login`}>login</a>
        </div>
      </div>
    </>
  );
}

export default App;
