import  React from 'react' ;
import {StyleSheet, View, Text } from 'react-native' ;

const UserItem = ({user}) => {
    console.log(user.name)
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{user.name}</Text>
            <Text>{user.zone}</Text>
            <Text>{user.address}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    }

})

export default UserItem;