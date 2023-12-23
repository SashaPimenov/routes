import React, { useEffect } from "react";
import { Map, Placemark } from "@pbe/react-yandex-maps";
import { GeolocationControl } from "@pbe/react-yandex-maps";
import { ZoomControl } from "@pbe/react-yandex-maps";
import { useState } from "react";
import axios from "axios";
import { BAZE_URL } from "../api/BAZE_URL";

interface IProp {
  width: string;
  height: string;
  zoomControl: boolean;
  placemarks: any;
}

function YaMapOneRoute({ width, height, zoomControl, placemarks }: IProp) {
  const [mapState, setMapState] = useState<any>({
    center: [60.4626680961914, 56.7711281543],
    zoom: 9,
  });
  const [routePlacemarks, setRoutePlacemarks] = useState<any>([]);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const success = async (pos: any) => {
    const crd = pos.coords;
    setMapState({ center: [crd.latitude, crd.longitude], zoom: 9 });
    console.log(mapState);
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

  useEffect(() => {
    placemarks.map((e: any) => {
      getData(e);
    });
  });

  const getData = async (placemark: any) => {
    try {
      const req = await axios.get(
        `${BAZE_URL}api/attachment/${placemark.attachmentId}`,
        {
          responseType: "blob",
          withCredentials: true,
        }
      );
      const data = await req.data;
      if (req.status >= 200 && req.status < 299) {
        const imageUrl = URL.createObjectURL(data);
        let element = (
          <Placemark
            geometry={[placemark.longitude, placemark.latitude]}
            options={{
              iconLayout: "default#image",
              iconImageHref: imageUrl,
              iconImageSize: [32, 32],
            }}
          />
        );
        placemarks = routePlacemarks;
        placemarks.push(element);
        setRoutePlacemarks(placemarks);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Map
        width={width}
        height={height}
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
        state={mapState}
      >
        <GeolocationControl options={{ float: "left" }} />
        {zoomControl && (
          <ZoomControl options={{ position: { right: 5, top: 50 } }} />
        )}
        {routePlacemarks}
      </Map>
    </>
  );
}

export default YaMapOneRoute;
