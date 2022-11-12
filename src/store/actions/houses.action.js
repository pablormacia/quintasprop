import { URL_API } from "../../data/firebase";
import { quintasData } from "../../data/mockUser";

export const GET_HOUSES = 'GET_HOUSES';



export const getHouses = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL_API}/houses.json`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            const houses = Object.keys(data).map(key => {
                return {
                    ...data[key],
                    id: key,
                    
                }
            })

 
            dispatch({
                type: GET_HOUSES,
                payload: houses
            })
        }
        catch (error){
            console.log(error)
        }
    }
}