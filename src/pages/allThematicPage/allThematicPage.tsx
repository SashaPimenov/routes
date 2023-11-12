import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
import "./allThematicPage.css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AllThematicPage() {
  const top100Films = [{ title: "Прогулка по городу", id: 1 }];
  const thematic = [
    {
      name: "Свидания",
      id: 1,
      routes: [1, 2, 3, 4, 5],
    },
    {
      name: "Семейный отдых",
      id: 2,
      routes: [1, 2, 3, 4, 5],
    },
    {
      name: "Тема 3",
      id: 3,
      routes: [1, 2, 3, 4, 5],
    },
    {
      name: "Тема 4",
      id: 4,
      routes: [1, 2, 3, 4, 5],
    },
    {
      name: "Тема 5",
      id: 5,
      routes: [1, 2, 3, 4, 5],
    },
  ];

  return (
    <div className="wrapper_main">
      <div className="headerStyle">
        <Stack style={{ flex: "0.95" }}>
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
        <p>Филь</p>
      </div>

      {thematic.map((e, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
            backgroundColor: "red",
          }}
        >
          <div className="ThematicHeaderTextDiv">
            <p className="headerText">{e.name}</p>
            <p className="headerText">Все</p>
          </div>
          <div className="headerDiv">
            <Swiper
              spaceBetween={10}
              slidesPerView={2}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper: any) => console.log(swiper)}
            >
              {e.routes.map((e, index) => (
                <SwiperSlide>
                  <div className="oneRoute">
                    <div className="oneRouteDiv"></div>
                    <div className="card">
                      <div className="headerCard">
                        <p className="headerCardText">Title</p>
                      </div>
                      <div className="footerCard">
                        <p className="footerCardText">Label</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ))}
    </div>
  );
}
