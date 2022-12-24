import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import FirebaseUtil from '../utils/FirebaseUtil';

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //sign in or sign up

    const[create, setCreate] = useState(false);

    const SignIn = () => {
        FirebaseUtil.signIn(email,password).catch((e) => console.log(e))
        alert("Email/password incorrect");
    }

    const SignUp = () => {
        FirebaseUtil.signUp(email,password).catch((e) => console.log(e));
        alert("Oula check internet");
    }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.TextInput}
    />

    <TextInput
        placeholder="Email"
        onChangeText={setPassword}
        value={password}
        style={styles.TextInput}
        secureTextEntry={true}
    />

    {create ? (
        <>        
        <Button title="Sign Up" onPress={() => SignUp} />
        <Text style={styles.text} onPress={() => setCreate(false)}>Sign In</Text>
        </>
    ) : (
        <>
        <Button title="Sign in" onPress={() => SignIn} />
        <Text style={styles.text} onPress={() => setCreate(true)}>Create an Account</Text>
        </>
    )

    }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  text: {
      color: 'blue',
      marginTop: 20,
  }
});
