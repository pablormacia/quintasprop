import  React from 'react' ;
import {StyleSheet, View, Text, Image, Dimensions } from 'react-native' ;

const HouseItem = ({house}) => {
    return(
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingVertical:5,
    },
    imgContainer: {
        width:'100%',
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

export default HouseItem;