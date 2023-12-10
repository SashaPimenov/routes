import React from "react";
import "./onePlaceComponentMap.css";

interface IProp {
  id: number;
  title: string;
  description: string;
  setOpenFunc?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OnePlaceComponentMap({
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
                <div className={"tag"}>Музей</div>
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
              src={require("../../assets/ermitage.png")}
              alt="фото"
            />
          </div>
        </div>
      </div>
    </>
  );
}
