import  React from 'react' ;
import { View, Text, TouchableOpacity } from 'react-native' ;

const HouseItem = ({house}) => {
    return(
        <View>
            <TouchableOpacity>
                <View>
                    <Text>{house.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default HouseItem;