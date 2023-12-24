import React, { useEffect, useState } from "react";
import "./onePlaceComponentMap.css";
import axios from "axios";
import { BAZE_URL } from "../../api/BAZE_URL";
import { CircularProgress } from "@mui/material";
import ermitage from "../../assets/ermitage.png";

interface IProp {
  attachmentId: number;
  title: string;
  description: string;
  setOpenFunc?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OnePlaceComponentMap({
  attachmentId,
  title,
  description,
  setOpenFunc,
}: IProp) {
  const [image, setImage] = useState<any>(null);
  const [isLoad, setIsLoad] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const req = await axios.get(`${BAZE_URL}api/attachment/${attachmentId}`, {
        responseType: "blob",
        withCredentials: true,
      });
      const data = await req.data;
      if (req.status >= 200 && req.status < 299) {
        try {
          const imageUrl = URL.createObjectURL(data);
          setImage(imageUrl);
        } catch (e) {
          setError(true);
        }
      }
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setIsLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
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
            {isLoad ? (
              <CircularProgress />
            ) : error ? (
              <img
                className={"oneRouteDivImageMap"}
                src={ermitage}
                alt="фото"
              />
            ) : (
              <img className={"oneRouteDivImageMap"} src={image} alt="фото" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
