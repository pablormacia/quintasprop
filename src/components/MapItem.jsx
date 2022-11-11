import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, {Marker} from 'react-native-maps';
import { PROVIDER_GOOGLE } from "react-native-maps"

const MapItem= ({houses}) => {
    return(
        <View style={styles.container} >
            <MapView style={styles.map}
                provider={ PROVIDER_GOOGLE }
                initialRegion={{
                latitude: -34.793523,
                longitude: -58.829422,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            }}
        >
        {houses.map((house, index) => (
            <Marker
            key={index}
            coordinate={house.latlng}
            title={house.name}
            description={house.description}
            />
        ))}
        </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

export default MapItem;