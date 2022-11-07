import { quintasData } from "../../data/mock";

const initialState = {
    listHouses: quintasData,
    filteredHouses: [],
    selectedHouse: null
}

const housesReducer = (state = initialState, action) => {
    return state
}

export default housesReducer;