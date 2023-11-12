import { useParams } from "react-router-dom";
import { Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./oneThematicPage.css";
import OneRoutComponent from "../../components/forMainPage/oneRoutComponent";

export default function OneThematicPage() {
  const { id } = useParams();
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
      <div className="oneThematicBody">
        <p className="titleText">Свидание</p>

        <div className="bodyStyle">
          <p className="secondTitle">Все маршруты</p>
          <div className="routesGridDiv">
            <OneRoutComponent id="1" title="Говно" description="Говно" />
            <OneRoutComponent id="1" title="Говно" description="Говно" />
            <OneRoutComponent id="1" title="Говно" description="Говно" />
            <OneRoutComponent id="1" title="Говно" description="Говно" />
            <OneRoutComponent id="1" title="Говно" description="Говно" />
            <OneRoutComponent id="1" title="Говно" description="Говно" />
          </div>
        </div>
      </div>
    </div>
  );
}
