import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar } from "@mui/material";
import "./HeaderThematicComponent.css";

type IProp = {
  route: string;
  label: string;
};
export const HeaderThematicComponent = ({ route, label }: IProp) => {
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
      sx: { bgcolor: stringToColor(name) },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <div className="headerThematicDiv">
      <div style={{ flex: "0.1" }}>
        <a href={route}>
          <ArrowBackIcon className="arrowIcon" />
        </a>
      </div>
      <div style={{ flex: "0.8" }}>
        <p className="thematicHeaderText">{label}</p>
      </div>
      <div style={{ flex: "0.1" }}>
        <Avatar
          {...stringAvatar("Tim Neutkens")}
          sx={{ width: 36, height: 36 }}
        />
      </div>
    </div>
  );
};
