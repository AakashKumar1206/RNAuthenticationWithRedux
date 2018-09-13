import { combineReducers } from 'redux'
import {EmailChangedReducer} from './EmailChangedReducer'

export const Reducers =  combineReducers({
 auth: EmailChangedReducer,
 
})

// export const Reducers = ()=>{}