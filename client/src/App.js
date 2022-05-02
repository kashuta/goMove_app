import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import NavBar from "./components/NavBar/NavBar";
import Registration from './components/Registration/Registration';
import Login from "./components/Login/Login";
import Authconfirm from './components/Registration/Authconfirm';


function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/auth' element={<Login/>}/>

                <Route path='/registration' element={<Registration/>}/>
                <Route path='/authconfirm' element={<Authconfirm />} />
            </Routes>
        </div>
    );
}

export default App;
