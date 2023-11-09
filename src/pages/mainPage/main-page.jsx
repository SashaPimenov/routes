import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import "./main-page.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import YaMap from "../../components/YaMap";
import { Avatar } from "@mui/material";

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
      title: "Ology",
      description: "Galant",
      id: 1,
    },
    {
      title: "Ology",
      description: "Galant",
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

  function stringToColor(string: string) {
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

  function stringAvatar(name: string) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  const top100Films = [{ title: "Прогулка по городу", id: 1 }];
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
        <a href="profile" style={{ textDecoration: "none", outline: "0" }}>
          <Avatar
            {...stringAvatar("Tim Neutkens")}
            sx={{ width: 56, height: 56 }}
          />
        </a>
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
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {personality.map((e, index) => (
              <SwiperSlide key={index}>
                <a
                  href={"personality/" + e.id}
                  style={{ textDecoration: "none" }}
                >
                  <div className="oneRoute">
                    <div className="oneRouteDiv"></div>
                    <div className="card">
                      <div className="headerCard">
                        <p className="headerCardText">{e.title}</p>
                      </div>
                      <div className="footerCard">
                        <p className="footerCardText">{e.description}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="thematicRoutes">
        <div className="thematicRoutesTextDiv">
          <p className="thematicRoutesText">Тематические маршруты</p>
          <a href="/allThematic" style={{ textDecoration: "none" }}>
            <p className="thematicRoutesTextAll">Все</p>
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
          <a href="/map" style={{ textDecoration: "none" }}>
            <p className="thematicRoutesTextAll">Карта мест</p>
          </a>
        </div>
        <div className="map">
          <YaMap width="90vw" height="25vh" />
        </div>
      </div>
    </div>
  );
}
