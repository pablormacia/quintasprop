import React, {useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import MapItem from "../components/MapItem";
import { getHouses } from "../store/actions/houses.action";


const ExploreMap = ()=>{
    const dispatch = useDispatch();
    const listHouses = useSelector((state)=>state.houses.listHouses)
    useEffect(()=>{
        dispatch(getHouses());
    }, []);
    return(
        <MapItem houses={listHouses} />
    )
}

export default ExploreMap;