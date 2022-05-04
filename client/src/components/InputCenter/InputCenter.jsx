import {Autocomplete, Button, TextField} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getlineFrontCity } from '../../redux/actions/lineFrontCityAction'
import {getPriceFromDB, getPriceFromDB2} from '../../redux/thunk/thunkPrice'

import Chart from '../Chart/Chart'
import Chart1 from '../SecondChart/SecondChart'



function InputCenter() {

    const city = useSelector((state) => state.city)
    const [data, setData] = useState("")
    const [data2, setData2] = useState("")

    const price = useSelector((state) => state.price)
    const [chart, setChart] = useState(price)


    
    const dispatch = useDispatch()

    const slice = city.map(el => ({id: el.id, label: `${el.city}, ${el.country}`}))

    const searchCity = () => {
        let new1 = data.split(',')
        let new2 = {city: new1[0], country: new1[1]}
        let new3 = data2.split(',')
        let new4 = {city: new3[0], country: new3[1]}

        dispatch(getPriceFromDB(new2))
        dispatch(getPriceFromDB2(new4))
// console.log(typeof data2.split(', ')[0]);
        const city1 = data.split(', ')[0];
        const city2 = data2.split(', ')[0];
        console.log(city1);
        const objInRedux = {
          city1,
          city2,
        }

        dispatch(getlineFrontCity(objInRedux))

    }

    useEffect(() => {
      setChart(!!price.length)
    }, [price])

    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"             
                options={slice}
                sx={{width: 300}}
                renderInput={(params) => <TextField {...params} label="City"/>}
                onChange={(e) => setData(e.target.innerText)}

        />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
           options={slice}
            sx={{width: 300}}
            renderInput={(params) => <TextField {...params} label="City"/>}
            onChange={(e) => setData2(e.target.innerText)}


        />
        <Button onClick={searchCity} variant="contained" color="success">
          Find city
        </Button>


        {chart 
            && 
            <>
            <Chart/>
            <Chart1/>
            </> 
            }
      </>
  )

}

export default InputCenter
