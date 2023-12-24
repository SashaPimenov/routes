import "./map-page.css";
import YaMap from "../../components/YaMap";
import Sheet, { SheetRef } from "react-modal-sheet";
import { useEffect, useRef, useState } from "react";
import OnePlaceComponentMap from "../../components/forMapPage/OnePlaceComponentMap";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PlaceInfoModal from "../../components/placeInfoModal/placeInfoModal";
import { RatingSheet } from "../../components/ratingSheet";
import axios from "axios";
import { BAZE_URL } from "../../api/BAZE_URL";
import { CircularProgress } from "@mui/material";

export default function MapPage() {
  const [isOpen, setOpen] = useState(true);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);

  const [pull, setPull] = useState(false);
  const ref = useRef<SheetRef>();
  const ref2 = useRef<SheetRef>();

  const [mapState, setMapState] = useState<any>({
    center: [60.4626680961914, 56.7711281543],
    zoom: 9,
  });

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const success = async (pos: any) => {
    const crd = pos.coords;
    setMapState({ center: [crd.latitude, crd.longitude], zoom: 9 });

    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
  };

  function errors(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    setMapState({ center: [59, 31], zoom: 11 });

    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            const a = navigator.geolocation.getCurrentPosition(
              success,
              errors,
              options
            );
          } else if (result.state === "prompt") {
            //If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const [routePlacemarks, setRoutePlacemarks] = useState<any>([]);
  const [places, setPlaces] = useState<any>([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    getPlaces();
  }, []);

  const getPlaces = async () => {
    try {
      const req = await axios.get(
        `${BAZE_URL}api/placemark/nearest?latitude=${mapState.center[0]}&longitude=${mapState.center[1]}`,
        {
          withCredentials: true,
        }
      );
      const data = await req.data;
      if (req.status >= 200 && req.status < 299) {
        setPlaces(data.list);
        console.log(data.list);
      }
    } finally {
      setIsLoad(false);
    }
  };

  return (
    <>
      <a href={"/main"} className="backDiv">
        <ArrowBackIcon
          className="arrowIcon"
          sx={{ height: "40px", width: "40px" }}
        />
      </a>
      <YaMap width={"100vw"} height={"100vh"} zoomControl={true} />
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
            {isLoad ? (
              <CircularProgress />
            ) : (
              places.map((e: any, index: any) => (
                <div style={{ marginTop: "10px" }} key={index}>
                  <OnePlaceComponentMap
                    attachmentId={e.attachmentId}
                    title={e.name}
                    description="Лорем ипсум долор сит амет, консект"
                    setOpenFunc={setOpen2}
                  />
                </div>
              ))
            )}
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
