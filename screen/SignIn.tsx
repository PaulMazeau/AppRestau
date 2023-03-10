import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BackArrow from '../assets/Icons/BackArrow.svg'
import {auth} from '../config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function SignIn() {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const SignInUser = async () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log('Sign in successful!');
        })
        .catch((error: Error) => {
          console.error(error);
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
            <Text style={styles.text}>Content de te {'\n'} revoir.</Text>
            <View style={styles.main}>
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
                onPress={() => SignInUser(email, password)}
                style={styles.button}
            >
                <Text>Sign In</Text>
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
                <Text>Sign In with google</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => console.log('facebook')}
                style={styles.buttonFacebook}
            >
                <Text style={styles.txtBtn2}>Sign In with facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                style={styles.button2}
            >
                <Text style={styles.txtBtn2}>Don't have an account? Sign Up now</Text>
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
        marginTop: '15%',
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
