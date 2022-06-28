import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FlexBoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}>Child 1</Text>
            <Text style={styles.textStyle2}>Child 2</Text>
            <Text style={styles.textStyle3}>Child 3</Text>
            <Text style={styles.textStyle4}>Child 4</Text>
            <Text style={styles.textStyle5}>Child 5</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        // alignItems: "flex-start",//default - stretch, else flex-start, center, flex-end
        // flexDirection: 'row',//default is column
        // height: 200,
        flex: 1
        // justifyContent: 'space-around',//default flex-start. this is in direction of flex-direction
    },
    textStyle1: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 2,
        alignSelf: 'flex-start'
    },
    textStyle2: {
        borderWidth: 3,
        borderColor: 'orange',
        flex: 4,//operates in the direction of the flex-direction
        alignSelf: 'center',
        top: 10,//left, right, bottom, - not same as margin. i.e the position of the other child elements is not moved, only the element with this prop will move and may overlap others 
    },
    textStyle3: {
        borderWidth: 3,
        borderColor: 'black',
        flex: 4,//proportionate,
        alignSelf: 'flex-end',//overrides the default alignItems of parents
    },
    textStyle4: {
        borderWidth: 3,
        borderColor: 'yellow',
        flex: 4,//proportionate,
        alignSelf: 'flex-end',//overrides the default alignItems of parents
        position: 'absolute',//ignored by siblings. Still obeys some flex blox rules set by parent. SOme of the values of the parent alignItems, i.e streact
    },
    textStyle5: {
        borderWidth: 3,
        borderColor: 'green',
        color: 'green',
        textAlign: 'center',
        fontSize: 18,
        // position: 'absolute',//ignored by siblings. Still obeys some flex blox rules set by parent. SOme of the values of the parent alignItems, i.e streact
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0
        //instead of the above 5 properties, react has a short cut as below
        ...StyleSheet.absoluteFillObject
    }
});

export default FlexBoxScreen;