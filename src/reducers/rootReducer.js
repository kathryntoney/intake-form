import { combineReducers } from 'redux'
import introReducer from './introReducer'

const rootReducer = combineReducers({
    clients: introReducer
})

export default rootReducer