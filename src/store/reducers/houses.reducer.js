import { quintasData } from "../../data/mock";
import { SELECT_HOUSE } from "../actions/house.action";
import { GET_HOUSES }  from "../actions/houses.action";


const initialState = {
    listHouses: [],
    filteredHouses: [],
    selectedHouse: null
}

const housesReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_HOUSES:
            return {
                ...state,
                listHouses: action.payload
            }
        case SELECT_HOUSE:
            const indexHouse = state.listHouses.findIndex(
                (house) => house.id === action.houseId
            )
            if(indexHouse === -1) return state;
            return {
                ...state,
                selectedHouse: state.listHouses[indexHouse]
            } 
        default:
            return {
                state
            }
    }
}

export default housesReducer;