import React from "react";
import { Text, View, StyleSheet, Pressable, TouchableNativeFeedback, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import { Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title="Shopping List" style={[styles.buttonStyle, { marginVertical: 20 }]} onPress={() => {
                navigation.navigate('ShoppingList');
            }} >
                test
            </Button>
            <TouchableNativeFeedback style={[styles.buttonStyle]}>
                <Text style={styles.text}>TouchableNativeFeedback</Text>
            </TouchableNativeFeedback>
            <TouchableOpacity style={[styles.buttonStyle, { marginVertical: 20 }]}>
                <Text style={styles.text}>TouchableOpacity</Text>
            </TouchableOpacity>
            <TouchableHighlight style={[styles.buttonStyle, { marginTop: 0, marginBottom: 10 }]}>
                <Text style={styles.text}>TouchableHighlight</Text>
            </TouchableHighlight>
            <TouchableWithoutFeedback style={[styles.buttonStyle, { marginTop: 0 }]}>
                <Text>
                    TouchableWithoutFeedback
                </Text>
            </TouchableWithoutFeedback>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    buttonStyle: {
        width: 200,
        color: "#066dce",
        backgroundColor: "#066dce",
        justifyContent: "center",
        height: 60,
    },
    text: {
        borderWidth: 1,
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderColor: 'black',
        backgroundColor: '#066dce',
        textAlign: "center",
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold"
    }
});

export default HomeScreen;