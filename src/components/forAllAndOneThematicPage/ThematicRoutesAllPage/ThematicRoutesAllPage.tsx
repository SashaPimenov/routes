import { useEffect, useState } from "react";
import { BAZE_URL } from "../../../api/BAZE_URL";
import axios from "axios";
import { CircularProgress, Skeleton } from "@mui/material";
import OneRoutComponent from "../../forMainPage/oneRoutComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Props = {
  id: number;
};

export const ThematicRoutesAllPage = ({ id }: Props) => {
  const [thematicRoutes, setThematicRoutes] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      const req = await axios.get(`${BAZE_URL}api/journey/all?themeId=${id}`, {
        withCredentials: true,
      });
      const data = await req.data;
      if (req.status >= 200 && req.status < 299) {
        setThematicRoutes(data.list);
        console.log(data.list);
      } else {
        setIsError(true);
      }
    } catch (e) {
      console.log(e);
      setIsError(true);
    } finally {
      setIsLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <p></p>
      <Swiper spaceBetween={10} slidesPerView={2}>
        {isLoad
          ? [1, 2, 3, 4].map((e, index) => (
              <SwiperSlide key={index}>
                <Skeleton
                  width={"170px"}
                  height={"476px"}
                  sx={{ marginTop: "-100px", marginBottom: "-60px" }}
                />
              </SwiperSlide>
            ))
          : thematicRoutes.map((e: any, index) => (
              <SwiperSlide key={index}>
                <OneRoutComponent
                  placemarkAttachmentId={e.placemarkAttachmentId}
                  description={e.description}
                  name={e.name}
                  id={e.id}
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};
