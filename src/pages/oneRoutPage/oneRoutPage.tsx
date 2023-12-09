import "./oneRoutPage.css";
import { HeaderThematicComponent } from "../../components/forAllAndOneThematicPage/HeaderThematicComponent/HeaderThematicComponent";
import { MapIconComponent } from "../../components/forAllAndOneThematicPage/MapIconComponent/MapIconComponent";
import YaMap from "../../components/YaMap";
import { Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { BAZE_URL } from "../../api/BAZE_URL";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import image from "../../assets/ekb.jpg";
type Props = {};
export const OneRoutPage = (props: Props) => {
  const [routInfo, setRoutInfo] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      const req = await fetch(`${BAZE_URL}/`, {
        method: "GET",
      });
      const data = await req.json();
      if (req.status >= 200 && req.status < 299) {
        setRoutInfo(data);
      } else {
        setIsError(true);
      }
    } catch (e) {
      console.log(e);
      setIsError(true);
    } finally {
      setIsLoad(false);
    }
  };

  useEffect(() => {
    // getData();
  }, []);
  return (
    <div className="mainDivOneRoutPage">
      <HeaderThematicComponent
        route={"/allThematic"}
        label={"Описание маршрута"}
      />
      {isLoad ? (
        <div
          style={{
            height: "50vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="oneRoutHeaderTextDiv">
            <div className="oneRoutHeaderNameDiv">
              <p className="headerText" style={{ margin: "0" }}>
                Маршрут по стрит-арту
              </p>
              <p style={{ margin: "0" }}>4 точки остановки</p>
            </div>
            <div className="oneRoutHeaderRatingDiv">
              <StarBorderIcon style={{ alignSelf: "center" }} />
              <div className={"namePlace gradePlace"}>4.8</div>
            </div>
          </div>
          <div className="mapOneRoutPage">
            <YaMap width="90vw" height="23vh" zoomControl={false} />
          </div>

          <div className="descriptionAndTagsDiv">
            <div className="descriptionDiv">
              <p className="descriptionText">
                Однозначно, тщательные исследования конкурентов набирают
                популярность среди определенных слоев населения, а значит,
                должны быть указаны как претенденты на роль ключевых факторов.
                Как принято считать, базовые сценарии поведения пользователей
                объективно рассмотрены соответствующими инстанциями!
              </p>
            </div>
            <div className="tagsDiv">
              <div className={"tag"}>4 часа</div>
              <div className={"tag"}>25 км</div>
            </div>
          </div>

          <p className="headerText">Места в маршруте:</p>
          <div className="placesInRoutsDiv">
            {[1, 2, 3, 4].map((e, index) => (
              <div key={index} className="onePlaceInRoutsDiv">
                <div className="numberPlaceDiv">
                  <div className="circleNumberDiv">
                    <p>{index + 1}</p>
                  </div>
                </div>
                <div className="infoPlaceDiv">
                  <div className="headerInfoPlaceDiv">
                    <p className="headerInfoPlaceText">Header</p>
                  </div>
                  <div className="imageInfoPlaceDiv">
                    <img src={image} className="imageStyle" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            href="/map"
            className="goRoutButtonDiv"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="outlined"
              style={{
                width: "90%",
                height: "40px",
                alignSelf: "center",
                backgroundColor: "#304FD9",
                borderRadius: 28,
                textTransform: "none",
              }}
            >
              <p className="ratingButtonText">Пройти маршрут</p>
            </Button>
          </a>
        </>
      )}
    </div>
  );
};
