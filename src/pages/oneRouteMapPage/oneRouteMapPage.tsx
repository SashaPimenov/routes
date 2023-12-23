import Sheet, { SheetRef } from "react-modal-sheet";
import { useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import YaMapOneRoute from "../../components/YaMapOneRoute";
import "./oneRouteMapPage.css";
import { OnePlaceComponent } from "../../components/onePlaceComponent";

export const OneRouteMapPage = () => {
  const [isOpen, setOpen] = useState(true);

  const [pull, setPull] = useState(false);
  const ref = useRef<SheetRef>();
  return (
    <>
      <a href={"/main"} className="backDiv">
        <ArrowBackIcon
          className="arrowIcon"
          sx={{ height: "30px", width: "30px" }}
        />
      </a>
      <YaMapOneRoute width="100vw" height="100vh" zoomControl={true} />
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
              <div style={{ margin: "0 auto", fontWeight: 400, fontSize: 22 }}>
                Показать 4 места
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
                {[1, 2, 3, 4].map((e, index) => (
                  <OnePlaceComponent key={index} numberPlace={index + 1} />
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
  );
};
