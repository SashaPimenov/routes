import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage/login-page";
import MainPage from "./pages/mainPage/main-page";
import MapPage from "./pages/map/map-page";
import { OneRoutPage } from "./pages/oneRoutPage/oneRoutPage";
import OneThematicPage from "./pages/oneThematicPage/oneThematicPage";
import ProfilePage from "./pages/profilePage/profilePage";
import { OneRouteMapPage } from "./pages/oneRouteMapPage/oneRouteMapPage";
import AllThematicPage from "./pages/allThematicPage/allThematicPage";
import { MainLayout } from "./pages/layout/mainLayout";

export const routes = createBrowserRouter([
  {
    path: "auth",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/main",
        element: <MainPage />,
      },
      {
        path: "/map",
        element: <MapPage />,
      },
      {
        path: "/route/:id",
        element: <OneRoutPage />,
      },
      {
        path: "thematics",
        element: <AllThematicPage />,
      },
      {
        path: "thematic/:id",
        element: <OneThematicPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "routemap/:id",
        element: <OneRouteMapPage />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <Navigate to={"/auth"} replace />,
  // },
]);
