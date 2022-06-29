import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"

const ResultsDetail = ({ result }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}> {result.name}</Text>
            <Text>{result.rating} Starts, {result.review_count}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        // fontSize: 16//default font size with react-native is 14
    }
});

export default ResultsDetail;