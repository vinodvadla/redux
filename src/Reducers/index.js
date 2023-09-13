import { combineReducers } from "redux";
import FirstReducer from './FirstReducer'
import SecondReducer from './SecondReducer'


const reducer=combineReducers({
    first:FirstReducer,
    second:SecondReducer
}
)
   
export default reducer