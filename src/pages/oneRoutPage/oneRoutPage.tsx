import "./oneRoutPage.css";
import { HeaderThematicComponent } from "../../components/forAllAndOneThematicPage/HeaderThematicComponent/HeaderThematicComponent";
import { Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { BAZE_URL } from "../../api/BAZE_URL";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { RatingSheet } from "../../components/ratingSheet";
import { OnePlaceComponent } from "../../components/onePlaceComponent";
import axios from "axios";
import { useParams } from "react-router-dom";
import YaMapOneRoute from "../../components/YaMapOneRoute";

type Props = {};
export const OneRoutPage = (props: Props) => {
  const [routInfo, setRoutInfo] = useState<any>({});
  const [isLoad, setIsLoad] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { id } = useParams();

  const getData = async () => {
    try {
      const req = await axios.get(`${BAZE_URL}api/journey/short/${id}`, {
        withCredentials: true,
      });
      const data = await req.data;
      console.log(data);

      if (req.status >= 200 && req.status < 299) {
        setRoutInfo(data);
        console.log(data);
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
    getData();
  }, []);
  return (
    <div className="mainDivOneRoutPage">
      <HeaderThematicComponent
        route={"/thematics"}
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
                {routInfo.name}
              </p>
              <p style={{ margin: "0" }}>
                {routInfo.placemarks.length} точки остановки
              </p>
            </div>
            <div
              className="oneRoutHeaderRatingDiv"
              onClick={() => setIsOpen(true)}
            >
              <StarBorderIcon style={{ alignSelf: "center" }} />
              <div className={"namePlace gradePlace"}>4.8</div>
            </div>
          </div>
          <div className="mapOneRoutPage">
            <YaMapOneRoute
              placemarks={routInfo.placemarks}
              width="90vw"
              height="23vh"
              zoomControl={true}
            />
          </div>

          <div className="descriptionAndTagsDiv">
            <div className="descriptionDiv">
              <p className="descriptionText">{routInfo.description}</p>
            </div>
            <div className="tagsDiv">
              <div className={"tag"}>4 часа</div>
              <div className={"tag"}>25 км</div>
            </div>
          </div>

          <p className="headerText">Места в маршруте:</p>
          <div className="placesInRoutsDiv">
            {routInfo.placemarks.map((e: any, index: any) => (
              <OnePlaceComponent
                placemarkAttachmentId={e.attachmentId}
                name={e.name}
                key={index}
                numberPlace={index + 1}
              />
            ))}
          </div>
          <a
            href="/routemap/1"
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
      <RatingSheet
        value={isOpen}
        setValue={setIsOpen}
        label={"Как вам этот маршрут?"}
      />
    </div>
  );
};
