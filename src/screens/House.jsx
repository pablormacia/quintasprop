import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";


const House = () => {
    const selectedHouse = useSelector((state)=>state.houses.selectedHouse)
    return(
        <Text>{selectedHouse.name}</Text>
    )
}

export default House