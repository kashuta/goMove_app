import {Navigate, Route, Routes} from 'react-router-dom';
import React, {useEffect} from 'react';
import Home from './components/Home/Home';
import NavBar from "./components/NavBar/NavBar";
import Registration from './components/Registration/Registration';
import Login from "./components/Login/Login";
import UserProfile from './components/UserProfile/UserProfile';
import {useDispatch, useSelector} from 'react-redux';
import {THUNK_checkAuth} from "./redux/thunk/thunkAuth";


function App() {
    const isUser = useSelector(state => state.user)
    const dispatch = useDispatch();

    useEffect(() => {
        (localStorage.getItem('token') !== false) && dispatch(THUNK_checkAuth())
    }, [dispatch]);

    if (isUser) {
        return (
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/:country' element={<Home/>}/>
                    <Route path='/userprofile' element={<UserProfile/>}/>
                    <Route path='*' element={<Navigate to='/' replace/>}/>
                </Routes>

            </div>
        );
    }
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/auth' element={<Login/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='*' element={<Navigate to='/' replace/>}/>
            </Routes>

        </div>
    );

}

//commit
export default App;
