// Filename: index.js
// Combined code from all files
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.text}>Hello World!</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});