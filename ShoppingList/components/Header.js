//functional components with hooks

import React from "react";
import { View, Text, StyleSheet } from "react-native"

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View >
    );
};

//Default props when no props passed to the component
Header.defaultProps = {
    title: 'Shopping List'
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue',

        // justifyContent: 'center',
        // alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center'
    },
    // img: {
    //     width: 100,
    //     height: 100,
    //     borderRadius: 100 / 2,//can't give % values, instead height nad height /2
    // }

});

export default Header;