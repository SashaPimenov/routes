import React, { useEffect, useState } from "react";
import { Map } from "@pbe/react-yandex-maps";
import { GeolocationControl } from "@pbe/react-yandex-maps";
import { ZoomControl, Placemark } from "@pbe/react-yandex-maps";

interface IProp {
  width: string;
  height: string;
}

function YaMap({ width, height }: IProp) {
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
    console.log(mapState);

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
          console.log("result", result);
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

  return (
    <Map
      width={width}
      height={height}
      defaultState={{ center: [55.75, 37.57], zoom: 9 }}
      state={mapState}
    >
      <GeolocationControl options={{ float: "left" }} />
      <ZoomControl options={{ position: { right: 5, top: 50 } }} />
      <Placemark geometry={mapState.center} />
    </Map>
  );
}

export default YaMap;
