//functional components with hooks

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native"
import ShoppingListScreen from "./screens/ShoppingListScreen";
import HomeScreen from "./screens/HomeScreen";
import BoxScreen from "./screens/BoxScreen";
import FlexBoxScreen from "./screens/FlexBoxScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "My Home" }} />
                <Stack.Screen name="ShoppingList" component={ShoppingListScreen} options={{ title: 'My Shopping List' }} />
                <Stack.Screen name="BoxScreen" component={BoxScreen} options={{ title: 'Box Demo Screen' }} />
                <Stack.Screen name="FlexBoxScreen" component={FlexBoxScreen} options={{ title: 'FlexBox Demo Screen' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default App;