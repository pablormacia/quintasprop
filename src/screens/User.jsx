import React, {useState} from "react";
import { Button, Text, View } from "react-native";
import ImageSelector from "../components/ImageSelector";


const User = () => {
    const [image, setImage] = useState("");


    const onHandleImageSelect = (imageUri) => {
        setImage(imageUri);
      };

    return(
        <View>
            <Text>Perfil de usuario</Text>
            <ImageSelector onImage={onHandleImageSelect} />
        </View>
    )
}

export default User