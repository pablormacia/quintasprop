import React from "react";
import HouseItem from "../components/HouseItem"
import { useSelector } from "react-redux";
import { FlatList} from "react-native";

const ExploreList = ()=>{
    const listHouses = useSelector((state)=>state.houses.listHouses)

const renderItem = ({ item }) => <HouseItem house={item} />

    return(
        <FlatList
            data={listHouses}
            renderItem= {renderItem}
            keyExtractor= {item => item.id.toString()}
        />
    )
}

export default ExploreList;