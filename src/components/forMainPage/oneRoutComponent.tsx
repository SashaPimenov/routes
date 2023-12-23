import axios from "axios";
import "./oneRoutComponent.css";
import { useEffect, useState } from "react";
import { BAZE_URL } from "../../api/BAZE_URL";
import { CircularProgress } from "@mui/material";

interface IProp {
  id: number;
  description: string;
  name: string;
  placemarkAttachmentId: number;
}
export default function OneRoutComponent({
  description,
  name,
  id,
  placemarkAttachmentId,
}: IProp) {
  const [image, setImage] = useState<any>(null);
  const [isLoad, setIsLoad] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const req = await axios.get(
        `${BAZE_URL}api/attachment/${placemarkAttachmentId}`,
        {
          responseType: "blob",
          withCredentials: true,
        }
      );
      const data = await req.data;
      if (req.status >= 200 && req.status < 299) {
        const imageUrl = URL.createObjectURL(data);
        setImage(imageUrl);
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
      <a href={`/route/${id}`} style={{ textDecoration: "none" }}>
        <div className="oneRoute">
          <div className="oneRouteDiv">
            {isLoad ? (
              <CircularProgress />
            ) : error ? (
              <img
                className={"oneRouteDivImage"}
                src={require("../../assets/ekb.jpg")}
                alt="rout"
              />
            ) : (
              <img className={"oneRouteDivImage"} src={image} alt="rout" />
            )}
          </div>
          <div className="card">
            <div className="headerCard">
              <div className={"characterRoute"}>
                <div className={"routeTimeAndDistance routeTime"}>2 часа</div>
                <div className={"routeTimeAndDistance routeDistance"}>
                  10 км
                </div>
              </div>
              <p className="headerCardText">{name}</p>
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
