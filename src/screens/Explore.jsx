import React from "react";
import { ImageBackground, StyleSheet, Button, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/themes/colors";


const image = { uri: "https://st2.depositphotos.com/4187197/9592/v/600/depositphotos_95921748-stock-illustration-organic-booklet-green-background-vertical.jpg" }
const Explore = ({navigation}) => {
    return(
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Button
            title="Listado de quintas"
            color={colors.primary}
             onPress={() =>
                navigation.navigate('ExploreList', { name: 'ExploreList' })
            }
        />
        <Button
            title="Mapa de quintas"
            color={colors.secondary}
             onPress={() =>
                navigation.navigate('ExploreMap', { name: 'ExploreMap' })
            }
        />
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
      backgroundColor: "#00000020"
    }
  });

export default Explore