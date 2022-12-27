import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Restaurant() {
    return (
        <View>
            <Text style={styles.text}>Page restau</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color: 'black'
    }
})
