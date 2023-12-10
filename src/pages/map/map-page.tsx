import "./map-page.css";
import YaMap from "../../components/YaMap";
import Sheet, { SheetRef } from "react-modal-sheet";
import { useRef, useState } from "react";
import OnePlaceComponentMap from "../../components/forMapPage/OnePlaceComponentMap";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PlaceInfoModal from "../../components/placeInfoModal/placeInfoModal";
import { RatingSheet } from "../../components/ratingSheet";

const personality = [
  {
    title: "Эрмитаж - Урал",
    description: "Лорем ипсум долор сит амет, консект",
    id: 1,
  },
  {
    title: "Каменные палатки",
    description: "Лорем ипсум долор сит амет, консект",
    id: 2,
  },
  {
    title: "Каменные палатки",
    description: "Galant",
    id: 3,
  },
  {
    title: "Эрмитаж - Урал",
    description: "Galant",
    id: 4,
  },
  {
    title: "Каменные палатки",
    description: "Galant",
    id: 5,
  },
];

export default function MapPage() {
  const [isOpen, setOpen] = useState(true);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);

  const [pull, setPull] = useState(false);
  const ref = useRef<SheetRef>();
  const ref2 = useRef<SheetRef>();

  return (
    <>
      <a href={"/"} className="backDiv">
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
              <div style={{ marginTop: "10px" }} key={index}>
                <OnePlaceComponentMap
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
      <RatingSheet
        value={isOpen3}
        setValue={setOpen3}
        label={"Как вам это место?"}
      />
    </>
  );
}
