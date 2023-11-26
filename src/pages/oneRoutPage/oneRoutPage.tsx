import "./oneRoutPage.css";
import { HeaderThematicComponent } from "../../components/forAllAndOneThematicPage/HeaderThematicComponent/HeaderThematicComponent";
import { MapIconComponent } from "../../components/forAllAndOneThematicPage/MapIconComponent/MapIconComponent";
import YaMap from "../../components/YaMap";
import { Button } from "@mui/material";

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

      <div className="descriptionAndTagsDiv">
        <div className="descriptionDiv">
          <p className="descriptionText">
            Однозначно, тщательные исследования конкурентов набирают
            популярность среди определенных слоев населения, а значит, должны
            быть указаны как претенденты на роль ключевых факторов. Как принято
            считать, базовые сценарии поведения пользователей объективно
            рассмотрены соответствующими инстанциями!
          </p>
        </div>
        <div className="tagsDiv">
          <p className="tagsText">тег</p>
          <p className="tagsText">тег</p>
        </div>
      </div>

      <p className="headerText">Места в маршруте:</p>
      <div className="placesInRoutsDiv">
        {[1, 2, 3, 4].map((e, index) => (
          <div className="onePlaceInRoutsDiv">
            <div className="numberPlaceDiv">
              <div className="circleNumberDiv">
                <p>1</p>
              </div>
            </div>
            <div className="infoPlaceDiv">
              <div className="headerInfoPlaceDiv">
                <p>Header</p>
              </div>
              <div className="imageInfoPlaceDiv">
                <p>Картинка</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="goRoutButtonDiv">
        <Button
          variant="outlined"
          style={{
            width: "90%",
            height: "40px",
            alignSelf: "center",
            backgroundColor: "#A43B2C",
            borderColor: "#A43B2C",
            borderRadius: 28,
            textTransform: "none",
          }}
        >
          <p className="ratingButtonText">Пройти маршрут</p>
        </Button>
      </div>
      <MapIconComponent />
    </div>
  );
};
