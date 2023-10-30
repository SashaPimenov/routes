import './App.css';
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div className='wrapper_root'>
            <div>
                <div className='sideBar'>
                    <div>
                        <a href={`/map`}>map</a>
                    </div>
                    <div>
                        <a href={`/login`}>login</a>
                    </div>
                </div>
            </div>
            <div className='main'>
                <Outlet/>
            </div>
        </div>
    )
        ;
}

export default App;
