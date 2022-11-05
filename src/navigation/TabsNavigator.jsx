import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/themes/colors";
import ExploreNavigator from "./ExploreNavigator";
import SearchNavigator from "./SearchNavigator";
import UserNavigator from "./UserNavigator";

const TabsNavigator = () =>{
    const BottomTab = createBottomTabNavigator();
    return(
        <BottomTab.Navigator
            initialRouteName="ExploreTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'Montserrat-Bold',
                    color: colors.primary,
                }
            }}
        >
            <BottomTab.Screen
                name="ExploreTab"
                component={ExploreNavigator}
                options={{
                    title: 'Explorar',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'home' : "home-outline"}
                            size={22}
                            color={colors.primary}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="SearchTab"
                component={SearchNavigator}
                options={{
                    title: 'Búsqueda',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'search' : "search-outline"}
                            size={22}
                            color={colors.primary}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="UserTab"
                component={UserNavigator}
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'person' : "person-outline"}
                            size={22}
                            color={colors.primary}
                        />
                    ),
                }}
            />
        </BottomTab.Navigator>
    )
}

export default TabsNavigator;