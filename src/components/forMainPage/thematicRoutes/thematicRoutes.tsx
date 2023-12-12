import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useState } from "react";
import { BAZE_URL } from "../../../api/BAZE_URL";
import { Skeleton } from "@mui/material";

export const ThematicRoutes = () => {
  const [thematicRoutes, setThematicRoutes] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      const req = await fetch(`${BAZE_URL}/`, {
        method: "GET",
      });
      const data = await req.json();
      if (req.status >= 200 && req.status < 299) {
        setThematicRoutes(data);
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
    // getData();
  }, []);
  const thematic = [
    {
      name: "Для свидания",
      id: 1,
    },
    {
      name: "Погулять",
      id: 2,
    },
    {
      name: "Для свидания",
      id: 3,
    },
    {
      name: "Для свидания",
      id: 4,
    },
    {
      name: "Для свидания",
      id: 5,
    },
  ];
  return (
    <>
      <div className="thematicRoutes">
        <div className="thematicRoutesTextDiv">
          <p className="thematicRoutesText">Тематические маршруты</p>
          <a
            href="/thematics"
            style={{ textDecoration: "none", alignSelf: "center" }}
          >
            <ArrowForwardIcon
              style={{ alignSelf: "center", color: "#304FD9" }}
            />
          </a>
        </div>
      </div>

      <Swiper spaceBetween={10} slidesPerView={2}>
        {isLoad
          ? [1, 2, 3, 4].map((e, index) => (
              <SwiperSlide key={index}>
                <Skeleton variant="rounded" width={"165px"} height={"100px"} />
              </SwiperSlide>
            ))
          : thematic.map((e, index) => (
              <SwiperSlide key={index}>
                <a href={"thematic/" + e.id} style={{ textDecoration: "none" }}>
                  <div className="oneThematicRout">
                    <p className="thematicRouteText">{e.name}</p>
                  </div>
                </a>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};
