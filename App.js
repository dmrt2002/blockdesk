import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  View
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Trade from './components/Trade'
import Details from './components/Details'
import Account from "./components/Account";
import Login from './components/Login'

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" >
         <Stack.Screen 
         options={({ route, navigation }) => ({
          header: () => <></>
        })}
         name="Home" component={LandingPage} />
         <Stack.Screen 
         options={({ route, navigation }) => ({
          header: () => <></>
        })}
         name="Dashboard" component={Dashboard} />
         <Stack.Screen 
         options={({ route, navigation }) => ({
          header: () => <></>
        })}
         name="Trade" component={Trade} />
         <Stack.Screen 
         options={({ route, navigation }) => ({
          header: () => <></>
        })}
         name="Details" component={Details} />
         <Stack.Screen 
         options={({ route, navigation }) => ({
          header: () => <></>
        })}
         name="Account" component={Account} />
         <Stack.Screen 
         options={({ route, navigation }) => ({
          header: () => <></>
        })}
         name="Login" component={Login} />
      </Stack.Navigator>

      </NavigationContainer>
    </NativeBaseProvider>
  );
}


