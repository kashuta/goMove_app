import React, {useEffect, useState} from 'react';
import {AppBar, Avatar, Box, Button, Menu, MenuItem, styled, Toolbar, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import logoSvg from '../../images/logo_transparent.png'
import { images } from '../../images';
import {THUNK_ACTION_LOGOUT} from "../../redux/thunk/thunkAuth";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "75%",
}));

const Icons = styled(Box)(({theme}) => ({
    display: "flex",
    gap: "20px"
}));

const NavBar = () => {
    const user = useSelector(state => state.user)
    const [open, setOpen] = useState(false)
    const [findCity, setFindCity] = useState("")
    const [copy, setCopy] = useState([])

    const dispatch = useDispatch()


    useEffect(() => {
        setCopy(findCity)  // create  new copy
    }, [findCity])

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch()

    }

    return (
        <AppBar position='sticky' sx={{backgroundColor: '#023047'}} elevation={0}>
            <StyledToolbar>
                <Typography variant='h6'>
                    <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
                        <img src={images.logomenu} style={{height: 50, marginTop: 10}} alt="SVG as an image"/>
                    </Link>
                </Typography>
                {/* <form onSubmit={(e) => submitHandler(e.target.value )}>

<Search>
                    <InputBase placeholder='Search' value={findCity}></InputBase>
                </Search>
                <button type='submit'> найти</button>
                </form> */}
                <Icons>
                    {/* Тут прописать условие авторизации пользователя */}
                    {user ?
                        <>
                            <Avatar sx={{width: 35, height: 35}} src={`http://localhost:5001/img/${user.photo}`}/>
                            <MenuIcon onClick={(e) => setOpen(true)}/>
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                open={open}
                                onClose={(e) => setOpen(false)}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <MenuItem>
                                    <Link to='/blog' style={{textDecoration: 'none'}}>Blog</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to='/userprofile' style={{textDecoration: 'none'}}>Profile</Link>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => (dispatch(THUNK_ACTION_LOGOUT()))}
                                >Logout</MenuItem>
                            </Menu>
                        </>
                        :
                        <>
                            <Link to='/registration' style={{textDecoration: 'none'}}>
                                <Button variant="outlined" sx={{color: 'white', backgroundColor: '#FFB703'}}>Sign
                                    Up</Button>

                            </Link>
                            <Link to='/auth' style={{textDecoration: 'none'}}>
                                <Button sx={{color: "white"}}>Sign In</Button>
                            </Link>
                        </>


                    }
                    {/* <Link to='/registration' style={{ textDecoration: 'none' }}>
                      <Button variant="outlined" sx={{color: 'white', backgroundColor: '#FFB703'}}>Sign Up</Button>
                    </Link>
                    <Link to='/auth' style={{ textDecoration: 'none' }}>
                      <Button sx={{color: "white"}}>Sign In</Button>

                  </Link>
                    <Avatar sx={{width:35, height:35}} src='#'/>
                    <MenuIcon onClick={(e) => setOpen(true)} /> */}
                </Icons>
            </StyledToolbar>
        </AppBar>
    )
}

export default NavBar
