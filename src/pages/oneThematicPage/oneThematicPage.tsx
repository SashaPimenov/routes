import "./oneThematicPage.css";
import OneRoutComponent from "../../components/forMainPage/oneRoutComponent";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { MapIconComponent } from "../../components/forAllAndOneThematicPage/MapIconComponent/MapIconComponent";
import { HeaderThematicComponent } from "../../components/forAllAndOneThematicPage/HeaderThematicComponent/HeaderThematicComponent";
import { useRef, useState } from "react";
import Sheet, { SheetRef } from "react-modal-sheet";
import PlaceInfoModal from "../../components/placeInfoModal/placeInfoModal";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function OneThematicPage() {
  const [isOpenSort, setOpenSort] = useState(false);
  const [isOpenFilter, setOpenFilter] = useState(false);

  const refSort = useRef<SheetRef>();

  const refFilter = useRef<SheetRef>();

  const handleClickSort = () => {
    setOpenSort(true);
  };
  const handleClickFilter = () => {
    setOpenFilter(true);
  };

  return (
    <>
      <div className="wrapper_main">
        <HeaderThematicComponent
          route={"/thematics"}
          label={"Тематические маршруты"}
        />

        <div className="bodyStyle">
          <div className="nameAndFilterDiv">
            <div style={{ flex: "0.8" }}>
              <p className="headerText">Свидания</p>
            </div>
            <div className="filterDiv">
              <div onClick={() => setOpenSort(true)}>
                <SortOutlinedIcon sx={{ color: "#304FD9" }} />
              </div>
              <div onClick={() => setOpenFilter(true)}>
                <TuneOutlinedIcon sx={{ color: "#304FD9" }} />
              </div>
            </div>
          </div>
          <div className="routesGridDiv">
            {[1, 2, 3, 4, 5, 6].map((e, index) => (
              <OneRoutComponent
                key={index}
                id={1}
                title="Маршрут по стрит-арту"
                description="Лорем ипсум долор сит амет, консект"
              />
            ))}
          </div>
        </div>
        <MapIconComponent />
      </div>

      <Sheet
        ref={refSort}
        isOpen={isOpenSort}
        onClose={() => setOpenSort(false)}
        snapPoints={[800, 700, 600, 500, 400, 300, 200, 100]}
        initialSnap={4}
        style={{ visibility: "visible", zIndex: 99999999 }}
      >
        <Sheet.Container style={{ borderRadius: 30 }}>
          <Sheet.Content className={"sheet_wrapper_oneThematic"}>
            <div className="bottomIconDiv"></div>
            <div className={"sheet_header"}>Сортировка</div>

            <div className={"buttons_oneThematic"}>
              <Button
                variant="text"
                className={"button_oneThematic"}
                style={{ textTransform: "none", color: "rgba(48, 79, 217, 1)" }}
              >
                По рейтингу
              </Button>
              <Button
                variant="text"
                className={"button_oneThematic"}
                style={{ textTransform: "none", color: "rgba(48, 79, 217, 1)" }}
              >
                По популярности
              </Button>
              <Button
                variant="text"
                className={"button_oneThematic"}
                style={{ textTransform: "none", color: "rgba(48, 79, 217, 1)" }}
              >
                По удаленности
              </Button>
              <Button
                variant="text"
                className={"button_oneThematic"}
                style={{ textTransform: "none", color: "rgba(48, 79, 217, 1)" }}
              >
                По обновлению
              </Button>
              <Button
                variant="text"
                className={"button_oneThematic"}
                style={{ textTransform: "none", color: "rgba(48, 79, 217, 1)" }}
              >
                По протяженности (min)
              </Button>
              <Button
                variant="text"
                className={"button_oneThematic"}
                style={{ textTransform: "none", color: "rgba(48, 79, 217, 1)" }}
              >
                По временным затратам (min)
              </Button>
            </div>
            <Button
              variant="contained"
              className={"cancel_button_oneThematic"}
              style={{
                borderRadius: 200,
                fontSize: 14,
                textTransform: "none",
                marginTop: 30,
                background: "rgba(48, 79, 217, 1)",
              }}
            >
              Отменить
            </Button>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>

      <Sheet
        ref={refFilter}
        isOpen={isOpenFilter}
        onClose={() => {
          setOpenFilter(false);
        }}
        snapPoints={[800, 700, 650, 600, 500, 400, 300, 200, 100]}
        initialSnap={2}
        style={{ visibility: "visible", zIndex: 99999999 }}
      >
        <Sheet.Container style={{ borderRadius: 30 }}>
          <Sheet.Content>
            <div className="bottomIconDiv"></div>
            <div className={"sheet_wrapper_oneThematic"}>
              <div className={"filter_header"}>
                <div className={"sheet_header"}>Фильтр</div>
                <Button
                  variant="text"
                  style={{ borderRadius: 30, textTransform: "none" }}
                >
                  Сбросить все
                </Button>
              </div>
              <div style={{ marginBottom: 26 }}>
                <p>Временные затраты</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                  >
                    <Button style={{ borderRadius: "30px 0 0 30px" }}>
                      до 2 часов
                    </Button>
                    <Button>пол дня</Button>
                    <Button style={{ borderRadius: "0 30px 30px 0" }}>
                      &gt;1 дня
                    </Button>
                  </ButtonGroup>
                </div>
              </div>

              <div style={{ marginBottom: 26 }}>
                <p>Общее расстояние (в км)</p>
                <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="От"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="До"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: 26 }}>
                <p>Ключевые слова</p>
                <div style={{ width: "100%" }}>
                  <TextField
                    id="outlined-basic"
                    label="Что-то важное для вас"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: 26 }}>
                <p>Количество мест в маршруте</p>
                <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="От"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="До"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>

              <Button
                variant="contained"
                style={{ borderRadius: 30, textTransform: "none" }}
              >
                Применить
              </Button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
}
