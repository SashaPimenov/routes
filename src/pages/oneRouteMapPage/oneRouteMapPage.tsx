import Sheet, { SheetRef } from "react-modal-sheet";
import { useEffect, useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, CircularProgress } from "@mui/material";
import YaMapOneRoute from "../../components/YaMapOneRoute";
import "./oneRouteMapPage.css";
import { OnePlaceComponent } from "../../components/onePlaceComponent";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BAZE_URL } from "../../api/BAZE_URL";

export const OneRouteMapPage = () => {
  const [isOpen, setOpen] = useState(true);
  const [pull, setPull] = useState(false);
  const ref = useRef<SheetRef>();

  const [routInfo, setRoutInfo] = useState<any>({});
  const [isLoad, setIsLoad] = useState(true);
  const [isError, setIsError] = useState(false);

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
    <>
      <a href={"/main"} className="backDiv">
        <ArrowBackIcon
          className="arrowIcon"
          sx={{ height: "30px", width: "30px" }}
        />
      </a>
      {isLoad ? (
        <CircularProgress />
      ) : (
        <>
          <YaMapOneRoute
            placemarks={routInfo.placemarks}
            width="100vw"
            height="100vh"
            zoomControl={true}
          />
          <Sheet
            ref={ref}
            isOpen={isOpen}
            onClose={() => null}
            snapPoints={[600, 200, 100]}
            initialSnap={2}
            onSnap={(snapIndex) =>
              snapIndex == 2 ? setPull(true) : setPull(false)
            }
          >
            <Sheet.Container style={{ borderRadius: 30 }}>
              <Sheet.Content>
                <div className="bottomIconDiv"></div>
                {pull ? (
                  <div
                    style={{ margin: "0 auto", fontWeight: 400, fontSize: 22 }}
                  >
                    Показать {routInfo.placemarks.length} места
                  </div>
                ) : (
                  <div></div>
                )}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                    paddingBottom: "10%",
                  }}
                >
                  <div style={{ width: "90%" }}>
                    {routInfo.placemarks.map((e: any, index: any) => (
                      <OnePlaceComponent
                        placemarkAttachmentId={e.attachmentId}
                        name={e.name}
                        key={index}
                        numberPlace={index + 1}
                      />
                    ))}
                  </div>
                  <Button
                    variant="outlined"
                    style={{
                      width: "90%",
                      height: "40px",
                      marginTop: "10px",
                      alignSelf: "center",
                      backgroundColor: "#304FD9",
                      borderRadius: 28,
                      textTransform: "none",
                    }}
                  >
                    <p className="ratingButtonText">Пройти маршрут</p>
                  </Button>
                </div>
              </Sheet.Content>
            </Sheet.Container>
          </Sheet>
        </>
      )}
    </>
  );
};
