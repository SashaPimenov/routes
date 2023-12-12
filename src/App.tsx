import { RouterProvider } from "react-router-dom";
import { YMaps } from "@pbe/react-yandex-maps";
import { routes } from "./routes";

function App() {
  const API_KEY = "f4d6eefc-40f3-4387-bd4a-9e1bb6bd81da";
  return (
    <YMaps query={{ apikey: API_KEY }}>
      <RouterProvider router={routes} />
    </YMaps>
  );
}

export default App;
