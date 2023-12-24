import React, { useEffect } from "react";
import { Map } from "@pbe/react-yandex-maps";
import { GeolocationControl } from "@pbe/react-yandex-maps";
import { ZoomControl, Placemark } from "@pbe/react-yandex-maps";
import { useState, useRef } from "react";
import placemarkIcon from "../assets/ekb.jpg";
import axios from "axios";
import { BAZE_URL } from "../api/BAZE_URL";

interface IProp {
  width: string;
  height: string;
  zoomControl: boolean;
}

function YaMap({ width, height, zoomControl }: IProp) {
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

  useEffect(() => {
    getPlaces();
  }, []);

  const getPlaces = async () => {
    const req = await axios.get(
      `${BAZE_URL}api/placemark/nearest?latitude=${mapState.center[0]}&longitude=${mapState.center[1]}`,
      {
        withCredentials: true,
      }
    );
    const data = await req.data;
    if (req.status >= 200 && req.status < 299) {
      setPlaces(data.list);
      data.list.map((e: any) => getImages(e));
    }
  };

  const getImages = async (placemark: any) => {
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
        try {
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
          let placemarks = routePlacemarks;
          placemarks.push(element);
          setRoutePlacemarks(placemarks);
        } catch {
          let element = (
            <Placemark
              geometry={[placemark.longitude, placemark.latitude]}
              options={{
                iconLayout: "default#image",
                iconImageHref: placemarkIcon,
                iconImageSize: [32, 32],
              }}
            />
          );
          let placemarks = routePlacemarks;
          placemarks.push(element);
          setRoutePlacemarks(placemarks);
        }
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

export default YaMap;
