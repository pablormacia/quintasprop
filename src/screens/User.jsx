import React, {useState} from "react";
import { Button, Text, View } from "react-native";
import ImageSelector from "../components/ImageSelector";
import UserItem from "../components/UserItem";
import { user } from "../data/mockUser";

const User = () => {
    const [image, setImage] = useState("");


    const onHandleImageSelect = (imageUri) => {
        setImage(imageUri);
      };

    return(
        <View>
            <UserItem user={user} />
            <ImageSelector onImage={onHandleImageSelect} />
        </View>
    )
}

export default User