import React, { useEffect, useState } from "react";
import { Map } from "@pbe/react-yandex-maps";
import { GeolocationControl } from "@pbe/react-yandex-maps";
import { ZoomControl, Placemark } from "@pbe/react-yandex-maps";

interface IProp {
  width: string;
  height: string;
}

function YaMap({ width, height }: IProp) {
  const placemarkes = [
    <Placemark geometry={[56.849408169094694, 60.62560809884134]} key={1} />,
    <Placemark geometry={[56.849408169094694, 60.62560809884134]} key={2} />,
    <Placemark geometry={[60.61393512520857, 56.8392482247621]} key={3} />,
    <Placemark geometry={[56.82908551131333, 60.57513965401714]} key={4} />,
    <Placemark geometry={[56.806654942814895, 60.65444721016947]} key={5} />,
    <Placemark geometry={[56.795918178259114, 60.59711231026716]} key={6} />,
    <Placemark geometry={[56.78612054209023, 60.65101398263044]} key={7} />,
    <Placemark geometry={[56.82209922508924, 60.55053098132779]} key={8} />,
    <Placemark geometry={[56.86476209736371, 60.55907382691396]} key={9} />,
    <Placemark geometry={[56.85987263303157, 60.52474155152334]} key={10} />,
    <Placemark geometry={[56.85987263303157, 60.68026675904286]} key={11} />,
    <Placemark geometry={[56.865890344157044, 60.63082828248034]} key={12} />,
    <Placemark geometry={[56.890139385800495, 60.54156436646476]} key={13} />,
  ];

  const [placemarks, setPlacemarks] = useState(placemarkes);
  const [userPlacemarks, setUserPlacemarks] = useState([]);
  const [mapState, setMapState] = useState<any>({
    center: [60.4626680961914, 56.7711281543],
    zoom: 9,
  });

  const handleMapClick = (event: any) => {
    const coordinates = event.get("coords");
    const placemarkId = `placemark-${placemarks.length}`;

    setPlacemarks([
      ...placemarks,
      <Placemark
        key={placemarkId}
        geometry={coordinates}
        properties={{
          balloonContentBody: `Метка ${placemarks.length}`,
          hintContent: `Метка ${placemarks.length}`,
        }}
      />,
    ]);
  };

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
      onClick={handleMapClick}
      width={width}
      height={height}
      defaultState={{ center: [55.75, 37.57], zoom: 9 }}
      state={mapState}
    >
      <GeolocationControl options={{ float: "left" }} />
      <ZoomControl options={{ position: { right: 5, top: 50 } }} />
      {placemarks}
    </Map>
  );
}

export default YaMap;
