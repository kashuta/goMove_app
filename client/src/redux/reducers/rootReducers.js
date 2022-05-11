import {combineReducers} from 'redux'
import { cityReducer } from './cityReducer'
import { costLivingReducer } from './costLivingReducer';
import { currencyPriceReducer, currencyPriceReducer2 } from './currencyPriceReducer';
import { currencyReducer } from './currencyReducer';
import { historyReducer } from './historyReducer';
import { lineFrontCityReducer } from './lineFrontCityReducer';
import { priceReducer, priceReducer2 } from './priceReducer'
import { setCurrencyReducer } from './setCurrencyReducer';
import {userReducer} from "./userReducer";


export const rootReducer = combineReducers({
  city: cityReducer,
  price: priceReducer,
  price2: priceReducer2,
  user: userReducer,
  currency: currencyReducer,
  lineFrontCity: lineFrontCityReducer,
  currencyPrice: currencyPriceReducer ,
  currencyPrice2: currencyPriceReducer2,
  currentCurrency: setCurrencyReducer,
  history: historyReducer,
  costLiving: costLivingReducer,

})
