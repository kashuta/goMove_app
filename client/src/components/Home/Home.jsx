import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCityFromDB} from '../../redux/thunk/thunkCity'

import InputCenter from '../InputCenter/InputCenter'
import StaticGraph from '../StaticGraph/StaticGraph'
import Grid from "@mui/material/Grid";

function Home() {
    const price = useSelector((state) => state.price)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCityFromDB())
    }, [])

    return (
        <div style={{margin: 30}}>
            <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                    <StaticGraph/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StaticGraph/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StaticGraph/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StaticGraph/>
                </Grid>
            </Grid>
            <InputCenter/>
            {price && price.map((el) =>
                <div key={el.id} style={{border: '2px solid black'}}>
                    <p> {el.name}</p>
                    <p> {el.price}</p>
                </div>
            )}
        </div>

    )
}

export default Home
