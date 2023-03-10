import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';
import BackArrow from '../assets/Icons/BackArrow.svg'
import { browserLocalPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db, storage } from '../config';
import { doc, setDoc } from 'firebase/firestore';

const SignUp = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const SignUpUser = async (email: string, password: string, firstName: string, lastName: string) => {
        createUserWithEmailAndPassword(auth, email, password).then(function(userCred) {
            // get user data from the auth trigger
            const userUid = userCred.user.uid; // The UID of the user.
            // set account  doc  
            const entry = {
              prenom: firstName,
              nom: lastName,
              uuid: userUid,
            }
            navigation.navigate('HomeScreen')
           setDoc(doc(db, 'Users', userUid),entry); 
          }).catch((error) => {
           console.log('proututtutuutughgzreohior')
          });
        
    }

    return (
        <View style={styles.container}> 
            <SafeAreaView>
            <TouchableOpacity 
            style={styles.BackBtn}
            onPress={() => navigation.goBack()}
            >
                <BackArrow  width={22} height= {16}/>
            </TouchableOpacity>
            </SafeAreaView>
            <Text style={styles.text}>Créer un {'\n'}compte. </Text>
            <View style={styles.main}>
                <TextInput 
                    style={styles.input}
                    placeholder="First Name"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Last Name"
                    onChangeText={(lastName) => setLastName(lastName)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                />
            </View>
            <TouchableOpacity
                onPress={() => SignUpUser(email, password, firstName, lastName)}
                style={styles.button}
            >
                <Text>Sign Up</Text>
            </TouchableOpacity>
            
            <View style={styles.rowseparator}>
                <View style={styles.separator} />
                <Text style={styles.txtseparator}>Ou</Text>
                <View style={styles.separator} />
            </View>

            <TouchableOpacity
                onPress={() => console.log('google')}
                style={styles.buttonGoogle}
            >
                <Text>Sign Up with google</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => console.log('facebook')}
                style={styles.buttonFacebook}
            >
                <Text style={styles.txtBtn2}>Sign Up with facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => console.log('prout')}
                style={styles.button2}
            >
                <Text style={styles.txtBtn2}>Already have an account? Sign Up now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212'
    },
    text:{
        fontWeight: 'bold',
        fontSize: 37,
        color: 'white',
        marginTop: '5%',
        marginLeft: '10%'
    },
    txtBtn2: {
        color: 'white'
    },
    main: {
        width:'100%',
        marginTop: '10%'
    },
    input:{
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius:10,
        marginTop:10,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        marginBottom: 15,
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%'
    },
    rowseparator:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    separator: {
        width: '30%', 
        height: 1, 
        backgroundColor: 'white', 
        marginTop: 20,
    },
    txtseparator: {
        width: '20%',
        color: 'white',
        justifyContent: 'center',
        textAlign:'center',
    },
    button: {
        marginTop: 50,
        height: 47,
        width: '80%',
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: '10%',
        marginRight: '10%'
    },
    buttonFacebook: {
        marginTop: 20,
        height: 47,
        width: '80%',
        backgroundColor: "#172ACE",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: '10%',
        marginRight: '10%',
    },
    buttonGoogle: {
        marginTop: 50,
        height: 47,
        width: '80%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: '10%',
        marginRight: '10%'
    },
    button2: {
        marginTop: 20,
        marginLeft: '10%',
        marginRight: '10%',
        alignItems: 'center'
    },
    BackBtn: {
        marginLeft: '10%'
    }
})

export default SignUp;