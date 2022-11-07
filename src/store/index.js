import { createStore, combineReducers } from "redux";
import housesReducer from "./reducers/houses.reducer";

const rootReducer = combineReducers({
    houses: housesReducer
})

export default createStore(rootReducer);