import { quintasData } from "../../data/mock";
import { SELECT_HOUSE } from "../actions/houses.action";

const initialState = {
    listHouses: quintasData,
    filteredHouses: [],
    selectedHouse: null
}

const housesReducer = (state = initialState, action) => {
    switch(action.type){
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
            return state
    }
}

export default housesReducer;