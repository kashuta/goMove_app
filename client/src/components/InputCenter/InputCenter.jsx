import {Autocomplete, Button, TextField} from '@mui/material'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPriceFromDB} from '../../redux/thunk/thunkPrice'

function InputCenter(e) {

    const city = useSelector((state) => state.city)
    const [data, setData] = useState("")
    const dispatch = useDispatch()

    const slice = city.map(el => ({id: el.id, label: `${el.city}, ${el.country}`}))

    const searchCity = () => {
        let new1 = data.split(',')
        let new2 = {city: new1[0], country: new1[1]}
        dispatch(getPriceFromDB(new2))
    }

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
            <Button onClick={searchCity} variant="contained" color="success">
                Find city
            </Button>
        </>
    )
}

export default InputCenter
