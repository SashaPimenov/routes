import { useEffect, useState } from "react";
import imageekb from "../assets/ekb.jpg";
import axios from "axios";
import { BAZE_URL } from "../api/BAZE_URL";
import { CircularProgress } from "@mui/material";

type Props = {
  numberPlace: number;
  name: string;
  placemarkAttachmentId: number;
};

export const OnePlaceComponent = ({
  numberPlace,
  name,
  placemarkAttachmentId,
}: Props) => {
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
      {isLoad ? (
        <CircularProgress />
      ) : (
        <div className="onePlaceInRoutsDiv">
          <div className="numberPlaceDiv">
            <div className="circleNumberDiv">
              <p>{numberPlace}</p>
            </div>
          </div>
          <div className="infoPlaceDiv">
            <div className="headerInfoPlaceDiv">
              <p className="headerInfoPlaceText">{name}</p>
            </div>
            <div className="imageInfoPlaceDiv">
              {error ? (
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={imageekb}
                  alt="rout"
                />
              ) : (
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className={"oneRouteDivImage"}
                  src={image}
                  alt="rout"
                />
              )}
              <img src={image} className="imageStyle" alt="фото" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
