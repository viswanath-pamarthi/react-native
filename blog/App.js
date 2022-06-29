//functional components with hooks

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/IndexScreeen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={IndexScreen} options={{ title: "Index Screen" }} />
        <Stack.Screen name="Show" component={ShowScreen} options={{ title: "Blog Post" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <Provider>
    <App />
  </Provider>;
};