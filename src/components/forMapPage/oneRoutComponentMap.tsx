import React, { useRef, useState } from "react";
import "./oneRoutComponentMap.css";

interface IProp {
  id: number;
  title: string;
  description: string;
  setOpenFunc?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OneRoutComponentMap({
  id,
  title,
  description,
  setOpenFunc,
}: IProp) {
  return (
    <>
      <div
        className="wrapperOneRouteMap"
        onClick={() => (setOpenFunc ? setOpenFunc(true) : null)}
      >
        <div className="oneRouteMap">
          <div className="cardMap">
            <div className="headerCardMap">
              <div className={"characterRouteMap"}>
                <div className={"routeTimeAndDistanceMap routeTimeMap"}>
                  2 часа
                </div>
                <div className={"routeTimeAndDistanceMap routeDistanceMap"}>
                  10 км
                </div>
              </div>
              <p className="headerCardTextMap">{title}</p>
            </div>
            <div className="footerCardMap">
              <p className="footerCardTextMap">{description}</p>
            </div>
          </div>
          <div className="oneRouteDivMap">
            <img
              className={"oneRouteDivImageMap"}
              src={require("../../assets/ekb.jpg")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
