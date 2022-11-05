import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../../screens/Search";

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
    return(
        <Stack.Navigator 
        initialRouteName="Search"
        screenOptions={{
            headerTitleStyle: {
                fontFamily: 'Montserrat-Bold',
            },
        }}
    >
      <Stack.Screen 
            name="Search"
            component={Search} 
            options={{
                title: 'Buscar quintas',
            }}
        />

    </Stack.Navigator>
    )
}

export default SearchNavigator