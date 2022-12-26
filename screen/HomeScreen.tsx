import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {firebase} from '../config'
import { TouchableOpacity } from 'react-native';
import CarrousselBigCard from '../components/CarrousselBigCard';
import CarrousselLittleCard from '../components/CarrousselLittleCard';
import { useNavigation } from '@react-navigation/native'
import ButtonMood from '../components/ButtonMood';
import Header from '../components/Header';


export default function HomeScreen() {

    const navigation = useNavigation()
    const user = firebase.auth().currentUser;


    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Top 10 des restaurants à Lyon</Text>
            <CarrousselLittleCard />
            <Text style={styles.title}>Selon ton mood</Text>
            <CarrousselBigCard />
            <TouchableOpacity
            onPress={()=>navigation.goBack()}
            >
            <ButtonMood />
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.text}
            onPress={() => firebase.auth().signOut()}
            >
                <Text style={styles.title}>Sign out</Text>
            </TouchableOpacity>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212"
    },
    text:{
        color: 'green',
        fontSize: 18,
        margin: 15,
    },
    title: {
        color: 'white',
        fontSize: 20
    }
})
