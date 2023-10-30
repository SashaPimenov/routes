import React from "react";

export default function OneRoutComponent() {
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "black",
        width: 150,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ backgroundColor: "gray", height: "60%" }}></div>
      <div style={{ backgroundColor: "white", height: "40%" }}></div>
    </div>
  );
}
