//functional components with hooks

import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native"
import Header from "./components/Header";
import uuid from "react-native-uuid";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
import ShoppingListScreen from "./screens/ShoppingListScreen";

const App = () => {
    return (
        <ShoppingListScreen />
    );
};


export default App;