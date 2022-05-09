import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCityFromDB} from '../../redux/thunk/thunkCity'

import InputCenter from '../InputCenter/InputCenter'
import StaticGraph from '../StaticGraph/StaticGraph'
import Grid from "@mui/material/Grid";

import Chart from '../Chart/Chart'

import backgroundImg from '../../images/background.jpg'
<<<<<<< HEAD
import Chart2 from '../thirdChart/thirdChart'
import Currency from '../Currency/Currency'
=======
import Currency from "../Currency/Currency";
import Header from "../Header/Header";
import Chart2 from "../Chart2/Chart2";
import Chart3 from "../Chart3/Chart3";
import Chart4 from "../Chart4/Chart4";
>>>>>>> 1d9268dd3239d396d94f86e726674e5c58008027

const divStyle = {
    height: '100vh',
    position: 'relative',
    transition: 'height 99999s',
    backgroundImage: `url(${backgroundImg})`,
    width: '100%',
    backgroundRepeat: 'no-repeat',
}

function Home() {
    const price = useSelector((state) => state.price)
    const price2 = useSelector((state) => state.price2)
    const [chart, setChart] = useState(price)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCityFromDB())
    }, [])

    useEffect(() => {
        setChart(!!price.length)
    }, [price])

    return (
        <>
            <div style={divStyle}>
                <Header/>
                <div className='input-wrapper' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    textAlign: 'center',
                    width: '100%'
                }}>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '25vh'}}>
                        <InputCenter/>
                    </div>
                </div>
            </div>
            <div id='section1' style={{margin: 30}}>
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

                {chart
                    &&
                    <>
                        <Currency/>
                        <Chart/>
                        <Chart2/>
                        <Chart3/>
                        <Chart4/>
                    </>
                }
            </div>
        </>

    )
}

export default Home