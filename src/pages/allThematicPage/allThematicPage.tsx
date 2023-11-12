import { Paper, IconButton, InputBase } from "@mui/material";
import "./allThematicPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import OneRoutComponent from "../../components/forMainPage/oneRoutComponent";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function AllThematicPage() {
  const top100Films = [{ title: "Прогулка по городу", id: 1 }];
  const thematic = [
    {
      name: "Свидания",
      id: "1",
      routes: [1, 2, 3, 4, 5],
    },
    {
      name: "Семейный отдых",
      id: "2",
      routes: [1, 2, 3, 4, 5],
    },
    {
      name: "Тема 3",
      id: "3",
      routes: [1, 2, 3, 4, 5],
    },
    {
      name: "Тема 4",
      id: "4",
      routes: [1, 2, 3, 4, 5],
    },
    {
      name: "Тема 5",
      id: "5",
      routes: [1, 2, 3, 4, 5],
    },
  ];

  return (
    <div className="wrapper_main">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            background: "rgba(236, 230, 240, 1)",
            boxShadow: "none",
            borderRadius: 28,
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Поиск по маршрутам" />
        </Paper>
        <p>фильтр</p>
      </div>

      {thematic.map((element, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
          }}
        >
          <div className="ThematicHeaderTextDiv">
            <p className="headerText">{element.name}</p>
            <a
              href={"thematic/" + element.id}
              style={{ textDecoration: "none", alignSelf: "center" }}
            >
              <ArrowForwardIcon
                style={{ alignSelf: "center", color: "rgba(103, 80, 164, 1)" }}
              />
            </a>
          </div>
          <div className="headerDiv">
            <Swiper
              spaceBetween={10}
              slidesPerView={2}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper: any) => console.log(swiper)}
            >
              {element.routes.map((e, index) => (
                <SwiperSlide key={index}>
                  <OneRoutComponent
                    id={index.toString()}
                    title={"Семейный отдых на Плотинке"}
                    description={"Лорем ипсум долор сит амет, консект"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ))}
    </div>
  );
}
