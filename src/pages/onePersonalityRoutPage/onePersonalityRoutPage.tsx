import React from "react";
import { useParams } from "react-router-dom";

export default function OnePersonalityRoutePage() {
  const { id } = useParams();
  return (
    <div className="wrapper_main">
      <p>Страница личного маршрута {id}</p>
    </div>
  );
}
