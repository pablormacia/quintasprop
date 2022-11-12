import  React from 'react' ;
import {StyleSheet, View, Text, Button, Image, Dimensions, TouchableOpacity } from 'react-native' ;
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HouseListItem = ({house, onSelected}) => {
    return(
        <TouchableOpacity onPress={() => onSelected(house)}>
        <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image style={styles.image} source={{uri: house.img}} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{house.name}</Text>
                    <Text>{house.zone}</Text>
                    <Text>{house.description}</Text>
                
                 
                </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingVertical:5,
    },
    imgContainer: {
        width:Dimensions.get('window').width*0.5,
        height: 200,
        borderRadius: '50%',
        justifyContent: "center",
        alignItems: 'center'
    },
    image: {
        width: "100%",
        height: "100%",
    },
    textContainer: {
        width:Dimensions.get('window').width*0.5,
        paddingHorizontal:10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    }

})

export default HouseListItem;