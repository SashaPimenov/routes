import "./allThematicPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import OneRoutComponent from "../../components/forMainPage/oneRoutComponent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MapIconComponent } from "../../components/forAllAndOneThematicPage/MapIconComponent/MapIconComponent";
import { HeaderThematicComponent } from "../../components/forAllAndOneThematicPage/HeaderThematicComponent/HeaderThematicComponent";
import { BAZE_URL } from "../../api/BAZE_URL";
import { useEffect, useState } from "react";

export default function AllThematicPage() {
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
                    id={index}
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
