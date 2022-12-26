import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { useState } from 'react';
import { useEffect } from 'react';
import {firebase} from '../config'
import { TouchableOpacity } from 'react-native';


export default function HomeScreen() {

    const user = firebase.auth().currentUser;

    return (
        <SafeAreaView>
            <Text style={styles.text}>
            Plop à toi, {user?.email}
            </Text>
            <TouchableOpacity 
            style={styles.text}
            onPress={() => firebase.auth().signOut()}
            >
                <Text>Sign out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text:{
        color: 'green',
        fontSize: 18,
        margin: 15,
    }
})
