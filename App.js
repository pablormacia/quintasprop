import React from "react";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import AppNavigator from "./src/navigation/AppNavigator";
import store from "./src/store";
import { Provider } from "react-redux";

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
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
