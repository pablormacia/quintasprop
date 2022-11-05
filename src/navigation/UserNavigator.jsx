import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import User from "../../screens/User";

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
    return(
        <Stack.Navigator 
        initialRouteName="User"
        screenOptions={{
            headerTitleStyle: {
                fontFamily: 'Montserrat-Bold',
            },
        }}
    >
      <Stack.Screen 
            name="User"
            component={User} 
            options={{
                title: 'Perfil de usuario',
            }}
        />

    </Stack.Navigator>
    )
}

export default SearchNavigator