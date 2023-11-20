import "./allThematicPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import OneRoutComponent from "../../components/forMainPage/oneRoutComponent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MapIconComponent } from "../../components/forAllAndOneThematicPage/MapIconComponent/MapIconComponent";
import { HeaderThematicComponent } from "../../components/forAllAndOneThematicPage/HeaderThematicComponent/HeaderThematicComponent";

export default function AllThematicPage() {
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
      <HeaderThematicComponent route={"/"} label={"Тематические маршруты"} />

      {thematic.map((element, index) => (
        <div key={index} className="oneThematicMainDiv">
          <div className="ThematicHeaderTextDiv">
            <p className="headerText">{element.name}</p>
            <a
              href={"thematic/" + element.id}
              style={{ textDecoration: "none", alignSelf: "center" }}
            >
              <ArrowForwardIcon className="arrowIcon" />
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
      <MapIconComponent />
    </div>
  );
}
