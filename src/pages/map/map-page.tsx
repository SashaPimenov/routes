import "./map-page.css";
import YaMap from "../../components/YaMap";
import Sheet, { SheetRef } from "react-modal-sheet";
import React, { useRef, useState } from "react";
import OneRoutComponentMap from "../../components/forMapPage/oneRoutComponentMap";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Rating } from "@mui/material";
import PlaceInfoModal from "../../components/placeInfoModal/placeInfoModal";

const personality = [
  {
    title: "Семейный отдых на Плотинке",
    description: "Лорем ипсум долор сит амет, консект",
    id: 1,
  },
  {
    title: "Маршрут по стрит-арту",
    description: "Лорем ипсум долор сит амет, консект",
    id: 2,
  },
  {
    title: "Ology",
    description: "Galant",
    id: 3,
  },
  {
    title: "Ology",
    description: "Galant",
    id: 4,
  },
  {
    title: "Ology",
    description: "Galant",
    id: 5,
  },
];

export default function MapPage() {
  const [isOpen, setOpen] = useState(true);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [ratingValue, setRatingValue] = useState<number | null>(0);

  const [pull, setPull] = useState(false);
  const ref = useRef<SheetRef>();
  const ref2 = useRef<SheetRef>();
  const ref3 = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);

  return (
    <>
      <a
        href={"/"}
        style={{ position: "absolute", left: "10px", top: "50px", zIndex: 100 }}
      >
        <ArrowBackIcon
          className="arrowIcon"
          sx={{ height: "40px", width: "40px" }}
        />
      </a>
      <YaMap width={"100vw"} height={"100vh"} zoomControl={true} />

      {/* Opens to 400 since initial index is 1 */}
      <Sheet
        ref={ref}
        isOpen={isOpen}
        onClose={() => null}
        snapPoints={[800, 700, 600, 200]}
        initialSnap={3}
        onSnap={(snapIndex) =>
          snapIndex == 3 ? setPull(true) : setPull(false)
        }
      >
        <Sheet.Container style={{ borderRadius: 30 }}>
          <Sheet.Content>
            <div className="bottomIconDiv"></div>

            {pull ? (
              <div style={{ margin: "0 auto", fontWeight: 500, fontSize: 22 }}>
                Показать места
              </div>
            ) : (
              <div></div>
            )}
            {personality.map((e, index) => (
              <div style={{ marginTop: "10px" }}>
                <OneRoutComponentMap
                  title={e.title}
                  id={e.id}
                  description={e.description}
                  setOpenFunc={setOpen2}
                />
              </div>
            ))}
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
      <Sheet
        ref={ref2}
        isOpen={isOpen2}
        onClose={() => setOpen2(false)}
        snapPoints={[800, 700, 0]}
        initialSnap={1}
      >
        <Sheet.Container style={{ borderRadius: 30 }}>
          <Sheet.Content>
            <div className="bottomIconDiv"></div>
            <PlaceInfoModal setOpenFunc={setOpen3} />
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
      <Sheet
        ref={ref3}
        isOpen={isOpen3}
        onClose={() => setOpen3(false)}
        snapPoints={[250, 0]}
        initialSnap={0}
      >
        <Sheet.Container style={{ borderRadius: 30 }}>
          <Sheet.Content>
            <div className="bottomIconDiv"></div>
            <div style={{ paddingLeft: "5%" }}>
              <p className="ratingSheetText">Как вам это место?</p>
              <div className="ratingDiv">
                <Rating
                  size="large"
                  value={ratingValue}
                  onChange={(event, newValue) => {
                    setRatingValue(newValue);
                  }}
                />
              </div>

              <div className="ratingButtonDiv">
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
                  <p
                    className="ratingButtonText"
                    onClick={() => setOpen3(false)}
                  >
                    Поставить оценку
                  </p>
                </Button>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
}
