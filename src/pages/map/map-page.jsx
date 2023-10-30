import './map-page.css'
import YaMap from "../../components/YaMap";
import {YMaps} from "@pbe/react-yandex-maps";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {TextField} from "@mui/material";

export default function MapPage() {
    const {height, width} = useWindowDimensions();
    const API_KEY = "f4d6eefc-40f3-4387-bd4a-9e1bb6bd81da";

    return (
        <YMaps query={{apikey: API_KEY}}>
            <div className='input_map'>
                <TextField id="outlined-basic" label="Поиск" variant="outlined" />
            </div>
            <YaMap/>
        </YMaps>
    );
}
