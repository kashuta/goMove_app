import React from 'react'
import {FormControl, InputLabel,NativeSelect, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrencyFromDB } from '../../redux/thunk/thunkCurrency'
import { useEffect } from 'react'
import { getCurrencyPrice, getCurrencyPrice2 } from '../../redux/actions/currencyPriceAction'
import { setCurrency } from '../../redux/actions/currencyAction'

function Currency() {

  const currency = useSelector((state) => state.currency)
  const price = useSelector((state) => state.price)
  const price2 = useSelector((state) => state.price2)
  const dispatch = useDispatch()
  useEffect(() =>  {
  dispatch(getCurrencyFromDB())

}, [])

const searchHandler = (e) => {
  
  const rates = currency.find((el) => el.currency === e.target.value)
  
   const currencyPrice = price.map((el) => {
      return {...el, price: Math.ceil(el.price * rates.usd) }
    })
    const currencyPrice2 = price2.map((el) => {
      return {...el, price: Math.ceil(el.price * rates.usd) }
    })  
  
  dispatch(getCurrencyPrice(currencyPrice))
  dispatch(getCurrencyPrice2(currencyPrice2))
  dispatch(setCurrency(e.target.value))
} 
  return (
    <>
    <Box sx={{ minWidth: 100 }}></Box>
    <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
      
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    onChange={searchHandler}
    inputProps={{
      name: 'currency',
      id: 'uncontrolled-native',
    }}
  >
    {
      currency?.map((el) => <option key={el.currency} value={el.currency}>{el.currency}</option>)
    }
    
  </NativeSelect>
</FormControl>
    </>
  )
}

export default Currency
