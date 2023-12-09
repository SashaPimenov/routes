import { Button } from "@mui/material";
import YaMap from "../../YaMap";
import AddIcon from "@mui/icons-material/Add";

export const CardComponent = () => {
  return (
    <div className="cardDiv">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          justifyContent: "space-between",
        }}
      >
        <a href="/map" style={{ textDecoration: "none" }}>
          <p className="thematicRoutesText">Популярные места</p>
        </a>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          style={{
            width: 122,
            height: 32,
            alignSelf: "center",
            color: "#304FD9",
            borderColor: "#304FD9",
            borderRadius: 28,
            textTransform: "none",
          }}
        >
          Создать
        </Button>
      </div>

      <div className="map">
        <YaMap width="90vw" height="25vh" zoomControl={false} />
      </div>
    </div>
  );
};
