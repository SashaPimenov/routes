import './App.css';
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div className='wrapper_root'>

            <div>
                <div className='sideBar'>
                    <h1 style={{marginTop: 0}}>nav</h1>
                    <nav>
                        <ul>
                            <li>
                                <a href={`/`}>map</a>
                            </li>
                            <li>
                                <a href={`/login`}>login</a>
                            </li>
                        </ul>
                    </nav>
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
