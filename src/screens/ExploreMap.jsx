import React from "react";
import { useSelector } from "react-redux";
import { Text } from "react-native";
import MapItem from "../components/MapItem";

const ExploreMap = ()=>{
    const location = {lat:'-34.56691050891969', lng:'-58.34229502458255'}
    const listHouses = useSelector((state)=>state.houses.listHouses)
    return(
        <MapItem houses={listHouses} />
    )
}

export default ExploreMap;