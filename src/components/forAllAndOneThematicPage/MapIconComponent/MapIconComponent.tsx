// @flow
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import "./MapIconComponent.css";

export const MapIconComponent = () => {
  return (
    <a href="/map" className="linkStyle">
      <MapOutlinedIcon
        sx={{
          color: "white",
        }}
        fontSize="medium"
      />
    </a>
  );
};
