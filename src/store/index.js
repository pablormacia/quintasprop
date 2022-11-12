import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import housesReducer from "./reducers/houses.reducer";

const rootReducer = combineReducers({
    houses: housesReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));