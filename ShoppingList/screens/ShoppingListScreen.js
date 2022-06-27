import { View, Text, StyleSheet, FlatList, Alert } from "react-native"
import Header from "../components/Header";
import uuid from "react-native-uuid";
import ListItem from "../components/ListItem";
import AddItem from "../components/AddItem";
import React, { useState } from "react";

const [items, setItems] = useState([
    { id: uuid.v4(), text: 'Milk' },
    { id: uuid.v4(), text: 'Eggs' },
    { id: uuid.v4(), text: 'Bread' },
    { id: uuid.v4(), text: 'Juice' }
]);


const deleteItem = (id) => {
    setItems((prevItems) => {
        return prevItems.filter(item => item.id != id);
    });
};

const addItem = (text) => {
    if (!text) {
        Alert.alert('Error', "Please enter an item", { text: 'Ok' })
    } else {
        setItems(prevItems => {
            return [{ id: uuid.v4(), text: text }, ...prevItems]
        });
    }
};

const ShoppingListScreen = () => {

    return (
        <View style={styles.container}>
            <Header title="Shopping List" />
            <AddItem addItem={addItem} />
            <FlatList data={items} renderItem={
                ({ item }) => <ListItem item={item} deleteItem={deleteItem} />
            }
            />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    // text: {
    //     color: 'darkslateblue',
    //     fontSize: 30,
    // },
    // img: {
    //     width: 100,
    //     height: 100,
    //     borderRadius: 100 / 2,//can't give % values, instead height nad height /2
    // }

});

export default ShoppingListScreen;