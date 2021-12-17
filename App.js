import "react-native-gesture-handler";
import React from "react";
import { Text, View } from "react-native";
import DrawerNav from "./src/navigation/DrawerNav";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import AppWrapper from "./src/AppWrapper";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from "react-redux";
import { selectAppData } from "./src/redux/slices/AppStateSlice";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#000000",
    textColor: "white",
  },
};

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    textColor: "black",
  },
};

const AppNavigator = () => {
  const appData = useSelector(selectAppData);
  return (
    <SafeAreaProvider>

      <NavigationContainer
        theme={appData?.theme ? customDarkTheme : customDefaultTheme}
      >
        <DrawerNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const MainNavigator = AppWrapper(AppNavigator);

export default function App() {
  
  return (
    <MainNavigator />
  );
}
