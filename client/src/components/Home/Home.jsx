import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCityFromDB} from '../../redux/thunk/thunkCity'

import planeStyle from './Home.css'
import InputCenter from '../InputCenter/InputCenter'
import StaticGraph from '../StaticGraph/StaticGraph'
import { Grid, Tabs, Tab} from "@mui/material";

import Chart from '../Chart/Chart'

import backgroundImg from '../../images/background.jpg'
import plane from '../../images/plane.png'
import Currency from "../Currency/Currency";
import Header from "../Header/Header";
import Chart2 from "../Chart2/Chart2";
import Chart3 from "../Chart3/Chart3";
import Chart4 from "../Chart4/Chart4";
import Chart5 from '../Chart5/Chart5'
import Chart6 from '../Chart6/Chart6'
import Footer from '../Footer/Footer'
import BlogList from "../Blog/BlogList";

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

    const [value, setValue] = useState(0);
    const [chart, setChart] = useState(price)

    const handleTabs = (event, value) => {
        setValue(value);
    };

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
                <div className='scene'>
                    <img src={plane} className='plane' style={planeStyle}></img>
                </div>
                <div className='input-wrapper' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    textAlign: 'center',
                    width: '100%'
                }}>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '25vh', position: 'relative', zIndex: '8'}}>
                        <InputCenter />
                    </div>
                </div>
            </div>
            <div id='section1' style={{margin: 30}}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={4}>
                        <div style={{marginRight: '10px'}}>
                            <StaticGraph/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div style={{marginRight: '10px'}}>
                            <StaticGraph/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div style={{marginRight: '10px'}}>
                            <StaticGraph/>
                        </div>
                    </Grid>
                </Grid>

                {chart
                    &&
                    <>
                        <div style={{display: 'flex', height: '5vh', width: '100%', justifyContent: 'center'}}>
                            <div style={{marginRight: '2vw'}}>
                                <Currency/>
                            </div>
                            <Tabs value={value} onChange={handleTabs}>
                                <Tab label='Graph1' />
                                <Tab label='Graph2' />
                                <Tab label='Graph3' />
                                <Tab label='Graph4' />
                                <Tab label='Graph5' />
                                <Tab label='Graph6' />
                                <Tab label='Graph7' />
                                <Tab label='Graph8' />
                            </Tabs>
                        </div>
                        <div style={{width: '90%'}}>
                            <div style={{marginTop: '10vh'}}>
                                <Chart/>
                            </div>
                            <div style={{marginTop: '10vh'}}>
                                <Chart2/>
                            </div>
                            <div style={{marginTop: '10vh'}}>
                                <Chart3/>
                            </div>
                            <div style={{marginTop: '10vh'}}>
                                <Chart4/>
                            </div>
                            <div style={{marginTop: '10vh'}}>
                                <Chart5/>
                            </div>
                            <div style={{marginTop: '10vh'}}>
                                <Chart6/>
                            </div>
                        </div>
                    </>
                }
            </div>
            <BlogList/>
            <Footer/>
        </>

    )
}

export default Home