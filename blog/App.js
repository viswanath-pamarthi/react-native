//functional components with hooks

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/IndexScreeen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/dist/Feather";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={IndexScreen} options={({ navigation }) => ({
          title: "Index Screen", headerRight: () => {
            return (
              < TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Icon name="plus" size={30} />
              </TouchableOpacity>
            )
          }
        })} />
        <Stack.Screen name="Show" component={ShowScreen} options={{ title: "Blog Post" }} />
        <Stack.Screen name="Create" component={CreateScreen} options={{ title: "Create Blog Post" }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default () => {
  return <Provider>
    <App />
  </Provider>;
};