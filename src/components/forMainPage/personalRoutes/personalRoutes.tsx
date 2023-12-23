import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import OneRoutComponent from "../oneRoutComponent";
import { Button, Skeleton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { BAZE_URL } from "../../../api/BAZE_URL";
import axios from "axios";
import { useCookies } from "react-cookie";

type IProp = {
  nav: any;
};

export const PersonalRoutes = ({ nav }: IProp) => {
  const [personalityRoutes, setPersonalityRoutes] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [isError, setIsError] = useState(false);
  const [cookies, setCookies, removeCookie] = useCookies(["SESSION1"]);

  const getData = async () => {
    try {
      const req = await axios.get(`${BAZE_URL}api/journey/all?status=DRAFT`, {
        withCredentials: true,
      });
      const data = await req.data;
      if (req.status >= 200 && req.status < 299) {
        setPersonalityRoutes(data.list);
        console.log(data);
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: 16 }}>
        <p className="headerText">Личные маршруты</p>
        <Button
          variant="outlined"
          startIcon={<AddIcon sx={{ color: "#304FD9" }} />}
          style={{
            width: 122,
            height: 32,
            alignSelf: "center",
            color: "#304FD9",
            borderColor: "#304FD9",
            borderRadius: 28,
            textTransform: "none",
          }}
          onClick={() => {
            removeCookie("SESSION1");
            nav();
          }}
        >
          Создать
        </Button>
      </div>
      <div className="headerDiv">
        <Swiper spaceBetween={20} slidesPerView={2}>
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
            : personalityRoutes.map((e: any, index) => (
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
      </div>
    </div>
  );
};
