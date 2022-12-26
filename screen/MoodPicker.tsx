import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Mood from '../components/Mood'

export default function MoodPicker() {
    const navigation = useNavigation()
    return (
        
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>AppRestau</Text>
            <Text style={styles.text}>Donne nous ton mood on te propose une liste de restaurants autour de toi. </Text>
            <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            >
            <Mood />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 24,
        color: 'white',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: 20
    },
    text: {
        fontSize: 16,
        color: 'white',
        marginBottom: 20,
        marginLeft: '5%',
        marginRight: '5%',
    }
})
