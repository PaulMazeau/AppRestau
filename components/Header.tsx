import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props: { name: string }) => {
    return (
        <View style={styles.container}>
            <Text>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 28,
    }
})

export default Header