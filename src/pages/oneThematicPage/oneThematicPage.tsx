import React from "react";
import { useParams } from "react-router-dom";

export default function OneThematicPage() {
  const { id } = useParams();
  return (
    <div className="wrapper_main">
      <p>Страница тематики {id}</p>
    </div>
  );
}
