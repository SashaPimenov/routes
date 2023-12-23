import "./allThematicPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import OneRoutComponent from "../../components/forMainPage/oneRoutComponent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MapIconComponent } from "../../components/forAllAndOneThematicPage/MapIconComponent/MapIconComponent";
import { HeaderThematicComponent } from "../../components/forAllAndOneThematicPage/HeaderThematicComponent/HeaderThematicComponent";
import { BAZE_URL } from "../../api/BAZE_URL";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ThematicRoutesAllPage } from "../../components/forAllAndOneThematicPage/ThematicRoutesAllPage/ThematicRoutesAllPage";
import axios from "axios";

export default function AllThematicPage() {
  const [thematicRoutes, setThematicRoutes] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      const req = await axios.get(`${BAZE_URL}api/theme/all`, {
        withCredentials: true,
      });
      const data = await req.data;
      if (req.status >= 200 && req.status < 299) {
        setThematicRoutes(data.list);
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
    <div className="wrapper_main">
      <HeaderThematicComponent route={"/"} label={"Тематические маршруты"} />

      {thematicRoutes.map((element: any, index) => (
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
            <ThematicRoutesAllPage id={element.id} />
          </div>
        </div>
      ))}
      <MapIconComponent />
      <Outlet />
    </div>
  );
}
