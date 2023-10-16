import React, {useRef, useEffect, useState} from 'react';
import { Map} from '@pbe/react-yandex-maps';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { FullscreenControl } from '@pbe/react-yandex-maps';
import { GeolocationControl } from '@pbe/react-yandex-maps';
import { SearchControl } from '@pbe/react-yandex-maps';
import { ZoomControl } from '@pbe/react-yandex-maps';

function YaMap() {
  const { height, width } = useWindowDimensions();
  const mapRef = useRef()
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(pos:any) {
    var crd = pos.coords;
    // if (mapRef.current) {
    //     mapRef.current.setCenter([crd.latitude, crd.longitude])
    // }
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function errors(err:any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
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
    <Map width={width*0.8} height={height*0.8} state={{ center: [55.75, 37.57], zoom: 9 }}>
        <FullscreenControl/>
        <GeolocationControl options={{ float: "left" }} />
        <SearchControl options={{ float: "right" }} />
        <ZoomControl options={{position: { right: 5, top: 50} }} />
    </Map>
  );
}

export default YaMap;
