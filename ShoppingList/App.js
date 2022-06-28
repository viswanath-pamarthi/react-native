//functional components with hooks

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native"
import ShoppingListScreen from "./screens/ShoppingListScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "My Home" }} />
                <Stack.Screen name="ShoppingList" component={ShoppingListScreen} options={{ title: 'My Shopping List' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default App;