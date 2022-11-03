import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgpGPngevC9K6b1lbCADvNKc1VuXgLuU5hA&usqp=CAU" };

const ListNavigator = () => {
    return(
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Inside</Text>
        </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });

export default ListNavigator