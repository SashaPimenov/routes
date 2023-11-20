import "./main-page.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import YaMap from "../../components/YaMap";
import { Avatar, Button, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OneRoutComponent from "../../components/forMainPage/oneRoutComponent";
import AddIcon from "@mui/icons-material/Add";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export default function MainPage() {
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

  const personality = [
    {
      title: "Семейный отдых на Плотинке",
      description: "Лорем ипсум долор сит амет, консект",
      id: 1,
    },
    {
      title: "Маршрут по стрит-арту",
      description: "Лорем ипсум долор сит амет, консект",
      id: 2,
    },
    {
      title: "Ology",
      description: "Galant",
      id: 3,
    },
    {
      title: "Ology",
      description: "Galant",
      id: 4,
    },
    {
      title: "Ology",
      description: "Galant",
      id: 5,
    },
  ];

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: { bgcolor: stringToColor(name) },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

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
            background: "rgb(236, 230, 240)",
            boxShadow: "none",
            borderRadius: 28,
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: "rgb(73, 69, 79)" }}
            placeholder="Поиск по маршрутам"
          />
          <a href="profile" style={{ textDecoration: "none", outline: "0" }}>
            <Avatar {...stringAvatar("Tim Neutkens")} />
          </a>
        </Paper>
      </div>
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
            startIcon={<AddIcon />}
            style={{
              width: 122,
              height: 32,
              alignSelf: "center",
              color: "rgba(103, 80, 164, 1)",
              borderColor: "rgba(103, 80, 164, 1)",
              borderRadius: 28,
              textTransform: "none",
            }}
          >
            Создать
          </Button>
        </div>

        <div className="headerDiv">
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {personality.map((e, index) => (
              <SwiperSlide key={index}>
                <OneRoutComponent
                  title={e.title}
                  id={e.id}
                  description={e.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="thematicRoutes">
        <div className="thematicRoutesTextDiv">
          <p className="thematicRoutesText">Тематические маршруты</p>
          <a
            href="/allThematic"
            style={{ textDecoration: "none", alignSelf: "center" }}
          >
            <ArrowForwardIcon
              style={{ alignSelf: "center", color: "rgba(103, 80, 164, 1)" }}
            />
          </a>
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {thematic.map((e, index) => (
          <SwiperSlide key={index}>
            <a href={"thematic/" + e.id} style={{ textDecoration: "none" }}>
              <div className="oneThematicRout">
                <p className="thematicRouteText">{e.name}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="cardDiv">
        <div className="thematicRoutesTextDiv">
          <p className="thematicRoutesText">Популярные места</p>
        </div>
        <div className="map">
          <a href="/map" className="mainMapIcon">
            <MapOutlinedIcon
              sx={{
                color: "white",
              }}
              fontSize="medium"
            />
          </a>
          <YaMap width="90vw" height="25vh" zoomControl={false} />
        </div>
      </div>
    </div>
  );
}
