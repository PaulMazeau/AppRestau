import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Mood() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Foncedalle</Text>
            <Text style={styles.text}>20</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 75,
        borderRadius: 37,
        padding:20,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '5%',
        marginRight: '5%',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    }
})
