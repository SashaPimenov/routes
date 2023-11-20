import "./oneRoutPage.css";
import { HeaderThematicComponent } from "../../components/forAllAndOneThematicPage/HeaderThematicComponent/HeaderThematicComponent";
import { MapIconComponent } from "../../components/forAllAndOneThematicPage/MapIconComponent/MapIconComponent";
import YaMap from "../../components/YaMap";

type Props = {};
export const OneRoutPage = (props: Props) => {
  return (
    <div className="mainDivOneRoutPage">
      <HeaderThematicComponent
        route={"/allThematic"}
        label={"Маршрут по стрит-арту"}
      />
      <div className="mapOneRoutPage">
        <YaMap width="90vw" height="23vh" zoomControl={false} />
      </div>
      <MapIconComponent />
    </div>
  );
};
