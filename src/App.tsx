import './App.css';
import { YMaps } from '@pbe/react-yandex-maps';
import useWindowDimensions from './hooks/useWindowDimensions';
import YaMap from './components/YaMap';
  
function App() {
  const { height, width } = useWindowDimensions();
  const API_KEY = "f4d6eefc-40f3-4387-bd4a-9e1bb6bd81da";

  return (
    <YMaps query={{apikey: API_KEY}}>
        <YaMap />
    </YMaps>
  );
}

export default App;
