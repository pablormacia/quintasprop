import React from "react";
import HouseItem from "../components/HouseItem"
import { useSelector, useDispatch } from "react-redux";
import { FlatList} from "react-native";
import { selectHouse } from "../store/actions/houses.action";

const ExploreList = ({navigation})=>{
    const dispatch = useDispatch();
    const listHouses = useSelector((state)=>state.houses.listHouses)
    

    const onSelected = (item) =>{
        dispatch(selectHouse(item.id))
        navigation.navigate("House", { name: item.name, houseId: item.id })
    }

    const renderItem = ({ item }) => <HouseItem house={item} onSelected={onSelected} />

    return(
        <FlatList
            data={listHouses}
            renderItem= {renderItem}
            keyExtractor= {item => item.id.toString()}
        />
    )
}

export default ExploreList;