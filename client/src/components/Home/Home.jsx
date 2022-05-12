import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getCityFromDB} from '../../redux/thunk/thunkCity'

import planeStyle from './Home.css'
import InputCenter from '../InputCenter/InputCenter'
import {Tab, Tabs} from "@mui/material";

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
import Chart7 from '../Chart7/Chart7'
import Chart8 from '../Chart8/Chart8'
import OutlinedCard from '../StaticGraph/StaticGraph'


const divStyle = {
    height: '100vh',
    position: 'relative',
    transition: 'height 99999s',
    backgroundImage: `url(${backgroundImg})`,
    width: '100%',
    backgroundRepeat: 'no-repeat',
}

function Home() {

    const history = useSelector((state) => state.history)
    const {country} = useParams()
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
  

    const [find, setFind] = useState(history.find((el) => el.id === Number(country)))
 

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
                    height: '70vh',
                    textAlign: 'center',
                    width: '100%'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '25vh',
                        position: 'relative',
                        zIndex: '8'
                    }}>
                        <InputCenter find={find}/>
                    </div>
                </div>
            </div>
            <div id='section1'>
                {chart
                    &&
                    <>
                        <div style={{margin: 30}}>
                          <OutlinedCard/>
                          <div style={{display: 'flex', height: '5vh', width: '100%', justifyContent: 'center'}}>
                              <div style={{marginRight: '5vw'}}>
                                  {/* <span>Cuwuuw</span> */}
                                  <Currency/>
                              </div>
                              <Tabs value={value} onChange={handleTabs}>
                                  <Tab label='Restaurants'/>
                                  <Tab label='Markets'/>
                                  <Tab label='Transportation'/>
                                  <Tab label='Rent'/>
                                  <Tab label='Apartments'/>
                                  <Tab label='Salary'/>
                                  <Tab label='Food'/>
                              </Tabs>
                          </div>
                          <div style={{width: '90%'}}>
                              <div style={{marginTop: '10vh'}}>
                                  {value === 0 ? <Chart/> : value === 1 ? <Chart2/> : value === 2 ?
                                      <Chart3/> : value === 3 ? <Chart4/> : value === 4 ? <Chart5/> : value === 5 ?
                                          <Chart6/> : <Chart7/>}
                              </div>
                              <div style={{display: 'flex', flexDirection: 'column', margin: '20vh'}}>
                                  <Chart8/>
                                  <p style={{display: 'flex', justifyContent: 'center'}}>
                                      A cost-of-living index is a theoretical price index that measures relative cost of
                                      living over time or regions. It is an index that measures differences in the price
                                      of goods and services, and allows for substitutions with other items as prices
                                      vary. </p>
                              </div>
                          </div>
                      </div>
                    </>
                }
            </div>
            <Footer/>
        </>

    )
}

export default Home
