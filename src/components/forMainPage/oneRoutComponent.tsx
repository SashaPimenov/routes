import React from "react";
import "./oneRoutComponent.css";

interface IProp {
  id: string;
  title: string;
  description: string;
}
export default function OneRoutComponent({ id, title, description }: IProp) {
  return (
    <>
      <a href={"personality/" + id} style={{ textDecoration: "none" }}>
        <div className="oneRoute">
          <div className="oneRouteDiv">
              <img className={"oneRouteDivImage"} src={require("../../assets/ekb.jpg")}/>
          </div>
          <div className="card">
            <div className="headerCard">
              <div className={"characterRoute"}>
                <div className={"routeTimeAndDistance mrouteTime"}>2 часа</div>
                <div className={"routeTimeAndDistance routeDistance"}>10 км</div>
              </div>
              <p className="headerCardText">{title}</p>
            </div>
            <div className="footerCard">
              <p className="footerCardText">{description}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
