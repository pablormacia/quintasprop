import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "../screens/Explore";
import ExploreList from "../screens/ExploreList";
import ExploreMap from "../screens/ExploreMap.jsx";

const Stack = createNativeStackNavigator();

const ExploreNavigator = () => {
    return(
      <Stack.Navigator 
      initialRouteName="Explore"
      screenOptions={{
          headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
          },
      }}
  >
    <Stack.Screen 
          name="Explore"
          component={Explore} 
          options={{
              title: 'Explorar quintas',
          }}
      />
      <Stack.Screen 
          name="ExploreList"
          component={ExploreList} 
          options={{
              title: 'Lista de quintas',
          }}
      />
      <Stack.Screen 
          name="ExploreMap" 
          component={ExploreMap} 
          options={{
              title: 'Mapa de quintas',
          }}
        />
  </Stack.Navigator>
)
}

export default ExploreNavigator