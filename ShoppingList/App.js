//functional components with hooks

import React from "react";
import { View, Text } from "react-native"

const App = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'darkslateblue', fontSize: 30 }}>Hello world</Text>
        </View >
    );
};

export default App;