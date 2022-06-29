import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from "react-native";

import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
    const [result, setResult] = useState(null);//expecting an object we can initialize to null
    const { id } = route.params;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    else {
        return (
            <View style={styles.view}>
                <Text>{result.name}</Text>
                <ScrollView>
                    <FlatList data={result.photos}
                        keyExtractor={(photo) => photo}
                        renderItem={({ item }) => {
                            return <Image style={styles.image} source={{ uri: item }} />
                        }} />
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    image: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;