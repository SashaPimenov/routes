import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import "./main-page.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import YaMap from "../../components/YaMap";
export default function MainPage() {
  const top100Films = [{ title: "Крутые места", year: 1994 }];
  return (
    <div className="wrapper_login">
      <div>
        <Stack>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Поиск по маршрутам"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </Stack>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
        }}
      >
        <p className="headerText">Личные маршруты</p>

        <div className="headerDiv">
          <div className="oneRoute">
            <div className="oneRouteDiv"></div>
            <div className="card">
              <div className="headerCard">
                <p className="headerCardText">Питерская прогулка</p>
              </div>
              <div className="footerCard">
                <p className="footerCardText">Информация о м...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="thematicRoutes">
        <div className="thematicRoutesTextDiv">
          <p className="thematicRoutesText">Тематические маршруты</p>
          <p className="thematicRoutesTextAll">Все</p>
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="oneThematicRout"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="oneThematicRout"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="oneThematicRout"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="oneThematicRout"></div>
        </SwiperSlide>
      </Swiper>

      <div className="cardDiv">
        <p className="cardText">Популярные места</p>
        <div className="card">
          <YaMap width="90vw" height="20vh" />
        </div>
      </div>
    </div>
  );
}
