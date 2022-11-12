import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import HouseItem from "../components/HouseItem"


const House = () => {
    const selectedHouse = useSelector((state)=>state.houses.selectedHouse)
    return(
        <HouseItem house={selectedHouse} />
    )
}

export default House