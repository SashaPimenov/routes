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
          <div className="oneRouteDiv"></div>
          <div className="card">
            <div className="headerCard">
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
