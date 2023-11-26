import "./oneThematicPage.css";
import OneRoutComponent from "../../components/forMainPage/oneRoutComponent";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { MapIconComponent } from "../../components/forAllAndOneThematicPage/MapIconComponent/MapIconComponent";
import { HeaderThematicComponent } from "../../components/forAllAndOneThematicPage/HeaderThematicComponent/HeaderThematicComponent";

export default function OneThematicPage() {
  return (
    <div className="wrapper_main">
      <HeaderThematicComponent
        route={"/allThematic"}
        label={"Тематические маршруты"}
      />

      <div className="bodyStyle">
        <div className="nameAndFilterDiv">
          <div style={{ flex: "0.8" }}>
            <p className="headerText">Свидания</p>
          </div>
          <div className="filterDiv">
            <SortOutlinedIcon sx={{ color: "#6750A4" }} />
            <TuneOutlinedIcon sx={{ color: "#6750A4" }} />
          </div>
        </div>
        <div className="routesGridDiv">
          {[1, 2, 3, 4, 5, 6].map((e, index) => (
            <OneRoutComponent
              key={index}
              id="1"
              title="Маршрут по стрит-арту"
              description="Лорем ипсум долор сит амет, консект"
            />
          ))}
        </div>
      </div>
      <MapIconComponent />
    </div>
  );
}
