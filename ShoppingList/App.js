//functional components with hooks

import React from "react";
import { View, Text, StyleSheet } from "react-native"
import Header from "./components/Header";

const App = () => {
    return (
        <View style={styles.container}>
            <Header title="Shopping List" />
        </View >
    );
};

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

export default App;