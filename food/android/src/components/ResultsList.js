import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultsDetail from "./resultsDetail";
import { useNavigation } from "@react-navigation/native";

const ResultsList = ({ title, results }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList horizontal //short hand of horizontal ={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => {
                        navigation.navigate('ResultsShow', { result: item });

                    }}>
                        <ResultsDetail result={item} /></TouchableOpacity>;
                }}
            />
        </View>);
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;