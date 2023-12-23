import "./main-page.css";
import { MapIconComponent } from "../../components/forAllAndOneThematicPage/MapIconComponent/MapIconComponent";
import { PersonalRoutes } from "../../components/forMainPage/personalRoutes/personalRoutes";
import { ThematicRoutes } from "../../components/forMainPage/thematicRoutes/thematicRoutes";
import { CardComponent } from "../../components/forMainPage/cardComponent/cardComponent";
import { MainHeaderComponent } from "../../components/forMainPage/mainHeaderComponent/mainHeaderComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function MainPage() {
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const navigateFunc = () => {
    navigate("auth");
  };
  return (
    <div className="wrapper_main">
      <MainHeaderComponent />
      <PersonalRoutes nav={navigateFunc} />
      <ThematicRoutes />
      <CardComponent />
      <MapIconComponent />
    </div>
  );
}
