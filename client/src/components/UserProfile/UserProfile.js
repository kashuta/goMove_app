import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Box, Button, Container, CssBaseline, Grid, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './UserProfile.css'
import { getUserData, updateUser } from "../../redux/thunk/thunkProfile";
import { getHistoryFromDB } from "../../redux/thunk/thunkHistory";

const theme = createTheme();

function UserProfile() {
    const favorite = useSelector(state => state.history)
    const id = useSelector(state => state.user.id);
    const dispatch = useDispatch();
    const userData = useSelector((store) => store.user);
    const [inputs, setInputs] = useState({ ...userData });
 
    useEffect(() => {
      dispatch(getUserData(id));
      dispatch(getHistoryFromDB())
    }, []);
    
  const handleChange = (e) => {
        if (e.target.files) {
            setInputs((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
                file: e.target.files[0],
            }));
        } else {
            setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
        }
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(inputs, id))
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                       <h3>Personal account {inputs.name}</h3>
                    </Typography>
                    <div className='UserProfile__container'>
                        <div className="container col-md-4 mb-3 my-3">
                            <div className="card">
                                <div className="d-flex flex-column align-items-center text-center my-3">
                                    <img
                                        src={inputs.photo ? `http://localhost:5001/img/${userData.photo}` :
                                            'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b1/b12d371f6c55ed7306277b38b50f6642d13af030_full.jpg'}
                                        alt="profilephoto" className="rounded" width="350"/>
                                    <div className="my-3">                                    
                                        <input
                                            className="inputphoto input-file"
                                            id="file"
                                            onChange={handleChange}
                                            type="file"
                                            name="photo"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Box component="form" noValidate sx={{mt: 3}}>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="name"
                                        label="User Name"
                                        name="name"
                                        autoComplete="name"
                                         onChange={(e) => setInputs((prev) => ({...prev, name: e.target.value}))}
                                        value={inputs.name}
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={(e) => setInputs((prev) => ({...prev, email: e.target.value}))}
                                        value={inputs.email}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit}
                            >
                                Edit
                            </Button>
                        </Box>
                    </div>
                </Box>
        </Container>
        <>
          {favorite.filter((el) => el.userId === id).map((el) => <div>{el.cityBegin} - {el.cityEnd}</div>)}
        </>
        </ThemeProvider>
    );
}

export default UserProfile;
