import React from "react";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import InitialNavigator from "./src/navigation/AppNavigator";

export default function App() {

  const [loaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }
  return (
    <InitialNavigator />
  );
}
