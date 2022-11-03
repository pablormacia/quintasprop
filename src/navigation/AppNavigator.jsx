import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from "./TabsNavigator";
import AuthNavigator from "./AuthNavigator";

const AppNavigator = () => {
    //const userId = useSelector(state => state.auth.userId);
    const userId = true; //luego hacer la validación
    return (
        <NavigationContainer>
            { userId ? <TabsNavigator /> : <AuthNavigator /> }
        </NavigationContainer>
    )
}

export default AppNavigator;