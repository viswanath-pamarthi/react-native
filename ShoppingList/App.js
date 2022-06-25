//functional components with hooks

import React from "react";
import { View, Text, StyleSheet } from "react-native"

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello world</Text>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'darkslateblue',
        fontSize: 30,
    }

});

export default App;