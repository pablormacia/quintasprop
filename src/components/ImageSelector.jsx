import  React, {useState} from 'react' ;
import { View, Text, StyleSheet,Button, Image, Alert } from 'react-native' ;
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { colors } from '../constants/themes/colors';

const ImageSelector = ({onImage}) => {
    const [pickedUri,setPickedUri] = useState();

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
        if (status !== "granted") {
          Alert.alert("Permiso denegado", "Necesitamos permisos para usar la cámara", [{ text: "Ok" }]);
          return false;
        }
        return true;
      };

      const handlerTakeImage = async () => {
        const isCameraOk = await verifyPermissions();
        if (!isCameraOk) return;
    
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.7,
        });
    
        setPickedUri(image.uri);
        onImage(image.uri);
      };

    return(
        <View style={styles.container}>
                <View style={styles.preview}>
                    {!pickedUri ? (
                        <Image style={styles.image} source={{uri: 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png'}}/>
                    ) : (
                        <Image resizeMode={'cover'} style={styles.image} source={{uri: pickedUri}}  />
                    )}
                </View>
                <Button
                    title="Tomar foto"
                    color={colors.primary}
                    onPress={handlerTakeImage}
                />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    preview: {
        width:200,
        height: 200,
        borderRadius: '50%',
        margin: 10,
        justifyContent: "center",
        alignItems: 'center'
    },
    image: {
        width: "100%",
        height: "100%",
    }
})

export default ImageSelector;