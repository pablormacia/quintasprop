import  React from 'react' ;
import { View, Text, TouchableOpacity,Button } from 'react-native' ;

const HouseItem = ({house, onSelected}) => {
    return(
        <View>
            <TouchableOpacity>
                <View>
                    <Button
                        title={house.name}
                        onPress={() => onSelected(house)}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default HouseItem;