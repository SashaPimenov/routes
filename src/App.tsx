import {RouterProvider} from "react-router-dom";
import {YMaps} from "@pbe/react-yandex-maps";
import {routes} from "./routes";
import {CookiesProvider, useCookies} from "react-cookie";
import LoginPage from "./pages/loginPage/login-page";

function App() {
    const [cookies, setCookies] = useCookies(['SESSION']);

    function handleLogin(user: any) {
        setCookies("SESSION", user, {path: '/'})
    }

    const API_KEY = "f4d6eefc-40f3-4387-bd4a-9e1bb6bd81da";
    return (
        <CookiesProvider>
            <YMaps query={{apikey: API_KEY}}>
                {/*{*/}
                {/*    cookies.SESSION ? (*/}
                        <RouterProvider router={routes}/>
                {/*    ) : (*/}
                {/*        <LoginPage onLogin={handleLogin}/>*/}
                {/*    )*/}
                {/*}*/}
            </YMaps>
        </CookiesProvider>
    );
}

export default App;
