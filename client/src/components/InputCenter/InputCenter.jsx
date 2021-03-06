import {Autocomplete, Button, createFilterOptions, TextField} from '@mui/material'
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPriceFromDB, getPriceFromDB2} from '../../redux/thunk/thunkPrice'
import {getlineFrontCity} from "../../redux/actions/lineFrontCityAction";
import {Link} from "react-scroll";
import { addHistoryFromDB } from '../../redux/thunk/thunkHistory';
import { getCostLivingFromBD } from '../../redux/thunk/thunkCostLiving';


function InputCenter({find}) {
  const user = useSelector((state) => state.user)
  const city = useSelector((state) => state.city)
  const [data, setData] = useState('')
  const [data2, setData2] = useState('')
  
  const dispatch = useDispatch()

  useEffect(() => {
    if (find) {
      setData(find.cityBegin)
      setData2(find.cityEnd)
      }
    }, [find])

  
    const searchCity = () => {
        let date = data.replace(/[A-Z]/g, ' $&').trim();
        let new1 = date.split(',');
        let state = new1[1];
        if (state.length === 4) {
            state = state.replace(/\s/g, '');
            new1[1] = state
        }
        let cityFirst;
        let country;
        if (new1.length >= 3) {
            cityFirst = `${new1[0]}, ${new1[1]}`
            country = new1[2]
        } else {
            cityFirst = new1[0]
            country = new1[1]
        }
        let new2 = {city: cityFirst, country}
        console.log('new2', new2);

        let date2 = data2.replace(/[A-Z]/g, ' $&').trim();
        let new3 = date2.split(',');
        let state2 = new3[1];
        if (state2.length === 4) {
            state2 = state2.replace(/\s/g, '');
            new3[1] = state2
        }
        let cityFirst1;
        let country1;
        if (new3.length >= 3) {
            cityFirst1 = `${new3[0]}, ${new3[1]}`
            country1 = new3[2]
        } else {
            cityFirst1 = new3[0]
            country1 = new3[1]
        }

        let new4 = { city: cityFirst1, country: country1 }    
        
        
        
        dispatch(getPriceFromDB(new2))
        dispatch(getPriceFromDB2(new4))
        dispatch(addHistoryFromDB(data, data2, user))
        dispatch(getCostLivingFromBD())

      

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
                value={find?.cityBegin}
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
                        placeholder='From'
                        variant="outlined"

                    />}
                onChange={(e) => setData(e.target.innerText.replace(/ /gm, ''))}

            />
        <Autocomplete
                value={find?.cityEnd}
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
                        placeholder='To'
                        variant="outlined"

                    />}
                onChange={(e) => setData2(e.target.innerText.replace(/ /gm, ''))}
            />
            <Link
                to='section1'
                offset={-68}
                smooth={true}
                delay={800}
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
