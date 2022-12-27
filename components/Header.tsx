import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Platform} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Settings from '../assets/Icons/Settings.svg'

const Header = () => {

    return (
    
    <SafeAreaView style= {{backgroundColor: '#121212', paddingBottom:Platform.OS === 'android' ? 25:-25}}>
    <View style={styles.Header}>
        <TouchableOpacity onPress={() => console.log('prout')} style={styles.GlobalLeft}>
        <View style={styles.ImageContainer}>
            <Image source={require('../assets/Img/pizza01.png')} style={styles.Image}/>
        </View>
        
        <View style={styles.Title}>
            <Text style={styles.BigTitle}>Paul</Text>
            <Text style={styles.SmallTitle}>Mazeau</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity  onPress={() => console.log('prout2')}>
            <Settings width={25} height={25} fill="#FFF"/>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
    );
};


export default Header;


const styles = StyleSheet.create ({
    Header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 16,
        marginLeft: 16,
        marginRight: 16,
        justifyContent: 'space-between',
        backgroundColor: '#121212'
    },

    GlobalLeft: {
        flexDirection: 'row',
    },

    Title: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        color: 'white'
    },

    BigTitle: {
        fontSize: 16,
        color: 'white'
    },

    SmallTitle: {
        fontSize: 12,
        opacity: 0.6,
        color: 'white'
    },

    ImageContainer: {
        height: 40,
        width: 40,
        overflow: 'hidden',
        borderRadius: 7,
    },
    Image: {
        height: '100%',
        width: '100%',
    },
})