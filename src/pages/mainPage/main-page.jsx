import "./main-page.css";
import { MapIconComponent } from "../../components/forAllAndOneThematicPage/MapIconComponent/MapIconComponent";
import { PersonalRoutes } from "../../components/forMainPage/personalRoutes/personalRoutes";
import { ThematicRoutes } from "../../components/forMainPage/thematicRoutes/thematicRoutes";
import { CardComponent } from "../../components/forMainPage/cardComponent/cardComponent";
import { MainHeaderComponent } from "../../components/forMainPage/mainHeaderComponent/mainHeaderComponent";

export default function MainPage() {
  return (
    <div className="wrapper_main">
      <MainHeaderComponent />
      <PersonalRoutes />
      <ThematicRoutes />
      <CardComponent />
      <MapIconComponent />
    </div>
  );
}
