import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'

export default function ButtonMood() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Changer de mood</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       width: '95%',
       borderColor: 'white',
       borderWidth: 2,
       height: 61,
       borderRadius: 10,
       margin: 10,
       justifyContent: 'center',
       alignContent: 'center',
       paddingLeft: 15,
    },
    text: {
        color: 'white',
    }
})
