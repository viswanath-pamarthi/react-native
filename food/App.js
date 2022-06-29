//functional components with hooks

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from "./android/src/screens/SearchScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: "Business Search" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;