//functional components with hooks

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/IndexScreeen";
import { BlogProvider } from "./src/context/BlogContext";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={IndexScreen} options={{ title: "Index Screen" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <BlogProvider>
    <App />
  </BlogProvider>;
};