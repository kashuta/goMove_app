import {Autocomplete, Button, createFilterOptions, TextField} from '@mui/material'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPriceFromDB, getPriceFromDB2} from '../../redux/thunk/thunkPrice'
import {getlineFrontCity} from "../../redux/actions/lineFrontCityAction";
import {Link} from "react-scroll";
import { addHistoryFromDB } from '../../redux/thunk/thunkHistory';


function InputCenter() {

    const user = useSelector((state) => state.user)
    
    const city = useSelector((state) => state.city)
  
    const [data, setData] = useState("")
    const [data2, setData2] = useState("")

    const dispatch = useDispatch()

  
    const searchCity = () => {
        let new1 = data.split(',')
        let cityFirst;
        let country;
        if (new1.length >= 3) {
            cityFirst = `${new1[0]},${new1[1]}`
            country = new1[2]
        } else {
            cityFirst = new1[0]
            country = new1[1]
        }
        let new2 = {city: cityFirst, country}

        let new3 = data2.split(',')
        let cityFirst1;
        let country1;
        if (new3.length >= 3) {
            cityFirst1 = `${new3[0]},${new3[1]}`
            country1 = new3[2]
        } else {
            cityFirst1 = new3[0]
            country1 = new3[1]
        }

        let new4 = { city: cityFirst1, country: country1 }
        // let cityFrom = { data: cityBegin }
        
        
        console.log(data2, '21');
        dispatch(getPriceFromDB(new2))
        dispatch(getPriceFromDB2(new4))
        dispatch(addHistoryFromDB(data, data2, user))
      

        const city1 = data.split(', ')[0];
        const city2 = data2.split(', ')[0];

        const objInRedux = {
            city1,
            city2,
        }
        dispatch(getlineFrontCity(objInRedux));
    }

    const OPTIONS_LIMIT = 10;
    const defaultFilterOptions = createFilterOptions();

    const filterOptions = (options, state) => {
        return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
    };


    return (
        <>
            <Autocomplete
                filterOptions={filterOptions}
                selectOnFocus={true}
                id="select-on-focus-1"
                options={city}
                sx={{width: 400, marginRight: 5}}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) =>
                    <TextField
                        sx={{background: 'white', borderRadius: 5}}
                        {...params}
                        placeholder="From"
                        variant="outlined"

                    />}
                onChange={(e) => setData(e.target.innerText.replace(/ /gm, ''))}

            />
            <Autocomplete
                filterOptions={filterOptions}
                selectOnFocus={true}
                id="select-on-focus-2"
                options={city}
                sx={{width: 400, marginRight: 5}}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) =>
                    <TextField
                        sx={{background: 'white', borderRadius: 5}}
                        {...params}
                        placeholder="To"
                        variant="outlined"

                    />}
                onChange={(e) => setData2(e.target.innerText.replace(/ /gm, ''))}
            />
            <Link
                to='section1'
                offset={-70}
                smooth={true}
                delay={750}
            >
                <Button onClick={searchCity} variant="contained"
                        sx={{background: '#FFB703', marginLeft: '20px', marginTop: 1.2}}>
                    Find city
                </Button>
            </Link>
        </>
    )
}

export default InputCenter
