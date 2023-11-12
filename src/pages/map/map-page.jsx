import "./map-page.css";
import YaMap from "../../components/YaMap";
import { TextField } from "@mui/material";

export default function MapPage() {
  return (
    <>
      <div className="input_map">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Поиск"
          variant="outlined"
        />
      </div>
      <YaMap width={"100vw"} height={"100vh"} zoomControl={true} />
    </>
  );
}
